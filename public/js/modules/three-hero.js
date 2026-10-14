import * as THREE from "../../vendor/three/three.module.js";
import { createHeroModel, disposeObject } from "./hero-model.js";

const controllers = new WeakMap();

export async function initThreeHero() {
  const container = document.getElementById("hero-scene");
  const canvas = document.getElementById("hero-canvas");
  const fallback = document.getElementById("hero-fallback");
  const toggle = document.getElementById("scene-toggle");
  const viewButton = document.getElementById("scene-view");
  if (!container || !canvas || !fallback) return null;
  if (controllers.has(container)) return controllers.get(container);

  const listeners = new AbortController();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobile = window.matchMedia("(max-width: 800px), (pointer: coarse)");
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-4, 4, 3, -3, 0.1, 60);
  camera.position.set(7.2, 10, 11);
  camera.lookAt(0, 0.95, 0);
  camera.zoom = 1.12;
  camera.updateMatrixWorld();

  let renderer;
  let model;
  let resizeObserver;
  let visibilityObserver;
  let frameId = 0;
  let lastFrame = 0;
  let lastUpdate = 0;
  let elapsed = 0;
  let expansion = 0;
  let explored = false;
  let userPaused = false;
  let visible = true;
  let suspended = false;
  let contextLost = false;
  let disposed = false;
  let ready = false;
  let rendered = false;
  let width = 0;
  let height = 0;
  let pointerX = 0;
  let pointerY = 0;
  let drag = null;
  let dragYaw = 0;

  const stop = () => {
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = 0;
    lastFrame = 0;
    lastUpdate = 0;
  };

  const showFallback = () => {
    container.dataset.sceneState = "fallback";
    fallback.hidden = false;
    if (toggle) toggle.hidden = true;
    if (viewButton) viewButton.hidden = true;
  };

  const canRender = () => ready && !disposed && !contextLost && width > 0 && height > 0;
  const canAnimate = () =>
    canRender() && visible && !document.hidden && !suspended && !reducedMotion.matches;
  const isTransitioning = () => Math.abs(expansion - Number(explored)) > 0.002;

  const updateControls = () => {
    if (toggle) {
      toggle.hidden = !ready || !rendered || contextLost || reducedMotion.matches;
      toggle.setAttribute("aria-pressed", String(userPaused));
      toggle.setAttribute("aria-label", userPaused ? "Reanudar animación" : "Pausar animación");
      const label = toggle.querySelector(".scene-toggle-text");
      const icon = toggle.querySelector("path");
      if (label) label.textContent = userPaused ? "Reanudar" : "Pausar";
      if (icon) icon.setAttribute("d", userPaused ? "m9 5 10 7-10 7Z" : "M8 6v12M16 6v12");
    }
    if (viewButton) {
      viewButton.hidden = !ready || !rendered || contextLost;
      viewButton.setAttribute("aria-pressed", String(explored));
      viewButton.setAttribute(
        "aria-label",
        explored ? "Recomponer símbolo" : "Descomponer símbolo",
      );
      const label = viewButton.querySelector("span");
      if (label) label.textContent = explored ? "Recomponer" : "Descomponer";
    }
    if (ready && rendered && !contextLost) {
      container.dataset.sceneState = canAnimate() && !userPaused ? "ready" : "paused";
    }
  };

  const render = () => {
    if (!canRender()) return false;
    try {
      renderer.render(scene, camera);
      if (!rendered) {
        rendered = true;
        fallback.hidden = true;
        updateControls();
      }
      return true;
    } catch {
      dispose();
      return false;
    }
  };

  const animate = (timestamp) => {
    frameId = 0;
    if (!canAnimate() || (userPaused && !isTransitioning())) return;
    frameId = window.requestAnimationFrame(animate);
    const interval = 1000 / (mobile.matches ? 30 : 60);
    const sinceFrame = timestamp - lastFrame;
    if (lastFrame && sinceFrame < interval) return;
    const delta = lastUpdate ? Math.min((timestamp - lastUpdate) / 1000, 0.06) : interval / 1000;
    lastFrame = timestamp - (sinceFrame % interval);
    lastUpdate = timestamp;
    if (!userPaused) elapsed += delta;
    expansion = THREE.MathUtils.lerp(expansion, Number(explored), 1 - Math.exp(-delta * 7));
    model.update(elapsed, pointerX * 0.1 + dragYaw, pointerY * 0.035, delta, expansion);
    render();
    if (userPaused && !isTransitioning()) stop();
  };

  const syncAnimation = () => {
    updateControls();
    if (canAnimate() && (!userPaused || isTransitioning())) {
      if (!frameId) frameId = window.requestAnimationFrame(animate);
    } else {
      stop();
    }
  };

  const fitCamera = () => {
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

  const resize = () => {
    if (!renderer || !model || disposed || contextLost) return;
    const bounds = container.getBoundingClientRect();
    width = Math.round(bounds.width);
    height = Math.round(bounds.height);
    if (!width || !height) {
      stop();
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile.matches ? 1.5 : 1.75));
    renderer.setSize(width, height, false);
    fitCamera();
    render();
    syncAnimation();
  };

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    ready = false;
    rendered = false;
    stop();
    listeners.abort();
    resizeObserver?.disconnect();
    visibilityObserver?.disconnect();
    disposeObject(scene);
    renderer?.dispose();
    renderer?.forceContextLoss();
    controllers.delete(container);
    showFallback();
  };

  const controller = {
    dispose,
    pause() {
      userPaused = true;
      syncAnimation();
    },
    resume() {
      userPaused = false;
      syncAnimation();
    },
    get state() {
      return container.dataset.sceneState;
    },
  };
  controllers.set(container, controller);

  const listen = (target, event, handler) => {
    target.addEventListener(event, handler, { signal: listeners.signal });
  };

  listen(document, "visibilitychange", syncAnimation);
  listen(window, "pagehide", (event) => {
    if (event.persisted) {
      suspended = true;
      syncAnimation();
    } else {
      dispose();
    }
  });
  listen(window, "pageshow", () => {
    suspended = false;
    resize();
  });

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

    listen(canvas, "webglcontextlost", (event) => {
      event.preventDefault();
      contextLost = true;
      rendered = false;
      stop();
      showFallback();
    });
    listen(canvas, "webglcontextrestored", () => {
      if (disposed) return;
      contextLost = false;
      if (!model) return;
      try {
        ready = true;
        resize();
      } catch {
        ready = false;
        showFallback();
      }
    });

    model = createHeroModel();
    scene.add(model.group, model.shadow);

    if (toggle)
      listen(toggle, "click", () => {
        userPaused = !userPaused;
        syncAnimation();
      });
    if (viewButton)
      listen(viewButton, "click", () => {
        explored = !explored;
        if (reducedMotion.matches) {
          expansion = Number(explored);
          model.update(elapsed, 0, 0, 1, expansion);
          render();
        }
        syncAnimation();
      });

    listen(reducedMotion, "change", () => {
      pointerX = 0;
      pointerY = 0;
      dragYaw = 0;
      if (reducedMotion.matches) {
        expansion = Number(explored);
        model.update(elapsed, 0, 0, 1, expansion);
        render();
      }
      syncAnimation();
    });
    listen(mobile, "change", resize);
    listen(canvas, "pointermove", (event) => {
      if (reducedMotion.matches || userPaused || event.pointerType !== "mouse") return;
      const bounds = canvas.getBoundingClientRect();
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
    });
    listen(canvas, "pointerdown", (event) => {
      if (
        reducedMotion.matches ||
        userPaused ||
        event.pointerType !== "mouse" ||
        event.button !== 0
      )
        return;
      drag = { x: event.clientX, yaw: dragYaw };
      canvas.setPointerCapture(event.pointerId);
      canvas.classList.add("is-dragging");
    });
    const endDrag = () => {
      drag = null;
      canvas.classList.remove("is-dragging");
    };
    listen(canvas, "pointerup", endDrag);
    listen(canvas, "pointercancel", endDrag);
    listen(canvas, "lostpointercapture", endDrag);
    listen(canvas, "pointerleave", () => {
      if (!drag) {
        pointerX = 0;
        pointerY = 0;
        dragYaw = 0;
      }
    });

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
    } else {
      listen(window, "resize", resize);
    }
    if ("IntersectionObserver" in window) {
      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          syncAnimation();
        },
        { threshold: 0 },
      );
      visibilityObserver.observe(container);
    }

    if (contextLost) {
      showFallback();
      return controller;
    }
    ready = true;
    resize();
    if (!ready) {
      dispose();
      return null;
    }
    syncAnimation();
    return controller;
  } catch {
    dispose();
    return null;
  }
}
