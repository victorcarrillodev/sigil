export function initNavigation() {
  const header = document.getElementById("site-header");
  const button = document.getElementById("menu-btn");
  const nav = document.getElementById("site-nav");

  if (header) {
    let framePending = false;

    const updateHeader = () => {
      header.classList.toggle("scrolled", window.scrollY > 12);
      framePending = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (framePending) return;
        framePending = true;
        window.requestAnimationFrame(updateHeader);
      },
      { passive: true },
    );

    updateHeader();
  }

  if (!nav) return;

  if (button) {
    const mobile = window.matchMedia("(max-width: 800px)");

    const setMenuOpen = (open, returnFocus = false) => {
      nav.classList.toggle("open", open);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      if (returnFocus) button.focus();
    };

    setMenuOpen(false);

    button.addEventListener("click", () => {
      if (mobile.matches) setMenuOpen(!nav.classList.contains("open"));
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("open")) return;
      if (!nav.contains(event.target) && !button.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        event.preventDefault();
        setMenuOpen(false, true);
      }
    });

    mobile.addEventListener("change", (event) => {
      if (!event.matches) setMenuOpen(false);
    });
  }

  const links = Array.from(nav.querySelectorAll(".nav-link[href^='#']"));
  const sections = links
    .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
    .filter(Boolean);

  const setActiveSection = (id) => {
    links.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const updateFromHash = () => setActiveSection(window.location.hash.slice(1));
  window.addEventListener("hashchange", updateFromHash);
  updateFromHash();

  if (!("IntersectionObserver" in window)) return;

  const visibleSections = new Set();
  let observer;

  const updateActiveSection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    });

    const activeSection = Array.from(visibleSections).sort(
      (first, second) =>
        Math.abs(first.getBoundingClientRect().top - window.innerHeight * 0.2) -
        Math.abs(second.getBoundingClientRect().top - window.innerHeight * 0.2),
    )[0];

    setActiveSection(activeSection?.id ?? "");
  };

  const observeSections = () => {
    observer?.disconnect();
    visibleSections.clear();
    const topOffset = Math.round(
      Math.min((header?.offsetHeight ?? 80) + 24, window.innerHeight * 0.4),
    );
    const bottomOffset = Math.round(Math.max(0, window.innerHeight * 0.75 - topOffset));
    observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: `-${topOffset}px 0px -${bottomOffset}px 0px`,
      threshold: 0,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
  };

  let resizeFrame;
  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(observeSections);
  });

  observeSections();
}
