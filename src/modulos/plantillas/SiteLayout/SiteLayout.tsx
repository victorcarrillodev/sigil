import type { ReactNode } from "react";
import { Header } from "../../organismos/Header/Header";
import { Footer } from "../../organismos/Footer/Footer";

interface SiteLayoutProps {
  readonly children: ReactNode;
  readonly onServiceNavigate: () => void;
}

export function SiteLayout({ children, onServiceNavigate }: SiteLayoutProps) {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        {children}
      </main>
      <Footer onServiceNavigate={onServiceNavigate} />
    </>
  );
}
