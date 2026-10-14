import * as THREE from "../../vendor/three/three.module.js";

const MINT = 0x8cc8ad;
const IVORY = 0xe3e8d8;

function path(points) {
  const curve = new THREE.CurvePath();
  const vertices = points.map(([x, y, z = 0]) => new THREE.Vector3(x, y, z));
  for (let index = 1; index < vertices.length; index += 1) {
    curve.add(new THREE.LineCurve3(vertices[index - 1], vertices[index]));
  }
  return curve;
}

function circle(x, y, radius) {
  const vertices = Array.from({ length: 48 }, (_, index) => {
    const angle = (index / 48) * Math.PI * 2;
    return new THREE.Vector3(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius, 0);
  });
  return new THREE.CatmullRomCurve3(vertices, true);
}

function wireLayer(width, depth, index) {
  const layer = new THREE.Group();
  const halfWidth = width / 2;
  const halfDepth = depth / 2;
  const corner = 0.13;
  const corners = [
    [-halfWidth + corner, -halfDepth],
    [halfWidth - corner, -halfDepth],
    [halfWidth, -halfDepth + corner],
    [halfWidth, halfDepth - corner],
    [halfWidth - corner, halfDepth],
    [-halfWidth + corner, halfDepth],
    [-halfWidth, halfDepth - corner],
    [-halfWidth, -halfDepth + corner],
    [-halfWidth + corner, -halfDepth],
  ].map(([x, z]) => new THREE.Vector3(x, 0, z));
  layer.add(
    new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(corners),
      new THREE.LineBasicMaterial({
        color: MINT,
        transparent: true,
        opacity: 0.2 + index * 0.075,
        depthWrite: false,
        toneMapped: false,
      }),
    ),
  );

  const grid = [];
  for (let index = 1; index < 8; index += 1) {
    const x = -halfWidth + (width * index) / 8;
    grid.push(
      new THREE.Vector3(x, 0, -halfDepth + 0.08),
      new THREE.Vector3(x, 0, halfDepth - 0.08),
    );
  }
  for (let index = 1; index < 6; index += 1) {
    const z = -halfDepth + (depth * index) / 6;
    grid.push(
      new THREE.Vector3(-halfWidth + 0.08, 0, z),
      new THREE.Vector3(halfWidth - 0.08, 0, z),
    );
  }
  layer.add(
    new THREE.LineSegments(
      new THREE.BufferGeometry().setFromPoints(grid),
      new THREE.LineBasicMaterial({
        color: 0x6c9b88,
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
        toneMapped: false,
      }),
    ),
  );
  layer.add(
    new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(halfWidth, 0, halfDepth - 0.7),
        new THREE.Vector3(halfWidth, 0, halfDepth - corner),
        new THREE.Vector3(halfWidth - corner, 0, halfDepth),
        new THREE.Vector3(halfWidth - 0.6, 0, halfDepth),
      ]),
      new THREE.LineBasicMaterial({
        color: 0x6dedaa,
        transparent: true,
        opacity: 0.48,
        depthWrite: false,
        toneMapped: false,
      }),
    ),
  );
  return layer;
}

