import { Icon } from "../../atomos/Icon/Icon";
import { Eyebrow } from "../../atomos/Eyebrow/Eyebrow";
import { HeroScene } from "../../moleculas/HeroScene/HeroScene";
export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Eyebrow withLine>Para pequeñas empresas</Eyebrow>
        <h1 id="hero-title">
          Web, software
          <br />y <span className="accent-text">soporte.</span>
        </h1>
        <p className="hero-description">
          En Sigil creamos sitios web, sistemas de gestión y redes para tu negocio. Presenta lo que
          vendes, organiza tu trabajo y mantén a tu equipo conectado.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contacto">
            Quiero cotizar
            <Icon name="diagonal" className="icon" />
          </a>
          <a className="text-link" href="#servicios">
            Ver qué necesito <Icon name="arrow" className="icon" />
          </a>
        </div>
        <div className="hero-principle">
          <Icon name="check" className="icon" /> Cuéntanos el problema. Te ayudamos a definir la
          solución.
        </div>
      </div>
      <HeroScene />
      <nav className="hero-index" aria-label="Áreas de especialidad">
        <a href="#servicios">
          <span className="index-number">01 /</span>
          <span>Sitios web y tiendas</span>
          <Icon name="diagonal" className="icon" />
        </a>
        <a href="#servicios">
          <span className="index-number">02 /</span>
          <span>Software para tu operación</span>
          <Icon name="diagonal" className="icon" />
        </a>
        <a href="#servicios">
          <span className="index-number">03 /</span>
          <span>Infraestructura que conecta</span>
          <Icon name="diagonal" className="icon" />
        </a>
      </nav>
    </section>
  );
}
