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
  "tromso.html": { title: "4 Days in Tromsø: Fjellheisen, the Arctic Cathedral & Winter Whale Watching", place: "Tromsø, Norway", tag: "Lakes & Nature", duration: "4 Days", cost: "$1,800-2,400/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Aurora_Borealis_Troms%C3%B8_Norway.jpg/500px-Aurora_Borealis_Troms%C3%B8_Norway.jpg", alt: "The aurora borealis glowing green over Tromsø, Norway, on a clear Arctic winter night", country: "Norway", continent: "Europe", lat: 69.65, lon: 18.96 },
  "stockholm.html": { title: "5 Days in Stockholm: Gamla Stan, the Vasa Museum & the Archipelago", place: "Stockholm, Sweden", tag: "Modern Cities", duration: "5 Days", cost: "$1,000-1,400/person", img: "https://images.unsplash.com/photo-1754408402234-eebbb9f77351?w=500&q=80&fm=jpg&fit=crop", alt: "Colorful waterfront buildings and church spires across the Stockholm skyline in summer", country: "Sweden", continent: "Europe", lat: 59.33, lon: 18.07 },
  "bavaria.html": { title: "6 Days in Bavaria: Castles, Alps & Beer Halls", place: "Bavaria, Germany", tag: "Road Trips & National Parks", duration: "6 Days", cost: "$1,000-1,400/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Neuschwanstein_Castle_2024-02.jpg/500px-Neuschwanstein_Castle_2024-02.jpg", alt: "Neuschwanstein Castle rising above the forest near Füssen, Bavaria", country: "Germany", continent: "Europe", lat: 48.14, lon: 11.58 },
  "zhangye.html": { title: "4 Days in Zhangye: Rainbow Mountains, Silk Road Oasis & Giant Buddha", place: "Zhangye, China", tag: "Lakes & Nature", duration: "4 Days", cost: "$500-700/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Colourful_mountains_of_the_Zhangye_National_Geopark.jpg/500px-Colourful_mountains_of_the_Zhangye_National_Geopark.jpg", alt: "Rippling bands of red, orange, yellow and green sandstone across the Zhangye Danxia National Geopark", country: "China", continent: "Asia", lat: 38.93, lon: 100.45 },
  "lencois-maranhenses.html": { title: "4 Days at Lençóis Maranhenses: White Dunes, Blue Lagoons & the Preguiças River", place: "Lençóis Maranhenses, Brazil", tag: "Lakes & Nature", duration: "4 Days", cost: "$700-950/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lençóis_Maranhenses_-_Lagoa_Azul.JPG/500px-Lençóis_Maranhenses_-_Lagoa_Azul.JPG", alt: "A turquoise freshwater lagoon between rolling white sand dunes at Lençóis Maranhenses National Park, Brazil", country: "Brazil", continent: "South America", lat: -2.75, lon: -42.83 },
  "waitomo.html": { title: "3 Days in Waitomo: Glowworm Caves, Ruakuri Cave & Hobbiton", place: "Waitomo, New Zealand", tag: "Lakes & Nature", duration: "3 Days", cost: "$650-900/person", img: "https://images.unsplash.com/photo-1666072958408-7b63853b46db?w=500&q=80&fm=jpg&fit=crop", alt: "Thousands of tiny blue bioluminescent glow-worms lighting up a dark New Zealand forest", country: "New Zealand", continent: "Oceania", lat: -38.26, lon: 175.10 },
  "cappadocia.html": { title: "4 Days in Cappadocia: Fairy Chimneys, Cave Towns & Sunrise Balloons", place: "Cappadocia, Turkey", tag: "Historic Old Towns", duration: "4 Days", cost: "$600-850/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hot_air_balloon_at_sunrise_over_Cappadocia%2C_Turkey.JPG/500px-Hot_air_balloon_at_sunrise_over_Cappadocia%2C_Turkey.JPG", alt: "Hot air balloons rising at sunrise over the fairy chimneys of Cappadocia, Turkey", country: "Turkey", continent: "Asia", lat: 38.64, lon: 34.83 },
  "milos.html": { title: "4 Days in Milos: Sarakiniko's White Rocks, Klima & the Kleftiko Caves", place: "Milos, Greece", tag: "Beach & Coastal", duration: "4 Days", cost: "$900-1,200/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sarakiniko_Beach_on_Milos_Island%2C_Greece_with_a_view_of_the_Aegean_Sea.jpg/500px-Sarakiniko_Beach_on_Milos_Island%2C_Greece_with_a_view_of_the_Aegean_Sea.jpg", alt: "The white volcanic rock coastline of Sarakiniko Beach, Milos, Greece", country: "Greece", continent: "Europe", lat: 36.69, lon: 24.44 },
  "mykonos.html": { title: "5 Days in Mykonos: Windmills, Beach Clubs & Delos", place: "Mykonos, Greece", tag: "Beach & Coastal", duration: "5 Days", cost: "$1,100-1,500/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Windmills_of_Kato_Mili%2C_Mykonos_%2839171204142%29.jpg/500px-Windmills_of_Kato_Mili%2C_Mykonos_%2839171204142%29.jpg", alt: "Windmills of Kato Mili overlooking the sea, Mykonos, Greece", country: "Greece", continent: "Europe", lat: 37.45, lon: 25.33 },
  "crete.html": { title: "6 Days in Crete, Greece: Knossos, the Samaria Gorge & Balos Lagoon", place: "Crete, Greece", tag: "Beach & Coastal", duration: "6 Days", cost: "$850-1,150/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Aerial_view_of_Balos_Lagoon_on_the_island_of_Crete%2C_Greece.jpg/500px-Aerial_view_of_Balos_Lagoon_on_the_island_of_Crete%2C_Greece.jpg", alt: "Aerial view of Balos Lagoon's turquoise water and sandbar, Crete, Greece", country: "Greece", continent: "Europe", lat: 35.34, lon: 25.13 },
  "abisko.html": { title: "4 Days in Abisko, Sweden: Northern Lights & Arctic Wilderness", place: "Abisko, Sweden", tag: "Lakes & Nature", duration: "4 Days", cost: "$1,400-1,900/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Aurora_in_Abisko_National_Park.jpg/500px-Aurora_in_Abisko_National_Park.jpg", alt: "The aurora borealis glowing green over Abisko National Park, Sweden", country: "Sweden", continent: "Europe", lat: 68.35, lon: 18.83 },
  "annecy.html": { title: "4 Days in Annecy: Canals, Lake Swims & Alpine Paragliding", place: "Annecy, France", tag: "Lakes & Nature", duration: "4 Days", cost: "$700-950/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Annecy_Palais_de_l%27%C3%8Ele_04.jpg/500px-Annecy_Palais_de_l%27%C3%8Ele_04.jpg", alt: "Annecy's Palais de l'Île surrounded by the canal, France", country: "France", continent: "Europe", lat: 45.90, lon: 6.13 },
  "bangkok-phuket.html": { title: "6 Days in Thailand: Bangkok & Phuket Island", place: "Bangkok & Phuket, Thailand", tag: "Beach & Coastal", duration: "6 Days", cost: "$750-1,050/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Big_Buddha%2C_Phuket.jpg/500px-The_Big_Buddha%2C_Phuket.jpg", alt: "The Big Buddha statue overlooking Phuket, Thailand", country: "Thailand", continent: "Asia", lat: 7.88, lon: 98.39 },
  "colmar.html": { title: "4 Days in Colmar: Christmas Markets & the Alsace Wine Route", place: "Colmar, France", tag: "Historic Old Towns", duration: "4 Days", cost: "$750-1,000/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/March%C3%A9_de_No%C3%ABl_de_Colmar_013.jpg/500px-March%C3%A9_de_No%C3%ABl_de_Colmar_013.jpg", alt: "Colmar's Christmas market lit up at night, Alsace, France", country: "France", continent: "Europe", lat: 48.08, lon: 7.36 },
  "dublin.html": { title: "4 Days in Dublin: Trinity College, Guinness & the Wicklow Mountains", place: "Dublin, Ireland", tag: "Historic Old Towns", duration: "4 Days", cost: "$850-1,150/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ha%27penny_Bridge_in_Dublin.jpg/500px-Ha%27penny_Bridge_in_Dublin.jpg", alt: "The Ha'penny Bridge crossing the River Liffey, Dublin, Ireland", country: "Ireland", continent: "Europe", lat: 53.35, lon: -6.26 },
  "iceland.html": { title: "5 Days in Iceland: Golden Circle, South Coast & the Northern Lights", place: "Iceland", tag: "Road Trips & National Parks", duration: "5 Days", cost: "$1,600-2,200/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Aurora_over_the_Sun_Voyager%2C_Central_Reykjavik_%2837291306216%29.jpg/500px-Aurora_over_the_Sun_Voyager%2C_Central_Reykjavik_%2837291306216%29.jpg", alt: "The aurora borealis over the Sun Voyager sculpture, Reykjavik, Iceland", country: "Iceland", continent: "Europe", lat: 64.13, lon: -21.90 },
  "interlaken.html": { title: "4 Days in Interlaken: Paragliding, Harder Kulm & Two Alpine Lakes", place: "Interlaken, Switzerland", tag: "Mountain Escapes", duration: "4 Days", cost: "$1,500-2,000/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paragliding_Interlaken_-_Switzerland_%28Unsplash%29.jpg/500px-Paragliding_Interlaken_-_Switzerland_%28Unsplash%29.jpg", alt: "A paraglider soaring above Interlaken, Switzerland", country: "Switzerland", continent: "Europe", lat: 46.69, lon: 7.87 },
  "krakow.html": { title: "4 Days in Krakow: Old Town, Wawel & Auschwitz-Birkenau", place: "Krakow, Poland", tag: "Historic Old Towns", duration: "4 Days", cost: "$500-700/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Krakow_Rynek_Glowny_panorama_2.jpg/500px-Krakow_Rynek_Glowny_panorama_2.jpg", alt: "Kraków's Rynek Główny market square panorama, Poland", country: "Poland", continent: "Europe", lat: 50.06, lon: 19.94 },
  "lofoten.html": { title: "5 Days in the Lofoten Islands: Reinebringen, Reine & the Midnight Sun", place: "Lofoten Islands, Norway", tag: "Road Trips & National Parks", duration: "5 Days", cost: "$1,600-2,200/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Moskenes_Reinebringen_lub_2025-07-21_img04_Aussicht.jpg/500px-Moskenes_Reinebringen_lub_2025-07-21_img04_Aussicht.jpg", alt: "The view from Reinebringen over the Lofoten Islands, Norway", country: "Norway", continent: "Europe", lat: 68.15, lon: 13.61 },
  "london.html": { title: "5 Days in London: Royals, the River & the West End", place: "London, England", tag: "Modern Cities", duration: "5 Days", cost: "$1,000-1,400/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tower_Bridge-London%2C_England%2C_United_Kingdom.jpg/500px-Tower_Bridge-London%2C_England%2C_United_Kingdom.jpg", alt: "Tower Bridge over the River Thames, London, England", country: "England", continent: "Europe", lat: 51.51, lon: -0.13 },
  "puglia.html": { title: "6 Days in Puglia: A Self-Drive Road Trip Through Italy's Heel", place: "Puglia, Italy", tag: "Road Trips & National Parks", duration: "6 Days", cost: "$1,000-1,350/person", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Ostuni%20-%20View%20from%20Northwest%20-%201.jpg?width=500", alt: "Ostuni's whitewashed hilltop old town, Puglia, Italy", country: "Italy", continent: "Europe", lat: 40.73, lon: 17.58 },
  "salzburg.html": { title: "4 Days in Salzburg: Old Town, Hohensalzburg Fortress & Wolfgangsee", place: "Salzburg, Austria", tag: "Historic Old Towns", duration: "4 Days", cost: "$750-1,000/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Old_Town_Salzburg_across_the_Salzach_river.jpg/500px-Old_Town_Salzburg_across_the_Salzach_river.jpg", alt: "Salzburg's Old Town across the Salzach river, Austria", country: "Austria", continent: "Europe", lat: 47.80, lon: 13.04 },
  "seoul.html": { title: "5 Days in Seoul: Palaces, Markets & Neon Nights", place: "Seoul, South Korea", tag: "Modern Cities", duration: "5 Days", cost: "$800-1,100/person", img: "https://images.unsplash.com/photo-1758384077399-2757a1de8b75?w=500&q=80&fm=jpg&fit=crop", alt: "Seoul's palace rooftops against the modern skyline, South Korea", country: "South Korea", continent: "Asia", lat: 37.57, lon: 126.98 },
  "tenerife.html": { title: "5 Days in Tenerife: Resort Beaches, Water Parks & Mount Teide by Starlight", place: "Tenerife, Spain", tag: "Beach & Coastal", duration: "5 Days", cost: "$700-950/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Aerial_view_of_Playa_de_Torviscas_beach_in_Costa_Adeje_on_Tenerife%2C_Spain_%2848225530037%29.jpg/500px-Aerial_view_of_Playa_de_Torviscas_beach_in_Costa_Adeje_on_Tenerife%2C_Spain_%2848225530037%29.jpg", alt: "Aerial view of Playa de Torviscas beach, Costa Adeje, Tenerife, Spain", country: "Spain", continent: "Europe", lat: 28.09, lon: -16.74 },
  "mount-fuji.html": { title: "4 Days in Mount Fuji: Fuji Five Lakes, Chureito Pagoda & Kawaguchiko", place: "Fuji Five Lakes, Japan", tag: "Lakes & Nature", duration: "4 Days", cost: "$700-950/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Chureito_Pagoda_and_Mount_Fuji_2023-03-07.jpg/500px-Chureito_Pagoda_and_Mount_Fuji_2023-03-07.jpg", alt: "The red Chureito Pagoda framed against snow-capped Mount Fuji", country: "Japan", continent: "Asia", lat: 35.50, lon: 138.76 },
  "valensole.html": { title: "4 Days in Valensole: A Provence Lavender Fields Road Trip", place: "Valensole, France", tag: "Road Trips & National Parks", duration: "4 Days", cost: "$900-1,200/person", img: "https://images.unsplash.com/photo-1733691217961-14e808e67a65?w=500&q=80&fm=jpg&fit=crop", alt: "Lavender rows leading toward two trees at sunset on the Plateau de Valensole, Provence", country: "France", continent: "Europe", lat: 43.84, lon: 5.99 },
  "salar-de-uyuni.html": { title: "4 Days at Salar de Uyuni: Mirror Reflections, Incahuasi Island & the Colored Lagoons", place: "Salar de Uyuni, Bolivia", tag: "Lakes & Nature", duration: "4 Days", cost: "$600-850/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Before_Sunrise_at_the_Salar_of_Uyuni%2C_Bolivia.jpg/500px-Before_Sunrise_at_the_Salar_of_Uyuni%2C_Bolivia.jpg", alt: "A perfectly mirrored pre-dawn sky reflected on the flooded surface of the Salar de Uyuni salt flat, Bolivia", country: "Bolivia", continent: "South America", lat: -20.46, lon: -66.83 },
  "vatnajokull.html": { title: "4 Days in the Vatnajökull Glacier Region: Blue Ice Caves & Jökulsárlón", place: "Vatnajökull, Iceland", tag: "Lakes & Nature", duration: "4 Days", cost: "$1,700-2,300/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ice_Cave_Explorer_-_Iceland.jpg/500px-Ice_Cave_Explorer_-_Iceland.jpg", alt: "A guide exploring the glowing blue interior of a natural ice cave inside Vatnajokull glacier, Iceland", country: "Iceland", continent: "Europe", lat: 64.25, lon: -15.21 },
  "tallinn.html": { title: "4 Days in Tallinn: Old Town, Toompea & Kalamaja", place: "Tallinn, Estonia", tag: "Historic Old Towns", duration: "4 Days", cost: "$550-750/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Tallinn_Old_Town_Skyline_%2852432521369%29.jpg/500px-Tallinn_Old_Town_Skyline_%2852432521369%29.jpg", alt: "Panoramic skyline of Tallinn's medieval Old Town, with Toompea Hill's spires rising above red-tiled roofs", country: "Estonia", continent: "Europe", lat: 59.44, lon: 24.75 },
  "megeve.html": { title: "4 Days in Megève: Gentle Slopes, Gourmet Dining & Sleigh Rides", place: "Megève, France", tag: "Mountain Escapes", duration: "4 Days", cost: "$1,900-2,600/person", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wide_view_of_Meg%C3%A8ve%2C_Mont_Joly_and_the_Mont_Blanc_massif_from_the_Dames_slopes%2C_Meg%C3%A8ve%2C_2025.jpg/500px-Wide_view_of_Meg%C3%A8ve%2C_Mont_Joly_and_the_Mont_Blanc_massif_from_the_Dames_slopes%2C_Meg%C3%A8ve%2C_2025.jpg", alt: "Panoramic winter view of Megève village and the Mont Blanc massif from the Dames ski slopes", country: "France", continent: "Europe", lat: 45.86, lon: 6.62 },
};

/* ---------- Day-level search index: lets search surface a specific landmark buried
   inside another destination's itinerary (e.g. searching "Ruakuri Cave" finds
   Waitomo Day 2), not just top-level destination names. ---------- */
const DAY_INDEX = [
  { page: "itinerary.html", day: 1, title: "Arrival & Shibuya Nights", text: "Arrival & Shibuya Nights · Arrive at Narita/Haneda & transfer to hotel · Light exploration around Shinjuku · Shibuya Crossing & izakaya dinner", place: "Tokyo & Kyoto, Japan" },
  { page: "itinerary.html", day: 2, title: "Old Tokyo: Asakusa & Ueno", text: "Old Tokyo: Asakusa & Ueno · Senso-ji Temple, early · Ueno Park & museums · Yanaka Ginza sunset stroll", place: "Tokyo & Kyoto, Japan" },
  { page: "itinerary.html", day: 3, title: "Tsukiji, teamLab & Odaiba", text: "Tsukiji, teamLab & Odaiba · Tsukiji Outer Market breakfast · teamLab Planets digital art museum · Odaiba waterfront & Rainbow Bridge view", place: "Tokyo & Kyoto, Japan" },
  { page: "itinerary.html", day: 4, title: "Bullet Train to Kyoto", text: "Bullet Train to Kyoto · Shinkansen from Tokyo to Kyoto · Check in & explore Nishiki Market · Pontocho Alley dinner", place: "Tokyo & Kyoto, Japan" },
  { page: "itinerary.html", day: 5, title: "Fushimi Inari & Southern Higashiyama", text: "Fushimi Inari & Southern Higashiyama · Fushimi Inari Shrine at sunrise · Kiyomizu-dera & Sannenzaka lanes · Gion district lantern walk", place: "Tokyo & Kyoto, Japan" },
  { page: "itinerary.html", day: 6, title: "Arashiyama & Hidden Kyoto", text: "Arashiyama & Hidden Kyoto · Arashiyama Bamboo Grove, early · Ohara Village hidden gem · Local sake bar in Kiyamachi", place: "Tokyo & Kyoto, Japan" },
  { page: "itinerary.html", day: 7, title: "Last Temple, Last Sweets, Departure", text: "Last Temple, Last Sweets, Departure · Ginkaku-ji & Philosopher's Path · Last-minute souvenirs & matcha sweets · Shinkansen back to Tokyo & departure", place: "Tokyo & Kyoto, Japan" },
  { page: "amalfi-coast.html", day: 1, title: "Arrival & First Sunset in Positano", text: "Arrival & First Sunset in Positano · Naples airport & transfer to Sorrento · Settle in & explore Sorrento's old town · Ferry to Positano for golden hour", place: "Amalfi Coast, Italy" },
  { page: "amalfi-coast.html", day: 2, title: "Path of the Gods Hike", text: "Path of the Gods Hike · SITA bus to Bomerano · Sentiero degli Dei to Nocelle · Bus back to Sorrento", place: "Amalfi Coast, Italy" },
  { page: "amalfi-coast.html", day: 3, title: "Amalfi Town & the Duomo", text: "Amalfi Town & the Duomo · Ferry to Amalfi town · Duomo di Sant'Andrea & Valle delle Ferriere · Budget trattoria dinner", place: "Amalfi Coast, Italy" },
  { page: "amalfi-coast.html", day: 4, title: "Ravello's Gardens", text: "Ravello's Gardens · Bus up to Ravello · Villa Rufolo & Villa Cimbrone · Sunset from the town square", place: "Amalfi Coast, Italy" },
  { page: "amalfi-coast.html", day: 5, title: "Capri on a Day Ferry", text: "Capri on a Day Ferry · Early ferry from Sorrento · Marina Grande & the Faraglioni · Last ferry back to Sorrento", place: "Amalfi Coast, Italy" },
  { page: "amalfi-coast.html", day: 6, title: "Fiordo di Furore & a Slow Beach Day", text: "Fiordo di Furore & a Slow Beach Day · Bus to Furore · Marina di Praia · Home-style dinner in Sorrento", place: "Amalfi Coast, Italy" },
  { page: "amalfi-coast.html", day: 7, title: "Lemon Groves & Departure", text: "Lemon Groves & Departure · Family-run limoncello tasting · Last walk & souvenir shopping · Transfer to Naples for departure", place: "Amalfi Coast, Italy" },
  { page: "utah-national-parks.html", day: 1, title: "Fly In & Into Zion", text: "Fly In & Into Zion · Land in Las Vegas & pick up rental car · Zion Canyon Visitor Center & shuttle · Riverside Walk & sunset at Canyon Junction Bridge", place: "Utah, USA" },
  { page: "utah-national-parks.html", day: 2, title: "Zion: Angels Landing & The Narrows", text: "Zion: Angels Landing & The Narrows · Angels Landing (permit required) · The Narrows · Casual dinner in Springdale", place: "Utah, USA" },
  { page: "utah-national-parks.html", day: 3, title: "Drive to Bryce Canyon", text: "Drive to Bryce Canyon · Zion–Mt. Carmel Highway · Bryce Canyon Rim Trail · Sunset at Inspiration Point", place: "Utah, USA" },
  { page: "utah-national-parks.html", day: 4, title: "Bryce Sunrise & Drive to Moab", text: "Bryce Sunrise & Drive to Moab · Sunrise at Bryce Point · Scenic drive to Moab · Arrive in Moab", place: "Utah, USA" },
  { page: "utah-national-parks.html", day: 5, title: "Arches National Park", text: "Arches National Park · Early entry & Delicate Arch hike · Devils Garden & the Windows Section · Sunset at Balanced Rock", place: "Utah, USA" },
  { page: "utah-national-parks.html", day: 6, title: "Canyonlands: Island in the Sky", text: "Canyonlands: Island in the Sky · Mesa Arch at sunrise · Grand View Point & Green River Overlook · Optional river rafting or jeep trail", place: "Utah, USA" },
  { page: "utah-national-parks.html", day: 7, title: "Moab Morning & Departure", text: "Moab Morning & Departure · Easy trail or bike rental · Scenic drive back · Return rental car & fly home", place: "Utah, USA" },
  { page: "lisbon.html", day: 1, title: "Arrival & Baixa Orientation", text: "Arrival & Baixa Orientation · Arrive & transfer into Baixa · Praça do Comércio & Rua Augusta Arch · Sunset at Miradouro de Santa Catarina", place: "Lisbon, Portugal" },
  { page: "lisbon.html", day: 2, title: "Alfama & Fado Night", text: "Alfama & Fado Night · Wander Alfama's lanes & São Jorge Castle · National Pantheon & Feira da Ladra · Traditional fado dinner", place: "Lisbon, Portugal" },
  { page: "lisbon.html", day: 3, title: "Belém: Towers, Monasteries & Pastéis", text: "Belém: Towers, Monasteries & Pastéis · Jerónimos Monastery & Belém Tower · Pastéis de Belém, still warm · MAAT museum & riverside sunset", place: "Lisbon, Portugal" },
  { page: "lisbon.html", day: 4, title: "Day Trip to Sintra", text: "Day Trip to Sintra · Early train to Sintra · Pena Palace & Quinta da Regaleira · Train back & quiet dinner near Rossio", place: "Lisbon, Portugal" },
  { page: "lisbon.html", day: 5, title: "Tram 28 & Bairro Alto", text: "Tram 28 & Bairro Alto · Ride Tram 28 end to end · Chiado & Livraria Bertrand · Bairro Alto bar-hopping", place: "Lisbon, Portugal" },
  { page: "lisbon.html", day: 6, title: "Cascais Coastal Day Trip", text: "Cascais Coastal Day Trip · Train along the coast to Cascais · Boca do Inferno & the old town marina · Seafood dinner & train back", place: "Lisbon, Portugal" },
  { page: "lisbon.html", day: 7, title: "Markets & Departure", text: "Markets & Departure · Time Out Market breakfast · Last souvenir shopping in Baixa · Transfer to the airport", place: "Lisbon, Portugal" },
  { page: "banff.html", day: 1, title: "Arrival & Banff Townsite", text: "Arrival & Banff Townsite · Calgary airport & transfer to Banff · Check in & explore Banff Avenue · Spa evening & welcome dinner", place: "Banff, Canada" },
  { page: "banff.html", day: 2, title: "Lake Louise", text: "Lake Louise · Canoe on Lake Louise · Afternoon tea at Fairmont Chateau Lake Louise · Sunset walk along the lakeshore trail", place: "Banff, Canada" },
  { page: "banff.html", day: 3, title: "Moraine Lake & the Banff Gondola", text: "Moraine Lake & the Banff Gondola · Moraine Lake at sunrise · Rest & spa time back in Banff · Banff Gondola at sunset", place: "Banff, Canada" },
  { page: "banff.html", day: 4, title: "Icefields Parkway", text: "Icefields Parkway · Drive the Icefields Parkway north · Columbia Icefield · Drive back to Banff", place: "Banff, Canada" },
  { page: "banff.html", day: 5, title: "Peyto Lake & Bow Lake", text: "Peyto Lake & Bow Lake · Peyto Lake viewpoint · Bow Lake & Bow Glacier Falls · Relaxed dinner back in Banff", place: "Banff, Canada" },
  { page: "banff.html", day: 6, title: "Emerald Lake & Johnston Canyon", text: "Emerald Lake & Johnston Canyon · Canoe on Emerald Lake · Johnston Canyon hike · Final dinner in Banff", place: "Banff, Canada" },
  { page: "banff.html", day: 7, title: "Fairmont Spa Day & Departure", text: "Fairmont Spa Day & Departure · Spa morning at the Fairmont Banff Springs · Last souvenir shopping in Banff · Transfer to Calgary for departure", place: "Banff, Canada" },
  { page: "bali.html", day: 1, title: "Arrival & Welcome to Ubud", text: "Arrival & Welcome to Ubud · Denpasar airport & transfer to Ubud · Check in & ease into the pace · Welcome yoga session", place: "Bali, Indonesia" },
  { page: "bali.html", day: 2, title: "Rice Terraces & the Local Market", text: "Rice Terraces & the Local Market · Tegallalang Rice Terrace · Ubud Traditional Market · Solo dinner & a traditional dance show", place: "Bali, Indonesia" },
  { page: "bali.html", day: 3, title: "Sacred Monkey Forest & Water Purification", text: "Sacred Monkey Forest & Water Purification · Sacred Monkey Forest Sanctuary · Tirta Empul water purification · Quiet dinner & early night", place: "Bali, Indonesia" },
  { page: "bali.html", day: 4, title: "Uluwatu Temple", text: "Uluwatu Temple · Drive south to the Bukit Peninsula · Uluwatu Temple clifftop walk · Kecak fire dance at sunset", place: "Bali, Indonesia" },
  { page: "bali.html", day: 5, title: "Seminyak", text: "Seminyak · Transfer to Seminyak · Beach time & a proper spa massage · Sunset at a beach club", place: "Bali, Indonesia" },
  { page: "bali.html", day: 6, title: "Nusa Penida Day Trip", text: "Nusa Penida Day Trip · Fast boat to Nusa Penida · Kelingking Beach & Broken Bay · Return boat to Bali", place: "Bali, Indonesia" },
  { page: "bali.html", day: 7, title: "Kuta Beach & Departure", text: "Kuta Beach & Departure · Sunrise walk on Kuta Beach · Last-minute souvenirs · Transfer to Denpasar airport", place: "Bali, Indonesia" },
  { page: "paris.html", day: 1, title: "The Eiffel Tower & the Seine", text: "The Eiffel Tower & the Seine · Arrive & check in near Le Marais · Eiffel Tower summit & Champ de Mars · Seine river cruise at sunset", place: "Paris, France" },
  { page: "paris.html", day: 2, title: "The Louvre & Notre-Dame", text: "The Louvre & Notre-Dame · The Louvre, skip-the-line entry · Île de la Cité & Notre-Dame exterior · Dinner in Le Marais", place: "Paris, France" },
  { page: "paris.html", day: 3, title: "Montmartre & Departure", text: "Montmartre & Departure · Sacré-Cœur & Montmartre · Last café & shopping · Transfer to the airport", place: "Paris, France" },
  { page: "new-york-city.html", day: 1, title: "Midtown & Central Park", text: "Midtown & Central Park · Times Square & Top of the Rock · Central Park & a museum · Broadway show", place: "New York City, USA" },
  { page: "new-york-city.html", day: 2, title: "Downtown & the Statue of Liberty", text: "Downtown & the Statue of Liberty · Staten Island Ferry · Brooklyn Bridge walk & DUMBO · Rooftop sunset & departure", place: "New York City, USA" },
  { page: "barcelona.html", day: 1, title: "Sagrada Família & Eixample", text: "Sagrada Família & Eixample · Sagrada Família, timed entry · Casa Batlló & Passeig de Gràcia · Tapas dinner in Eixample", place: "Barcelona, Spain" },
  { page: "barcelona.html", day: 2, title: "Gothic Quarter & the Beach", text: "Gothic Quarter & the Beach · Gothic Quarter & the Cathedral · Barceloneta Beach · Sunset at Bunkers del Carmel", place: "Barcelona, Spain" },
  { page: "barcelona.html", day: 3, title: "Park Güell & La Rambla", text: "Park Güell & La Rambla · Park Güell, timed entry · La Rambla & La Boqueria Market · Transfer to the airport", place: "Barcelona, Spain" },
  { page: "athens.html", day: 1, title: "Arrival & Plaka", text: "Arrival & Plaka · Athens airport transfer & check-in · Wander Plaka's lanes · First Acropolis view at sunset", place: "Athens, Greece" },
  { page: "athens.html", day: 2, title: "Acropolis, Museum & the Ancient Agora", text: "Acropolis, Museum & the Ancient Agora · Acropolis & the Parthenon · Acropolis Museum · Ancient Agora at golden hour", place: "Athens, Greece" },
  { page: "athens.html", day: 3, title: "Museum, Flea Market & Psiri", text: "Museum, Flea Market & Psiri · National Archaeological Museum · Monastiraki flea market · Dinner in Psiri", place: "Athens, Greece" },
  { page: "athens.html", day: 4, title: "Cape Sounion Day Trip", text: "Cape Sounion Day Trip · Sleep in, then head for the coast road · Beach time near Sounion · Temple of Poseidon at sunset", place: "Athens, Greece" },
  { page: "athens.html", day: 5, title: "Delphi Day Trip", text: "Delphi Day Trip · Drive into the mountains · Sanctuary of Apollo & the Oracle's temple · Delphi Archaeological Museum & return drive", place: "Athens, Greece" },
  { page: "athens.html", day: 6, title: "Hydra Island Day Trip", text: "Hydra Island Day Trip · Ferry from Piraeus to Hydra · Harbor town & a swim off the rocks · Seafood dinner before the last ferry", place: "Athens, Greece" },
  { page: "athens.html", day: 7, title: "Syntagma Square & Departure", text: "Syntagma Square & Departure · Changing of the Guard, Syntagma Square · Last-minute shopping & a light lunch · Rooftop bar view, then airport transfer", place: "Athens, Greece" },
  { page: "nice.html", day: 1, title: "Arrival & Vieux Nice", text: "Arrival & Vieux Nice · Arrival at Nice Côte d'Azur Airport · Vieux Nice & Cours Saleya Market · First sunset walk on the Promenade des Anglais", place: "Nice, France" },
  { page: "nice.html", day: 2, title: "Castle Hill & the Baie des Anges", text: "Castle Hill & the Baie des Anges · Colline du Château viewpoint · Beach afternoon on the Baie des Anges · Matisse Museum or Chagall Museum", place: "Nice, France" },
  { page: "nice.html", day: 3, title: "Èze, the Eagle's Nest Village", text: "Èze, the Eagle's Nest Village · Train & shuttle up to Èze village · Jardin d'Èze exotic garden · Clifftop dinner in Èze or back in Nice", place: "Nice, France" },
  { page: "nice.html", day: 4, title: "Monaco & Monte Carlo", text: "Monaco & Monte Carlo · Train to Monaco-Monte Carlo & the Prince's Palace · Oceanographic Museum of Monaco · Monte Carlo Casino exterior & Café de Paris", place: "Nice, France" },
  { page: "nice.html", day: 5, title: "Antibes & Saint-Paul de Vence", text: "Antibes & Saint-Paul de Vence · Antibes old town ramparts · Picasso Museum, Antibes · Saint-Paul de Vence art village", place: "Nice, France" },
  { page: "nice.html", day: 6, title: "Cannes", text: "Cannes · Train to Cannes & La Croisette · Le Suquet old town & Marché Forville · Sunset drinks on La Croisette", place: "Nice, France" },
  { page: "nice.html", day: 7, title: "Last Morning in Nice & Departure", text: "Last Morning in Nice & Departure · Bike ride along the Promenade des Anglais · Last-minute shopping on Rue de France · Transfer to Nice Côte d'Azur Airport", place: "Nice, France" },
  { page: "milano.html", day: 1, title: "Arrival & Piazza del Duomo", text: "Arrival & Piazza del Duomo · Arrival & check-in near the city center · First look at Piazza del Duomo · Evening aperitivo near the Duomo", place: "Milan, Italy" },
  { page: "milano.html", day: 2, title: "Galleria Vittorio Emanuele II & Sforza Castle", text: "Galleria Vittorio Emanuele II & Sforza Castle · Galleria Vittorio Emanuele II · Quadrilatero della Moda shopping district · Castello Sforzesco & Parco Sempione", place: "Milan, Italy" },
  { page: "milano.html", day: 3, title: "Navigli Canal District", text: "Navigli Canal District · Daytime walk along the Naviglio Grande · Aperitivo culture along the water · Evening along the canals", place: "Milan, Italy" },
  { page: "milano.html", day: 4, title: "Brera & a Final Duomo Rooftop", text: "Brera & a Final Duomo Rooftop · Pinacoteca di Brera & the antique quarter · Final visit to the Duomo rooftop terraces · Transfer to Malpensa or Linate for departure", place: "Milan, Italy" },
  { page: "toscana.html", day: 1, title: "Arrival & Into the Val d'Orcia", text: "Arrival & Into the Val d'Orcia · Land in Florence or Pisa & pick up the rental car · Check into an agriturismo near Siena · First cypress-road sunset drive", place: "Tuscany, Italy" },
  { page: "toscana.html", day: 2, title: "Florence", text: "Florence · Drive in & the Duomo · Uffizi Gallery · Ponte Vecchio & dinner in Oltrarno", place: "Tuscany, Italy" },
  { page: "toscana.html", day: 3, title: "Siena", text: "Siena · Piazza del Campo · Siena Duomo · Torre del Mangia & a contrada Palio museum", place: "Tuscany, Italy" },
  { page: "toscana.html", day: 4, title: "San Gimignano & Chianti", text: "San Gimignano & Chianti · San Gimignano's medieval towers · Chianti wine estate tasting · Dinner in a Chianti hill town", place: "Tuscany, Italy" },
  { page: "toscana.html", day: 5, title: "Val d'Orcia Scenic Drive", text: "Val d'Orcia Scenic Drive · Pienza, the Renaissance \"ideal city\" · Montepulciano & a Vino Nobile cellar · Cypress-road photography at golden hour", place: "Tuscany, Italy" },
  { page: "toscana.html", day: 6, title: "Pisa & Departure", text: "Pisa & Departure · Drive to Pisa & climb the Leaning Tower · Piazza dei Miracoli, Duomo & Baptistery · Return the rental car & fly out", place: "Tuscany, Italy" },
  { page: "madeira.html", day: 1, title: "Arrival in Funchal", text: "Arrival in Funchal · Arrival at Madeira Airport & transfer to Funchal · Check in & wander the Zona Velha · First dinner & a poncha tasting", place: "Madeira, Portugal" },
  { page: "madeira.html", day: 2, title: "Funchal's Gardens, Market & the Monte Toboggan", text: "Funchal's Gardens, Market & the Monte Toboggan · Mercado dos Lavradores · Cable car to Monte & the Tropical Garden · Wicker toboggan ride down to Livramento", place: "Madeira, Portugal" },
  { page: "madeira.html", day: 3, title: "A Levada Walk Through the Laurel Forest", text: "A Levada Walk Through the Laurel Forest · Transfer to Rabaçal · Levada das 25 Fontes hike · Return via Ribeira Brava", place: "Madeira, Portugal" },
  { page: "madeira.html", day: 4, title: "Pico do Arieiro to Pico Ruivo", text: "Pico do Arieiro to Pico Ruivo · Pre-dawn drive to Pico do Arieiro · PR1 trail to Pico Ruivo · Pickup at Achada do Teixeira & return to Funchal", place: "Madeira, Portugal" },
  { page: "madeira.html", day: 5, title: "North Coast: Cabo Girão & Porto Moniz", text: "North Coast: Cabo Girão & Porto Moniz · Cabo Girão skywalk · Porto Moniz natural swimming pools · Transfer to Madeira Airport & departure", place: "Madeira, Portugal" },
  { page: "thailand.html", day: 1, title: "Arrival in Bangkok & Wat Arun at Sunset", text: "Arrival in Bangkok & Wat Arun at Sunset · Land at Suvarnabhumi & transfer to the riverside · Check in & a first ride on the Chao Phraya Express Boat · Wat Arun, the Temple of Dawn, lit at sunset", place: "Bangkok & Andaman Coast, Thailand" },
  { page: "thailand.html", day: 2, title: "Grand Palace & Wat Phra Kaew", text: "Grand Palace & Wat Phra Kaew · Grand Palace & Wat Phra Kaew (Temple of the Emerald Buddha) · Wat Pho & the Reclining Buddha · Street food crawl in Chinatown (Yaowarat)", place: "Bangkok & Andaman Coast, Thailand" },
  { page: "thailand.html", day: 3, title: "Floating Markets & a Flight South", text: "Floating Markets & a Flight South · Damnoen Saduak floating market · Chatuchak Weekend Market (or a quiet Bangkok neighborhood) · Evening flight to Krabi", place: "Bangkok & Andaman Coast, Thailand" },
  { page: "thailand.html", day: 4, title: "Railay Beach", text: "Railay Beach · Longtail boat to Railay · Railay East to West walk & the lagoon viewpoint hike · Sunset on Railay West Beach", place: "Bangkok & Andaman Coast, Thailand" },
  { page: "thailand.html", day: 5, title: "Phi Phi Islands Day Trip", text: "Phi Phi Islands Day Trip · Earliest speedboat to Phi Phi & Maya Bay · Snorkeling at Pileh Lagoon & Monkey Beach · Return speedboat to Krabi", place: "Bangkok & Andaman Coast, Thailand" },
  { page: "thailand.html", day: 6, title: "A Slower Beach Day", text: "A Slower Beach Day · Sleep in & kayak the Railay lagoon · Koh Poda or Chicken Island · Sunset at Phra Nang Cave Beach", place: "Bangkok & Andaman Coast, Thailand" },
  { page: "thailand.html", day: 7, title: "Return Flight & Departure", text: "Return Flight & Departure · Transfer to Krabi Airport & fly to Bangkok · Last-minute souvenirs near the river · Rooftop sunset & transfer to the airport", place: "Bangkok & Andaman Coast, Thailand" },
  { page: "sofia.html", day: 1, title: "Arrival & Alexander Nevsky Cathedral", text: "Arrival & Alexander Nevsky Cathedral · Arrival at Sofia Airport & transfer to the center · Alexander Nevsky Cathedral · First walk through the historic center", place: "Sofia, Bulgaria" },
  { page: "sofia.html", day: 2, title: "Vitosha Boulevard & the Square of Tolerance", text: "Vitosha Boulevard & the Square of Tolerance · Vitosha Boulevard & the National Palace of Culture · Sofia's religious tolerance square · Dinner at a traditional mehana", place: "Sofia, Bulgaria" },
  { page: "sofia.html", day: 3, title: "Vitosha Mountain", text: "Vitosha Mountain · Cable car up from Simeonovo · Hike toward Cherni Vrah or the Golden Bridges · Descend for dinner at a mountain hut", place: "Sofia, Bulgaria" },
  { page: "sofia.html", day: 4, title: "Rila Monastery Day Trip & Departure", text: "Rila Monastery Day Trip & Departure · Depart Sofia for Rila Monastery · Explore the monastery complex · Return to Sofia & departure", place: "Sofia, Bulgaria" },
  { page: "budapest.html", day: 1, title: "Arrival & the Pest Danube Promenade", text: "Arrival & the Pest Danube Promenade · Arrival & transfer into Pest · Danube promenade & the Parliament building · First ruin bar in the Jewish Quarter", place: "Budapest, Hungary" },
  { page: "budapest.html", day: 2, title: "Buda Castle Hill", text: "Buda Castle Hill · Funicular up to Fisherman's Bastion · Buda Castle grounds · Matthias Church", place: "Budapest, Hungary" },
  { page: "budapest.html", day: 3, title: "Széchenyi Thermal Baths & City Park", text: "Széchenyi Thermal Baths & City Park · Széchenyi Thermal Baths · Poolside lunch & more soaking · City Park & Heroes' Square", place: "Budapest, Hungary" },
  { page: "budapest.html", day: 4, title: "Great Market Hall & the Jewish Quarter", text: "Great Market Hall & the Jewish Quarter · Great Market Hall · Jewish Quarter & Dohány Street Synagogue · Danube river cruise", place: "Budapest, Hungary" },
  { page: "budapest.html", day: 5, title: "Margaret Island & Departure", text: "Margaret Island & Departure · Margaret Island · Last-minute shopping on Váci utca · Transfer to the airport", place: "Budapest, Hungary" },
  { page: "prague.html", day: 1, title: "Arrival & Old Town Square", text: "Arrival & Old Town Square · Arrival & check-in near the Old Town · Old Town Square, early and uncrowded · The Astronomical Clock & an Old Town evening", place: "Prague, Czech Republic" },
  { page: "prague.html", day: 2, title: "Prague Castle & Charles Bridge", text: "Prague Castle & Charles Bridge · St. Vitus Cathedral, inside Prague Castle · Golden Lane's tiny artisan houses · Charles Bridge at sunset", place: "Prague, Czech Republic" },
  { page: "prague.html", day: 3, title: "Jewish Quarter, River Cruise & Malá Strana", text: "Jewish Quarter, River Cruise & Malá Strana · Josefov & the Spanish Synagogue · Vltava river cruise · Lesser Town (Malá Strana)", place: "Prague, Czech Republic" },
  { page: "prague.html", day: 4, title: "Petřín Hill & Departure", text: "Petřín Hill & Departure · Petřín Hill & its lookout tower · Last-minute shopping in the Old Town · Transfer to Václav Havel Airport for departure", place: "Prague, Czech Republic" },
  { page: "lapland.html", day: 1, title: "Arrival, the Arctic Circle & Santa Claus Village", text: "Arrival, the Arctic Circle & Santa Claus Village · Arrival at Rovaniemi Airport & transfer to your hotel · Crossing the Arctic Circle & Santa Claus Village · First Northern Lights hunting tour", place: "Finnish Lapland" },
  { page: "lapland.html", day: 2, title: "Husky Sledding Safari", text: "Husky Sledding Safari · Hotel pickup & husky farm briefing · Husky sledding safari through the snowy forest · Campfire dinner at the husky farm", place: "Finnish Lapland" },
  { page: "lapland.html", day: 3, title: "Reindeer Farm & Snowmobile Safari", text: "Reindeer Farm & Snowmobile Safari · Reindeer farm visit & sleigh ride · Snowmobile safari · Sami storytelling dinner", place: "Finnish Lapland" },
  { page: "lapland.html", day: 4, title: "Snow Hotel & a Second Aurora Hunt", text: "Snow Hotel & a Second Aurora Hunt · Transfer to the Arctic SnowHotel & ice room tour · Ice sauna & snow chapel · Second Northern Lights hunting tour", place: "Finnish Lapland" },
  { page: "lapland.html", day: 5, title: "Relaxed Morning, Sauna & Departure", text: "Relaxed Morning, Sauna & Departure · Relaxed breakfast & optional lake ice swim · Traditional Finnish sauna experience · Transfer to Rovaniemi Airport for departure", place: "Finnish Lapland" },
  { page: "zermatt.html", day: 1, title: "Arrival by Train & First Village Walk", text: "Arrival by Train & First Village Walk · Train to Täsch, then the shuttle into Zermatt · Check in and an electric taxi to the hotel · First walk through the village with a Matterhorn view", place: "Zermatt, Switzerland" },
  { page: "zermatt.html", day: 2, title: "Gornergrat Railway & Panoramic Viewpoint", text: "Gornergrat Railway & Panoramic Viewpoint · Ride the Gornergrat Railway to the summit · Gornergrat viewpoint and the terrace · Descend partway and hike back through Riffelalp", place: "Zermatt, Switzerland" },
  { page: "zermatt.html", day: 3, title: "Matterhorn Glacier Paradise & Close-Up Trails", text: "Matterhorn Glacier Paradise & Close-Up Trails · Cable car up to Matterhorn Glacier Paradise · Glacier Palace and the summit viewing platform · Alpine hike to the Matterhorn Glacier Trail", place: "Zermatt, Switzerland" },
  { page: "zermatt.html", day: 4, title: "Village Mornings & Departure", text: "Village Mornings & Departure · Slow breakfast and Bahnhofstrasse shopping · Spa hour or a final short walk to Gorner Gorge · Train departure via Täsch or Visp", place: "Zermatt, Switzerland" },
  { page: "shanghai.html", day: 1, title: "Arrival & The Bund at Dusk", text: "Arrival & The Bund at Dusk · Arrival at Pudong International Airport & transfer into the city · Check-in & a first walk along the Bund promenade · The Bund at dusk, facing the Pudong skyline", place: "Shanghai, China" },
  { page: "shanghai.html", day: 2, title: "Yu Garden, the Old Bazaar & Nanjing Road", text: "Yu Garden, the Old Bazaar & Nanjing Road · Yu Garden, early · Yuyuan Bazaar's old streets · Nanjing Road Pedestrian Street", place: "Shanghai, China" },
  { page: "shanghai.html", day: 3, title: "French Concession & Tianzifang", text: "French Concession & Tianzifang · Tree-lined streets of the former French Concession · Tianzifang's lanes · Cafe hopping & dinner in the Concession", place: "Shanghai, China" },
  { page: "shanghai.html", day: 4, title: "Zhujiajiao Water Town Day Trip", text: "Zhujiajiao Water Town Day Trip · Transfer to Zhujiajiao & the old street · Canal boat ride & Fangsheng Bridge · Old street snacks & the return trip", place: "Shanghai, China" },
  { page: "shanghai.html", day: 5, title: "Pudong Skyline & Departure", text: "Pudong Skyline & Departure · Shanghai Tower or Oriental Pearl Tower observation deck · Lujiazui & a last riverside lunch · Transfer to Pudong Airport for departure", place: "Shanghai, China" },
  { page: "strasbourg.html", day: 1, title: "Arrival & Petite France", text: "Arrival & Petite France · Arrival and check-in near the Grande Île · Wandering the canals of Petite France · Golden hour on the Ponts Couverts and a first winstub dinner", place: "Strasbourg, France" },
  { page: "strasbourg.html", day: 2, title: "Strasbourg Cathedral & Old Town Squares", text: "Strasbourg Cathedral & Old Town Squares · Strasbourg Cathedral's pink sandstone facade · The astronomical clock's mechanical show · Place Kléber, Place Gutenberg & Maison Kammerzell", place: "Strasbourg, France" },
  { page: "strasbourg.html", day: 3, title: "Alsace Wine Route: Colmar & a Village Tasting", text: "Alsace Wine Route: Colmar & a Village Tasting · Day trip to Colmar by train · Colmar's Petite Venise · Wine tasting in a nearby Alsace village", place: "Strasbourg, France" },
  { page: "strasbourg.html", day: 4, title: "European Quarter & Departure", text: "European Quarter & Departure · A slow bike ride through the old town · The European Quarter and European Parliament · Transfer to the station or airport for departure", place: "Strasbourg, France" },
  { page: "kotor.html", day: 1, title: "Arrival & the Walled Old Town", text: "Arrival & the Walled Old Town · Arrival & check-in near the Old Town · First wander through the walled Old Town · First evening inside the walls", place: "Kotor, Montenegro" },
  { page: "kotor.html", day: 2, title: "Fortress of St. John & the Bay Panorama", text: "Fortress of St. John & the Bay Panorama · Hike the fortress walls of St. John · Rest and rehydrate back in the Old Town · Golden hour on the harbor promenade", place: "Kotor, Montenegro" },
  { page: "kotor.html", day: 3, title: "Perast & Our Lady of the Rocks", text: "Perast & Our Lady of the Rocks · Drive or bus to Perast · Boat trip to Our Lady of the Rocks · Lunch on the Perast waterfront", place: "Kotor, Montenegro" },
  { page: "kotor.html", day: 4, title: "Budva's Old Town & Departure", text: "Budva's Old Town & Departure · Bus down the coast to Budva · Wander Budva's Old Town & citadel · Transfer to Tivat or Dubrovnik for departure", place: "Kotor, Montenegro" },
  { page: "seville.html", day: 1, title: "Arrival & Plaza de España", text: "Arrival & Plaza de España · Arrival & check-in near the historic center · Plaza de España at golden hour · First tapas dinner in the historic center", place: "Seville, Spain" },
  { page: "seville.html", day: 2, title: "Real Alcázar & the Santa Cruz Quarter", text: "Real Alcázar & the Santa Cruz Quarter · Real Alcázar at opening · The Alcázar's gardens · Wandering the Santa Cruz quarter", place: "Seville, Spain" },
  { page: "seville.html", day: 3, title: "Seville Cathedral, the Giralda & a Flamenco Night", text: "Seville Cathedral, the Giralda & a Flamenco Night · Seville Cathedral · Climbing the Giralda tower · Flamenco show", place: "Seville, Spain" },
  { page: "seville.html", day: 4, title: "Triana & Departure", text: "Triana & Departure · Triana's ceramics workshops & market · Riverside tapas in Triana · Transfer to Seville Airport for departure", place: "Seville, Spain" },
  { page: "zakopane.html", day: 1, title: "Arrival & Krupówki Street", text: "Arrival & Krupówki Street · Arrival by bus or train from Kraków · Krupówki Street and the wooden old town · Highland folk dinner with oscypek and kwaśnica", place: "Zakopane, Poland" },
  { page: "zakopane.html", day: 2, title: "Kasprowy Wierch by Cable Car", text: "Kasprowy Wierch by Cable Car · Cable car from Kuźnice to Kasprowy Wierch · Summit panorama and the border ridge walk · Mountain-hut lunch, or the Gubałówka funicular for an easier afternoon", place: "Zakopane, Poland" },
  { page: "zakopane.html", day: 3, title: "Morskie Oko Lake Hike", text: "Morskie Oko Lake Hike · Bus or taxi to the Palenica Białczańska trailhead · The paved uphill walk to Morskie Oko · Lakeside rest and the return walk", place: "Zakopane, Poland" },
  { page: "zakopane.html", day: 4, title: "Dolina Chochołowska & Departure", text: "Dolina Chochołowska & Departure · Bus to the Dolina Chochołowska trailhead · Flat valley walk beneath the peaks · Return to Zakopane and onward transfer to Kraków", place: "Zakopane, Poland" },
  { page: "chamonix.html", day: 1, title: "Arrival & the Chamonix Town Center", text: "Arrival & the Chamonix Town Center · Transfer in from Geneva · Town center and the church of Saint-Michel · Riverside walk and a Savoyard dinner", place: "Chamonix, France" },
  { page: "chamonix.html", day: 2, title: "Aiguille du Midi & Pointe Helbronner", text: "Aiguille du Midi & Pointe Helbronner · Cable car to the Aiguille du Midi · Step into the Void and the summit terraces · Panoramic Mont-Blanc gondola to Pointe Helbronner", place: "Chamonix, France" },
  { page: "chamonix.html", day: 3, title: "Montenvers & the Mer de Glace", text: "Montenvers & the Mer de Glace · Montenvers rack railway from town · The ice cave and the glacier's retreat · Belvedere trail and the ride back down", place: "Chamonix, France" },
  { page: "chamonix.html", day: 4, title: "Grand Balcon Nord & a Valley Village", text: "Grand Balcon Nord & a Valley Village · Planpraz lift up to the Grand Balcon Nord · Onward to Lac Blanc for a bigger hike · Afternoon in Argentière or Les Houches", place: "Chamonix, France" },
  { page: "chamonix.html", day: 5, title: "Slow Morning & Departure", text: "Slow Morning & Departure · Spa morning or a walk to Lac des Gaillands · Last coffee and souvenir shopping in town · Shuttle back to Geneva", place: "Chamonix, France" },
  { page: "valletta.html", day: 1, title: "Arrival, the Baroque Grid & St. John's Co-Cathedral", text: "Arrival, the Baroque Grid & St. John's Co-Cathedral · Arrival & check-in in the capital · Walking the Baroque grid & St. John's Co-Cathedral · Upper Barrakka Gardens & the Saluting Battery", place: "Valletta, Malta" },
  { page: "valletta.html", day: 2, title: "The Grand Harbour, Fort St. Elmo & the Three Cities", text: "The Grand Harbour, Fort St. Elmo & the Three Cities · A dgħajsa cruise around the Grand Harbour · Fort St. Elmo & the National War Museum · Across the harbour to the Three Cities", place: "Valletta, Malta" },
  { page: "valletta.html", day: 3, title: "Mdina, the Silent City & Rabat", text: "Mdina, the Silent City & Rabat · Out to Mdina, the Silent City · Wandering Mdina's walls & cathedral · Rabat's catacombs & the trip back to Valletta", place: "Valletta, Malta" },
  { page: "grindelwald.html", day: 1, title: "Arrival & First Village Walk", text: "Arrival & First Village Walk · Scenic train from Interlaken Ost on the BOB line · Check in and an easy valley walk · Fondue dinner and a first look at the Eiger", place: "Grindelwald, Switzerland" },
  { page: "grindelwald.html", day: 2, title: "Jungfraujoch, Top of Europe", text: "Jungfraujoch, Top of Europe · Eiger Express to Eigergletscher, then the cogwheel train up · Sphinx Observatory and the Aletsch Glacier · Ice Palace and the descent through Kleine Scheidegg", place: "Grindelwald, Switzerland" },
  { page: "grindelwald.html", day: 3, title: "Grindelwald-First & the Eiger Trail", text: "Grindelwald-First & the Eiger Trail · Cable car up to Grindelwald-First and the Cliff Walk · First Flyer, mountain carts, or the walk to Bachalpsee · Alternative: the Eiger Trail beneath the north face", place: "Grindelwald, Switzerland" },
  { page: "grindelwald.html", day: 4, title: "Lauterbrunnen Valley & Departure", text: "Lauterbrunnen Valley & Departure · A slow morning at the Grindelwald Sports Centre · Waterfalls in the Lauterbrunnen valley · Train departure via Interlaken", place: "Grindelwald, Switzerland" },
  { page: "canary-islands.html", day: 1, title: "Arrival & La Laguna's Colonial Old Town", text: "Arrival & La Laguna's Colonial Old Town · Land at Tenerife South & transfer north · San Cristóbal de La Laguna's old town · Santa Cruz de Tenerife by night", place: "Canary Islands, Spain" },
  { page: "canary-islands.html", day: 2, title: "Teide National Park", text: "Teide National Park · Drive up into Teide National Park · Cable car toward Mount Teide's summit · Stargazing under a Starlight-certified sky", place: "Canary Islands, Spain" },
  { page: "canary-islands.html", day: 3, title: "Anaga Rural Park & the North Coast", text: "Anaga Rural Park & the North Coast · Hike the laurisilva forest of Anaga · Garachico's volcanic rock pools · Dinner in Puerto de la Cruz", place: "Canary Islands, Spain" },
  { page: "canary-islands.html", day: 4, title: "Beach Morning & Transfer to Lanzarote", text: "Beach Morning & Transfer to Lanzarote · Playa de las Teresitas · Return the car & head to the airport · Short flight to Lanzarote", place: "Canary Islands, Spain" },
  { page: "canary-islands.html", day: 5, title: "Timanfaya National Park", text: "Timanfaya National Park · Ruta de los Volcanes coach tour · Geyser demonstration & a camel ride · Dinner grilled over geothermal heat at El Diablo", place: "Canary Islands, Spain" },
  { page: "canary-islands.html", day: 6, title: "César Manrique's Lanzarote & La Geria Vineyards", text: "César Manrique's Lanzarote & La Geria Vineyards · Jameos del Agua · Mirador del Río or the Jardín de Cactus · Wine tasting in La Geria", place: "Canary Islands, Spain" },
  { page: "canary-islands.html", day: 7, title: "Playa Blanca & Departure", text: "Playa Blanca & Departure · Playa Blanca or the Papagayo coves · Last-minute shopping & lunch at the marina · Transfer to Lanzarote Airport", place: "Canary Islands, Spain" },
  { page: "edinburgh.html", day: 1, title: "Edinburgh Castle & the Royal Mile", text: "Edinburgh Castle & the Royal Mile · Arrival & transfer into the Old Town · Edinburgh Castle · Royal Mile amble & a historic Old Town pub", place: "Edinburgh, Scotland" },
  { page: "edinburgh.html", day: 2, title: "Holyrood & Arthur's Seat", text: "Holyrood & Arthur's Seat · Palace of Holyroodhouse & the Scottish Parliament · Hike up Arthur's Seat · National Museum of Scotland", place: "Edinburgh, Scotland" },
  { page: "edinburgh.html", day: 3, title: "New Town, Calton Hill & Dean Village", text: "New Town, Calton Hill & Dean Village · New Town, Princes Street Gardens & the Scott Monument · Dean Village · Sunset from Calton Hill", place: "Edinburgh, Scotland" },
  { page: "edinburgh.html", day: 4, title: "Stirling Castle & the Wallace Monument", text: "Stirling Castle & the Wallace Monument · Train to Stirling & Stirling Castle · National Wallace Monument · Return to Edinburgh & departure", place: "Edinburgh, Scotland" },
  { page: "austrian-alps.html", day: 1, title: "Innsbruck Arrival, the Golden Roof & Nordkette", text: "Innsbruck Arrival, the Golden Roof & Nordkette · Fly into Innsbruck, or take the train from Munich · Wander the Altstadt to the Golden Roof · Nordkette cable car straight from the city center", place: "Austrian Alps, Austria" },
  { page: "austrian-alps.html", day: 2, title: "Stubai Glacier Day Trip", text: "Stubai Glacier Day Trip · Transfer to the Stubai Glacier's Mutterbergalm base · 3S gondola onto the glacier at Eisgrat · Snowfield walk, or swap for Swarovski Crystal Worlds", place: "Austrian Alps, Austria" },
  { page: "austrian-alps.html", day: 3, title: "Base Change to Seefeld & Lake Wildsee", text: "Base Change to Seefeld & Lake Wildsee · Regional train up to the Seefeld plateau · Stroll the shore of Lake Wildsee · Rosshütte cable car and a ridge-line hike", place: "Austrian Alps, Austria" },
  { page: "austrian-alps.html", day: 4, title: "Hut Hike & a Traditional Tyrolean Dinner", text: "Hut Hike & a Traditional Tyrolean Dinner · Hike to the Nördlinger Hütte for lunch · Lunch on the hut's sun terrace · Tiroler Gröstl and Kaiserschmarrn back in the village", place: "Austrian Alps, Austria" },
  { page: "austrian-alps.html", day: 5, title: "Alpine Spa Morning & Departure", text: "Alpine Spa Morning & Departure · A slow morning at Alpenbad Seefeld · Regional train back to Innsbruck and a last riverside walk · Transfer to Innsbruck Airport or onward by rail", place: "Austrian Alps, Austria" },
  { page: "bansko.html", day: 1, title: "Arrival & Bansko's Old Town", text: "Arrival & Bansko's Old Town · Arrival by shuttle or bus from Sofia · Baryakova Cheshma and the old town's stone houses · Mehana dinner with kapama and live kaba gaida music", place: "Bansko, Bulgaria" },
  { page: "bansko.html", day: 2, title: "Bansko Gondola & Pirin National Park", text: "Bansko Gondola & Pirin National Park · Gondola from Bansko to Bunderishka Polyana · Hiking the marked trails around the Bunderishka circus · Vihren hut option for bigger hikers, or an easy ride back down", place: "Bansko, Bulgaria" },
  { page: "bansko.html", day: 3, title: "Rila Monastery Day Trip", text: "Rila Monastery Day Trip · Transfer to Rila Monastery via Blagoevgrad · The striped courtyard, frescoes, and Hrelyo's Tower · Return to Bansko, or the Vasilashki lakes alternative", place: "Bansko, Bulgaria" },
  { page: "bansko.html", day: 4, title: "Mineral Spa Morning & Departure", text: "Mineral Spa Morning & Departure · Mineral pools in nearby Banya · Last look at the old town and a light lunch · Transfer back to Sofia", place: "Bansko, Bulgaria" },
  { page: "bruges.html", day: 1, title: "Arrival, the Markt & the Burg", text: "Arrival, the Markt & the Burg · Arrival and check-in near the Markt · The Belfry tower and the Burg's Basilica of the Holy Blood · A canal boat tour at golden hour", place: "Bruges, Belgium" },
  { page: "bruges.html", day: 2, title: "Church of Our Lady, Groeninge Museum & the Béguinage", text: "Church of Our Lady, Groeninge Museum & the Béguinage · The Church of Our Lady's Michelangelo Madonna · Flemish Primitives at the Groeninge Museum · The Béguinage and a chocolate and waffle tasting walk", place: "Bruges, Belgium" },
  { page: "bruges.html", day: 3, title: "Damme by Bike, the Ramparts Windmills & Departure", text: "Damme by Bike, the Ramparts Windmills & Departure · A bike ride along the canal to Damme · The windmills along the old city ramparts · Transfer to the station for departure", place: "Bruges, Belgium" },
  { page: "copenhagen.html", day: 1, title: "Arrival, Nyhavn & the Changing of the Guard", text: "Arrival, Nyhavn & the Changing of the Guard · Arrival & transfer into central Copenhagen · Amalienborg Palace & the changing of the Guard · Nyhavn & a sunset canal boat tour", place: "Copenhagen, Denmark" },
  { page: "copenhagen.html", day: 2, title: "Tivoli Gardens & Danish Design", text: "Tivoli Gardens & Danish Design · Tivoli Gardens · Design Museum Denmark or the National Gallery (SMK) · Nordic design shopping on Strøget", place: "Copenhagen, Denmark" },
  { page: "copenhagen.html", day: 3, title: "Christiania, Christianshavn & a Bike Ride", text: "Christiania, Christianshavn & a Bike Ride · Freetown Christiania · A bike ride through Christianshavn's canals · The Opera House & Royal Danish Playhouse waterfront", place: "Copenhagen, Denmark" },
  { page: "copenhagen.html", day: 4, title: "Pastries, the Louisiana Museum & Departure", text: "Pastries, the Louisiana Museum & Departure · Breakfast at a Danish bakery · Louisiana Museum of Modern Art · Transfer to the airport", place: "Copenhagen, Denmark" },
  { page: "lauterbrunnen.html", day: 1, title: "Arrival & the Valley's Waterfalls", text: "Arrival & the Valley's Waterfalls · Train into the valley via Interlaken Ost · Staubbach Falls, then Trümmelbach's glacier-fed chambers · A first evening in the village", place: "Lauterbrunnen, Switzerland" },
  { page: "lauterbrunnen.html", day: 2, title: "Mürren, Gimmelwald & the Schilthorn", text: "Mürren, Gimmelwald & the Schilthorn · Cable car to Gimmelwald and Mürren · Onward and up to the Schilthorn summit · Birg's Skyline Walk and the descent", place: "Lauterbrunnen, Switzerland" },
  { page: "lauterbrunnen.html", day: 3, title: "Männlichen Ridge Walk & Departure", text: "Männlichen Ridge Walk & Departure · Train to Wengen, cable car to Männlichen · The ridge walk toward Kleine Scheidegg · Train departure via Interlaken", place: "Lauterbrunnen, Switzerland" },
  { page: "plitvice-lakes.html", day: 1, title: "Arrival & the Lower Lakes to Veliki Slap", text: "Arrival & the Lower Lakes to Veliki Slap · Arrival & check-in near the park · Lower Lakes boardwalk to Veliki Slap · Dinner back at the guesthouse village", place: "Plitvice Lakes, Croatia" },
  { page: "plitvice-lakes.html", day: 2, title: "Upper Lakes & the Kozjak Boat Crossing", text: "Upper Lakes & the Kozjak Boat Crossing · The Upper Lakes loop, Gornja jezera · Electric boat crossing on Kozjak Lake · Back through the Lower Lakes at golden hour", place: "Plitvice Lakes, Croatia" },
  { page: "plitvice-lakes.html", day: 3, title: "A Quieter Trail, Rastoke Village & Departure", text: "A Quieter Trail, Rastoke Village & Departure · A quieter walk to Labudovac Waterfall · Rastoke village, Plitvice's smaller cousin · Departure toward Zagreb or Zadar", place: "Plitvice Lakes, Croatia" },
  { page: "hakone.html", day: 1, title: "Arrival & the Hakone Open-Air Museum", text: "Arrival & the Hakone Open-Air Museum · Odakyu Romancecar from Shinjuku to Hakone-Yumoto · Hakone Open-Air Museum · Check into a ryokan & a first onsen soak", place: "Hakone, Japan" },
  { page: "hakone.html", day: 2, title: "The Hakone Round Course: Owakudani & Lake Ashi", text: "The Hakone Round Course: Owakudani & Lake Ashi · Hakone Ropeway over Owakudani · Black eggs at Owakudani, then a cruise across Lake Ashi · Hakone Shrine's torii gate at Motohakone", place: "Hakone, Japan" },
  { page: "hakone.html", day: 3, title: "Onsen Morning & the Old Tokaido Road", text: "Onsen Morning & the Old Tokaido Road · A slow morning soak in the ryokan onsen · A walk on the old Tokaido highway · Return to Tokyo", place: "Hakone, Japan" },
  { page: "hallstatt.html", day: 1, title: "Arrival & the Lakeside Village", text: "Arrival & the Lakeside Village · Train and ferry from Salzburg to Hallstatt · The Marktplatz and the village lanes · Sunset at the World Heritage Skywalk", place: "Hallstatt, Austria" },
  { page: "hallstatt.html", day: 2, title: "Salzwelten Salt Mine & the Bone House", text: "Salzwelten Salt Mine & the Bone House · Funicular up to Salzwelten and the miners' slide · Underground lake and the Bronze Age galleries · The painted skulls of the Beinhaus", place: "Hallstatt, Austria" },
  { page: "hallstatt.html", day: 3, title: "Waldbachstrub Waterfall & Departure", text: "Waldbachstrub Waterfall & Departure · The walking trail to Waldbachstrub waterfall · A boat trip for the classic view · Ferry and train back toward Salzburg", place: "Hallstatt, Austria" },
  { page: "cortina-dampezzo.html", day: 1, title: "Arrival & First Views Over the Ampezzo Valley", text: "Arrival & First Views Over the Ampezzo Valley · Transfer in from Venice Marco Polo Airport · Check in and a walk down Corso Italia · Faloria cable car for a sunset panorama", place: "Cortina d'Ampezzo, Italy" },
  { page: "cortina-dampezzo.html", day: 2, title: "The Tre Cime di Lavaredo Loop", text: "The Tre Cime di Lavaredo Loop · Drive to Rifugio Auronzo via Lago di Misurina · Hike the loop past Rifugio Locatelli · Rifugio lunch and the drive back to Cortina", place: "Cortina d'Ampezzo, Italy" },
  { page: "cortina-dampezzo.html", day: 3, title: "Lago di Braies & the Cinque Torri", text: "Lago di Braies & the Cinque Torri · Drive to Lago di Braies and walk the shoreline loop · Drive back toward Cortina for lunch · Cinque Torri chairlift and the WWI open-air museum", place: "Cortina d'Ampezzo, Italy" },
  { page: "cortina-dampezzo.html", day: 4, title: "Slow Morning, Spa & Departure", text: "Slow Morning, Spa & Departure · Slow breakfast and a last look at Corso Italia · Spa hour at a Cortina luxury hotel · Drive back to Venice Marco Polo Airport", place: "Cortina d'Ampezzo, Italy" },
  { page: "bordeaux.html", day: 1, title: "Arrival & the Port of the Moon", text: "Arrival & the Port of the Moon · Arrive & check in near the Old Town · Place de la Bourse & the Miroir d'Eau · Rue Sainte-Catherine & a first Bordelaise dinner", place: "Bordeaux, France" },
  { page: "bordeaux.html", day: 2, title: "Cathédrale Saint-André & La Cité du Vin", text: "Cathédrale Saint-André & La Cité du Vin · Cathédrale Saint-André & the Pey-Berland tower · La Cité du Vin · Wine bars in the Chartrons quarter", place: "Bordeaux, France" },
  { page: "bordeaux.html", day: 3, title: "Saint-Émilion: A Full Day in Wine Country", text: "Saint-Émilion: A Full Day in Wine Country · The monolithic church & village streets · Château tour & tasting · Return to Bordeaux for dinner", place: "Bordeaux, France" },
  { page: "bordeaux.html", day: 4, title: "Marché des Capucins & Departure", text: "Marché des Capucins & Departure · Marché des Capucins · Jardin Public & last-minute wine shopping · Transfer to Gare Saint-Jean or the airport", place: "Bordeaux, France" },
  { page: "st-moritz.html", day: 1, title: "Arrival in the Engadin & First Winter Walk", text: "Arrival in the Engadin & First Winter Walk · Arrival by the Rhaetian Railway · A first stroll down Via Serlas · A first fondue in the Dorf", place: "St. Moritz, Switzerland" },
  { page: "st-moritz.html", day: 2, title: "Corviglia and Corvatsch: Two Ski Areas, One Valley", text: "Corviglia and Corvatsch: Two Ski Areas, One Valley · Funicular up to Corviglia · Lunch on a sun terrace above the Engadin · Cable car to the Corvatsch glacier station", place: "St. Moritz, Switzerland" },
  { page: "st-moritz.html", day: 3, title: "The Cresta Run, the Frozen Lake & the Engadin's Nordic Trails", text: "The Cresta Run, the Frozen Lake & the Engadin's Nordic Trails · Watch or ride the Cresta Run · Walk out onto the frozen lake · Cross-country skiing on the Engadin's valley trails", place: "St. Moritz, Switzerland" },
  { page: "st-moritz.html", day: 4, title: "The Bernina Express & a Grand Hotel Farewell", text: "The Bernina Express & a Grand Hotel Farewell · Ride the Bernina Express toward the glaciers · Afternoon tea in the grand-hotel style · A last snowy walk to the station", place: "St. Moritz, Switzerland" },
  { page: "dolomites.html", day: 1, title: "Innsbruck to Val Gardena Over the Brenner Pass", text: "Innsbruck to Val Gardena Over the Brenner Pass · Land in Innsbruck & pick up the rental car · Drive over the Brenner Pass into South Tyrol · Settle into Ortisei & a South Tyrolean dinner", place: "Val Gardena, Italy" },
  { page: "dolomites.html", day: 2, title: "Alpe di Siusi: Europe's Largest Alpine Meadow", text: "Alpe di Siusi: Europe's Largest Alpine Meadow · Cable car up from Siusi to Compatsch · Hike across the meadow to the Sassopiatto viewpoints · Rifugio dinner on the plateau, last cabin down", place: "Val Gardena, Italy" },
  { page: "dolomites.html", day: 3, title: "Seceda Ridge & the Odle Peaks", text: "Seceda Ridge & the Odle Peaks · Two-stage cable car from Ortisei to Seceda · Walk the ridge toward the Val di Funes overlook · Drive to Selva di Val Gardena for dinner", place: "Val Gardena, Italy" },
  { page: "dolomites.html", day: 4, title: "Three Passes: Gardena, Pordoi & Giau", text: "Three Passes: Gardena, Pordoi & Giau · Passo Gardena & Passo Sella · Passo Pordoi & the Sass Pordoi cable car · Sunset detour over Passo Giau, then down to San Vito di Cadore", place: "Val Gardena, Italy" },
  { page: "dolomites.html", day: 5, title: "Lago di Sorapis: The Milky Turquoise Lake", text: "Lago di Sorapis: The Milky Turquoise Lake · Drive to the Passo Tre Croci trailhead · Hike in via the CAI 215 trail · The lake, then hike back down for a late dinner", place: "Val Gardena, Italy" },
  { page: "dolomites.html", day: 6, title: "Lago di Braies at Sunrise & Departure", text: "Lago di Braies at Sunrise & Departure · Sunrise walk around Lago di Braies · Drive south to Venice Marco Polo Airport · Return the rental car & fly home", place: "Val Gardena, Italy" },
  { page: "marrakech.html", day: 1, title: "Arrival & Jemaa el-Fnaa First Look", text: "Arrival & Jemaa el-Fnaa First Look · Marrakech Menara Airport transfer & riad check-in · First wander into Souk Semmarine · Jemaa el-Fnaa by night", place: "Marrakech, Morocco" },
  { page: "marrakech.html", day: 2, title: "Palaces, Tombs & a Rooftop Dinner", text: "Palaces, Tombs & a Rooftop Dinner · Bahia Palace · Saadian Tombs · Rooftop dinner with Koutoubia Mosque views", place: "Marrakech, Morocco" },
  { page: "marrakech.html", day: 3, title: "Deep in the Souks & a Hammam", text: "Deep in the Souks & a Hammam · Spice, leather & dye souks · Ben Youssef Madrasa · Traditional hammam & massage", place: "Marrakech, Morocco" },
  { page: "marrakech.html", day: 4, title: "Jardin Majorelle & Gueliz", text: "Jardin Majorelle & Gueliz · Jardin Majorelle & the YSL Museum · Wander Gueliz, the Ville Nouvelle · Le Jardin Secret at golden hour", place: "Marrakech, Morocco" },
  { page: "marrakech.html", day: 5, title: "Atlas Mountains & Ourika Valley Day Trip", text: "Atlas Mountains & Ourika Valley Day Trip · Drive into the High Atlas foothills · Berber villages & the Setti Fatma waterfalls · Return to Marrakech & a farewell dinner", place: "Marrakech, Morocco" },
  { page: "tromso.html", day: 1, title: "Arrival, the Arctic Cathedral & Fjellheisen", text: "Arrival, the Arctic Cathedral & Fjellheisen · Land at Tromsø Airport & settle in downtown · Walk the bridge to the Arctic Cathedral (Ishavskatedralen) · Fjellheisen cable car to Storsteinen for a first aurora hunt", place: "Tromsø, Norway" },
  { page: "tromso.html", day: 2, title: "Winter Whale Watching in the Fjords", text: "Winter Whale Watching in the Fjords · Early departure from Tromsø harbor · Orca & humpback encounters on the water · Harbor-front Arctic seafood dinner", place: "Tromsø, Norway" },
  { page: "tromso.html", day: 3, title: "Husky Sledding & a Sami Reindeer Camp", text: "Husky Sledding & a Sami Reindeer Camp · Husky farm pickup & dog sledding safari · Sami reindeer camp & lavvu culture · Second aurora hunt, away from city lights", place: "Tromsø, Norway" },
  { page: "tromso.html", day: 4, title: "Polaria, the Polar Museum & Departure", text: "Polaria, the Polar Museum & Departure · Polaria's Arctic aquarium & bearded seal feeding · The Polar Museum: trapping, hunting & polar expeditions · Transfer to Tromsø Airport & depart", place: "Tromsø, Norway" },
  { page: "stockholm.html", day: 1, title: "Arrival, Gamla Stan & the Royal Palace", text: "Arrival, Gamla Stan & the Royal Palace · Arrival & transfer into central Stockholm · The Royal Palace & changing of the guard · Gamla Stan's golden-hour lanes", place: "Stockholm, Sweden" },
  { page: "stockholm.html", day: 2, title: "The Vasa Museum, Skansen & Djurgården", text: "The Vasa Museum, Skansen & Djurgården · The Vasa Museum · Skansen open-air museum · The ABBA Museum", place: "Stockholm, Sweden" },
  { page: "stockholm.html", day: 3, title: "A Stockholm Archipelago Day Trip to Vaxholm", text: "A Stockholm Archipelago Day Trip to Vaxholm · Ferry departure into the archipelago · Vaxholm's town & fortress · Return cruise & a waterfront dinner", place: "Stockholm, Sweden" },
  { page: "stockholm.html", day: 4, title: "Södermalm, Fotografiska & Fika Culture", text: "Södermalm, Fotografiska & Fika Culture · Fotografiska photography museum · Södermalm cafes, design shops & a proper fika · Stadshuset (City Hall) at sunset", place: "Stockholm, Sweden" },
  { page: "stockholm.html", day: 5, title: "The Nobel Prize Museum, Kungsträdgården & Departure", text: "The Nobel Prize Museum, Kungsträdgården & Departure · The Nobel Prize Museum · Kungsträdgården & last souvenirs · Transfer to the airport", place: "Stockholm, Sweden" },
  { page: "bavaria.html", day: 1, title: "Munich: Marienplatz & the Glockenspiel", text: "Munich: Marienplatz & the Glockenspiel · Land at Munich Airport & ride the S-Bahn in · Marienplatz & the Glockenspiel show · Dinner at the Hofbräuhaus", place: "Bavaria, Germany" },
  { page: "bavaria.html", day: 2, title: "Munich: Nymphenburg, BMW & the Beer Gardens", text: "Munich: Nymphenburg, BMW & the Beer Gardens · Schloss Nymphenburg · BMW Museum & BMW Welt · Viktualienmarkt beer garden", place: "Bavaria, Germany" },
  { page: "bavaria.html", day: 3, title: "Neuschwanstein & Hohenschwangau Castles", text: "Neuschwanstein & Hohenschwangau Castles · Pick up the rental car & tour Neuschwanstein · Hohenschwangau Castle · Dinner in Füssen's old town", place: "Bavaria, Germany" },
  { page: "bavaria.html", day: 4, title: "Zugspitze & Garmisch-Partenkirchen", text: "Zugspitze & Garmisch-Partenkirchen · Drive to Grainau & ride the Zugspitzbahn · Partnachklamm gorge walk · Dinner on Ludwigstraße", place: "Bavaria, Germany" },
  { page: "bavaria.html", day: 5, title: "Berchtesgaden & the Königssee", text: "Berchtesgaden & the Königssee · Drive to Berchtesgaden & the Königssee boat trip · Eagle's Nest (Kehlsteinhaus) · Dinner with a view of the Watzmann", place: "Bavaria, Germany" },
  { page: "bavaria.html", day: 6, title: "Chiemsee & Departure", text: "Chiemsee & Departure · Ferry to Herreninsel on the Chiemsee · Herrenchiemsee Palace & drive back to Munich · Return the rental car & fly out", place: "Bavaria, Germany" },
  { page: "zhangye.html", day: 1, title: "Arrival & the Old Silk Road Town", text: "Arrival & the Old Silk Road Town · Arrival by rail into the Hexi Corridor · The Drum Tower and the walled old town · Dinner: Zhangye's own noodle culture", place: "Zhangye, China" },
  { page: "zhangye.html", day: 2, title: "Sunrise to Sunset at the Zhangye Danxia Rainbow Mountains", text: "Sunrise to Sunset at the Zhangye Danxia Rainbow Mountains · Sunrise at the Colorful Sea of Clouds Platform · Boardwalks across Platforms 2 and 3 · Sunset at Platform 4", place: "Zhangye, China" },
  { page: "zhangye.html", day: 3, title: "Giant Buddha Temple & Zhangye's Wetland Park", text: "Giant Buddha Temple & Zhangye's Wetland Park · The Giant Buddha Temple complex · Asia's largest reclining Buddha · An afternoon in Zhangye Wetland Park", place: "Zhangye, China" },
  { page: "zhangye.html", day: 4, title: "Mati Temple's Cliff Grottoes & Departure", text: "Mati Temple's Cliff Grottoes & Departure · The drive out to Mati Temple · Climbing the grottoes · Return to Zhangye & departure", place: "Zhangye, China" },
  { page: "lencois-maranhenses.html", day: 1, title: "Arrival in Barreirinhas", text: "Arrival in Barreirinhas · Fly into São Luís, then transfer to Barreirinhas · Check in and walk out to the edge of the dune field · First taste of Maranhão cuisine in town", place: "Lençóis Maranhenses, Brazil" },
  { page: "lencois-maranhenses.html", day: 2, title: "4x4 into the Dunes: Lagoa Azul & Lagoa Bonita", text: "4x4 into the Dunes: Lagoa Azul & Lagoa Bonita · 4x4 dune-buggy tour from Barreirinhas · Swimming in Lagoa Azul · Sunset at Lagoa Bonita", place: "Lençóis Maranhenses, Brazil" },
  { page: "lencois-maranhenses.html", day: 3, title: "Rio Preguiças Boat Trip to Atins", text: "Rio Preguiças Boat Trip to Atins · Downriver by boat to Vassouras · Mandacaru lighthouse · Atins, where the river meets the ocean", place: "Lençóis Maranhenses, Brazil" },
  { page: "lencois-maranhenses.html", day: 4, title: "Last Morning & Departure", text: "Last Morning & Departure · A free morning along the river · Transfer back to São Luís · A last look at São Luís before flying out", place: "Lençóis Maranhenses, Brazil" },
  { page: "waitomo.html", day: 1, title: "Arrival & the Waitomo Glowworm Cave", text: "Arrival & the Waitomo Glowworm Cave · The drive south through King Country farmland · A silent boat glide beneath thousands of glowworms · Settling in above the caves", place: "Waitomo, New Zealand" },
  { page: "waitomo.html", day: 2, title: "Ruakuri Cave & Black-Water Rafting", text: "Ruakuri Cave & Black-Water Rafting · The spiral ramp into Ruakuri Cave · Floating an underground river on an inner tube · An easy evening over the King Country hills", place: "Waitomo, New Zealand" },
  { page: "waitomo.html", day: 3, title: "Hobbiton Movie Set & Departure", text: "Hobbiton Movie Set & Departure · The Hobbit Holes of the Shire · A cider at the Green Dragon Inn · The drive back toward Auckland", place: "Waitomo, New Zealand" },
  { page: "cappadocia.html", day: 1, title: "Arrival & Uçhisar Orientation", text: "Arrival & Uçhisar Orientation · Fly into Kayseri or Nevşehir, transfer to Göreme · Climb Uçhisar Castle · Sunset from the cave hotel terrace & welcome dinner", place: "Cappadocia, Turkey" },
  { page: "cappadocia.html", day: 2, title: "Sunrise Balloon & Göreme Open Air Museum", text: "Sunrise Balloon & Göreme Open Air Museum · Sunrise hot air balloon flight · Göreme Open Air Museum · Wander Göreme village over çay", place: "Cappadocia, Turkey" },
  { page: "cappadocia.html", day: 3, title: "Derinkuyu Underground City & Rose Valley Hike", text: "Derinkuyu Underground City & Rose Valley Hike · Derinkuyu underground city · Rose Valley hike · Sunset Point & dinner back in Göreme", place: "Cappadocia, Turkey" },
  { page: "cappadocia.html", day: 4, title: "Avanos Pottery, Valley ATV Tour & Departure", text: "Avanos Pottery, Valley ATV Tour & Departure · Pottery-making in Avanos · ATV tour through Pigeon Valley · Farewell dinner, then transfer to the airport", place: "Cappadocia, Turkey" },
  { page: "milos.html", day: 1, title: "Arrival, Adamas & Plaka's Sunset Kastro", text: "Arrival, Adamas & Plaka's Sunset Kastro · Arrive by ferry & check in at Adamas · Wander up to Plaka · Sunset from Plaka's Kastro", place: "Milos, Greece" },
  { page: "milos.html", day: 2, title: "Sarakiniko's Lunar Coastline & Mytakas", text: "Sarakiniko's Lunar Coastline & Mytakas · Explore Sarakiniko's white rock formations · Mytakas's colorful syrmata & a quiet swim · Seafood dinner in Pollonia", place: "Milos, Greece" },
  { page: "milos.html", day: 3, title: "Kleftiko Sea Caves & Klima's Boathouses", text: "Kleftiko Sea Caves & Klima's Boathouses · Boat pickup & cruise to Kleftiko · Swim through Kleftiko's sea caves · Klima's colorful syrmata at sunset", place: "Milos, Greece" },
  { page: "milos.html", day: 4, title: "South Coast Beaches, Mining Museum & Departure", text: "South Coast Beaches, Mining Museum & Departure · Tsigrado's hidden cove · Milos Mining Museum · Airport transfer & departure", place: "Milos, Greece" },
  { page: "mykonos.html", day: 1, title: "Arrival & Mykonos Town (Chora)", text: "Arrival & Mykonos Town (Chora) · Arrive by ferry & check in · Wander Chora's alleys & boutique shopping · Windmills at Kato Mili, then Little Venice", place: "Mykonos, Greece" },
  { page: "mykonos.html", day: 2, title: "Paradise & Super Paradise Beach Clubs", text: "Paradise & Super Paradise Beach Clubs · Water-taxi from Platis Gialos to Paradise Beach · Beach club day at Super Paradise · Sunset drinks before heading back to Chora", place: "Mykonos, Greece" },
  { page: "mykonos.html", day: 3, title: "Delos Island Day Trip", text: "Delos Island Day Trip · Boat over to Delos · Terrace of the Lions & the sacred site · Back to Mykonos for a Little Venice dinner", place: "Mykonos, Greece" },
  { page: "mykonos.html", day: 4, title: "Panagia Paraportiani & a Calmer Beach", text: "Panagia Paraportiani & a Calmer Beach · Panagia Paraportiani, five churches in one · A calmer afternoon at Ornos Beach · Sunset dinner in Little Venice", place: "Mykonos, Greece" },
  { page: "mykonos.html", day: 5, title: "Last Swim & Departure", text: "Last Swim & Departure · One last quiet swim · Last-minute shopping in Chora · Airport transfer & departure", place: "Mykonos, Greece" },
  { page: "crete.html", day: 1, title: "Arrival in Heraklion & the Venetian Harbor", text: "Arrival in Heraklion & the Venetian Harbor · Land in Heraklion & transfer to the old town · Koules Fortress & the Venetian Harbor · Lion Square & a first Cretan dinner", place: "Crete, Greece" },
  { page: "crete.html", day: 2, title: "Knossos Palace & the Archaeological Museum", text: "Knossos Palace & the Archaeological Museum · Explore the Palace of Knossos · Heraklion Archaeological Museum · Dakos & raki in the old town", place: "Crete, Greece" },
  { page: "crete.html", day: 3, title: "The Lasithi Plateau: Windmills & the Cave of Zeus", text: "The Lasithi Plateau: Windmills & the Cave of Zeus · Drive up to the Lasithi Plateau · Psychro Cave, mythical birthplace of Zeus · A village taverna on the plateau", place: "Crete, Greece" },
  { page: "crete.html", day: 4, title: "Rethymno's Old Town & the Road to Chania", text: "Rethymno's Old Town & the Road to Chania · Rethymno's Venetian harbor · The Fortezza, Rethymno's Venetian fortress · Arrival in Chania at sunset", place: "Crete, Greece" },
  { page: "crete.html", day: 5, title: "Samaria Gorge — A Full-Day Hike", text: "Samaria Gorge — A Full-Day Hike · Descend from Xyloskalo into the gorge · Through the Iron Gates · Agia Roumeli & the boat back", place: "Crete, Greece" },
  { page: "crete.html", day: 6, title: "Balos Lagoon & Departure", text: "Balos Lagoon & Departure · Boat to Balos Lagoon · Beach time & the return crossing · Transfer to the airport & departure", place: "Crete, Greece" },
  { page: "abisko.html", day: 1, title: "Arrival in Arctic Sweden & the First Northern Lights Hunt", text: "Arrival in Arctic Sweden & the First Northern Lights Hunt · Arrival at Kiruna Airport & the train to Abisko Turiststation · Settling in & a walk to the Lapporten viewpoint · Chairlift to Aurora Sky Station for the first Northern Lights hunt", place: "Abisko, Sweden" },
  { page: "abisko.html", day: 2, title: "Dog Sledding & a Sami Reindeer Evening", text: "Dog Sledding & a Sami Reindeer Evening · Husky farm briefing & meeting the team · Dog sledding safari through the birch forest · Sami reindeer encounter & a lavvu tent dinner", place: "Abisko, Sweden" },
  { page: "abisko.html", day: 3, title: "Snowshoeing, Ice Fishing & the Blue Hole on Frozen Torneträsk", text: "Snowshoeing, Ice Fishing & the Blue Hole on Frozen Torneträsk · Guided snowshoe hike into Abisko National Park · Ice fishing for Arctic char on Lake Torneträsk · Aurora watch from inside Abisko's \"blue hole\"", place: "Abisko, Sweden" },
  { page: "abisko.html", day: 4, title: "A Slow Morning at Abisko Turiststation & Departure", text: "A Slow Morning at Abisko Turiststation & Departure · Relaxed breakfast & a wood-fired sauna · A last walk in Abisko National Park · Train to Kiruna & departure", place: "Abisko, Sweden" },
  { page: "annecy.html", day: 1, title: "Arrival & the Canals of the Vieille Ville", text: "Arrival & the Canals of the Vieille Ville · Train into Annecy from Geneva or Lyon · The Thiou canals and the Palais de l'Île · Jardins de l'Europe and the Pont des Amours", place: "Annecy, France" },
  { page: "annecy.html", day: 2, title: "Lake Annecy: A Swim & a Boat Cruise", text: "Lake Annecy: A Swim & a Boat Cruise · A swim at the Plage de l'Impérial · A cruise on the Lac d'Annecy Express · A Savoyard dinner in the old town", place: "Annecy, France" },
  { page: "annecy.html", day: 3, title: "Cycling the Lakeshore & Château d'Annecy", text: "Cycling the Lakeshore & Château d'Annecy · Riding the Voie Verte lakeside greenway · Château d'Annecy and the Musée-Château · An excursion to Menthon-Saint-Bernard", place: "Annecy, France" },
  { page: "annecy.html", day: 4, title: "Paragliding over the Lake & Departure", text: "Paragliding over the Lake & Departure · Tandem paragliding from Col de la Forclaz · Panoramic views from Le Semnoz · Train back toward Geneva or Lyon", place: "Annecy, France" },
  { page: "bangkok-phuket.html", day: 1, title: "Arrival in Bangkok & Thonburi's Canals", text: "Arrival in Bangkok & Thonburi's Canals · Land at Suvarnabhumi & transfer to Sukhumvit · Longtail boat through Thonburi's khlongs to Khlong Bang Luang · Dinner cruise on the Chao Phraya", place: "Bangkok & Phuket, Thailand" },
  { page: "bangkok-phuket.html", day: 2, title: "Silk House, Cooking Class & a Muay Thai Fight", text: "Silk House, Cooking Class & a Muay Thai Fight · Jim Thompson House · Hands-on Thai cooking class · Fight night at Rajadamnern Stadium", place: "Bangkok & Phuket, Thailand" },
  { page: "bangkok-phuket.html", day: 3, title: "Fly to Phuket & the Big Buddha", text: "Fly to Phuket & the Big Buddha · Morning flight Bangkok to Phuket · The Big Buddha & Wat Chalong · Sunset on Patong Beach & Bangla Road", place: "Bangkok & Phuket, Thailand" },
  { page: "bangkok-phuket.html", day: 4, title: "Old Phuket Town & the West Coast Beaches", text: "Old Phuket Town & the West Coast Beaches · Thalang Road & Soi Rommanee · Karon or Kata Beach · Fresh seafood at Rawai", place: "Bangkok & Phuket, Thailand" },
  { page: "bangkok-phuket.html", day: 5, title: "Phang Nga Bay & James Bond Island", text: "Phang Nga Bay & James Bond Island · Boat tour into Phang Nga Bay · James Bond Island & Koh Panyee's floating village · Sunset at Laem Phromthep", place: "Bangkok & Phuket, Thailand" },
  { page: "bangkok-phuket.html", day: 6, title: "Phi Phi Islands Day Trip & Departure", text: "Phi Phi Islands Day Trip & Departure · Speedboat from Phuket to Phi Phi · Phi Phi viewpoint hike & Long Beach snorkel · Return to Phuket & transfer to the airport", place: "Bangkok & Phuket, Thailand" },
  { page: "colmar.html", day: 1, title: "Arrival & Colmar's Christmas Old Town", text: "Arrival & Colmar's Christmas Old Town · Arrival at Gare de Colmar and check-in near the old town · Place de l'Ancienne Douane and the Koifhus market · Petite Venise strung with lights, and a first cup of vin chaud", place: "Colmar, France" },
  { page: "colmar.html", day: 2, title: "Colmar's Old Town in Depth", text: "Colmar's Old Town in Depth · Maison Pfister and the carved facades of the old town · Wandering Rue des Marchands and the Grand'Rue · Place Jeanne-d'Arc's market and the Marché Couvert", place: "Colmar, France" },
  { page: "colmar.html", day: 3, title: "Alsace Wine Route Villages: Riquewihr & Kaysersberg", text: "Alsace Wine Route Villages: Riquewihr & Kaysersberg · Riquewihr's walled village market · Kaysersberg, voted France's favorite village · Back to Colmar for a second evening among the market lights", place: "Colmar, France" },
  { page: "colmar.html", day: 4, title: "Eguisheim's Circular Market & Farewell to Alsace", text: "Eguisheim's Circular Market & Farewell to Alsace · Eguisheim's circular village market · Last-minute shopping at the Marché Couvert · Transfer to Gare de Colmar for departure", place: "Colmar, France" },
  { page: "dublin.html", day: 1, title: "Trinity College & Temple Bar", text: "Trinity College & Temple Bar · Arrival & transfer into the city center · Trinity College: the Book of Kells & the Long Room · Grafton Street & Temple Bar's first pints", place: "Dublin, Ireland" },
  { page: "dublin.html", day: 2, title: "Dublin Castle, St Patrick's & the Guinness Storehouse", text: "Dublin Castle, St Patrick's & the Guinness Storehouse · Dublin Castle · St Patrick's Cathedral · Guinness Storehouse & the Gravity Bar", place: "Dublin, Ireland" },
  { page: "dublin.html", day: 3, title: "Kilmainham Gaol & the National Museum", text: "Kilmainham Gaol & the National Museum · Kilmainham Gaol · National Museum of Ireland – Archaeology · A real trad session in Smithfield", place: "Dublin, Ireland" },
  { page: "dublin.html", day: 4, title: "Glendalough & the Wicklow Mountains", text: "Glendalough & the Wicklow Mountains · Drive to Glendalough via the Wicklow Mountains · Upper Lake hike & Lough Tay viewpoint · Return to Dublin & departure", place: "Dublin, Ireland" },
  { page: "iceland.html", day: 1, title: "Keflavik Arrival, the Blue Lagoon & First Reykjavik Night", text: "Keflavik Arrival, the Blue Lagoon & First Reykjavik Night · Land at Keflavik & pick up a 4x4 with winter tires · Blue Lagoon geothermal spa · Downtown Reykjavik & a first Northern Lights watch", place: "Iceland" },
  { page: "iceland.html", day: 2, title: "The Golden Circle: Thingvellir, Geysir & Gullfoss", text: "The Golden Circle: Thingvellir, Geysir & Gullfoss · Thingvellir National Park · Geysir geothermal field & Strokkur · Gullfoss waterfall", place: "Iceland" },
  { page: "iceland.html", day: 3, title: "South Coast Waterfalls & the Black Sand Coast", text: "South Coast Waterfalls & the Black Sand Coast · Seljalandsfoss & Gljufrabui · Skogafoss waterfall · Reynisfjara black sand beach & Vik", place: "Iceland" },
  { page: "iceland.html", day: 4, title: "Jokulsarlon Glacier Lagoon, Diamond Beach & a Blue Ice Cave", text: "Jokulsarlon Glacier Lagoon, Diamond Beach & a Blue Ice Cave · Drive to Vatnajokull National Park & a guided blue ice cave · Jokulsarlon Glacier Lagoon & Diamond Beach · Long drive back toward the South Coast", place: "Iceland" },
  { page: "iceland.html", day: 5, title: "Return to Reykjavik & Departure", text: "Return to Reykjavik & Departure · Scenic drive back to Reykjavik · Harpa Concert Hall & downtown Reykjavik · Return rental car & depart from Keflavik", place: "Iceland" },
  { page: "interlaken.html", day: 1, title: "Arrival on the Bödeli", text: "Arrival on the Bödeli · Train in to Interlaken West · Höhematte park and a walk down the Höheweg · An evening along the turquoise Aare canal", place: "Interlaken, Switzerland" },
  { page: "interlaken.html", day: 2, title: "Harder Kulm's Eagle's Nest & Tandem Paragliding", text: "Harder Kulm's Eagle's Nest & Tandem Paragliding · Harderbahn funicular up to Harder Kulm · The eagle's-nest terrace over both lakes · Tandem paragliding, landing back in Höhematte", place: "Interlaken, Switzerland" },
  { page: "interlaken.html", day: 3, title: "Lake Thun", text: "Lake Thun · BLS boat cruise from Interlaken West · St. Beatus Caves · Oberhofen Castle on the lakeshore", place: "Interlaken, Switzerland" },
  { page: "interlaken.html", day: 4, title: "Lake Brienz & Departure", text: "Lake Brienz & Departure · A swim or boat out on Lake Brienz · Giessbach Falls and Switzerland's oldest funicular · Train departure via Interlaken Ost or West", place: "Interlaken, Switzerland" },
  { page: "krakow.html", day: 1, title: "Arrival & the Rynek Główny", text: "Arrival & the Rynek Główny · Arrival & check-in near the Old Town · Rynek Główny & the Cloth Hall · St. Mary's Basilica & the hourly bugle call", place: "Krakow, Poland" },
  { page: "krakow.html", day: 2, title: "Wawel Hill & the Kazimierz Jewish Quarter", text: "Wawel Hill & the Kazimierz Jewish Quarter · Wawel Castle & Cathedral · Schindler's Factory Museum & Kazimierz's synagogues · Plac Nowy & Kazimierz after dark", place: "Krakow, Poland" },
  { page: "krakow.html", day: 3, title: "Auschwitz-Birkenau Memorial and Museum", text: "Auschwitz-Birkenau Memorial and Museum · Travel to Oświęcim & Auschwitz I · Auschwitz II-Birkenau · Return to Krakow", place: "Krakow, Poland" },
  { page: "krakow.html", day: 4, title: "Wieliczka Salt Mine & Departure", text: "Wieliczka Salt Mine & Departure · Wieliczka Salt Mine · A milk-bar lunch & last-minute shopping · Transfer to Kraków-Balice for departure", place: "Krakow, Poland" },
  { page: "lofoten.html", day: 1, title: "Arrival & Settling Into Reine", text: "Arrival & Settling Into Reine · Fly into Bodø, then a short hop to Leknes · Rental car pickup & the E10 south to Reine · Check into a red rorbu & a first walk around Reine's harbour", place: "Lofoten Islands, Norway" },
  { page: "lofoten.html", day: 2, title: "Reinebringen & the Reine Postcard View", text: "Reinebringen & the Reine Postcard View · Reinebringen: the Sherpa staircase · Wander Reine's harbour & photograph the red rorbuer · Golden hour at the Hamnøy bridge", place: "Lofoten Islands, Norway" },
  { page: "lofoten.html", day: 3, title: "Kvalvika Beach, Å & Nusfjord", text: "Kvalvika Beach, Å & Nusfjord · Ridge hike in to Kvalvika Beach · Å i Lofoten: the literal end of the road · Nusfjord's preserved 19th-century fishing village", place: "Lofoten Islands, Norway" },
  { page: "lofoten.html", day: 4, title: "Haukland, Uttakleiv & the Midnight Sun", text: "Haukland, Uttakleiv & the Midnight Sun · Haukland Beach · Uttakleiv Beach & the coastal footpath · Midnight sun boat trip toward Trollfjord", place: "Lofoten Islands, Norway" },
  { page: "lofoten.html", day: 5, title: "Henningsvær & Departure", text: "Henningsvær & Departure · Henningsvær's football pitch & harbor galleries · Scenic drive back along the E10 to Leknes · Return the rental car & fly out via Bodø", place: "Lofoten Islands, Norway" },
  { page: "london.html", day: 1, title: "Westminster & Royal London", text: "Westminster & Royal London · Westminster Abbey & the Houses of Parliament · Buckingham Palace & the Changing of the Guard · South Bank walk & the London Eye at sunset", place: "London, England" },
  { page: "london.html", day: 2, title: "The Tower, the City & Borough Market", text: "The Tower, the City & Borough Market · Tower of London & the Crown Jewels · Tower Bridge & Borough Market lunch · Shakespeare's Globe & a riverside pub dinner", place: "London, England" },
  { page: "london.html", day: 3, title: "Museums & the West End", text: "Museums & the West End · The British Museum · Covent Garden · A West End show", place: "London, England" },
  { page: "london.html", day: 4, title: "Notting Hill, Afternoon Tea & Camden", text: "Notting Hill, Afternoon Tea & Camden · Portobello Road & Notting Hill · Traditional afternoon tea · Camden Market & the canal at golden hour", place: "London, England" },
  { page: "london.html", day: 5, title: "Greenwich & Farewell London", text: "Greenwich & Farewell London · Greenwich, Cutty Sark & the Prime Meridian · Sky Garden's free skyline view · A traditional pub dinner & departure", place: "London, England" },
  { page: "puglia.html", day: 1, title: "Bari: Arrival & the Old Town's Pasta Alleys", text: "Bari: Arrival & the Old Town's Pasta Alleys · Land in Bari & pick up the rental car · Watch orecchiette made by hand in Bari Vecchia · Sunset walk & seafood on the Lungomare", place: "Puglia, Italy" },
  { page: "puglia.html", day: 2, title: "Polignano a Mare & the Adriatic Cliffs", text: "Polignano a Mare & the Adriatic Cliffs · Lama Monachile cove & the cliffside old town · Cliffside walk to the diving platform & lunch over the sea · Drive to the Valle d'Itria & check into a trullo stay", place: "Puglia, Italy" },
  { page: "puglia.html", day: 3, title: "Alberobello's Trulli & Locorotondo", text: "Alberobello's Trulli & Locorotondo · Rione Monti & Rione Aia Piccola, Alberobello's UNESCO trulli · Locorotondo's circular old town · Masseria dinner experience in the Valle d'Itria", place: "Puglia, Italy" },
  { page: "puglia.html", day: 4, title: "Ostuni, the White City & Torre Guaceto", text: "Ostuni, the White City & Torre Guaceto · Ostuni's whitewashed hilltop center & Cattedrale · Torre Guaceto nature reserve beach & snorkeling · Drive to Lecce & an evening passeggiata", place: "Puglia, Italy" },
  { page: "puglia.html", day: 5, title: "Lecce, the Florence of the Baroque South", text: "Lecce, the Florence of the Baroque South · Piazza del Duomo & Lecce's Baroque stone facades · Basilica di Santa Croce & the Roman amphitheater · Aperitivo in Piazza Sant'Oronzo", place: "Puglia, Italy" },
  { page: "puglia.html", day: 6, title: "Salento Coast, Otranto & Departure", text: "Salento Coast, Otranto & Departure · Otranto's Aragonese Castle & the cathedral's mosaic floor · Beach time at Torre dell'Orso · Return the rental car & fly out of Bari", place: "Puglia, Italy" },
  { page: "salzburg.html", day: 1, title: "Arrival & the Getreidegasse", text: "Arrival & the Getreidegasse · Arrival & check-in near the Altstadt · Getreidegasse's iron signs & Mozart's Birthplace · Residenzplatz & a first Austrian dinner", place: "Salzburg, Austria" },
  { page: "salzburg.html", day: 2, title: "Hohensalzburg Fortress & St. Peter's", text: "Hohensalzburg Fortress & St. Peter's · Festungsbahn funicular to Hohensalzburg Fortress · St. Peter's Cemetery & catacombs · Augustiner Bräustübl monastery brewery", place: "Salzburg, Austria" },
  { page: "salzburg.html", day: 3, title: "Mirabell Gardens, Mozart's Residence & Hellbrunn", text: "Mirabell Gardens, Mozart's Residence & Hellbrunn · Mirabell Palace & Gardens · Mozart's Residence on Makartplatz · Hellbrunn Palace's trick fountains", place: "Salzburg, Austria" },
  { page: "salzburg.html", day: 4, title: "Wolfgangsee Day Trip & Departure", text: "Wolfgangsee Day Trip & Departure · Bus & boat to Wolfgangsee · St. Wolfgang village & the White Horse Inn · Return to Salzburg & departure", place: "Salzburg, Austria" },
  { page: "seoul.html", day: 1, title: "Arrival & Myeongdong Nights", text: "Arrival & Myeongdong Nights · Arrival at Incheon International Airport & AREX transfer · Check-in & up Namsan by cable car · Myeongdong's street food stalls & neon shopping", place: "Seoul, South Korea" },
  { page: "seoul.html", day: 2, title: "Gyeongbokgung Palace & Bukchon Hanok Village", text: "Gyeongbokgung Palace & Bukchon Hanok Village · Gyeongbokgung Palace in hanbok · Bukchon Hanok Village's hillside alleys · Insadong's tea houses & craft streets", place: "Seoul, South Korea" },
  { page: "seoul.html", day: 3, title: "Markets, Design & Hongdae Nights", text: "Markets, Design & Hongdae Nights · Gwangjang Market's food stalls · Dongdaemun Design Plaza · Hongdae's street art & nightlife", place: "Seoul, South Korea" },
  { page: "seoul.html", day: 4, title: "Han River, Jjimjilbang & Korean BBQ", text: "Han River, Jjimjilbang & Korean BBQ · Biking & picnicking at Yeouido Hangang Park · A jjimjilbang sweat & sauna session · Korean BBQ & the Banpo Bridge fountain", place: "Seoul, South Korea" },
  { page: "seoul.html", day: 5, title: "Gangnam, Last Bites & Departure", text: "Gangnam, Last Bites & Departure · Starfield Library & a Gangnam stroll · Last-minute shopping at Namdaemun Market · AREX transfer to Incheon Airport for departure", place: "Seoul, South Korea" },
  { page: "tenerife.html", day: 1, title: "Arrival & Costa Adeje's Resort Coast", text: "Arrival & Costa Adeje's Resort Coast · Land at Tenerife South & transfer to Costa Adeje · Playa del Duque · Dinner at the Los Cristianos harbourfront", place: "Tenerife, Spain" },
  { page: "tenerife.html", day: 2, title: "Siam Park & Playa de las Américas", text: "Siam Park & Playa de las Américas · Arrive early at Siam Park · Wave Palace & Siam Beach · Dinner & the strip at Playa de las Américas", place: "Tenerife, Spain" },
  { page: "tenerife.html", day: 3, title: "Loro Parque, Puerto de la Cruz & La Orotava", text: "Loro Parque, Puerto de la Cruz & La Orotava · Loro Parque's parrots, penguins & orcas · Lago Martiánez · La Orotava's balconied old town", place: "Tenerife, Spain" },
  { page: "tenerife.html", day: 4, title: "Mount Teide National Park & a Night Under the Stars", text: "Mount Teide National Park & a Night Under the Stars · Drive up through La Orotava valley to Llano de Ucanca · Cable car toward Teide's summit · Stargazing near the Teide Observatory", place: "Tenerife, Spain" },
  { page: "tenerife.html", day: 5, title: "Whale Watching, Paragliding & Departure", text: "Whale Watching, Paragliding & Departure · Whale & dolphin watching boat trip · Tandem paragliding above Costa Adeje · Return the car & fly home from Tenerife South", place: "Tenerife, Spain" },
  { page: "mount-fuji.html", day: 1, title: "Arrival & the Chureito Pagoda", text: "Arrival & the Chureito Pagoda · Direct highway bus from Shinjuku to Kawaguchiko · The 398 steps to Chureito Pagoda · Hoto noodles & check into a Fuji-view ryokan", place: "Fuji Five Lakes, Japan" },
  { page: "mount-fuji.html", day: 2, title: "Lake Kawaguchiko & the Kachi Kachi Yama Ropeway", text: "Lake Kawaguchiko & the Kachi Kachi Yama Ropeway · Kachi Kachi Yama Ropeway to Mount Tenjo · A cruise across Lake Kawaguchiko · Kaiseki dinner with a sunset view of Fuji", place: "Fuji Five Lakes, Japan" },
  { page: "mount-fuji.html", day: 3, title: "Oshino Hakkai & the Fuji Subaru Line 5th Station", text: "Oshino Hakkai & the Fuji Subaru Line 5th Station · Oshino Hakkai's eight spring-fed ponds · Fuji Subaru Line 5th Station · Stargazing, or plan the summit for July-September", place: "Fuji Five Lakes, Japan" },
  { page: "mount-fuji.html", day: 4, title: "Fuji Sengen Shrine & Return to Tokyo", text: "Fuji Sengen Shrine & Return to Tokyo · Kitaguchi Hongu Fuji Sengen Shrine · A last lakeside walk in Kawaguchiko · Highway bus back to Shinjuku", place: "Fuji Five Lakes, Japan" },
  { page: "valensole.html", day: 1, title: "Arrival & Into the Plateau de Valensole", text: "Arrival & Into the Plateau de Valensole · Land in Marseille & pick up the rental car · Check into a farmhouse near Valensole village · First lavender-field golden-hour drive", place: "Valensole, France" },
  { page: "valensole.html", day: 2, title: "Golden-Hour Lavender Fields & Valensole Village", text: "Golden-Hour Lavender Fields & Valensole Village · Sunrise among the lavender rows · Lavender distillery tour & the village center · Provençal market dinner in Valensole", place: "Valensole, France" },
  { page: "valensole.html", day: 3, title: "Moustiers-Sainte-Marie & Gorges du Verdon", text: "Moustiers-Sainte-Marie & Gorges du Verdon · Moustiers-Sainte-Marie, a hilltop village wedged into a cliff · Gorges du Verdon scenic drive · Lac de Sainte-Croix at the mouth of the gorge", place: "Valensole, France" },
  { page: "valensole.html", day: 4, title: "Lac de Sainte-Croix, Market & Departure", text: "Lac de Sainte-Croix, Market & Departure · Swim or kayak on Lac de Sainte-Croix · Provençal market: herbes de Provence & rosé · Return the rental car & fly out", place: "Valensole, France" },
  { page: "salar-de-uyuni.html", day: 1, title: "Arrival in Uyuni & the Train Cemetery", text: "Arrival in Uyuni & the Train Cemetery · Fly in and settle into Uyuni town · The Great Train Cemetery · First Bolivian meal and tour briefing", place: "Salar de Uyuni, Bolivia" },
  { page: "salar-de-uyuni.html", day: 2, title: "Onto the Salt Flat: Incahuasi Island & the Sunset Mirror", text: "Onto the Salt Flat: Incahuasi Island & the Sunset Mirror · Onto the salt flat: the Dakar monument and salt piles · Incahuasi Island and the Ojos de Sal · Forced-perspective photos and the sunset mirror", place: "Salar de Uyuni, Bolivia" },
  { page: "salar-de-uyuni.html", day: 3, title: "Colored Lagoons Day Trip: Geysers, Flamingos & Hot Springs", text: "Colored Lagoons Day Trip: Geysers, Flamingos & Hot Springs · Sol de Mañana geysers at sunrise · Laguna Colorada's flamingos · Termas de Polques hot springs", place: "Salar de Uyuni, Bolivia" },
  { page: "salar-de-uyuni.html", day: 4, title: "Sunrise Mirror Finale & Departure", text: "Sunrise Mirror Finale & Departure · Sunrise on the mirror · One last look across the flat · Transfer out of Uyuni", place: "Salar de Uyuni, Bolivia" },
  { page: "vatnajokull.html", day: 1, title: "Arrival in Höfn & First Views of the Ice Cap", text: "Arrival in Höfn & First Views of the Ice Cap · The long drive east to Höfn, or a short regional flight · Settling into Höfn & a first look at Vatnajökull's ice cap · A langoustine dinner in Iceland's self-declared lobster capital", place: "Vatnajökull, Iceland" },
  { page: "vatnajokull.html", day: 2, title: "A Guided Blue Ice Cave Inside Vatnajökull", text: "A Guided Blue Ice Cave Inside Vatnajökull · Meet your glacier guide & the super jeep ride onto the ice · Walking inside a natural blue ice cave · A slow evening back in Höfn", place: "Vatnajökull, Iceland" },
  { page: "vatnajokull.html", day: 3, title: "Skaftafell Nature Reserve: Glacier Hiking & Svartifoss", text: "Skaftafell Nature Reserve: Glacier Hiking & Svartifoss · Crampons on: a guided glacier hike up Svínafellsjökull · Svartifoss: the waterfall that inspired Hallgrímskirkja · Sunset over the Skaftafellsjökull glacier tongue", place: "Vatnajökull, Iceland" },
  { page: "vatnajokull.html", day: 4, title: "Jökulsárlón Glacier Lagoon & Diamond Beach, in Depth", text: "Jökulsárlón Glacier Lagoon & Diamond Beach, in Depth · A zodiac boat trip weaving between the icebergs · Diamond Beach: hours, not minutes, with the ice · Long drive back, or fly out from Höfn", place: "Vatnajökull, Iceland" },
  { page: "tallinn.html", day: 1, title: "Arrival & the Medieval Old Town", text: "Arrival & the Medieval Old Town · Arrival & check-in near the Old Town · Raekoja plats & the Town Hall · A medieval-style dinner & first taste of Estonia", place: "Tallinn, Estonia" },
  { page: "tallinn.html", day: 2, title: "Toompea Hill & Panoramic Viewpoints", text: "Toompea Hill & Panoramic Viewpoints · Toompea Hill & Alexander Nevsky Cathedral · Toompea Castle & the Kohtuotsa viewing platform · St. Olaf's Church tower & a Vana Tallinn nightcap", place: "Tallinn, Estonia" },
  { page: "tallinn.html", day: 3, title: "City Walls, Kalamaja & Telliskivi", text: "City Walls, Kalamaja & Telliskivi · The city walls & Kiek in de Kök · Kalamaja's colorful wooden houses · Telliskivi Creative City after dark", place: "Tallinn, Estonia" },
  { page: "tallinn.html", day: 4, title: "Seaplane Harbour, e-Estonia & Departure", text: "Seaplane Harbour, e-Estonia & Departure · Seaplane Harbour & Patarei Sea Fortress · e-Estonia & last-minute shopping · Transfer to Lennart Meri Airport for departure", place: "Tallinn, Estonia" },
  { page: "megeve.html", day: 1, title: "Arrival & the Pedestrian Village Center", text: "Arrival & the Pedestrian Village Center · Private or shared transfer from Geneva · Check in and a first walk through Place de l'Église · Fondue or raclette at a chalet restaurant", place: "Megève, France" },
  { page: "megeve.html", day: 2, title: "Gentle Skiing on Rochebrune & Mont d'Arbois", text: "Gentle Skiing on Rochebrune & Mont d'Arbois · Cable car up to Rochebrune and a first run · A long lunch on a sun terrace · Gondola to Mont d'Arbois for the Mont Blanc panorama", place: "Megève, France" },
  { page: "megeve.html", day: 3, title: "Village Traditions & Gourmet Dining", text: "Village Traditions & Gourmet Dining · A traditional sleigh ride through the snow · Browsing Rue Charles Feige and Rue Ambroise Martin · A reserved table at one of Megève's celebrated restaurants", place: "Megève, France" },
  { page: "megeve.html", day: 4, title: "Spa Morning, Ice Skating & Departure", text: "Spa Morning, Ice Skating & Departure · A slow morning at the hotel spa · A few laps on the Place de la Résistance rink · Last coffee and the transfer back to Geneva", place: "Megève, France" },
];

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
   actually exist on the site (sourced from TRIP_CATALOG), plus any
   specific day inside another trip's itinerary whose title or
   activities mention the query (sourced from DAY_INDEX) — e.g.
   searching "Ruakuri Cave" surfaces Waitomo Day 2 even though
   "Ruakuri" never appears in a destination name. Selecting a
   destination match fills the field (it does not navigate away), so
   the rest of the search form (travel style, duration) still applies
   when the user submits. Selecting a day match navigates straight to
   that day on its destination page. Pass onSelect to react to a
   destination pick, e.g. to re-run a live filter. */
function attachTripAutocomplete(input, onSelect) {
  if (!input) return;

  const entries = Object.entries(TRIP_CATALOG).sort((a, b) => a[1].place.localeCompare(b[1].place));
  const dayEntries = typeof DAY_INDEX !== "undefined" ? DAY_INDEX : [];
  const MAX_DAY_MATCHES = 6;
  const panel = document.createElement("div");
  panel.className = "search-autocomplete";
  panel.setAttribute("role", "listbox");
  input.insertAdjacentElement("afterend", panel);
  input.setAttribute("autocomplete", "off");

  let activeIndex = -1;
  let currentMatches = []; // flat list of { kind: "dest"|"day", ... } in display order

  function close() {
    panel.classList.remove("is-open");
    activeIndex = -1;
  }

  function renderActive() {
    Array.from(panel.querySelectorAll(".search-autocomplete-item")).forEach((el, i) => el.classList.toggle("is-active", i === activeIndex));
  }

  function selectDest(id, trip) {
    input.value = trip.place;
    close();
    if (onSelect) onSelect(id, trip);
  }

  function selectDay(dayEntry) {
    close();
    window.location.href = `${dayEntry.page}#day-${dayEntry.day}`;
  }

  function open(query) {
    const q = query.trim().toLowerCase();
    const destMatches = q ? entries.filter(([, trip]) => trip.place.toLowerCase().includes(q) || trip.title.toLowerCase().includes(q)) : entries;
    const dayMatches = q ? dayEntries.filter((d) => d.text.toLowerCase().includes(q)).slice(0, MAX_DAY_MATCHES) : [];
    currentMatches = [
      ...destMatches.map(([id, trip]) => ({ kind: "dest", id, trip })),
      ...dayMatches.map((dayEntry) => ({ kind: "day", dayEntry })),
    ];
    activeIndex = -1;
    panel.innerHTML = "";

    if (!currentMatches.length) {
      panel.innerHTML = '<div class="search-autocomplete-empty">No trips match, try Browse All Trips instead.</div>';
      panel.classList.add("is-open");
      return;
    }

    if (destMatches.length && dayMatches.length) {
      const label = document.createElement("div");
      label.className = "search-autocomplete-section-label";
      label.textContent = "Destinations";
      panel.appendChild(label);
    }

    destMatches.forEach(([id, trip]) => {
      const item = document.createElement("div");
      item.className = "search-autocomplete-item";
      item.setAttribute("role", "option");
      item.textContent = trip.place;
      item.addEventListener("mousedown", (e) => {
        e.preventDefault(); // fires before input blur, so the click always registers
        selectDest(id, trip);
      });
      panel.appendChild(item);
    });

    if (dayMatches.length) {
      if (destMatches.length) {
        const label = document.createElement("div");
        label.className = "search-autocomplete-section-label";
        label.textContent = "Specific stops in other itineraries";
        panel.appendChild(label);
      }
      dayMatches.forEach((dayEntry) => {
        const item = document.createElement("div");
        item.className = "search-autocomplete-item is-day";
        item.setAttribute("role", "option");
        const strong = document.createElement("strong");
        strong.textContent = dayEntry.title;
        const small = document.createElement("small");
        small.textContent = `Day ${dayEntry.day} · ${dayEntry.place}`;
        item.append(strong, small);
        item.addEventListener("mousedown", (e) => {
          e.preventDefault();
          selectDay(dayEntry);
        });
        panel.appendChild(item);
      });
    }

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
      const match = currentMatches[activeIndex];
      if (match.kind === "day") {
        selectDay(match.dayEntry);
      } else {
        selectDest(match.id, match.trip);
      }
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

    // Deep link to one specific day (from a search result elsewhere on the
    // site, e.g. wander-list.com/waitomo.html#day-2): open and scroll to it.
    const dayHashMatch = window.location.hash.match(/^#day-(\d+)$/);
    if (dayHashMatch) {
      const targetDay = dayList.querySelectorAll(".day-item")[parseInt(dayHashMatch[1], 10) - 1];
      if (targetDay) {
        targetDay.classList.add("open", "highlight");
        // Scroll after the accordion's expand transition settles, so the
        // final (open) height is what the scroll position is based on —
        // scrolling immediately would measure the still-collapsed height.
        setTimeout(() => {
          targetDay.scrollIntoView({ behavior: "auto", block: "start" });
        }, 360);
        setTimeout(() => targetDay.classList.remove("highlight"), 2600);
      }
    }
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
