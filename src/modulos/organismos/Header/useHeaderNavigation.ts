import { useEffect, useRef, useState } from "react";

export const NAVIGATION_LINKS = [
  { id: "servicios", label: "Servicios" },
  { id: "enfoque", label: "Nuestro enfoque" },
  { id: "proceso", label: "Cómo trabajamos" },
  { id: "contacto", label: "Quiero cotizar" },
] as const;

export function useHeaderNavigation() {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let scrollFrame = 0;
    const updateScroll = () => {
      setScrolled(window.scrollY > 12);
      scrollFrame = 0;
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 800px)");
    const onBreakpointChange = () => {
      if (!mobile.matches) setMenuOpen(false);
    };
    mobile.addEventListener("change", onBreakpointChange);
    return () => mobile.removeEventListener("change", onBreakpointChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onOutsideClick = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !navRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      )
        setMenuOpen(false);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setMenuOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("click", onOutsideClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("click", onOutsideClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateFromHash = () => setActiveSection(window.location.hash.slice(1));
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    if (!("IntersectionObserver" in window))
      return () => window.removeEventListener("hashchange", updateFromHash);

    const sections = NAVIGATION_LINKS.map((link) => document.getElementById(link.id)).filter(
      (section): section is HTMLElement => section !== null,
    );
    const visibleSections = new Set<Element>();
    let observer: IntersectionObserver | undefined;
    let resizeFrame = 0;
    const observeSections = () => {
      observer?.disconnect();
      visibleSections.clear();
      const topOffset = Math.round(
        Math.min((headerRef.current?.offsetHeight ?? 80) + 24, window.innerHeight * 0.4),
      );
      const bottomOffset = Math.round(Math.max(0, window.innerHeight * 0.75 - topOffset));
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) visibleSections.add(entry.target);
            else visibleSections.delete(entry.target);
          }
          const active = [...visibleSections].sort(
            (a, b) =>
              Math.abs(a.getBoundingClientRect().top - window.innerHeight * 0.2) -
              Math.abs(b.getBoundingClientRect().top - window.innerHeight * 0.2),
          )[0];
          setActiveSection(active?.id ?? "");
        },
        { rootMargin: `-${topOffset}px 0px -${bottomOffset}px 0px`, threshold: 0 },
      );
      for (const section of sections) observer.observe(section);
    };
    const onResize = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(observeSections);
    };
    observeSections();
    window.addEventListener("resize", onResize);
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  return { headerRef, navRef, buttonRef, menuOpen, setMenuOpen, scrolled, activeSection };
}
