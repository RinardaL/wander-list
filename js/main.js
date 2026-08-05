// ===========================================================
// WanderList — shared interactivity
// ===========================================================

/* ---------- Trip catalog (used to render Saved Trips from localStorage) ---------- */
const TRIP_CATALOG = {
  "itinerary.html": { title: "A Week of Hidden Gems in Tokyo & Kyoto", tag: "Hidden Gems", duration: "7 Days", cost: "$$$ · ~$1,650/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kyoto%2C_Japan_%2849667780482%29.jpg/500px-Kyoto%2C_Japan_%2849667780482%29.jpg", alt: "Kyoto cityscape, Japan", lat: 35.68, lon: 139.65 },
  "amalfi-coast.html": { title: "7 Days in Amalfi Coast on a Budget", tag: "Budget", duration: "7 Days", cost: "$$ · ~$900/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Amalfi_Coast_%28Italy%2C_October_2020%29_-_75_%2850558355441%29.jpg/500px-Amalfi_Coast_%28Italy%2C_October_2020%29_-_75_%2850558355441%29.jpg", alt: "Amalfi Coast, Italy", lat: 40.63, lon: 14.6 },
  "utah-national-parks.html": { title: "Ultimate Road Trip Through Utah's National Parks", tag: "Road Trip", duration: "7 Days", cost: "$$ · ~$1,100/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Delicate_arch_sunset.jpg/500px-Delicate_arch_sunset.jpg", alt: "Delicate Arch at sunset, Utah", lat: 38.57, lon: -109.55 },
  "lisbon.html": { title: "7 Days of Lisbon Local Highlights", tag: "Culture", duration: "7 Days", cost: "$$ · ~$700/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg/500px-Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg", alt: "Belém Tower, Lisbon", lat: 38.72, lon: -9.14 },
  "banff.html": { title: "A Luxury Week in Banff & Lake Louise", tag: "Luxury", duration: "7 Days", cost: "$$$ · ~$2,400/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/500px-Moraine_Lake_17092005.jpg", alt: "Moraine Lake, Banff National Park", lat: 51.18, lon: -115.57 },
  "bali.html": { title: "A Week of Wellness & Solo Discovery in Bali", tag: "Wellness", duration: "7 Days", cost: "$$ · ~$850/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/TanahLot_2014.JPG/500px-TanahLot_2014.JPG", alt: "Tanah Lot, Bali", lat: -8.34, lon: 115.09 },
  "paris.html": { title: "A Perfect Long Weekend in Paris", tag: "Weekend Getaway", duration: "3 Days", cost: "$$ · ~$650/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/500px-Tour_Eiffel_Wikimedia_Commons.jpg", alt: "Eiffel Tower, Paris", lat: 48.86, lon: 2.35 },
  "new-york-city.html": { title: "48 Hours in New York City", tag: "Weekend Getaway", duration: "2 Days", cost: "$$$ · ~$750/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg/500px-Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg", alt: "Brooklyn Bridge, New York City", lat: 40.71, lon: -74.01 },
  "barcelona.html": { title: "3 Days in Barcelona", tag: "Weekend Getaway", duration: "3 Days", cost: "$$ · ~$600/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/SF_maig_2_cropped.jpg/500px-SF_maig_2_cropped.jpg", alt: "Sagrada Família, Barcelona", lat: 41.39, lon: 2.17 },
  "athens.html": { title: "7 Days in Athens: Ancient Ruins & Island Escapes", tag: "Culture", duration: "7 Days", cost: "$$ · ~$850/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/500px-The_Parthenon_in_Athens.jpg", alt: "The Parthenon, Athens, Greece", lat: 37.98, lon: 23.73 },
  "nice.html": { title: "7 Days in Nice & the French Riviera", tag: "Luxury", duration: "7 Days", cost: "$$$ · ~$1,900/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Promenade_des_Anglais_in_Nice.jpg/500px-Promenade_des_Anglais_in_Nice.jpg", alt: "Promenade des Anglais, Nice, France", lat: 43.70, lon: 7.27 },
  "milano.html": { title: "4 Days in Milan: Duomo, Navigli & Brera", tag: "Culture", duration: "4 Days", cost: "$$ · ~$750/person", img: "https://images.unsplash.com/photo-1567760855784-589f09ed5dc6?w=500&q=80&fm=jpg&fit=crop", alt: "Milan Cathedral (Duomo di Milano) at golden hour", lat: 45.46, lon: 9.19 },
  "toscana.html": { title: "6 Days in Tuscany: A Self-Drive Road Trip", tag: "Road Trip", duration: "6 Days", cost: "$$ · ~$1,300/person", img: "https://images.unsplash.com/photo-1684836571999-f3dc511935e7?w=500&q=80&fm=jpg&fit=crop", alt: "Cypress-lined road through the Tuscan countryside", lat: 43.32, lon: 11.33 },
  "madeira.html": { title: "5 Days in Madeira, Portugal", tag: "Hidden Gems", duration: "5 Days", cost: "$$ · ~$950/person", img: "https://images.unsplash.com/photo-1757440156710-574dcfae0bcc?w=500&q=80&fm=jpg&fit=crop", alt: "Coastal cliffs and waterfall, Madeira, Portugal", lat: 32.65, lon: -16.91 },
  "thailand.html": { title: "7 Days in Thailand: Bangkok to the Andaman Coast", tag: "Budget", duration: "7 Days", cost: "$$ · ~$950/person", img: "https://images.unsplash.com/photo-1704390529135-742324e6b8f1?w=500&q=80&fm=jpg&fit=crop", alt: "Wat Arun's spire at golden hour, Bangkok, Thailand", lat: 13.75, lon: 100.50 },
  "sofia.html": { title: "4 Days in Sofia, Bulgaria", tag: "Budget", duration: "4 Days", cost: "$ · ~$500/person", img: "https://images.unsplash.com/photo-1641458706911-92b0d6a3d9c3?w=500&q=80&fm=jpg&fit=crop", alt: "Alexander Nevsky Cathedral's golden dome, Sofia, Bulgaria", lat: 42.70, lon: 23.32 },
  "budapest.html": { title: "5 Days in Budapest: Danube, Castle Hill & Thermal Baths", tag: "Culture", duration: "5 Days", cost: "$$ · ~$700/person", img: "https://images.unsplash.com/photo-1555958493-1380d49ac1ef?w=500&q=80&fm=jpg&fit=crop", alt: "Hungarian Parliament Building lit up at night on the Danube", lat: 47.50, lon: 19.04 },
  "prague.html": { title: "4 Days in Prague: Old Town, Castle & the Vltava", tag: "Weekend Getaway", duration: "4 Days", cost: "$$ · ~$650/person", img: "https://images.unsplash.com/photo-1666687067593-a5a89fd99edd?w=500&q=80&fm=jpg&fit=crop", alt: "Týn Church's Gothic spires over Old Town Square, Prague", lat: 50.09, lon: 14.42 },
  "lapland.html": { title: "5 Days in Finnish Lapland: Rovaniemi & the Arctic Circle", tag: "Luxury", duration: "5 Days", cost: "$$$ · ~$2,100/person", img: "https://images.unsplash.com/photo-1738189669835-61808a9d5981?w=500&q=80&fm=jpg&fit=crop", alt: "Aurora borealis over a snow-covered forest, Finnish Lapland", lat: 66.50, lon: 25.73 },
  "zermatt.html": { title: "4 Days in Zermatt: Matterhorn Views & Alpine Trails", tag: "Luxury", duration: "4 Days", cost: "$$$ · ~$1,900/person", img: "https://images.unsplash.com/photo-1571274834067-3a24675547b4?w=500&q=80&fm=jpg&fit=crop", alt: "Zermatt village chalets with the Matterhorn behind them", lat: 46.02, lon: 7.75 },
  "shanghai.html": { title: "5 Days in Shanghai: The Bund, Yu Garden & Zhujiajiao", tag: "Culture", duration: "5 Days", cost: "$$ · ~$950/person", img: "https://images.unsplash.com/photo-1527909249915-9ff58d10d4c8?w=500&q=80&fm=jpg&fit=crop", alt: "Pudong skyline with the Oriental Pearl Tower at dusk, viewed from the Bund", lat: 31.23, lon: 121.47 },
  "strasbourg.html": { title: "4 Days in Strasbourg: Petite France, Cathedral & the Alsace Wine Route", tag: "Culture", duration: "4 Days", cost: "$$ · ~$750/person", img: "https://images.unsplash.com/photo-1596036986070-e84592a19917?w=500&q=80&fm=jpg&fit=crop", alt: "Half-timbered houses along the canals of Petite France, Strasbourg", lat: 48.58, lon: 7.75 },
  "kotor.html": { title: "4 Days in Kotor, Montenegro: Old Town, Fortress & Bay", tag: "Hidden Gems", duration: "4 Days", cost: "$$ · ~$700/person", img: "https://images.unsplash.com/photo-1641234354133-df0ae680f2db?w=500&q=80&fm=jpg&fit=crop", alt: "Panoramic view of the Bay of Kotor from the fortress walls above the Old Town", lat: 42.42, lon: 18.77 },
  "seville.html": { title: "4 Days in Seville: Alcázar, Cathedral & Triana", tag: "Weekend Getaway", duration: "4 Days", cost: "$$ · ~$700/person", img: "https://images.unsplash.com/photo-1559386081-325882507af7?w=500&q=80&fm=jpg&fit=crop", alt: "Plaza de España's grand semicircular building viewed through an arch", lat: 37.39, lon: -5.99 },
};

