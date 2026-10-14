export type HeroSceneStatus = "loading" | "ready" | "paused" | "fallback";

export interface HeroSceneSnapshot {
  status: HeroSceneStatus;
  reducedMotion: boolean;
  controlsAvailable: boolean;
}

export interface HeroSceneController {
  setPaused: (paused: boolean) => void;
  setDecomposed: (decomposed: boolean) => void;
  dispose: () => void;
}

export interface HeroSceneOptions {
  container: HTMLDivElement;
  canvas: HTMLCanvasElement;
  paused: boolean;
  decomposed: boolean;
  onStateChange: (snapshot: HeroSceneSnapshot) => void;
}
