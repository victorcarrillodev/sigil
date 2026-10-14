import * as THREE from "three";
import { createHeroModel, disposeObject, type HeroModel } from "./hero-model";
import type { HeroSceneController, HeroSceneOptions, HeroSceneSnapshot } from "./types";

export function initHeroScene(options: HeroSceneOptions): HeroSceneController {
  const { container, canvas, onStateChange } = options;
  const document = container.ownerDocument;
  const window = document.defaultView;
  if (!window) {
    onStateChange({ status: "fallback", reducedMotion: false, controlsAvailable: false });
    return { setPaused() {}, setDecomposed() {}, dispose() {} };
  }

  const listeners = new AbortController();
  const eventOptions = { signal: listeners.signal };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobile = window.matchMedia("(max-width: 800px), (pointer: coarse)");
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-4, 4, 3, -3, 0.1, 60);
  camera.position.set(7.2, 10, 11);
  camera.lookAt(0, 0.95, 0);
  camera.zoom = 1.12;
  camera.updateMatrixWorld();

  let renderer: THREE.WebGLRenderer | null = null;
  let model: HeroModel | null = null;
  let resizeObserver: ResizeObserver | null = null;
  let visibilityObserver: IntersectionObserver | null = null;
  let frameId = 0;
  let lastFrame = 0;
  let lastUpdate = 0;
  let elapsed = 0;
  let expansion = options.decomposed ? 1 : 0;
  let decomposed = options.decomposed;
  let userPaused = options.paused;
  let visible = true;
  let suspended = false;
  let contextLost = false;
  let disposed = false;
  let rendered = false;
  let width = 0;
  let height = 0;
  let pointerX = 0;
  let pointerY = 0;
  let drag: { x: number; yaw: number; pointerId: number } | null = null;
  let dragYaw = 0;
  let previousSnapshot: HeroSceneSnapshot | null = null;

  const stop = (): void => {
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = 0;
    lastFrame = 0;
    lastUpdate = 0;
  };

  const canRender = (): boolean =>
    !disposed && !contextLost && model !== null && renderer !== null && width > 0 && height > 0;
  const canAnimate = (): boolean =>
    canRender() && visible && !document.hidden && !suspended && !reducedMotion.matches;
  const isTransitioning = (): boolean => Math.abs(expansion - Number(decomposed)) > 0.002;

  const publish = (): void => {
    const controlsAvailable = rendered && !contextLost && !disposed;
    const status =
      disposed || contextLost
        ? "fallback"
        : !rendered
          ? "loading"
          : canAnimate() && !userPaused
            ? "ready"
            : "paused";
    const snapshot: HeroSceneSnapshot = {
      status,
      reducedMotion: reducedMotion.matches,
      controlsAvailable,
    };
    if (
      previousSnapshot?.status === status &&
      previousSnapshot.reducedMotion === snapshot.reducedMotion &&
      previousSnapshot.controlsAvailable === controlsAvailable
    )
      return;
    previousSnapshot = snapshot;
    onStateChange(snapshot);
  };

  const dispose = (): void => {
    if (disposed) return;
    disposed = true;
    rendered = false;
    stop();
    listeners.abort();
    resizeObserver?.disconnect();
    visibilityObserver?.disconnect();
    if (drag && canvas.hasPointerCapture(drag.pointerId))
      canvas.releasePointerCapture(drag.pointerId);
    drag = null;
    canvas.classList.remove("is-dragging");
    disposeObject(scene);
    renderer?.dispose();
    renderer = null;
    model = null;
    publish();
  };

  const render = (): boolean => {
    if (!canRender() || !renderer) return false;
    try {
      renderer.render(scene, camera);
      if (!rendered) {
        rendered = true;
        publish();
      }
      return true;
    } catch {
      dispose();
      return false;
    }
  };

  const animate = (timestamp: number): void => {
    frameId = 0;
    if (!canAnimate() || !model || (userPaused && !isTransitioning())) return;
    frameId = window.requestAnimationFrame(animate);
    const interval = 1000 / (mobile.matches ? 30 : 60);
    const sinceFrame = timestamp - lastFrame;
    if (lastFrame && sinceFrame < interval) return;
    const delta = lastUpdate ? Math.min((timestamp - lastUpdate) / 1000, 0.06) : interval / 1000;
    lastFrame = timestamp - (sinceFrame % interval);
    lastUpdate = timestamp;
    if (!userPaused) elapsed += delta;
    expansion = THREE.MathUtils.lerp(expansion, Number(decomposed), 1 - Math.exp(-delta * 7));
    model.update(elapsed, pointerX * 0.1 + dragYaw, pointerY * 0.035, delta, expansion);
    render();
    if (userPaused && !isTransitioning()) stop();
  };

  const syncAnimation = (): void => {
    publish();
    if (canAnimate() && (!userPaused || isTransitioning())) {
      if (!frameId) frameId = window.requestAnimationFrame(animate);
    } else {
      stop();
    }
  };

  const fitCamera = (): void => {
    if (!model) return;
    const bounds = new THREE.Box3().setFromObject(model.group);
    bounds.max.y += (1 - expansion) * 0.52;
    const projected = new THREE.Box3();
    [bounds.min.x, bounds.max.x].forEach((x) => {
      [bounds.min.y, bounds.max.y].forEach((y) => {
        [bounds.min.z, bounds.max.z].forEach((z) => {
          projected.expandByPoint(
            new THREE.Vector3(x, y, z).applyMatrix4(camera.matrixWorldInverse),
          );
        });
      });
    });
    const size = projected.getSize(new THREE.Vector3());
    const center = projected.getCenter(new THREE.Vector3());
    const aspect = width / height;
    const halfHeight = Math.max(size.y, size.x / aspect) * 0.56;
    camera.left = center.x - halfHeight * aspect;
    camera.right = center.x + halfHeight * aspect;
    camera.top = center.y + halfHeight;
    camera.bottom = center.y - halfHeight;
    camera.updateProjectionMatrix();
  };

  const resize = (): void => {
    if (!renderer || !model || disposed || contextLost) return;
    const bounds = container.getBoundingClientRect();
    width = Math.round(bounds.width);
    height = Math.round(bounds.height);
    if (!width || !height) {
      stop();
      publish();
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile.matches ? 1.5 : 1.75));
    renderer.setSize(width, height, false);
    fitCamera();
    render();
    syncAnimation();
  };

  const controller: HeroSceneController = {
    dispose,
    setPaused(paused) {
      if (disposed || paused === userPaused) return;
      userPaused = paused;
      syncAnimation();
    },
    setDecomposed(value) {
      if (disposed || value === decomposed) return;
      decomposed = value;
      if (reducedMotion.matches && model) {
        expansion = Number(decomposed);
        model.update(elapsed, 0, 0, 1, expansion);
        render();
      }
      syncAnimation();
    },
  };

  document.addEventListener("visibilitychange", syncAnimation, eventOptions);
  window.addEventListener(
    "pagehide",
    (event) => {
      if (event.persisted) {
        suspended = true;
        syncAnimation();
      } else {
        dispose();
      }
    },
    eventOptions,
  );
  window.addEventListener(
    "pageshow",
    () => {
      suspended = false;
      resize();
    },
    eventOptions,
  );

  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: mobile.matches ? "low-power" : "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;

    canvas.addEventListener(
      "webglcontextlost",
      (event) => {
        event.preventDefault();
        contextLost = true;
        rendered = false;
        stop();
        publish();
      },
      eventOptions,
    );
    canvas.addEventListener(
      "webglcontextrestored",
      () => {
        if (disposed) return;
        contextLost = false;
        resize();
      },
      eventOptions,
    );

    model = createHeroModel();
    model.update(elapsed, 0, 0, 1, expansion);
    scene.add(model.group, model.shadow);

    reducedMotion.addEventListener(
      "change",
      () => {
        pointerX = 0;
        pointerY = 0;
        dragYaw = 0;
        if (reducedMotion.matches && model) {
          expansion = Number(decomposed);
          model.update(elapsed, 0, 0, 1, expansion);
          render();
        }
        syncAnimation();
      },
      eventOptions,
    );
    mobile.addEventListener("change", resize, eventOptions);
    canvas.addEventListener(
      "pointermove",
      (event) => {
        if (reducedMotion.matches || userPaused || event.pointerType !== "mouse") return;
        const bounds = canvas.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        pointerX = THREE.MathUtils.clamp(
          ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
          -1,
          1,
        );
        pointerY = THREE.MathUtils.clamp(
          ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
          -1,
          1,
        );
        if (drag)
          dragYaw = THREE.MathUtils.clamp(drag.yaw + (event.clientX - drag.x) * 0.002, -0.18, 0.18);
      },
      eventOptions,
    );
    canvas.addEventListener(
      "pointerdown",
      (event) => {
        if (
          reducedMotion.matches ||
          userPaused ||
          event.pointerType !== "mouse" ||
          event.button !== 0
        )
          return;
        drag = { x: event.clientX, yaw: dragYaw, pointerId: event.pointerId };
        canvas.setPointerCapture(event.pointerId);
        canvas.classList.add("is-dragging");
      },
      eventOptions,
    );
    const endDrag = (): void => {
      drag = null;
      canvas.classList.remove("is-dragging");
    };
    canvas.addEventListener("pointerup", endDrag, eventOptions);
    canvas.addEventListener("pointercancel", endDrag, eventOptions);
    canvas.addEventListener("lostpointercapture", endDrag, eventOptions);
    canvas.addEventListener(
      "pointerleave",
      () => {
        if (!drag) {
          pointerX = 0;
          pointerY = 0;
          dragYaw = 0;
        }
      },
      eventOptions,
    );

    if (typeof ResizeObserver === "function") {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", resize, eventOptions);
    }
    if (typeof IntersectionObserver === "function") {
      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          visible = entry.isIntersecting;
          syncAnimation();
        },
        { threshold: 0 },
      );
      visibilityObserver.observe(container);
    }

    resize();
    syncAnimation();
  } catch {
    dispose();
  }
  return controller;
}
