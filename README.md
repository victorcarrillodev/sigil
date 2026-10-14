# Sigil

Sitio de servicios digitales de Sigil, con interfaz en español, diseño adaptable y recursos locales. La aplicación utiliza React y TypeScript, con componentes organizados mediante Atomic Design. Vite prepara los recursos de producción y Bun sirve la aplicación compilada.

## Ejecutar en desarrollo

Se necesita Bun 1.3 o posterior.

```sh
bun install
bun run dev
```

Abre `http://localhost:3100`. Vite actualiza los componentes y estilos durante el desarrollo. El puerto es estricto: si está ocupado, el servidor informa del conflicto sin elegir otro silenciosamente. Puedes usar un puerto alternativo con `bun run dev --port 3101`.

## Configuración y producción

Bun lee las variables de un archivo `.env` local. Puedes copiar `.env.example` a `.env` y ajustar el servidor de producción. El servidor de desarrollo de Vite conserva su configuración local en `vite.config.ts`.

| Variable   | Valor predeterminado | Uso                                                              |
| ---------- | -------------------- | ---------------------------------------------------------------- |
| `PORT`     | `3100`               | Puerto entre 1 y 65535. Tiene prioridad sobre `BUN_PORT`.        |
| `BUN_PORT` | —                    | Puerto alternativo cuando no se define `PORT`.                   |
| `HOST`     | `127.0.0.1`          | Dirección IP o nombre de host donde escucha el servidor.         |
| `NODE_ENV` | —                    | El valor `production` activa la caché de los recursos estáticos. |

```sh
bun run build
bun run start
```

El build comprueba TypeScript, empaqueta JavaScript y CSS en `dist/` y prerenderiza el contenido de React en `dist/index.html`. Los metadatos permanecen en el HTML de entrada. En producción, React hidrata ese contenido para activar las interacciones; el contenido y sus enlaces se conservan sin JavaScript, y el formulario espera a que sus controladores estén disponibles.

Los scripts `start` y `preview` activan `NODE_ENV=production` y sirven exclusivamente `dist/`. Si falta la compilación, el servidor indica que debes ejecutar `bun run build`. El HTML se revalida en cada visita y los recursos tienen una caché de una hora. Vite añade huellas a los nombres de JavaScript y CSS, por lo que una nueva compilación referencia sus nuevas versiones.

Para escuchar en todas las interfaces de un contenedor o equipo, configura `HOST=0.0.0.0`. La configuración local predeterminada escucha solo en el propio equipo. Un despliegue público debe proporcionar HTTPS mediante su plataforma o proxy. El proyecto no incluye un despliegue configurado.

## Organización

```text
src/
  main.tsx                 Montaje en desarrollo e hidratación en producción
  App.tsx                  Entrada de la aplicación React
  estilos/                 Tokens y estilos compartidos
  modulos/
    atomos/                Icon, ActionLink, Eyebrow
    moleculas/             Brand, ServiceCard, HeroScene, FaqItem y otras piezas
    organismos/            Header, Hero, Services, ContactForm, Footer y secciones
    plantillas/            SiteLayout: composición general
    paginas/               Home: página de inicio
public/
  fonts/                   Fuentes locales y sus licencias
  images/                  Ilustración vectorial del sistema
  sigil-emblem.jpg          Identidad original de Sigil
scripts/
  prerender.ts             Genera el HTML inicial a partir de App
server/
  config.ts                Configuración validada del servidor
  static-handler.ts        Archivos públicos, rutas, caché y cabeceras HTTP
tests/
  server.test.ts           Configuración, seguridad y respuestas HTTP
  unit/                    Validación y formato de la solicitud
index.html                 Metadatos y contenedor raíz de React
vite.config.ts             Compilación, React y selección de recursos estáticos
server.ts                  Inicio del servidor de producción
```

Cada componente tiene su propia carpeta y un archivo con su nombre, por ejemplo `src/modulos/atomos/Icon/Icon.tsx`. Los datos y las funciones específicas de un componente viven junto a él cuando corresponde: `ServiceCard/services.ts`, `ContactForm/contact-validation.ts` o los módulos de la escena en `HeroScene/`. Las páginas componen plantillas, las plantillas organizan organismos y estos utilizan moléculas y átomos. Los tipos se comprueban en toda la aplicación, el servidor y las pruebas.

El respaldo de la versión estática anterior está en `artifacts/legacy-static/`, una carpeta ignorada por Git y excluida del build. La fuente activa de la interfaz se mantiene en `src/`.

Vite copia al build únicamente las fuentes, imágenes y marca indicadas en su configuración. El HTML y el JavaScript de producción proceden de React y no incluyen una segunda aplicación estática. Bun responde a `GET` y `HEAD`, ofrece revalidación con ETag y evita rutas que escapen de `dist/`, incluidos enlaces a archivos externos. La política CSP de producción permite scripts, estilos y fuentes del mismo origen; no requiere scripts inline ni servicios externos.

`HeroScene` importa Three.js bajo demanda desde la dependencia instalada. Vite genera el módulo local de producción; no hay CDN, importmap ni un proceso separado de vendoring. `hero-model.ts` construye el ojo y los circuitos mediante trazos y partículas; `three-scene.ts` controla WebGL, tamaño, visibilidad y limpieza de recursos. La navegación y el formulario permanecen disponibles si la escena falla. La imagen original de la marca se conserva en cabecera y pie de página.

Los botones permiten pausar, descomponer y recomponer el símbolo. Con movimiento reducido, la escena es estática y el despiece se aplica sin transición. Fuera de pantalla o con la pestaña oculta se detiene la animación. Los efectos de React liberan listeners, observadores y recursos de la escena al desmontarse.

Las versiones instaladas se registran en `bun.lock`. El build incluye las atribuciones de sus dependencias en `dist/licenses.txt` y la licencia MIT original de Three.js en `dist/third-party/three-LICENSE.txt`. La integración sigue las guías oficiales de [React con TypeScript](https://react.dev/learn/typescript) y [Vite](https://vite.dev/guide/).

## Comprobaciones

```sh
bun run validate
```

Este comando revisa las reglas de código, el formato, los tipos y las pruebas, y genera el build prerenderizado. Para aplicar el formato, ejecuta `bun run format`; para comprobar únicamente el código, `bun run check`.

Las pruebas cubren las funciones del formulario y el servidor, incluyendo peticiones HTTP reales, caché condicional y protección del directorio servido. TypeScript se aplica con configuración estricta a los archivos `.ts` y `.tsx`; Biome y Prettier revisan el código y su formato. Los criterios de diseño y la comprobación de la interfaz se documentan en [docs/verification.md](docs/verification.md).

## Solicitud de contacto

El formulario valida los campos y prepara un resumen que el visitante puede copiar o descargar. El resumen se genera en el navegador y no se guarda ni se envía a Sigil. No existe una API de entrega, un correo receptor configurado ni un servicio de mensajería conectado. Antes de habilitar recepción real, hay que definir el canal de contacto, conectar la entrega y ajustar el texto de confirmación para reflejar el resultado real del envío.