export function createHeroModel() {
  const group = new THREE.Group();
  const emblem = new THREE.Group();
  const parts = [];
  const samples = [];
  const pulses = [];
  const stroke = new THREE.MeshBasicMaterial({
    color: MINT,
    transparent: true,
    opacity: 0.82,
    depthWrite: false,
    toneMapped: false,
  });
  const eyeStroke = new THREE.MeshBasicMaterial({
    color: IVORY,
    transparent: true,
    opacity: 0.93,
    depthWrite: false,
    toneMapped: false,
  });
  const pulseMaterial = new THREE.MeshBasicMaterial({
    color: 0xb9ffda,
    transparent: true,
    opacity: 0.95,
    toneMapped: false,
  });
  const pulseGeometry = new THREE.SphereGeometry(0.023, 8, 6);

  const makePart = (offset) => {
    const object = new THREE.Group();
    emblem.add(object);
    const part = { object, offset: new THREE.Vector3(...offset) };
    parts.push(part);
    return part;
  };

  const addStroke = (part, curve, radius = 0.01, material = stroke, animate = false) => {
    const segments = Math.max(24, Math.ceil(curve.getLength() * 18));
    part.object.add(
      new THREE.Mesh(
        new THREE.TubeGeometry(curve, segments, radius, 6, curve instanceof THREE.CatmullRomCurve3),
        material,
      ),
    );
    curve.getSpacedPoints(Math.max(8, Math.round(curve.getLength() * 8))).forEach((origin) => {
      const seed = samples.length;
      samples.push({
        origin,
        part,
        drift: new THREE.Vector3(
          Math.sin(seed * 2.399) * 0.27,
          Math.cos(seed * 2.399) * 0.24,
          Math.sin(seed * 0.73) * 0.38,
        ),
        seed,
      });
    });
    if (animate) {
      const mesh = new THREE.Mesh(pulseGeometry, pulseMaterial);
      part.object.add(mesh);
      pulses.push({ mesh, curve, offset: pulses.length * 0.23 });
    }
  };

  const frameTop = makePart([0, 0.16, -0.05]);
  const frameLeft = makePart([-0.18, 0, 0.04]);
  const frameRight = makePart([0.18, 0, -0.04]);
  const frameBottom = makePart([0, -0.15, 0.08]);
  const upperLeft = makePart([-0.27, 0.15, 0.2]);
  const upperRight = makePart([0.27, 0.15, -0.18]);
  const lowerLeft = makePart([-0.27, -0.14, -0.18]);
  const lowerRight = makePart([0.27, -0.14, 0.2]);
  const eye = makePart([0, 0.04, 0.32]);

  addStroke(
    frameTop,
    path([
      [-1.42, 1.42],
      [1.42, 1.42],
    ]),
    0.014,
  );
  addStroke(
    frameLeft,
    path([
      [-1.42, 1.42],
      [-1.42, -1.42],
    ]),
    0.014,
  );
  addStroke(
    frameRight,
    path([
      [1.42, 1.42],
      [1.42, -1.42],
    ]),
    0.014,
  );
  addStroke(
    frameBottom,
    path([
      [-1.42, -1.42],
      [-0.44, -1.42],
      [-0.44, -1.1],
      [-0.28, -0.93],
      [-0.28, -0.42],
    ]),
    0.014,
  );
  addStroke(
    frameBottom,
    path([
      [1.42, -1.42],
      [0, -1.42],
      [0, -0.8],
      [0.8, -0.8],
      [0.8, -0.5],
    ]),
    0.014,
  );
  addStroke(frameBottom, circle(0.8, -0.41, 0.095));

  addStroke(
    upperLeft,
    path([
      [-1.42, 0.87],
      [-0.68, 0.87],
    ]),
  );
  addStroke(upperLeft, circle(-0.57, 0.87, 0.095));
  addStroke(
    upperLeft,
    path([
      [-1.42, 0.65],
      [-0.78, 0.65],
      [-0.45, 0.32],
    ]),
    0.01,
    stroke,
    true,
  );
  addStroke(
    upperLeft,
    path([
      [-1.42, 0.42],
      [-1.03, 0.42],
    ]),
  );
  addStroke(upperLeft, circle(-0.95, 0.42, 0.075));
  addStroke(
    upperLeft,
    path([
      [-0.28, 0.42],
      [-0.28, 1.04],
    ]),
  );
  addStroke(upperLeft, circle(-0.28, 1.13, 0.085));

  addStroke(
    upperRight,
    path([
      [0, 1.42],
      [0, 0.97],
    ]),
  );
  addStroke(upperRight, circle(0, 0.87, 0.095));
  addStroke(
    upperRight,
    path([
      [0.45, 0.78],
      [0.45, 0.62],
      [0.23, 0.4],
    ]),
  );
  addStroke(upperRight, circle(0.45, 0.87, 0.095));
  addStroke(
    upperRight,
    path([
      [0.55, 0.87],
      [0.9, 0.87],
      [0.9, 1.42],
    ]),
  );
  addStroke(
    upperRight,
    path([
      [1.42, 0.62],
      [0.73, 0.62],
      [0.43, 0.32],
    ]),
    0.01,
    stroke,
    true,
  );
  addStroke(
    upperRight,
    path([
      [1.42, 0.43],
      [0.83, 0.43],
      [0.59, 0.19],
    ]),
  );

  addStroke(
    lowerLeft,
    path([
      [-1.42, -0.2],
      [-0.98, -0.2],
    ]),
  );
  addStroke(lowerLeft, circle(-0.95, -0.2, 0.062));
  addStroke(
    lowerLeft,
    path([
      [-1.42, -0.44],
      [-0.86, -0.44],
      [-0.59, -0.18],
    ]),
    0.01,
    stroke,
    true,
  );
  addStroke(
    lowerLeft,
    path([
      [-1.42, -0.64],
      [-0.76, -0.64],
      [-0.41, -0.3],
    ]),
  );
  addStroke(
    lowerLeft,
    path([
      [-1.42, -0.9],
      [-0.8, -0.9],
    ]),
  );
  addStroke(lowerLeft, circle(-0.7, -0.9, 0.095));
  addStroke(
    lowerRight,
    path([
      [0.39, -1.42],
      [0.39, -1.08],
    ]),
    0.01,
    stroke,
    true,
  );
  addStroke(lowerRight, circle(0.39, -1.01, 0.06));

  const almond = new THREE.CurvePath();
  almond.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.81, 0, 0),
      new THREE.Vector3(-0.34, 0.63, 0),
      new THREE.Vector3(0.34, 0.63, 0),
      new THREE.Vector3(0.81, 0, 0),
    ),
  );
  almond.add(
    new THREE.CubicBezierCurve3(
      new THREE.Vector3(0.81, 0, 0),
      new THREE.Vector3(0.34, -0.63, 0),
      new THREE.Vector3(-0.34, -0.63, 0),
      new THREE.Vector3(-0.81, 0, 0),
    ),
  );
  addStroke(eye, almond, 0.018, eyeStroke);
  addStroke(eye, circle(0, 0, 0.35), 0.017, eyeStroke);
  eye.object.add(new THREE.Mesh(new THREE.CircleGeometry(0.13, 32), eyeStroke));

  const positions = new Float32Array(samples.length * 3);
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage),
  );
  const particleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xc9eed8) },
      opacity: { value: 0 },
    },
    vertexShader: `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 2.6;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float opacity;
      void main() {
        float alpha = 1.0 - smoothstep(0.28, 0.5, length(gl_PointCoord - vec2(0.5)));
        if (alpha < 0.02) discard;
        gl_FragColor = vec4(color, alpha * opacity);
        #include <colorspace_fragment>
      }
    `,
    transparent: true,
    depthWrite: false,
    toneMapped: false,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  particles.frustumCulled = false;
  emblem.add(particles);
  emblem.position.y = 1.53;
  emblem.rotation.order = "YXZ";
  emblem.rotation.y = 0.8;
  emblem.rotation.x = -0.45;
  emblem.scale.setScalar(1.5);
  group.add(emblem);

  const layers = [
    { object: wireLayer(4.9, 3.65, 0), height: -0.45 },
    { object: wireLayer(4.45, 3.35, 1), height: 0 },
    { object: wireLayer(4, 3.05, 2), height: 0.45 },
  ];
  layers.forEach(({ object, height }, index) => {
    object.position.y = height;
    object.rotation.y = (index - 1) * 0.04;
    group.add(object);
  });
  group.rotation.y = -0.22;

  const update = (time, horizontal = 0, vertical = 0, delta = 1, spread = 0) => {
    const ease = 1 - Math.exp(-delta * 6);
    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      -0.22 + horizontal + Math.sin(time * 0.2) * 0.018,
      ease,
    );
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, vertical, ease);
    emblem.position.y = 1.53 + Math.sin(time * 0.45) * 0.025;
    parts.forEach(({ object, offset }) => {
      object.position.copy(offset).multiplyScalar(spread);
    });
    layers.forEach(({ object, height }, index) => {
      object.position.y = height + (index - 1) * 0.13 * spread;
    });
    pulses.forEach(({ mesh, curve, offset }) => {
      curve.getPointAt((time * 0.1 + offset) % 1, mesh.position);
    });
    samples.forEach(({ origin, part, drift, seed }, index) => {
      const start = index * 3;
      positions[start] = origin.x + (part.offset.x + drift.x) * spread;
      positions[start + 1] = origin.y + (part.offset.y + drift.y) * spread;
      positions[start + 2] =
        origin.z + (part.offset.z + drift.z + Math.sin(time * 0.4 + seed) * 0.02) * spread;
    });
    particleGeometry.attributes.position.needsUpdate = true;
    particleMaterial.uniforms.opacity.value = spread * 0.58;
    particles.visible = spread > 0.015;
    stroke.opacity = 0.82 - spread * 0.12;
    eyeStroke.opacity = 0.93 - spread * 0.08;
  };
  update(0);
  return { group, shadow: new THREE.Group(), update };
}

export function disposeObject(object) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  object.traverse((child) => {
    if (child.isLight) child.dispose();
    if (child.geometry) geometries.add(child.geometry);
    const childMaterials = Array.isArray(child.material) ? child.material : [child.material];
    childMaterials.filter(Boolean).forEach((material) => {
      materials.add(material);
      Object.values(material).forEach((value) => {
        if (value?.isTexture) textures.add(value);
      });
    });
  });
  geometries.forEach((geometry) => {
    geometry.dispose();
  });
  materials.forEach((material) => {
    material.dispose();
  });
  textures.forEach((texture) => {
    texture.dispose();
  });
}
