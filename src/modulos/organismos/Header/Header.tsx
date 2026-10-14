import { ActionLink } from "../../atomos/ActionLink/ActionLink";
import { Brand } from "../../moleculas/Brand/Brand";
import { NAVIGATION_LINKS, useHeaderNavigation } from "./useHeaderNavigation";

export function Header() {
  const { headerRef, navRef, buttonRef, menuOpen, setMenuOpen, scrolled, activeSection } =
    useHeaderNavigation();
  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      id="site-header"
      ref={headerRef}
    >
      <div className="container header-inner">
        <Brand />
        <nav
          className={`site-nav${menuOpen ? " open" : ""}`}
          id="site-nav"
          aria-label="Navegación principal"
          ref={navRef}
        >
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.id}
              className={`nav-link${link.id === "contacto" ? " mobile-contact" : ""}${activeSection === link.id ? " active" : ""}`}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ActionLink className="button button-small button-outline" href="#contacto">
            Quiero cotizar
          </ActionLink>
          <button
            className="menu-button"
            id="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
