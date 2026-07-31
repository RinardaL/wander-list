// ===========================================================
// WanderList — 3D destination globe (Three.js, core only)
// Progressive enhancement: if WebGL/module loading fails, the
// static destination chip list in the markup remains fully usable.
// ===========================================================

const DESTINATIONS = [
  { name: "Tokyo & Kyoto, Japan", lat: 35.68, lon: 139.65, href: "itinerary.html" },
  { name: "Amalfi Coast, Italy", lat: 40.63, lon: 14.6, href: "amalfi-coast.html" },
  { name: "Utah, USA", lat: 38.57, lon: -109.55, href: "utah-national-parks.html" },
  { name: "Lisbon, Portugal", lat: 38.72, lon: -9.14, href: "lisbon.html" },
  { name: "Banff, Canada", lat: 51.18, lon: -115.57, href: "banff.html" },
  { name: "Bali, Indonesia", lat: -8.34, lon: 115.09, href: "bali.html" },
  { name: "Paris, France", lat: 48.86, lon: 2.35, href: "paris.html" },
  { name: "New York City, USA", lat: 40.71, lon: -74.01, href: "new-york-city.html" },
  { name: "Barcelona, Spain", lat: 41.39, lon: 2.17, href: "barcelona.html" },
];

function latLonToVector3(lat, lon, radius, THREE) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

async function initGlobe() {
  const container = document.getElementById("globeCanvas");
  if (!container) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let THREE;
  try {
    THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
  } catch (e) {
    container.closest(".globe-visual").classList.add("globe-fallback");
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch (e) {
    container.closest(".globe-visual").classList.add("globe-fallback");
    return;
  }

  const emerald = 0x0b6b4f;
  const emeraldDark = 0x073d2e;
  const mint = 0x17b893;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 3.1;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  function sizeToContainer() {
    const size = container.clientWidth;
    renderer.setSize(size, size);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
  }
  sizeToContainer();

  const group = new THREE.Group();
  scene.add(group);

  // Inner solid sphere for depth
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.98, 32, 32),
    new THREE.MeshBasicMaterial({ color: emeraldDark, transparent: true, opacity: 0.25 })
  );
  group.add(core);

  // Wireframe globe
  const wire = new THREE.Mesh(
    new THREE.SphereGeometry(1, 24, 18),
    new THREE.MeshBasicMaterial({ color: emerald, wireframe: true, transparent: true, opacity: 0.45 })
  );
  group.add(wire);

  // Outer atmosphere glow
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(1.06, 24, 18),
    new THREE.MeshBasicMaterial({ color: mint, transparent: true, opacity: 0.06, side: THREE.BackSide })
  );
  group.add(glow);

  // Destination pins
  const pinMeshes = [];
  DESTINATIONS.forEach((dest) => {
    const pos = latLonToVector3(dest.lat, dest.lon, 1.015, THREE);
    const pin = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 12, 12),
      new THREE.MeshBasicMaterial({ color: mint })
    );
    pin.position.copy(pos);
    pin.userData.dest = dest;
    group.add(pin);
    pinMeshes.push(pin);

    // Halo ring around each pin for visibility
    const halo = new THREE.Mesh(
      new THREE.RingGeometry(0.06, 0.075, 20),
      new THREE.MeshBasicMaterial({ color: mint, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
    );
    halo.position.copy(pos);
    halo.lookAt(0, 0, 0);
    group.add(halo);
  });

  // ---------- Tooltip (HTML overlay, projected from 3D) ----------
  const tooltip = document.createElement("div");
  tooltip.className = "globe-tooltip";
  container.appendChild(tooltip);
  let hoveredPin = null;

  function updateTooltipPosition(pin) {
    const vector = pin.position.clone().applyMatrix4(group.matrixWorld).project(camera);
    const x = (vector.x * 0.5 + 0.5) * container.clientWidth;
    const y = (-vector.y * 0.5 + 0.5) * container.clientHeight;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  }

  // ---------- Pointer interaction: drag to rotate, click a pin to navigate ----------
  const raycaster = new THREE.Raycaster();
  const pointerNDC = new THREE.Vector2();
  let isDragging = false;
  let dragMoved = false;
  let lastX = 0, lastY = 0;
  let autoRotateResumeAt = 0;

  function setPointerFromEvent(e) {
    const rect = renderer.domElement.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    pointerNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointerNDC.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    return { clientX, clientY };
  }

  function onPointerDown(e) {
    isDragging = true;
    dragMoved = false;
    const { clientX, clientY } = setPointerFromEvent(e);
    lastX = clientX;
    lastY = clientY;
  }

  function onPointerMove(e) {
    const { clientX, clientY } = setPointerFromEvent(e);

    if (isDragging) {
      const dx = clientX - lastX;
      const dy = clientY - lastY;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragMoved = true;
      group.rotation.y += dx * 0.006;
      group.rotation.x = Math.max(-0.6, Math.min(0.6, group.rotation.x + dy * 0.006));
      lastX = clientX;
      lastY = clientY;
      autoRotateResumeAt = performance.now() + 2200;
      renderer.domElement.style.cursor = "grabbing";
      return;
    }

    raycaster.setFromCamera(pointerNDC, camera);
    const hits = raycaster.intersectObjects(pinMeshes);
    if (hits.length) {
      const pin = hits[0].object;
      renderer.domElement.style.cursor = "pointer";
      if (hoveredPin !== pin) {
        hoveredPin = pin;
        tooltip.textContent = pin.userData.dest.name;
        tooltip.classList.add("is-visible");
      }
      updateTooltipPosition(pin);
    } else if (hoveredPin) {
      hoveredPin = null;
      tooltip.classList.remove("is-visible");
      renderer.domElement.style.cursor = "grab";
    }
  }

  function onPointerUp() {
    if (isDragging && !dragMoved && hoveredPin) {
      window.location.href = hoveredPin.userData.dest.href;
    }
    isDragging = false;
    renderer.domElement.style.cursor = hoveredPin ? "pointer" : "grab";
  }

  renderer.domElement.style.cursor = "grab";
  renderer.domElement.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);

  // ---------- Resize ----------
  if ("ResizeObserver" in window) {
    new ResizeObserver(sizeToContainer).observe(container);
  } else {
    window.addEventListener("resize", sizeToContainer);
  }

  // ---------- Visibility-gated render loop ----------
  let isVisible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 }).observe(container);
  }

  function animate(now) {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    if (!prefersReducedMotion && !isDragging && now > autoRotateResumeAt) {
      group.rotation.y += 0.0016;
    }

    renderer.render(scene, camera);
    if (hoveredPin) updateTooltipPosition(hoveredPin);
  }
  requestAnimationFrame(animate);

  container.closest(".globe-visual").classList.add("globe-ready");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGlobe);
} else {
  initGlobe();
}
