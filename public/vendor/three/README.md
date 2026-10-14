# Three.js local

Versión: 0.186.1 (paquete npm `three`).
Origen: https://github.com/mrdoob/three.js.

`three.module.js` y `three.core.js` se minifican con Bun a partir de los módulos
ESM de `node_modules/three/build/`, preservando sus exportaciones. Los imports
se mantienen externos al bundle; el módulo principal importa su núcleo mediante
`./three.core.js`, por lo que ambos archivos se sirven desde el mismo origen.
La licencia MIT del paquete se conserva en `LICENSE`.

Estos archivos se actualizan mediante `bun run vendor` y automáticamente con
`bun install`. La versión instalada se registra en `bun.lock`.
