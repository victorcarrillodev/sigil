# Sigil

Sitio de servicios digitales de Sigil, con interfaz en español, diseño adaptable y recursos alojados en el propio proyecto. El servidor utiliza Bun; la interfaz utiliza HTML, CSS y módulos de JavaScript. La instalación prepara los módulos de Three.js para el navegador.

## Ejecutar en desarrollo

Se necesita Bun 1.3 o posterior.

```sh
bun install
bun run dev
```

La instalación minifica los módulos de Three.js y conserva su licencia en `public/vendor/three/`. Si necesitas regenerarlos después de actualizar la dependencia, ejecuta `bun run vendor`.

Abre `http://127.0.0.1:3000`. Los cambios del servidor se recargan durante el desarrollo; actualiza el navegador para ver cambios en la interfaz.

## Configuración y producción

Bun lee las variables de un archivo `.env` local. Puedes copiar `.env.example` a `.env` y ajustar los valores:

| Variable   | Valor predeterminado | Uso                                                              |
| ---------- | -------------------- | ---------------------------------------------------------------- |
| `PORT`     | `3000`               | Puerto entre 1 y 65535. Tiene prioridad sobre `BUN_PORT`.        |
| `BUN_PORT` | —                    | Puerto alternativo cuando no se define `PORT`.                   |
| `HOST`     | `127.0.0.1`          | Dirección IP o nombre de host donde escucha el servidor.         |
| `NODE_ENV` | —                    | El valor `production` activa la caché de los recursos estáticos. |

```sh
bun run start
```

Para ejecutar en modo producción, usa `NODE_ENV=production` en `.env` o en el entorno del proceso. El HTML se revalida en cada visita; imágenes, fuentes, CSS y JavaScript tienen una caché de una hora con revalidación. Los archivos no llevan huellas de contenido en su nombre: conserva este plazo al actualizar recursos o cambia sus nombres para invalidar la caché inmediatamente.

Para escuchar en todas las interfaces de un contenedor o equipo, configura `HOST=0.0.0.0`. La configuración local predeterminada escucha solo en el propio equipo. Un despliegue público debe proporcionar HTTPS mediante su plataforma o proxy. El proyecto no incluye un despliegue configurado.

## Organización

```text
public/
  index.html               Contenido y estructura accesible
  css/                     Tokens, elementos, componentes y composición
  js/modules/              Navegación, servicios y solicitud de contacto
  fonts/                   Fuentes locales y sus licencias
  vendor/three/            Módulos ESM minificados y licencia original de Three.js
scripts/
  vendor-three.ts          Sincroniza Three.js desde la dependencia instalada
server/
  config.ts                Configuración validada del servidor
  static-handler.ts        Archivos públicos, rutas, caché y cabeceras HTTP
tests/
  server.test.ts           Configuración, seguridad y respuestas HTTP
  unit/                    Validación y formato de la solicitud
server.ts                  Inicio del servidor
```

Los recursos servidos deben estar dentro de `public/` y tener una extensión admitida. El servidor responde a `GET` y `HEAD`, devuelve errores controlados y evita rutas que escapen del directorio público, incluidos enlaces a archivos externos. La política de seguridad del navegador requiere scripts, estilos y fuentes locales: usa archivos separados en lugar de código inline.

La escena visual utiliza Three.js desde módulos ESM locales, cargados bajo demanda. No requiere un CDN ni un mapa de importaciones. Su carga y ejecución se mantienen independientes de la navegación y el formulario; estos controles siguen disponibles si el navegador no puede ejecutar la escena.

`hero-model.js` construye el ojo y los circuitos de la identidad de Sigil mediante trazos y partículas, con capas de líneas transparentes alrededor. `three-hero.js` controla el render, los cambios de tamaño, la visibilidad, el contexto WebGL y las interacciones. La imagen original de `public/sigil-emblem.jpg` se conserva para la marca de la página; la escena interpreta su símbolo como geometría nativa, sin colocar el póster dentro del modelo. Los botones permiten pausar la animación y descomponer o recomponer el símbolo. Con movimiento reducido, la escena se renderiza de forma estática y el despiece se aplica sin transición. Fuera de pantalla o con la pestaña oculta se detiene la animación.

## Comprobaciones

```sh
bun run validate
```

Este comando revisa las reglas de código, el formato, los tipos y las pruebas. Para aplicar el formato, ejecuta `bun run format`; para comprobar únicamente el código, `bun run check`.

Las pruebas cubren el formulario y el servidor, incluyendo peticiones HTTP reales, caché condicional y protección del directorio público. TypeScript se aplica al servidor y sus pruebas con configuración estricta; JavaScript del navegador se mantiene como módulos independientes. Los criterios de diseño y la comprobación de la interfaz se documentan en [docs/verification.md](docs/verification.md).

## Solicitud de contacto

El formulario valida los campos y prepara un resumen que el visitante puede copiar o descargar. El resumen se genera en el navegador y no se guarda ni se envía a Sigil. No existe una API de entrega, un correo receptor configurado ni un servicio de mensajería conectado. Antes de habilitar recepción real, hay que definir el canal de contacto, conectar la entrega y ajustar el texto de confirmación para reflejar el resultado real del envío.
