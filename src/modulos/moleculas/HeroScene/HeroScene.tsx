import { useEffect, useRef, useState } from "react";
import type { HeroSceneController, HeroSceneSnapshot } from "./types";

const INITIAL_SNAPSHOT: HeroSceneSnapshot = {
  status: "loading",
  reducedMotion: false,
  controlsAvailable: false,
};

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controllerRef = useRef<HeroSceneController | null>(null);
  const [paused, setPaused] = useState(false);
  const [decomposed, setDecomposed] = useState(false);
  const [snapshot, setSnapshot] = useState(INITIAL_SNAPSHOT);
  const preferencesRef = useRef({ paused, decomposed });

  useEffect(() => {
    preferencesRef.current = { paused, decomposed };
    controllerRef.current?.setPaused(paused);
    controllerRef.current?.setDecomposed(decomposed);
  }, [paused, decomposed]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    let cancelled = false;
    let controller: HeroSceneController | null = null;

    void import("./three-scene")
      .then(({ initHeroScene }) => {
        if (cancelled) return;
        controller = initHeroScene({
          container,
          canvas,
          ...preferencesRef.current,
          onStateChange(value) {
            if (!cancelled) setSnapshot(value);
          },
        });
        controllerRef.current = controller;
      })
      .catch(() => {
        if (!cancelled) {
          setSnapshot({ status: "fallback", reducedMotion: false, controlsAvailable: false });
        }
      });

    return () => {
      cancelled = true;
      controller?.dispose();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, []);

  const sceneVisible = snapshot.status === "ready" || snapshot.status === "paused";

  return (
    <figure className="hero-visual">
      <div
        className="hero-scene"
        id="hero-scene"
        ref={containerRef}
        data-scene-state={snapshot.status}
        role="img"
        aria-label="El ojo y los circuitos de Sigil reconstruidos con líneas y partículas luminosas sobre capas transparentes de una arquitectura digital."
      >
        <img
          className="system-stack"
          id="hero-fallback"
          src="/images/system-stack.svg"
          width="620"
          height="510"
          alt=""
          hidden={sceneVisible}
        />
        <canvas id="hero-canvas" ref={canvasRef} tabIndex={-1} aria-hidden="true" />
        <span className="scene-label scene-label-software mono" aria-hidden="true">
          01 / Software
        </span>
        <span className="scene-label scene-label-infrastructure mono" aria-hidden="true">
          02 / Infraestructura
        </span>
        <span className="scene-label scene-label-operation mono" aria-hidden="true">
          03 / Operación
        </span>
      </div>
      <figcaption className="visual-caption">
        <span>
          <span className="scene-hint-desktop">Mueve el cursor. Explora el símbolo.</span>
          <span className="scene-hint-touch">Ideas. Sistemas. Resultados.</span>
        </span>
        <div className="scene-actions">
          <button
            className="scene-control"
            id="scene-view"
            type="button"
            aria-label={decomposed ? "Recomponer símbolo" : "Descomponer símbolo"}
            aria-pressed={decomposed}
            hidden={!snapshot.controlsAvailable}
            onClick={() => setDecomposed((value) => !value)}
          >
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m3 7 9-4 9 4-9 4ZM3 12l9 4 9-4M3 17l9 4 9-4" />
            </svg>
            <span className="scene-view-text">{decomposed ? "Recomponer" : "Descomponer"}</span>
          </button>
          <button
            className="scene-control"
            id="scene-toggle"
            type="button"
            aria-label={paused ? "Reanudar animación" : "Pausar animación"}
            aria-pressed={paused}
            hidden={!snapshot.controlsAvailable || snapshot.reducedMotion}
            onClick={() => setPaused((value) => !value)}
          >
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d={paused ? "m9 5 10 7-10 7Z" : "M8 6v12M16 6v12"} />
            </svg>
            <span className="scene-toggle-text">{paused ? "Reanudar" : "Pausar"}</span>
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
