// ===========================================================
// TripToCost — shared interactivity
// ===========================================================

/* ---------- Trip catalog (used to render Saved Trips from localStorage) ---------- */
const TRIP_CATALOG = {
  "itinerary.html": { title: "A Week of Hidden Gems in Tokyo & Kyoto", place: "Tokyo & Kyoto, Japan", tag: "Historic Old Towns", duration: "7 Days", cost: "$1,400-1,900/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kyoto%2C_Japan_%2849667780482%29.jpg/500px-Kyoto%2C_Japan_%2849667780482%29.jpg", alt: "Kyoto cityscape, Japan", country: "Japan", continent: "Asia", lat: 35.68, lon: 139.65 },
  "amalfi-coast.html": { title: "7 Days in Amalfi Coast on a Budget", place: "Amalfi Coast, Italy", tag: "Beach & Coastal", duration: "7 Days", cost: "$750-1,050/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Amalfi_Coast_%28Italy%2C_October_2020%29_-_75_%2850558355441%29.jpg/500px-Amalfi_Coast_%28Italy%2C_October_2020%29_-_75_%2850558355441%29.jpg", alt: "Amalfi Coast, Italy", country: "Italy", continent: "Europe", lat: 40.63, lon: 14.6 },
  "utah-national-parks.html": { title: "Ultimate Road Trip Through Utah's National Parks", place: "Utah, USA", tag: "Road Trips & National Parks", duration: "7 Days", cost: "$950-1,250/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Delicate_arch_sunset.jpg/500px-Delicate_arch_sunset.jpg", alt: "Delicate Arch at sunset, Utah", country: "USA", continent: "North America", lat: 38.57, lon: -109.55 },
  "lisbon.html": { title: "7 Days of Lisbon Local Highlights", place: "Lisbon, Portugal", tag: "Historic Old Towns", duration: "7 Days", cost: "$600-800/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg/500px-Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg", alt: "Belém Tower, Lisbon", country: "Portugal", continent: "Europe", lat: 38.72, lon: -9.14 },
  "banff.html": { title: "A Luxury Week in Banff & Lake Louise", place: "Banff, Canada", tag: "Mountain Escapes", duration: "7 Days", cost: "$2,050-2,750/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/500px-Moraine_Lake_17092005.jpg", alt: "Moraine Lake, Banff National Park", country: "Canada", continent: "North America", lat: 51.18, lon: -115.57 },
  "bali.html": { title: "A Week of Wellness & Solo Discovery in Bali", place: "Bali, Indonesia", tag: "Beach & Coastal", duration: "7 Days", cost: "$700-1,000/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/TanahLot_2014.JPG/500px-TanahLot_2014.JPG", alt: "Tanah Lot, Bali", country: "Indonesia", continent: "Asia", lat: -8.34, lon: 115.09 },
  "paris.html": { title: "A Perfect Long Weekend in Paris", place: "Paris, France", tag: "Historic Old Towns", duration: "3 Days", cost: "$550-750/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/500px-Tour_Eiffel_Wikimedia_Commons.jpg", alt: "Eiffel Tower, Paris", country: "France", continent: "Europe", lat: 48.86, lon: 2.35 },
  "new-york-city.html": { title: "48 Hours in New York City", place: "New York City, USA", tag: "Modern Cities", duration: "2 Days", cost: "$650-850/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg/500px-Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg", alt: "Brooklyn Bridge, New York City", country: "USA", continent: "North America", lat: 40.71, lon: -74.01 },
  "barcelona.html": { title: "3 Days in Barcelona", place: "Barcelona, Spain", tag: "Historic Old Towns", duration: "3 Days", cost: "$500-700/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/SF_maig_2_cropped.jpg/500px-SF_maig_2_cropped.jpg", alt: "Sagrada Família, Barcelona", country: "Spain", continent: "Europe", lat: 41.39, lon: 2.17 },
  "athens.html": { title: "7 Days in Athens: Ancient Ruins & Island Escapes", place: "Athens, Greece", tag: "Historic Old Towns", duration: "7 Days", cost: "$700-1,000/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/500px-The_Parthenon_in_Athens.jpg", alt: "The Parthenon, Athens, Greece", country: "Greece", continent: "Europe", lat: 37.98, lon: 23.73 },
  "nice.html": { title: "7 Days in Nice & the French Riviera", place: "Nice, France", tag: "Beach & Coastal", duration: "7 Days", cost: "$1,600-2,200/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Promenade_des_Anglais_in_Nice.jpg/500px-Promenade_des_Anglais_in_Nice.jpg", alt: "Promenade des Anglais, Nice, France", country: "France", continent: "Europe", lat: 43.70, lon: 7.27 },
  "milano.html": { title: "4 Days in Milan: Duomo, Navigli & Brera", place: "Milan, Italy", tag: "Modern Cities", duration: "4 Days", cost: "$650-850/person", img: "https://images.unsplash.com/photo-1567760855784-589f09ed5dc6?w=500&q=80&fm=jpg&fit=crop", alt: "Milan Cathedral (Duomo di Milano) at golden hour", country: "Italy", continent: "Europe", lat: 45.46, lon: 9.19 },
  "toscana.html": { title: "6 Days in Tuscany: A Self-Drive Road Trip", place: "Tuscany, Italy", tag: "Road Trips & National Parks", duration: "6 Days", cost: "$1,100-1,500/person", img: "https://images.unsplash.com/photo-1684836571999-f3dc511935e7?w=500&q=80&fm=jpg&fit=crop", alt: "Cypress-lined road through the Tuscan countryside", country: "Italy", continent: "Europe", lat: 43.32, lon: 11.33 },
  "madeira.html": { title: "5 Days in Madeira, Portugal", place: "Madeira, Portugal", tag: "Beach & Coastal", duration: "5 Days", cost: "$800-1,100/person", img: "https://images.unsplash.com/photo-1757440156710-574dcfae0bcc?w=500&q=80&fm=jpg&fit=crop", alt: "Coastal cliffs and waterfall, Madeira, Portugal", country: "Portugal", continent: "Europe", lat: 32.65, lon: -16.91 },
  "thailand.html": { title: "7 Days in Thailand: Bangkok to the Andaman Coast", place: "Bangkok & Andaman Coast, Thailand", tag: "Beach & Coastal", duration: "7 Days", cost: "$800-1,100/person", img: "https://images.unsplash.com/photo-1704390529135-742324e6b8f1?w=500&q=80&fm=jpg&fit=crop", alt: "Wat Arun's spire at golden hour, Bangkok, Thailand", country: "Thailand", continent: "Asia", lat: 13.75, lon: 100.50 },
  "sofia.html": { title: "4 Days in Sofia, Bulgaria", place: "Sofia, Bulgaria", tag: "Historic Old Towns", duration: "4 Days", cost: "$450-600/person", img: "https://images.unsplash.com/photo-1641458706911-92b0d6a3d9c3?w=500&q=80&fm=jpg&fit=crop", alt: "Alexander Nevsky Cathedral's golden dome, Sofia, Bulgaria", country: "Bulgaria", continent: "Europe", lat: 42.70, lon: 23.32 },
  "budapest.html": { title: "5 Days in Budapest: Danube, Castle Hill & Thermal Baths", place: "Budapest, Hungary", tag: "Historic Old Towns", duration: "5 Days", cost: "$600-800/person", img: "https://images.unsplash.com/photo-1555958493-1380d49ac1ef?w=500&q=80&fm=jpg&fit=crop", alt: "Hungarian Parliament Building lit up at night on the Danube", country: "Hungary", continent: "Europe", lat: 47.50, lon: 19.04 },
  "prague.html": { title: "4 Days in Prague: Old Town, Castle & the Vltava", place: "Prague, Czech Republic", tag: "Historic Old Towns", duration: "4 Days", cost: "$550-750/person", img: "https://images.unsplash.com/photo-1666687067593-a5a89fd99edd?w=500&q=80&fm=jpg&fit=crop", alt: "Týn Church's Gothic spires over Old Town Square, Prague", country: "Czech Republic", continent: "Europe", lat: 50.09, lon: 14.42 },
  "lapland.html": { title: "5 Days in Finnish Lapland: Rovaniemi & the Arctic Circle", place: "Finnish Lapland", tag: "Lakes & Nature", duration: "5 Days", cost: "$1,800-2,400/person", img: "https://images.unsplash.com/photo-1738189669835-61808a9d5981?w=500&q=80&fm=jpg&fit=crop", alt: "Aurora borealis over a snow-covered forest, Finnish Lapland", country: "Finland", continent: "Europe", lat: 66.50, lon: 25.73 },
  "zermatt.html": { title: "4 Days in Zermatt: Matterhorn Views & Alpine Trails", place: "Zermatt, Switzerland", tag: "Mountain Escapes", duration: "4 Days", cost: "$1,600-2,200/person", img: "https://images.unsplash.com/photo-1571274834067-3a24675547b4?w=500&q=80&fm=jpg&fit=crop", alt: "Zermatt village chalets with the Matterhorn behind them", country: "Switzerland", continent: "Europe", lat: 46.02, lon: 7.75 },
  "shanghai.html": { title: "5 Days in Shanghai: The Bund, Yu Garden & Zhujiajiao", place: "Shanghai, China", tag: "Modern Cities", duration: "5 Days", cost: "$800-1,100/person", img: "https://images.unsplash.com/photo-1527909249915-9ff58d10d4c8?w=500&q=80&fm=jpg&fit=crop", alt: "Pudong skyline with the Oriental Pearl Tower at dusk, viewed from the Bund", country: "China", continent: "Asia", lat: 31.23, lon: 121.47 },
  "strasbourg.html": { title: "4 Days in Strasbourg: Petite France, Cathedral & the Alsace Wine Route", place: "Strasbourg, France", tag: "Historic Old Towns", duration: "4 Days", cost: "$650-850/person", img: "https://images.unsplash.com/photo-1596036986070-e84592a19917?w=500&q=80&fm=jpg&fit=crop", alt: "Half-timbered houses along the canals of Petite France, Strasbourg", country: "France", continent: "Europe", lat: 48.58, lon: 7.75 },
  "kotor.html": { title: "4 Days in Kotor, Montenegro: Old Town, Fortress & Bay", place: "Kotor, Montenegro", tag: "Historic Old Towns", duration: "4 Days", cost: "$600-800/person", img: "https://images.unsplash.com/photo-1641234354133-df0ae680f2db?w=500&q=80&fm=jpg&fit=crop", alt: "Panoramic view of the Bay of Kotor from the fortress walls above the Old Town", country: "Montenegro", continent: "Europe", lat: 42.42, lon: 18.77 },
  "seville.html": { title: "4 Days in Seville: Alcázar, Cathedral & Triana", place: "Seville, Spain", tag: "Historic Old Towns", duration: "4 Days", cost: "$600-800/person", img: "https://images.unsplash.com/photo-1559386081-325882507af7?w=500&q=80&fm=jpg&fit=crop", alt: "Plaza de España's grand semicircular building viewed through an arch", country: "Spain", continent: "Europe", lat: 37.39, lon: -5.99 },
  "zakopane.html": { title: "4 Days in Zakopane: Tatra Peaks & Highland Culture", place: "Zakopane, Poland", tag: "Mountain Escapes", duration: "4 Days", cost: "$500-700/person", img: "https://images.unsplash.com/photo-1618595487779-9e884295dd09?w=500&q=80&fm=jpg&fit=crop", alt: "Traditional wooden hut in a mountain valley beneath the jagged Tatra peaks, Zakopane, Poland", country: "Poland", continent: "Europe", lat: 49.30, lon: 19.95 },
  "chamonix.html": { title: "5 Days in Chamonix: Mont Blanc, Aiguille du Midi & Alpine Villages", place: "Chamonix, France", tag: "Mountain Escapes", duration: "5 Days", cost: "$1,850-2,550/person", img: "https://images.unsplash.com/photo-1520853225856-e87762ef8c55?w=500&q=80&fm=jpg&fit=crop", alt: "Aerial view from the Aiguille du Midi over the Chamonix valley and the snow-covered French Alps", country: "France", continent: "Europe", lat: 45.92, lon: 6.87 },
  "valletta.html": { title: "3 Days in Valletta, Malta: Fortifications, Harbours & Baroque Streets", place: "Valletta, Malta", tag: "Historic Old Towns", duration: "3 Days", cost: "$550-750/person", img: "https://images.unsplash.com/photo-1669294841689-0ceb34ad40c1?w=500&q=80&fm=jpg&fit=crop", alt: "A narrow Valletta street lined with traditional wooden balconies, opening onto the Grand Harbour, Malta", country: "Malta", continent: "Europe", lat: 35.90, lon: 14.51 },
  "grindelwald.html": { title: "4 Days in Grindelwald: Eiger, Jungfraujoch & Alpine Trails", place: "Grindelwald, Switzerland", tag: "Mountain Escapes", duration: "4 Days", cost: "$1,700-2,300/person", img: "https://images.unsplash.com/photo-1567109629107-5345afdcbf9d?w=500&q=80&fm=jpg&fit=crop", alt: "Grindelwald village in a green alpine valley beneath the snow-dusted north face of the Eiger, Switzerland", country: "Switzerland", continent: "Europe", lat: 46.62, lon: 8.03 },
  "canary-islands.html": { title: "7 Days in the Canary Islands: Tenerife's Volcanoes to Lanzarote's Lava Fields", place: "Canary Islands, Spain", tag: "Beach & Coastal", duration: "7 Days", cost: "$1,200-1,600/person", img: "https://images.unsplash.com/photo-1594401708939-49f49fdf596a?w=500&q=80&fm=jpg&fit=crop", alt: "Aerial view of a volcanic Canary island, dark cones rising from an arid coastline surrounded by turquoise Atlantic water", country: "Spain", continent: "Europe", lat: 28.29, lon: -16.63 },
  "edinburgh.html": { title: "4 Days in Edinburgh: Castle, Old Town & the Scottish Highlands Edge", place: "Edinburgh, Scotland", tag: "Historic Old Towns", duration: "4 Days", cost: "$700-900/person", img: "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?w=500&q=80&fm=jpg&fit=crop", alt: "Edinburgh Castle perched dramatically on its volcanic rock outcrop against a blue sky", country: "Scotland", continent: "Europe", lat: 55.95, lon: -3.19 },
  "austrian-alps.html": { title: "5 Days in the Austrian Alps: Innsbruck, Tyrol & Mountain Villages", place: "Austrian Alps, Austria", tag: "Mountain Escapes", duration: "5 Days", cost: "$1,100-1,500/person", img: "https://images.unsplash.com/photo-1621532450828-732396728722?w=500&q=80&fm=jpg&fit=crop", alt: "Jagged limestone peaks of the Austrian Alps rising above a forested mountain slope", country: "Austria", continent: "Europe", lat: 47.26, lon: 11.39 },
  "bansko.html": { title: "4 Days in Bansko: Pirin Peaks & Bulgarian Mountain Culture", place: "Bansko, Bulgaria", tag: "Mountain Escapes", duration: "4 Days", cost: "$450-650/person", img: "https://images.unsplash.com/photo-1720959622076-a2a09dc4afbc?w=500&q=80&fm=jpg&fit=crop", alt: "Aerial view of Bansko's rooftops with the Pirin Mountains rising behind the town at golden hour", country: "Bulgaria", continent: "Europe", lat: 41.84, lon: 23.49 },
  "bruges.html": { title: "3 Days in Bruges: Canals, Belfry & Medieval Streets", place: "Bruges, Belgium", tag: "Historic Old Towns", duration: "3 Days", cost: "$500-700/person", img: "https://images.unsplash.com/photo-1662034602250-0387abdacdf9?w=500&q=80&fm=jpg&fit=crop", alt: "A canal boat gliding past classic Bruges townhouses with the Church of Our Lady's spire in the background", country: "Belgium", continent: "Europe", lat: 51.21, lon: 3.22 },
  "copenhagen.html": { title: "4 Days in Copenhagen: Nyhavn, Design & Nordic Living", place: "Copenhagen, Denmark", tag: "Modern Cities", duration: "4 Days", cost: "$1,350-1,850/person", img: "https://images.unsplash.com/photo-1550682837-891ae070f347?w=500&q=80&fm=jpg&fit=crop", alt: "Colorful townhouses and moored wooden boats along Copenhagen's Nyhavn canal", country: "Denmark", continent: "Europe", lat: 55.68, lon: 12.57 },
  "lauterbrunnen.html": { title: "3 Days in Lauterbrunnen: Waterfalls, Cliffside Villages & the Schilthorn", place: "Lauterbrunnen, Switzerland", tag: "Mountain Escapes", duration: "3 Days", cost: "$1,450-1,950/person", img: "https://images.unsplash.com/photo-1630009574406-a9b21b77c015?w=500&q=80&fm=jpg&fit=crop", alt: "Aerial view of the Lauterbrunnen valley, with the village on the valley floor and Staubbach Falls dropping from the cliffside", country: "Switzerland", continent: "Europe", lat: 46.59, lon: 7.91 },
  "plitvice-lakes.html": { title: "3 Days at Plitvice Lakes: Waterfalls, Turquoise Pools & Boardwalk Trails", place: "Plitvice Lakes, Croatia", tag: "Lakes & Nature", duration: "3 Days", cost: "$450-650/person", img: "https://images.unsplash.com/photo-1589312133722-eab40c686ebb?w=500&q=80&fm=jpg&fit=crop", alt: "Veliki Slap, Plitvice's largest waterfall, cascading into a turquoise pool surrounded by forest", country: "Croatia", continent: "Europe", lat: 44.86, lon: 15.58 },
  "hakone.html": { title: "3 Days in Hakone: Mount Fuji Views, Onsen & Lake Ashi", place: "Hakone, Japan", tag: "Lakes & Nature", duration: "3 Days", cost: "$750-1,050/person", img: "https://images.unsplash.com/photo-1568901002433-5a8ceafe4647?w=500&q=80&fm=jpg&fit=crop", alt: "Hakone Shrine's red torii gate standing in Lake Ashi, with snow-capped Mount Fuji rising in the distance", country: "Japan", continent: "Asia", lat: 35.23, lon: 139.03 },
  "hallstatt.html": { title: "3 Days in Hallstatt: Lakeside Village, Salt Mines & Alpine Views", place: "Hallstatt, Austria", tag: "Lakes & Nature", duration: "3 Days", cost: "$650-850/person", img: "https://images.unsplash.com/photo-1597086831879-756db15e81d3?w=500&q=80&fm=jpg&fit=crop", alt: "Hallstatt's lakeside village with its church spire reflected in Lake Hallstatt, mountains rising behind", country: "Austria", continent: "Europe", lat: 47.56, lon: 13.65 },
  "cortina-dampezzo.html": { title: "4 Days in Cortina d'Ampezzo: Dolomites Peaks & Alpine Luxury", place: "Cortina d'Ampezzo, Italy", tag: "Mountain Escapes", duration: "4 Days", cost: "$1,550-2,050/person", img: "https://images.unsplash.com/photo-1508409941519-8b2340520012?w=500&q=80&fm=jpg&fit=crop", alt: "The Dolomites' enrosadira alpenglow, a mountain peak glowing pink-orange at sunset above a forested ridge", country: "Italy", continent: "Europe", lat: 46.54, lon: 12.14 },
  "bordeaux.html": { title: "4 Days in Bordeaux: Old Town, La Cité du Vin & Saint-Émilion", place: "Bordeaux, France", tag: "Historic Old Towns", duration: "4 Days", cost: "$750-1,000/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bordeaux_place_de_la_bourse_with_tram.JPG/500px-Bordeaux_place_de_la_bourse_with_tram.JPG", alt: "Place de la Bourse and a tram, Bordeaux", country: "France", continent: "Europe", lat: 44.84, lon: -0.58 },
  "st-moritz.html": { title: "4 Days in St. Moritz: Ski Slopes, the Cresta Run & Frozen-Lake Glamour", place: "St. Moritz, Switzerland", tag: "Mountain Escapes", duration: "4 Days", cost: "$1,900-2,600/person", img: "https://images.unsplash.com/photo-1547980562-3c008cd4b769?w=500&q=80&fm=jpg&fit=crop", alt: "Snow-covered chalets in the Engadin valley near St. Moritz, Switzerland, under a clear winter sky", country: "Switzerland", continent: "Europe", lat: 46.50, lon: 9.84 },
  "dolomites.html": { title: "6 Days Through the Dolomites: Alpe di Siusi, Seceda & Mountain Passes", place: "Val Gardena, Italy", tag: "Road Trips & National Parks", duration: "6 Days", cost: "$1,300-1,750/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Odles_da_Sec%C3%ABda_Gherd%C3%ABina.jpg/1280px-Odles_da_Sec%C3%ABda_Gherd%C3%ABina.jpg", alt: "The jagged Geisler-Odle peaks seen from the green Seceda ridge in summer, Val Gardena, Dolomites", country: "Italy", continent: "Europe", lat: 46.57, lon: 11.68 },
  "marrakech.html": { title: "5 Days in Marrakech: Medina Souks, Palaces & the High Atlas", place: "Marrakech, Morocco", tag: "Historic Old Towns", duration: "5 Days", cost: "$600-850/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jemaa_el-Fnaa_%287346166250%29.jpg/500px-Jemaa_el-Fnaa_%287346166250%29.jpg", alt: "Jemaa el-Fnaa square and the Marrakech souks seen from above, Morocco", country: "Morocco", continent: "Africa", lat: 31.63, lon: -7.99 },
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

/* ---------- Currency display (fixed approximate rates, USD is the source of truth) ---------- */
const CURRENCY_KEY = "wanderlist_currency";
const CURRENCIES = {
  USD: { symbol: "$", rate: 1, step: 10 },
  EUR: { symbol: "€", rate: 0.92, step: 10 },
  GBP: { symbol: "£", rate: 0.79, step: 10 },
  JPY: { symbol: "¥", rate: 149, step: 500 },
  CAD: { symbol: "CA$", rate: 1.36, step: 10 },
  AUD: { symbol: "AU$", rate: 1.52, step: 10 },
};

function getCurrency() {
  return CURRENCIES[localStorage.getItem(CURRENCY_KEY)] ? localStorage.getItem(CURRENCY_KEY) : "USD";
}

function convertUsd(usdAmount, code) {
  const { rate, step } = CURRENCIES[code];
  return Math.round((usdAmount * rate) / step) * step;
}

/* ---------- Reviews (Write a Review, persisted to localStorage) ---------- */
const REVIEWS_KEY = "wanderlist_reviews";

function getReviews() {
  try {
    const raw = JSON.parse(localStorage.getItem(REVIEWS_KEY));
    return Array.isArray(raw) ? raw : [];
  } catch (e) {
    return [];
  }
}

function addReview(review) {
  const list = getReviews();
  list.unshift(review);
  try { localStorage.setItem(REVIEWS_KEY, JSON.stringify(list.slice(0, 50))); } catch (e) {}
  return list;
}

/* ---------- Trip-search autocomplete dropdown ----------
   Attaches a dropdown to a text input that lists ONLY trips that
   actually exist on the site (sourced from TRIP_CATALOG). Selecting
   an entry fills the field with that place (it does not navigate away),
   so the rest of the search form (travel style, duration) still applies
   when the user submits. Pass onSelect to react to a pick, e.g. to
   re-run a live filter. */
function attachTripAutocomplete(input, onSelect) {
  if (!input) return;

  const entries = Object.entries(TRIP_CATALOG).sort((a, b) => a[1].place.localeCompare(b[1].place));
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
    currentMatches = q ? entries.filter(([, trip]) => trip.place.toLowerCase().includes(q) || trip.title.toLowerCase().includes(q)) : entries;
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
      item.textContent = trip.place;
      item.addEventListener("mousedown", (e) => {
        e.preventDefault(); // fires before input blur, so the click always registers
        input.value = trip.place;
        close();
        if (onSelect) onSelect(id, trip);
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
      const [id, trip] = currentMatches[activeIndex];
      input.value = trip.place;
      close();
      if (onSelect) onSelect(id, trip);
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
  const lazyImages = document.querySelectorAll(".photo img[data-src], .day-photo img[data-src], .block-photo img[data-src], .related-card img[data-src]");
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
        applyDuration(parseInt(btn.dataset.days, 10));
      });
    });

    note.addEventListener("click", (e) => {
      if (!e.target.hasAttribute("data-show-all")) return;
      durationOptions.querySelectorAll(".duration-btn").forEach((b) => {
        b.classList.toggle("active", parseInt(b.dataset.days, 10) === totalDays);
      });
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

  /* ---------- Currency selector ---------- */
  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect) {
    const costRe = /^(\$+ · )?\$([\d,]+)-([\d,]+)(\/person)?$/;

    const costEls = Array.from(document.querySelectorAll(".trip-card .cost")).concat(
      Array.from(document.querySelectorAll(".meta-item")).filter(
        (item) => item.querySelector(".label")?.textContent.trim() === "Est. Budget"
      ).map((item) => item.querySelector(".value"))
    ).filter(Boolean);

    costEls.forEach((el) => {
      if (el.dataset.usdLow) return;
      const match = el.textContent.trim().match(costRe);
      if (!match) return;
      el.dataset.usdLow = match[2].replace(/,/g, "");
      el.dataset.usdHigh = match[3].replace(/,/g, "");
      el.dataset.tier = match[1] || "";
      el.dataset.suffix = match[4] || "";
    });

    function renderCosts(code) {
      const { symbol } = CURRENCIES[code];
      costEls.forEach((el) => {
        if (!el.dataset.usdLow) return;
        const low = convertUsd(parseInt(el.dataset.usdLow, 10), code).toLocaleString();
        const high = convertUsd(parseInt(el.dataset.usdHigh, 10), code).toLocaleString();
        el.textContent = `${el.dataset.tier}${symbol}${low}-${high}${el.dataset.suffix}`;
      });
    }

    const currencyDropdown = initCustomDropdown(currencySelect, () => {
      localStorage.setItem(CURRENCY_KEY, currencySelect.dataset.value);
      renderCosts(currencySelect.dataset.value);
    });
    currencyDropdown.selectValue(getCurrency());
  }

  /* ---------- Surprise Me (random trip) ---------- */
  const surpriseButtons = document.querySelectorAll(".surprise-me-btn");
  if (surpriseButtons.length) {
    const allTripPages = Object.keys(TRIP_CATALOG);
    surpriseButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const others = allTripPages.filter((page) => page !== currentPageId());
        const pool = others.length ? others : allTripPages;
        window.location.href = pool[Math.floor(Math.random() * pool.length)];
      });
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

  /* ---------- Testimonials: live-loaded from data/reviews.json + locally written reviews ---------- */
  const testimonialGrid = document.getElementById("testimonialGrid");
  if (testimonialGrid) {
    const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
    const REVIEW_AVATAR_COLORS = ["var(--emerald)", "var(--mint-dark)", "var(--emerald-dark)"];

    function reviewCardHtml(r) {
      const rating = Math.round(r.rating || 5);
      const color = r.color || REVIEW_AVATAR_COLORS[(r.author || "").length % REVIEW_AVATAR_COLORS.length];
      const initial = r.initial || (r.author || "?").trim().charAt(0).toUpperCase();
      return `
        <div class="testimonial-card reveal in-view">
          <div class="testimonial-stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>
          <p>"${escapeHtml(r.text)}"</p>
          <div class="testimonial-author">
            <span class="testimonial-avatar" style="background:${escapeHtml(color)}">${escapeHtml(initial)}</span>
            <div><strong>${escapeHtml(r.author)}</strong><span>${escapeHtml(r.trip || "TripToCost traveler")}</span></div>
          </div>
        </div>`;
    }

    // Show any locally written reviews immediately, without waiting on the fetch below.
    testimonialGrid.insertAdjacentHTML("afterbegin", getReviews().map(reviewCardHtml).join(""));

    let lastPayload = "";
    let latestFetchedReviews = null;
    function renderReviews(reviews) {
      latestFetchedReviews = reviews;
      testimonialGrid.innerHTML = getReviews().map(reviewCardHtml).join("") + reviews.map(reviewCardHtml).join("");
    }
    window.wanderListRenderReviews = () => {
      if (latestFetchedReviews) {
        renderReviews(latestFetchedReviews);
      } else {
        testimonialGrid.insertAdjacentHTML("afterbegin", reviewCardHtml(getReviews()[0]));
      }
    };

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

  /* ---------- Custom dropdown (used by the currency selector and the Browse page style/continent filters) ---------- */
  function initCustomDropdown(container, onChange) {
    const btn = container.querySelector(".filter-dropdown-btn");
    const label = container.querySelector(".filter-dropdown-label");
    const list = container.querySelector(".filter-dropdown-list");
    const items = Array.from(container.querySelectorAll("li[role='option']"));

    // Roving tabindex: only one item is ever in the tab order at a time,
    // so Tab moves focus off the whole widget instead of through every option.
    items.forEach((item, i) => item.setAttribute("tabindex", i === 0 ? "0" : "-1"));

    function close({ focusButton = false } = {}) {
      container.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      list.hidden = true;
      if (focusButton) btn.focus();
    }
    function open() {
      container.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      list.hidden = false;
    }

    function focusItem(index) {
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      items.forEach((li, i) => li.setAttribute("tabindex", i === clamped ? "0" : "-1"));
      items[clamped].focus();
    }

    function selectValue(value) {
      const item = items.find((li) => li.dataset.value === value);
      if (!item) return;
      container.dataset.value = value;
      items.forEach((li) => li.setAttribute("aria-selected", String(li === item)));
      label.textContent = item.textContent;
      if (onChange) onChange();
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (container.classList.contains("is-open")) close();
      else open();
    });

    btn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
        const selectedIndex = Math.max(0, items.findIndex((li) => li.getAttribute("aria-selected") === "true"));
        focusItem(selectedIndex);
      }
    });

    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        selectValue(item.dataset.value);
        close({ focusButton: true });
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          focusItem(index + 1);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          focusItem(index - 1);
        } else if (e.key === "Home") {
          e.preventDefault();
          focusItem(0);
        } else if (e.key === "End") {
          e.preventDefault();
          focusItem(items.length - 1);
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectValue(item.dataset.value);
          close({ focusButton: true });
        } else if (e.key === "Escape") {
          e.preventDefault();
          close({ focusButton: true });
        } else if (e.key === "Tab") {
          close();
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!container.contains(e.target)) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && container.classList.contains("is-open") && !container.contains(document.activeElement)) close();
    });

    return { selectValue };
  }

  /* ---------- Browse page: style/continent/search filtering ---------- */
  const browseGrid = document.getElementById("browseGrid");
  if (browseGrid) {
    const styleFilterEl = document.getElementById("styleFilter");
    const continentFilterEl = document.getElementById("continentFilter");
    const searchInput = document.getElementById("searchInput");
    const browseCount = document.getElementById("browseCount");
    const browseEmpty = document.getElementById("browseEmpty");
    const cards = Array.from(browseGrid.querySelectorAll(".trip-card"));

    function applyFilters() {
      const activeStyle = styleFilterEl.dataset.value;
      const activeContinent = continentFilterEl.dataset.value;
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const styles = (card.dataset.style || "").split(" ");
        const name = (card.dataset.name || "").toLowerCase();
        const href = card.querySelector(".trip-meta a")?.getAttribute("href") || "";
        const place = (TRIP_CATALOG[href]?.place || "").toLowerCase();
        const continent = TRIP_CATALOG[href]?.continent || "";

        const matchesStyle = activeStyle === "all" || styles.includes(activeStyle);
        const matchesContinent = activeContinent === "all" || continent === activeContinent;
        const matchesSearch = !query || name.includes(query) || place.includes(query);
        const isMatch = matchesStyle && matchesContinent && matchesSearch;

        card.classList.toggle("is-hidden", !isMatch);
        if (isMatch) visibleCount++;
      });

      browseCount.textContent = `${visibleCount} ${visibleCount === 1 ? "itinerary" : "itineraries"}`;
      browseEmpty.hidden = visibleCount > 0;
    }

    const styleDropdown = initCustomDropdown(styleFilterEl, applyFilters);
    initCustomDropdown(continentFilterEl, applyFilters);
    searchInput.addEventListener("input", applyFilters);
    attachTripAutocomplete(searchInput, () => applyFilters());

    // Deep-link support: browse.html?style=budget pre-selects that option,
    // browse.html?q=paris pre-fills the search box — both combine naturally.
    const params = new URLSearchParams(window.location.search);
    const styleParam = params.get("style");
    const queryParam = params.get("q");

    if (queryParam) searchInput.value = queryParam;
    if (styleParam) styleDropdown.selectValue(styleParam);
    applyFilters();
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
  const contactTopicEl = document.getElementById("contactTopic");
  let contactTopicDropdown;
  if (contactTopicEl) {
    contactTopicDropdown = initCustomDropdown(contactTopicEl, () => {
      contactTopicEl.querySelector('input[type="hidden"]').value = contactTopicEl.dataset.value;
    });
  }
  if (contactForm && contactSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactSuccess.classList.add("show");
      contactForm.reset();
      if (contactTopicDropdown) contactTopicDropdown.selectValue("General question");
    });
  }

  /* ---------- Write a Review ---------- */
  const reviewToggle = document.getElementById("reviewToggle");
  const reviewForm = document.getElementById("reviewForm");
  const reviewSuccess = document.getElementById("reviewSuccess");
  const reviewStars = document.getElementById("reviewStars");

  if (reviewToggle && reviewForm) {
    reviewToggle.addEventListener("click", () => {
      reviewForm.hidden = !reviewForm.hidden;
      reviewToggle.setAttribute("aria-expanded", String(!reviewForm.hidden));
      if (!reviewForm.hidden && reviewSuccess) reviewSuccess.classList.remove("show");
    });
  }

  let setReviewStars = () => {};
  if (reviewStars) {
    const starBtns = Array.from(reviewStars.querySelectorAll(".star-btn"));
    setReviewStars = (n) => {
      reviewStars.dataset.value = n;
      starBtns.forEach((btn) => btn.classList.toggle("is-filled", parseInt(btn.dataset.star, 10) <= n));
    };
    starBtns.forEach((btn) => btn.addEventListener("click", () => setReviewStars(parseInt(btn.dataset.star, 10))));
    setReviewStars(5);
  }

  if (reviewForm && window.wanderListRenderReviews) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reviewName").value.trim();
      const trip = document.getElementById("reviewTrip").value.trim();
      const text = document.getElementById("reviewText").value.trim();
      const rating = parseInt(reviewStars.dataset.value, 10) || 5;
      if (!name || !text) return;

      addReview({ author: name, trip, text, rating });
      window.wanderListRenderReviews();

      reviewForm.reset();
      setReviewStars(5);
      if (reviewSuccess) reviewSuccess.classList.add("show");
      reviewForm.hidden = true;
      reviewToggle.setAttribute("aria-expanded", "false");
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
    weatherItem.innerHTML = '<span class="label">Right Now</span><span class="value temp-hover" id="weatherValue">Loading…</span>';
    metaActions.parentNode.insertBefore(weatherItem, metaActions);

    const weatherValueEl = document.getElementById("weatherValue");
    let tempF = null;
    let weatherIcon = "🌡️";
    let weatherLabel = "Current conditions";

    function renderTemp(unit) {
      if (tempF === null) return;
      const displayTemp = unit === "C" ? Math.round((tempF - 32) * 5 / 9) : tempF;
      weatherValueEl.innerHTML = `${weatherIcon} ${displayTemp}°${unit} <span style="font-size:.7rem;font-weight:500;color:var(--charcoal-soft);display:block;">${weatherLabel}</span>`;
    }

    // Hovering the temperature smoothly cross-fades it from °F to °C; moving
    // the cursor away fades it back. No buttons, just a live hover reveal.
    // Touch devices have no hover state, so they get a tap-to-toggle instead.
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    let currentUnit = "F";

    if (supportsHover) {
      weatherValueEl.addEventListener("mouseenter", () => {
        weatherValueEl.classList.add("is-fading");
        setTimeout(() => {
          renderTemp("C");
          weatherValueEl.classList.remove("is-fading");
        }, 150);
      });
      weatherValueEl.addEventListener("mouseleave", () => {
        weatherValueEl.classList.add("is-fading");
        setTimeout(() => {
          renderTemp("F");
          weatherValueEl.classList.remove("is-fading");
        }, 150);
      });
    } else {
      weatherValueEl.setAttribute("tabindex", "0");
      weatherValueEl.setAttribute("role", "button");
      weatherValueEl.setAttribute("aria-label", "Tap to toggle Fahrenheit and Celsius");
      const toggleUnit = () => {
        currentUnit = currentUnit === "F" ? "C" : "F";
        weatherValueEl.classList.add("is-fading");
        setTimeout(() => {
          renderTemp(currentUnit);
          weatherValueEl.classList.remove("is-fading");
        }, 150);
      };
      weatherValueEl.addEventListener("click", toggleUnit);
      weatherValueEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleUnit();
        }
      });
    }

    fetchDestinationWeather(destInfo.lat, destInfo.lon)
      .then(({ temp, icon, label }) => {
        tempF = temp;
        weatherIcon = icon;
        weatherLabel = label;
        renderTemp("F");
      })
      .catch((err) => {
        console.error("TripToCost weather fetch failed:", err);
        weatherValueEl.textContent = "Unavailable";
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

  /* ---------- Share button ---------- */
  const shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    function flashShareBtn(label) {
      const original = shareBtn.textContent;
      shareBtn.textContent = label;
      shareBtn.disabled = true;
      setTimeout(() => {
        shareBtn.textContent = original;
        shareBtn.disabled = false;
      }, 2000);
    }

    function legacyCopy(text) {
      const input = document.createElement("textarea");
      input.value = text;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.focus();
      input.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        ok = false;
      }
      document.body.removeChild(input);
      return ok;
    }

    shareBtn.addEventListener("click", async () => {
      const shareData = {
        title: document.title,
        text: `Check out this itinerary on TripToCost: ${document.title}`,
        url: window.location.href,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          /* user cancelled the native share sheet — nothing to do */
        }
        return;
      }

      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(shareData.url);
          flashShareBtn("✓ Link Copied");
          return;
        } catch (err) {
          /* fall through to legacy copy */
        }
      }

      flashShareBtn(legacyCopy(shareData.url) ? "✓ Link Copied" : "Copy failed — copy from address bar");
    });
  }

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWanderList);
} else {
  initWanderList();
}
