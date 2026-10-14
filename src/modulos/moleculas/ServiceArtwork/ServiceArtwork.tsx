import type { ReactNode } from "react";
import type { Service } from "../ServiceCard/services";
import "./ServiceArtwork.css";

const ARTWORK = {
  web: (
    <>
      <rect className="art-shadow" x="55" y="34" width="300" height="188" rx="10" />
      <rect className="art-panel" x="43" y="22" width="300" height="188" rx="10" />
      <path className="art-line" d="M43 48h300" />
      <g className="art-muted">
        <circle cx="57" cy="35" r="2" />
        <circle cx="66" cy="35" r="2" />
        <circle cx="75" cy="35" r="2" />
      </g>
      <text className="art-label" x="61" y="72">
        TU NEGOCIO
      </text>
      <text className="art-title" x="61" y="106">
        Lo que haces,
      </text>
      <text className="art-title" x="61" y="130">
        bien presentado.
      </text>
      <rect className="art-accent" x="61" y="153" width="80" height="23" rx="4" />
      <path className="art-ink-line" d="M73 165h40m-5-4 5 4-5 4" />
      <rect className="art-soft" x="236" y="65" width="86" height="124" rx="5" />
      <circle className="art-accent" cx="279" cy="111" r="28" />
      <path className="art-ink-line" d="m258 124 21-39 22 39M266 110h26" />
      <path className="art-line" d="M252 160h54m-54 10h35" />
      <rect className="art-panel" x="315" y="108" width="65" height="116" rx="9" />
      <rect className="art-soft" x="323" y="123" width="49" height="58" rx="3" />
      <circle className="art-accent" cx="347" cy="151" r="17" />
      <path className="art-line" d="M326 193h42m-42 8h27M337 116h20" />
    </>
  ),
  management: (
    <>
      <rect className="art-panel" x="35" y="35" width="350" height="176" rx="9" />
      <path className="art-line" d="M35 67h350M96 67v144" />
      <text className="art-label" x="52" y="55">
        TU OPERACIÓN
      </text>
      <path className="art-line" d="M50 89h29m-29 17h22m-22 17h29m-29 17h18" />
      <g className="art-soft">
        <rect x="112" y="82" width="77" height="40" rx="4" />
        <rect x="199" y="82" width="77" height="40" rx="4" />
        <rect x="287" y="82" width="80" height="40" rx="4" />
      </g>
      <text className="art-label" x="122" y="106">
        CLIENTES
      </text>
      <text className="art-label" x="209" y="106">
        VENTAS
      </text>
      <text className="art-label" x="297" y="106">
        STOCK
      </text>
      <path
        className="art-line"
        d="M112 140h255m-255 23h255m-255 23h255M125 151h90m-90 23h66m-66 23h80"
      />
      <g className="art-accent">
        <rect x="305" y="145" width="48" height="11" rx="5" />
        <rect x="305" y="168" width="35" height="11" rx="5" />
        <rect x="305" y="191" width="42" height="11" rx="5" />
      </g>
    </>
  ),
  custom: (
    <>
      <path
        className="art-line"
        d="M90 76h90q30 0 30 30v32q0 30 30 30h90M90 168h75q30 0 30-30v-32q0-30 30-30h105"
      />
      <g className="art-panel">
        <rect x="38" y="45" width="94" height="62" rx="12" />
        <rect x="288" y="137" width="94" height="62" rx="12" />
        <rect x="38" y="137" width="94" height="62" rx="12" />
        <rect x="288" y="45" width="94" height="62" rx="12" />
      </g>
      <circle className="art-accent" cx="210" cy="122" r="30" />
      <path className="art-ink-line" d="m202 114-8 8 8 8m16-16 8 8-8 8m-5-20-6 24" />
      <text className="art-label" x="61" y="80">
        TU WEB
      </text>
      <text className="art-label" x="307" y="80">
        VENTAS
      </text>
      <text className="art-label" x="55" y="172">
        PEDIDOS
      </text>
      <text className="art-label" x="306" y="172">
        TU EQUIPO
      </text>
      <circle className="art-accent" cx="160" cy="76" r="4" />
      <circle className="art-accent" cx="262" cy="168" r="4" />
    </>
  ),
  support: (
    <>
      <path className="art-line" d="M50 55h320v140H50ZM50 120h86m148 0h86M136 55v140m148-140v140" />
      <circle className="art-orbit" cx="210" cy="125" r="95" />
      <circle className="art-orbit" cx="210" cy="125" r="65" />
      <path className="art-connection" d="M90 82l120 43 119-43M90 177l120-52 119 52" />
      <rect className="art-panel" x="175" y="103" width="70" height="44" rx="10" />
      <path className="art-accent-line" d="M193 118q17-14 34 0m-28 6q11-9 22 0m-16 6q5-4 10 0" />
      <circle className="art-accent" cx="210" cy="135" r="2" />
      {[
        { x: 70, y: 63 },
        { x: 309, y: 63 },
        { x: 70, y: 158 },
        { x: 309, y: 158 },
      ].map(({ x, y }) => (
        <g key={`${x}-${y}`}>
          <rect className="art-panel" x={x} y={y} width="40" height="28" rx="4" />
          <path className="art-line" d={`M${x - 5} ${y + 32}h50M${x + 8} ${y + 8}h24`} />
        </g>
      ))}
      <text className="art-label" x="154" y="231">
        UNA RED BIEN CONECTADA
      </text>
    </>
  ),
  security: (
    <>
      <path className="art-soft" d="m174 98 165-59v164L174 130Z" />
      <path
        className="art-line"
        d="M40 50h32m-32 0v32m340-32h-32m32 0v32M40 195h32m-32 0v-32m340 32h-32m32 0v-32"
      />
      <path className="art-panel" d="m83 78 103 17-13 59-103-17Z" />
      <path className="art-accent-line" d="m101 141-12 34H58m64-31 26 33" />
      <ellipse
        className="art-panel"
        cx="178"
        cy="124"
        rx="13"
        ry="29"
        transform="rotate(13 178 124)"
      />
      <ellipse
        className="art-accent"
        cx="178"
        cy="124"
        rx="5"
        ry="14"
        transform="rotate(13 178 124)"
      />
      <circle className="art-orbit" cx="291" cy="121" r="28" />
      <path className="art-accent-line" d="M291 83v16m0 44v16m-38-38h16m44 0h16" />
    </>
  ),
  servers: (
    <>
      <path className="art-line" d="M220 75h65q20 0 20 20v59M220 175h65q20 0 20-20v-30" />
      {[48, 98, 148].map((y) => (
        <g key={y}>
          <rect className="art-panel" x="56" y={y} width="165" height="40" rx="6" />
          <circle className="art-accent" cx="76" cy={y + 20} r="4" />
          <path
            className="art-line"
            d={`M94 ${y + 15}h63m-63 10h44M182 ${y + 12}v16m8-16v16m8-16v16`}
          />
        </g>
      ))}
      <circle className="art-soft" cx="305" cy="125" r="43" />
      <path className="art-accent-line" d="M305 94 329 103v23q0 19-24 30-24-11-24-30v-23Z" />
      <path className="art-accent-line" d="m294 125 8 8 15-18" />
      <text className="art-label" x="84" y="219">
        GUARDAR · RESPALDAR · RECUPERAR
      </text>
    </>
  ),
} satisfies Record<Service["id"], ReactNode>;

export function ServiceArtwork({ service }: { readonly service: Service["id"] }) {
  return (
    <div className={`service-artwork service-artwork-${service}`} aria-hidden="true">
      <svg viewBox="0 0 420 250" aria-hidden="true" focusable="false">
        {ARTWORK[service]}
      </svg>
    </div>
  );
}
