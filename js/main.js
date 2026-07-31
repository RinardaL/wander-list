// ===========================================================
// WanderList — shared interactivity
// ===========================================================

/* ---------- Trip catalog (used to render Saved Trips from localStorage) ---------- */
const TRIP_CATALOG = {
  "itinerary.html": { title: "A Week of Hidden Gems in Tokyo & Kyoto", tag: "Hidden Gems", duration: "7 Days", cost: "$$$ · ~$1,650/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kyoto%2C_Japan_%2849667780482%29.jpg/500px-Kyoto%2C_Japan_%2849667780482%29.jpg", alt: "Kyoto cityscape, Japan" },
  "amalfi-coast.html": { title: "7 Days in Amalfi Coast on a Budget", tag: "Budget", duration: "7 Days", cost: "$$ · ~$900/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Amalfi_Coast_%28Italy%2C_October_2020%29_-_75_%2850558355441%29.jpg/500px-Amalfi_Coast_%28Italy%2C_October_2020%29_-_75_%2850558355441%29.jpg", alt: "Amalfi Coast, Italy" },
  "utah-national-parks.html": { title: "Ultimate Road Trip Through Utah's National Parks", tag: "Road Trip", duration: "7 Days", cost: "$$ · ~$1,100/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Delicate_arch_sunset.jpg/500px-Delicate_arch_sunset.jpg", alt: "Delicate Arch at sunset, Utah" },
  "lisbon.html": { title: "7 Days of Lisbon Local Highlights", tag: "Culture", duration: "7 Days", cost: "$$ · ~$700/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg/500px-Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg", alt: "Belém Tower, Lisbon" },
  "banff.html": { title: "A Luxury Week in Banff & Lake Louise", tag: "Luxury", duration: "7 Days", cost: "$$$ · ~$2,400/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/500px-Moraine_Lake_17092005.jpg", alt: "Moraine Lake, Banff National Park" },
  "bali.html": { title: "A Week of Wellness & Solo Discovery in Bali", tag: "Wellness", duration: "7 Days", cost: "$$ · ~$850/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/TanahLot_2014.JPG/500px-TanahLot_2014.JPG", alt: "Tanah Lot, Bali" },
  "paris.html": { title: "A Perfect Long Weekend in Paris", tag: "Weekend Getaway", duration: "3 Days", cost: "$$ · ~$650/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/500px-Tour_Eiffel_Wikimedia_Commons.jpg", alt: "Eiffel Tower, Paris" },
  "new-york-city.html": { title: "48 Hours in New York City", tag: "Weekend Getaway", duration: "2 Days", cost: "$$$ · ~$750/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg/500px-Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg", alt: "Brooklyn Bridge, New York City" },
  "barcelona.html": { title: "3 Days in Barcelona", tag: "Weekend Getaway", duration: "3 Days", cost: "$$ · ~$600/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/SF_maig_2_cropped.jpg/500px-SF_maig_2_cropped.jpg", alt: "Sagrada Família, Barcelona" },
};

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
  }

  /* ---------- 404 page search: same destination as the hero search ---------- */
  const notfoundSearchForm = document.getElementById("notfoundSearchForm");
  if (notfoundSearchForm) {
    notfoundSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dest = document.getElementById("notfoundDestInput").value.trim();
      window.location.href = dest ? `browse.html?q=${encodeURIComponent(dest)}` : "browse.html";
    });
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
