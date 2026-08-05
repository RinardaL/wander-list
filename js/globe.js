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
  { name: "Athens, Greece", lat: 37.98, lon: 23.73, href: "athens.html" },
  { name: "Nice, France", lat: 43.70, lon: 7.27, href: "nice.html" },
  { name: "Milan, Italy", lat: 45.46, lon: 9.19, href: "milano.html" },
  { name: "Tuscany, Italy", lat: 43.32, lon: 11.33, href: "toscana.html" },
  { name: "Madeira, Portugal", lat: 32.65, lon: -16.91, href: "madeira.html" },
  { name: "Sofia, Bulgaria", lat: 42.70, lon: 23.32, href: "sofia.html" },
  { name: "Budapest, Hungary", lat: 47.50, lon: 19.04, href: "budapest.html" },
  { name: "Prague, Czech Republic", lat: 50.09, lon: 14.42, href: "prague.html" },
  { name: "Finnish Lapland", lat: 66.50, lon: 25.73, href: "lapland.html" },
  { name: "Zermatt, Switzerland", lat: 46.02, lon: 7.75, href: "zermatt.html" },
  { name: "Bangkok & Andaman Coast, Thailand", lat: 13.75, lon: 100.50, href: "thailand.html" },
  { name: "Shanghai, China", lat: 31.23, lon: 121.47, href: "shanghai.html" },
  { name: "Strasbourg, France", lat: 48.58, lon: 7.75, href: "strasbourg.html" },
  { name: "Kotor, Montenegro", lat: 42.42, lon: 18.77, href: "kotor.html" },
  { name: "Seville, Spain", lat: 37.39, lon: -5.99, href: "seville.html" },
];

// A click/hover within this angular radius of a destination pin counts as
// "on that country/region", not just the tiny pin dot itself.
const HIT_RADIUS_RAD = (12 * Math.PI) / 180;

const EARTH_TEXTURE_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/1920px-Equirectangular_projection_SW.jpg";

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

  // Earth map sphere: real, correctly-projected equirectangular photography,
  // so every country/continent is where it actually is on the pin layout.
  const earthTexture = await new Promise((resolve) => {
    new THREE.TextureLoader().load(EARTH_TEXTURE_URL, resolve, undefined, () => resolve(null));
  });

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.98, 48, 32),
    earthTexture
      ? new THREE.MeshBasicMaterial({ map: earthTexture })
      : new THREE.MeshBasicMaterial({ color: emeraldDark, transparent: true, opacity: 0.25 })
  );
  group.add(core);

  // Outer atmosphere glow
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(1.06, 24, 18),
    new THREE.MeshBasicMaterial({ color: mint, transparent: true, opacity: 0.08, side: THREE.BackSide })
  );
  group.add(glow);

  // Destination pins
  const pinMeshes = [];
  DESTINATIONS.forEach((dest) => {
    const pos = latLonToVector3(dest.lat, dest.lon, 1.02, THREE);
    const pin = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 12, 12),
      new THREE.MeshBasicMaterial({ color: mint })
    );
    pin.position.copy(pos);
    pin.userData.dest = dest;
    group.add(pin);
    pinMeshes.push(pin);

    // Halo ring around each pin for visibility
    const halo = new THREE.Mesh(
      new THREE.RingGeometry(0.065, 0.085, 20),
      new THREE.MeshBasicMaterial({ color: mint, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
    );
    halo.position.copy(pos);
    halo.lookAt(0, 0, 0);
    group.add(halo);
  });

  // Finds the destination nearest a given point in the group's local space
  // (works for both pin hits and general sphere-surface hits), so clicking
  // anywhere within a country's general area, not just the exact pin dot,
  // still navigates to that trip.
  function nearestDestination(localPoint) {
    let best = null;
    let bestAngle = Infinity;
    pinMeshes.forEach((pin) => {
      const angle = localPoint.angleTo(pin.position);
      if (angle < bestAngle) {
        bestAngle = angle;
        best = pin.userData.dest;
      }
    });
    return bestAngle <= HIT_RADIUS_RAD ? best : null;
  }

  // ---------- Tooltip (HTML overlay, projected from 3D) ----------
  const tooltip = document.createElement("div");
  tooltip.className = "globe-tooltip";
  container.appendChild(tooltip);
  let hoveredDest = null;

  function updateTooltipPosition(localPoint) {
    const vector = localPoint.clone().applyMatrix4(group.matrixWorld).project(camera);
    const x = (vector.x * 0.5 + 0.5) * container.clientWidth;
    const y = (-vector.y * 0.5 + 0.5) * container.clientHeight;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  }

  // ---------- Pointer interaction: drag to rotate, click a pin or nearby country to navigate ----------
  const raycaster = new THREE.Raycaster();
  const pointerNDC = new THREE.Vector2();
  const raycastTargets = [core, ...pinMeshes];
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
    const hits = raycaster.intersectObjects(raycastTargets);
    let dest = null;
    let localPoint = null;
    if (hits.length) {
      const hit = hits[0];
      if (hit.object.userData.dest) {
        dest = hit.object.userData.dest;
        localPoint = hit.object.position;
      } else {
        localPoint = group.worldToLocal(hit.point.clone());
        dest = nearestDestination(localPoint);
      }
    }

    if (dest) {
      renderer.domElement.style.cursor = "pointer";
      if (hoveredDest !== dest) {
        hoveredDest = dest;
        tooltip.textContent = dest.name;
        tooltip.classList.add("is-visible");
      }
      updateTooltipPosition(localPoint);
    } else if (hoveredDest) {
      hoveredDest = null;
      tooltip.classList.remove("is-visible");
      renderer.domElement.style.cursor = "grab";
    }
  }

  function onPointerUp() {
    if (isDragging && !dragMoved && hoveredDest) {
      window.location.href = hoveredDest.href;
    }
    isDragging = false;
    renderer.domElement.style.cursor = hoveredDest ? "pointer" : "grab";
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
    if (hoveredDest) {
      const pin = pinMeshes.find((p) => p.userData.dest === hoveredDest);
      if (pin) updateTooltipPosition(pin.position);
    }
  }
  requestAnimationFrame(animate);

  container.closest(".globe-visual").classList.add("globe-ready");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGlobe);
} else {
  initGlobe();
}
