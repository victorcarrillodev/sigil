import { initNavigation } from "./modules/navigation.js";
import { initServices } from "./modules/services.js";
import { initContactForm } from "./modules/contact-form.js";

document.documentElement.classList.add("js");

function bootstrap() {
  initNavigation();
  initServices();
  initContactForm();
  startHeroScene();
}

async function startHeroScene() {
  try {
    const { initThreeHero } = await import("./modules/three-hero.js");
    await initThreeHero();
  } catch (error) {
    const scene = document.getElementById("hero-scene");
    if (scene) scene.dataset.sceneState = "fallback";
    console.warn("La vista 3D no está disponible; se conserva la ilustración.", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
} else {
  bootstrap();
}