/* ---------- Live weather (Open-Meteo, free, no API key required) ---------- */
const WEATHER_CODES = {
  0: ["☀️", "Clear sky"], 1: ["🌤️", "Mostly clear"], 2: ["⛅", "Partly cloudy"], 3: ["☁️", "Overcast"],
  45: ["🌫️", "Foggy"], 48: ["🌫️", "Foggy"],
  51: ["🌦️", "Light drizzle"], 53: ["🌦️", "Drizzle"], 55: ["🌧️", "Heavy drizzle"],
  61: ["🌦️", "Light rain"], 63: ["🌧️", "Rain"], 65: ["🌧️", "Heavy rain"],
  71: ["🌨️", "Light snow"], 73: ["🌨️", "Snow"], 75: ["❄️", "Heavy snow"],
  80: ["🌦️", "Rain showers"], 81: ["🌧️", "Rain showers"], 82: ["⛈️", "Violent showers"],
  95: ["⛈️", "Thunderstorm"], 96: ["⛈️", "Thunderstorm"], 99: ["⛈️", "Thunderstorm"],
};

async function fetchDestinationWeather(lat, lon) {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`);
  if (!res.ok) throw new Error("Weather request failed");
  const data = await res.json();
  const temp = Math.round(data.current.temperature_2m);
  const [icon, label] = WEATHER_CODES[data.current.weather_code] || ["🌡️", "Current conditions"];
  return { temp, icon, label };
}

/* ---------- Saved Trips (persisted in localStorage across visits) ---------- */
const SAVED_TRIPS_KEY = "wanderlist_saved_trips";

function getSavedTrips() {
  try {
    const raw = JSON.parse(localStorage.getItem(SAVED_TRIPS_KEY));
    return Array.isArray(raw) ? raw : [];
  } catch (e) {
    return [];
  }
}

function setSavedTrips(list) {
  try { localStorage.setItem(SAVED_TRIPS_KEY, JSON.stringify(list)); } catch (e) {}
}

function isTripSaved(id) {
  return getSavedTrips().includes(id);
}

function toggleTripSaved(id) {
  const list = getSavedTrips();
  const index = list.indexOf(id);
  if (index === -1) list.push(id); else list.splice(index, 1);
  setSavedTrips(list);
  return list.includes(id);
}

function currentPageId() {
  return window.location.pathname.split("/").pop() || "index.html";
}

/* ---------- Trip-search autocomplete dropdown ----------
   Attaches a dropdown to a text input that lists ONLY trips that
   actually exist on the site (sourced from TRIP_CATALOG). Selecting
   an entry navigates straight to that trip's page. */
function attachTripAutocomplete(input) {
  if (!input) return;

  const entries = Object.entries(TRIP_CATALOG);
  const panel = document.createElement("div");
  panel.className = "search-autocomplete";
  panel.setAttribute("role", "listbox");
  input.insertAdjacentElement("afterend", panel);
  input.setAttribute("autocomplete", "off");

  let activeIndex = -1;
  let currentMatches = [];

  function close() {
    panel.classList.remove("is-open");
    activeIndex = -1;
  }

  function renderActive() {
    Array.from(panel.children).forEach((el, i) => el.classList.toggle("is-active", i === activeIndex));
  }

  function open(query) {
    const q = query.trim().toLowerCase();
    currentMatches = (q ? entries.filter(([, trip]) => trip.title.toLowerCase().includes(q)) : entries).slice(0, 12);
    activeIndex = -1;
    panel.innerHTML = "";

    if (!currentMatches.length) {
      panel.innerHTML = '<div class="search-autocomplete-empty">No trips match, try Browse All Trips instead.</div>';
      panel.classList.add("is-open");
      return;
    }

    currentMatches.forEach(([id, trip]) => {
      const item = document.createElement("div");
      item.className = "search-autocomplete-item";
      item.setAttribute("role", "option");
      item.innerHTML = `<img src="${trip.img}" alt="" loading="lazy" decoding="async"><div class="sa-meta"><strong>${trip.title}</strong><span>${trip.tag} · ${trip.duration}</span></div>`;
      item.addEventListener("mousedown", (e) => {
        e.preventDefault(); // fires before input blur, so the click always registers
        window.location.href = id;
      });
      panel.appendChild(item);
    });
    panel.classList.add("is-open");
  }

  input.addEventListener("focus", () => open(input.value));
  input.addEventListener("input", () => open(input.value));

  input.addEventListener("keydown", (e) => {
    if (!panel.classList.contains("is-open")) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, currentMatches.length - 1);
      renderActive();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      renderActive();
    } else if (e.key === "Enter" && activeIndex >= 0 && currentMatches[activeIndex]) {
      e.preventDefault();
      window.location.href = currentMatches[activeIndex][0];
    } else if (e.key === "Escape") {
      close();
    }
  });

  input.addEventListener("blur", () => setTimeout(close, 120));
  document.addEventListener("click", (e) => {
    if (e.target !== input && !panel.contains(e.target)) close();
  });
}

function initWanderList() {

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Lazy-load real photos + fade-in on load ---------- */
  const lazyImages = document.querySelectorAll(".photo img[data-src], .day-photo img[data-src], .related-card img[data-src]");
  function loadImage(img) {
    const reveal = () => img.classList.add("is-loaded");
    img.addEventListener("load", reveal);
    img.addEventListener("error", () => { img.style.display = "none"; });
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  }
  if (lazyImages.length) {
    if ("IntersectionObserver" in window) {
      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage(entry.target);
            lazyObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: "300px 0px" });
      lazyImages.forEach((img) => lazyObserver.observe(img));
    } else {
      lazyImages.forEach(loadImage);
    }
  }

  // Eager images (e.g. itinerary cover) already carry a real src — just wire the fade-in.
  document.querySelectorAll(".photo img:not([data-src]), .day-photo img:not([data-src]), .related-card img:not([data-src])").forEach((img) => {
    const reveal = () => img.classList.add("is-loaded");
    if (img.complete && img.naturalWidth > 0) {
      reveal();
    } else {
      img.addEventListener("load", reveal);
      img.addEventListener("error", () => { img.style.display = "none"; });
    }
  });

  /* ---------- Custom trip-length picker (condenses the day-by-day to N days) ---------- */
  const durationOptions = document.getElementById("durationOptions");
  if (durationOptions) {
    const dayItems = Array.from(document.querySelectorAll("#dayList .day-item"));
    const totalDays = dayItems.length;
    const customInput = document.getElementById("customDuration");
    const note = document.getElementById("durationNote");

    function rankedDays() {
      return dayItems.slice().sort((a, b) => {
        const pa = parseInt(a.dataset.priority || a.querySelector(".day-number").textContent, 10);
        const pb = parseInt(b.dataset.priority || b.querySelector(".day-number").textContent, 10);
        return pa - pb;
      });
    }

    function applyDuration(n) {
      n = Math.max(1, Math.min(n, 14));
      if (n >= totalDays) {
        dayItems.forEach((d) => d.classList.remove("duration-hidden"));
        note.hidden = true;
        return;
      }
      const keep = new Set(rankedDays().slice(0, n));
      dayItems.forEach((d) => d.classList.toggle("duration-hidden", !keep.has(d)));
      note.hidden = false;
      note.innerHTML = `Showing our recommended ${n}-day plan for this trip. <a data-show-all>Show the full ${totalDays}-day itinerary</a>`;
    }

    durationOptions.querySelectorAll(".duration-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        durationOptions.querySelectorAll(".duration-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        if (customInput) customInput.value = "";
        applyDuration(parseInt(btn.dataset.days, 10));
      });
    });

    if (customInput) {
      customInput.addEventListener("input", () => {
        const val = parseInt(customInput.value, 10);
        durationOptions.querySelectorAll(".duration-btn").forEach((b) => b.classList.remove("active"));
        if (!isNaN(val) && val > 0) applyDuration(val);
      });
    }

    note.addEventListener("click", (e) => {
      if (!e.target.hasAttribute("data-show-all")) return;
      durationOptions.querySelectorAll(".duration-btn").forEach((b) => {
        b.classList.toggle("active", parseInt(b.dataset.days, 10) === totalDays);
      });
      if (customInput) customInput.value = "";
      applyDuration(totalDays);
    });
  }

  /* ---------- Scroll-reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach((el) => revealObserver.observe(el));
    }
  }

  /* ---------- Hero stat count-up ---------- */
  const heroStats = document.getElementById("heroStats");
  if (heroStats) {
    const counters = heroStats.querySelectorAll("[data-count-to]");
    const runCount = () => {
      counters.forEach((el) => {
        const target = parseFloat(el.dataset.countTo);
        const suffix = el.dataset.suffix || "";
        const isDecimal = String(el.dataset.countTo).includes(".");
        if (prefersReducedMotion) {
          el.textContent = (isDecimal ? target.toFixed(1) : target.toLocaleString()) + suffix;
          return;
        }
        const duration = 1100;
        const start = performance.now();
        function step(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = (isDecimal ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    };
    if ("IntersectionObserver" in window) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCount();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      statsObserver.observe(heroStats);
    } else {
      runCount();
    }
  }

  /* ---------- Sticky header scroll shadow ---------- */
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    const updateHeaderState = () => siteHeader.classList.toggle("scrolled", window.scrollY > 8);
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("mobile-open");
    });
  }

  /* ---------- Category filter (visual active state) ---------- */
  const categoryGrid = document.getElementById("categoryGrid");
  if (categoryGrid) {
    categoryGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".category-card");
      if (!card) return;
      categoryGrid.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  }

  /* ---------- Testimonials: live-loaded from data/reviews.json ---------- */
  const testimonialGrid = document.getElementById("testimonialGrid");
  if (testimonialGrid) {
    const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

    let lastPayload = "";
    function renderReviews(reviews) {
      testimonialGrid.innerHTML = reviews.map((r) => `
        <div class="testimonial-card reveal in-view">
          <div class="testimonial-stars">${"★".repeat(Math.round(r.rating || 5))}</div>
          <p>"${escapeHtml(r.text)}"</p>
          <div class="testimonial-author">
            <span class="testimonial-avatar" style="background:${escapeHtml(r.color || "var(--emerald)")}">${escapeHtml(r.initial || r.author[0])}</span>
            <div><strong>${escapeHtml(r.author)}</strong><span>${escapeHtml(r.trip)}</span></div>
          </div>
        </div>`).join("");
    }

    async function loadReviews() {
      try {
        const res = await fetch(`data/reviews.json?t=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) return;
        const reviews = await res.json();
        if (!Array.isArray(reviews) || !reviews.length) return;
        const payload = JSON.stringify(reviews);
        if (payload === lastPayload) return;
        lastPayload = payload;
        renderReviews(reviews);
      } catch (e) {
        /* Keep the static fallback markup already in the page. */
      }
    }

    loadReviews();
    setInterval(loadReviews, 45000);
  }

  /* ---------- Saved Trips page: render from localStorage ---------- */
  const savedGrid = document.getElementById("savedGrid");
  if (savedGrid) {
    function renderSavedTrips() {
      const savedIds = getSavedTrips().filter((id) => TRIP_CATALOG[id]);
      const savedEmpty = document.getElementById("savedEmpty");
      savedGrid.innerHTML = "";

      if (!savedIds.length) {
        savedEmpty.hidden = false;
        return;
      }
      savedEmpty.hidden = true;

      savedIds.forEach((id) => {
        const trip = TRIP_CATALOG[id];
        const card = document.createElement("article");
        card.className = "trip-card reveal in-view";
        card.innerHTML = `
          <div class="photo ph-2" style="height:190px;">
            <img src="${trip.img}" alt="${trip.alt}" loading="lazy" decoding="async">
          </div>
          <div class="trip-card-body">
            <div class="trip-tags"><span class="tag terracotta">${trip.tag}</span><span class="tag">${trip.duration}</span></div>
            <h3>${trip.title}</h3>
            <div class="trip-meta">
              <span class="cost">${trip.cost}</span>
              <a href="${id}" class="btn btn-outline btn-sm">View Trip</a>
            </div>
            <button class="btn btn-ghost btn-sm saved-remove-btn" data-id="${id}" style="margin-top:12px;width:100%;color:var(--charcoal-soft);border-color:var(--line);">Remove from Saved</button>
          </div>`;
        savedGrid.appendChild(card);
        // Fade the (already-loaded, non-lazy) image straight in.
        const img = card.querySelector("img");
        if (img.complete) img.classList.add("is-loaded");
        else img.addEventListener("load", () => img.classList.add("is-loaded"));
      });
    }

    savedGrid.addEventListener("click", (e) => {
      const removeBtn = e.target.closest(".saved-remove-btn");
      if (!removeBtn) return;
      toggleTripSaved(removeBtn.dataset.id);
      renderSavedTrips();
      syncNavHeart();
    });

    renderSavedTrips();
  }

  /* ---------- Browse page: style/budget/search filtering ---------- */
  const browseGrid = document.getElementById("browseGrid");
  if (browseGrid) {
    const styleChips = document.querySelectorAll("#styleFilters .filter-chip");
    const budgetFilter = document.getElementById("budgetFilter");
    const searchInput = document.getElementById("searchInput");
    const browseCount = document.getElementById("browseCount");
    const browseEmpty = document.getElementById("browseEmpty");
    const cards = Array.from(browseGrid.querySelectorAll(".trip-card"));

    let activeStyle = "all";

    function applyFilters() {
      const activeBudget = budgetFilter.value;
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const styles = (card.dataset.style || "").split(" ");
        const budget = card.dataset.budget || "";
        const name = (card.dataset.name || "").toLowerCase();

        const matchesStyle = activeStyle === "all" || styles.includes(activeStyle);
        const matchesBudget = activeBudget === "all" || budget === activeBudget;
        const matchesSearch = !query || name.includes(query);
        const isMatch = matchesStyle && matchesBudget && matchesSearch;

        card.classList.toggle("is-hidden", !isMatch);
        if (isMatch) visibleCount++;
      });

      browseCount.textContent = `${visibleCount} ${visibleCount === 1 ? "itinerary" : "itineraries"}`;
      browseEmpty.hidden = visibleCount > 0;
    }

    styleChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        styleChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        activeStyle = chip.dataset.style;
        applyFilters();
      });
    });
    budgetFilter.addEventListener("change", applyFilters);
    searchInput.addEventListener("input", applyFilters);
    attachTripAutocomplete(searchInput);

    // Deep-link support: browse.html?style=budget pre-selects that chip,
    // browse.html?q=paris pre-fills the search box — both combine naturally.
    const params = new URLSearchParams(window.location.search);
    const styleParam = params.get("style");
    const queryParam = params.get("q");

    if (queryParam) searchInput.value = queryParam;

    if (styleParam) {
      const matchingChip = Array.from(styleChips).find((c) => c.dataset.style === styleParam);
      if (matchingChip) {
        matchingChip.click(); // click() already calls applyFilters()
      } else {
        applyFilters();
      }
    } else {
      applyFilters();
    }
  }

  /* ---------- Featured carousel ---------- */
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  if (track && prevBtn && nextBtn) {
    const scrollAmount = () => track.querySelector(".trip-card").offsetWidth + 24;
    prevBtn.addEventListener("click", () => track.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
    nextBtn.addEventListener("click", () => track.scrollBy({ left: scrollAmount(), behavior: "smooth" }));

    const updateCarouselEdges = () => {
      const max = track.scrollWidth - track.clientWidth;
      prevBtn.disabled = track.scrollLeft <= 4;
      nextBtn.disabled = track.scrollLeft >= max - 4;
    };
    updateCarouselEdges();
    track.addEventListener("scroll", updateCarouselEdges, { passive: true });
    window.addEventListener("resize", updateCarouselEdges);
  }

  /* ---------- Hero search: routes to the real browse/filter page ---------- */
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dest = document.getElementById("destInput").value.trim();
      window.location.href = dest ? `browse.html?q=${encodeURIComponent(dest)}` : "browse.html";
    });
    attachTripAutocomplete(document.getElementById("destInput"));
  }

  /* ---------- 404 page search: same destination as the hero search ---------- */
  const notfoundSearchForm = document.getElementById("notfoundSearchForm");
  if (notfoundSearchForm) {
    notfoundSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dest = document.getElementById("notfoundDestInput").value.trim();
      window.location.href = dest ? `browse.html?q=${encodeURIComponent(dest)}` : "browse.html";
    });
    attachTripAutocomplete(document.getElementById("notfoundDestInput"));
  }

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.getElementById("newsletterForm");
  const formSuccess = document.getElementById("formSuccess");
  if (newsletterForm && formSuccess) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formSuccess.classList.add("show");
      newsletterForm.reset();
    });
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");
  if (contactForm && contactSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactSuccess.classList.add("show");
      contactForm.reset();
    });
  }

  /* ---------- FAQ accordion ---------- */
  const faqList = document.getElementById("faqList");
  if (faqList) {
    faqList.addEventListener("click", (e) => {
      const question = e.target.closest(".faq-question");
      if (!question) return;
      question.closest(".faq-item").classList.toggle("open");
    });
  }

  /* ---------- Itinerary detail: top-level tabs ---------- */
  const tabNav = document.getElementById("tabNav");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  const tabIndicator = document.getElementById("tabIndicator");

  function moveIndicatorTo(btn) {
    if (!tabIndicator || !btn) return;
    tabIndicator.style.width = `${btn.offsetWidth}px`;
    tabIndicator.style.transform = `translateX(${btn.offsetLeft}px)`;
  }

  function activateTab(tabName) {
    let activeBtn = null;
    tabButtons.forEach(b => {
      const isActive = b.dataset.tab === tabName;
      b.classList.toggle("active", isActive);
      if (isActive) activeBtn = b;
    });
    tabPanels.forEach(p => p.classList.toggle("active", p.id === `panel-${tabName}`));
    moveIndicatorTo(activeBtn);
  }

  if (tabNav) {
    tabNav.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-btn");
      if (!btn) return;
      activateTab(btn.dataset.tab);
      history.replaceState(null, "", `#${btn.dataset.tab}`);
    });

    // Deep-link support from header nav ("Packing Guides" / "Culture Tips")
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(`panel-${hash}`)) {
      activateTab(hash);
    } else {
      moveIndicatorTo(document.querySelector(".tab-btn.active"));
    }

    window.addEventListener("resize", () => moveIndicatorTo(document.querySelector(".tab-btn.active")));
  }

  /* ---------- Nav quick-links to a tab ("Packing Guides" / "Culture Tips") ---------- */
  document.querySelectorAll("a[data-tab]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetTab = link.dataset.tab;
      if (document.getElementById(`panel-${targetTab}`)) {
        // Tab lives on this page — switch instantly instead of a full navigation.
        e.preventDefault();
        activateTab(targetTab);
        history.replaceState(null, "", `#${targetTab}`);
        tabNav.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      }
      // Otherwise (e.g. clicked from the homepage) let the link navigate to the page that has it.
    });
  });

  /* ---------- Day-by-day accordion ---------- */
  const dayList = document.getElementById("dayList");
  if (dayList) {
    dayList.addEventListener("click", (e) => {
      const header = e.target.closest(".day-header");
      if (!header) return;
      const item = header.closest(".day-item");
      item.classList.toggle("open");
    });
  }

  /* ---------- Packing checklist progress (persisted per trip) ---------- */
  const packingGrid = document.getElementById("packingGrid");
  const progressFill = document.getElementById("progressFill");
  const progressLabel = document.getElementById("progressLabel");

  function updatePackingProgress() {
    const boxes = packingGrid.querySelectorAll('input[type="checkbox"]');
    const checked = packingGrid.querySelectorAll('input[type="checkbox"]:checked');
    const pct = boxes.length ? Math.round((checked.length / boxes.length) * 100) : 0;
    progressFill.style.width = `${pct}%`;
    progressLabel.textContent = `${checked.length} / ${boxes.length} packed`;
  }

  if (packingGrid && progressFill && progressLabel) {
    const packingStorageKey = `wanderlist_packing_${currentPageId()}`;
    const checkboxes = Array.from(packingGrid.querySelectorAll('input[type="checkbox"]'));

    // Restore previously checked items from this browser session's storage.
    try {
      const savedIndices = JSON.parse(localStorage.getItem(packingStorageKey)) || [];
      checkboxes.forEach((box, i) => { if (savedIndices.includes(i)) box.checked = true; });
    } catch (e) {}

    packingGrid.addEventListener("change", () => {
      const checkedIndices = checkboxes.reduce((acc, box, i) => {
        if (box.checked) acc.push(i);
        return acc;
      }, []);
      try { localStorage.setItem(packingStorageKey, JSON.stringify(checkedIndices)); } catch (e) {}
      updatePackingProgress();
    });

    updatePackingProgress();
  }

  /* ---------- Live weather widget in the itinerary meta-bar ---------- */
  const metaActions = document.querySelector(".itinerary-meta-bar .meta-actions");
  const destInfo = TRIP_CATALOG[currentPageId()];
  if (metaActions && destInfo && typeof destInfo.lat === "number") {
    const weatherItem = document.createElement("div");
    weatherItem.className = "meta-item";
    weatherItem.innerHTML = '<span class="label">Right Now</span><span class="value" id="weatherValue">Loading…</span>';
    metaActions.parentNode.insertBefore(weatherItem, metaActions);
    fetchDestinationWeather(destInfo.lat, destInfo.lon)
      .then(({ temp, icon, label }) => {
        document.getElementById("weatherValue").innerHTML = `${icon} ${temp}°F <span style="font-size:.7rem;font-weight:500;color:var(--charcoal-soft);display:block;">${label}</span>`;
      })
      .catch((err) => {
        console.error("WanderList weather fetch failed:", err);
        document.getElementById("weatherValue").textContent = "Unavailable";
      });
  }

  /* ---------- Save trip button (persisted to localStorage) ---------- */
  const saveBtn = document.getElementById("saveBtn");
  const navHeart = document.querySelector('.icon-btn[aria-label="Saved Trips"]');

  function syncNavHeart() {
    if (navHeart) navHeart.classList.toggle("is-saved", getSavedTrips().length > 0);
  }

  function syncSaveBtn(saved) {
    saveBtn.classList.toggle("btn-secondary", saved);
    saveBtn.classList.toggle("btn-outline", !saved);
    saveBtn.textContent = saved ? "♥ Saved" : "♥ Save Trip";
  }

  if (saveBtn) {
    syncSaveBtn(isTripSaved(currentPageId()));
    saveBtn.addEventListener("click", () => {
      const saved = toggleTripSaved(currentPageId());
      syncSaveBtn(saved);
      syncNavHeart();
    });
  }
  syncNavHeart();

  /* ---------- Export / download buttons (demo: trigger print) ---------- */
  const printBtn = document.getElementById("printBtn");
  const downloadPacking = document.getElementById("downloadPacking");
  [printBtn, downloadPacking].forEach(btn => {
    if (btn) btn.addEventListener("click", () => window.print());
  });

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWanderList);
} else {
  initWanderList();
}
