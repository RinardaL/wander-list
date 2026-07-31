# Wander List / Journey Guide — Product & Technical Spec

## 1. Vision

A centralized web platform delivering complete, ready-to-go travel itineraries tailored to destination and theme. Replaces hours of research across blogs, forums, and PDFs with one curated guide per trip: what to do, when to do it, how to behave, what to pack, and how to save money/time.

## 2. Target Audience

| Segment | Need |
|---|---|
| Busy professionals & couples | High-quality, pre-planned vacation without 20+ hrs of research |
| First-time international travelers | Step-by-step cultural, logistical, and prep guidance |
| Group trip organizers | One shareable itinerary the whole group can agree on |

## 3. Unique Selling Point

Most travel content answers "where to go." This platform answers **where, when, how to behave, and what to prepare** — packaged as a single, actionable, bite-sized guide per trip, not an endless top-10 list.

## 4. Core Feature Areas

### 4.1 The Week Plan — Curated 7-Day Itineraries
- Browsable collections by trip style (budget, hidden gems, road trip, luxury, family, solo, etc.)
- Day-by-day timeline: morning / afternoon / evening blocks
- Each activity block includes: name, description, estimated duration, estimated travel time to next stop, cost indicator
- Collection = tagged by destination + theme (e.g. "Amalfi Coast" + "Budget")

### 4.2 Need to Know — Cultural & Local Etiquette Guides
- Culture cheat sheet: social norms, tipping %, dress codes (temple/church attire), key phrases
- Safety & practical rules: local laws, common scams, transit nuances
- Scoped per city/region/country — reusable across multiple itineraries in the same location

### 4.3 What to Bring — Smart Packing Checklists
- Interactive, checkable list, tailored to destination + season + activity level
- Includes electrical/voltage/plug-adapter info, terrain-specific gear (hiking vs. city)
- Exportable/printable as PDF
- User can check items off; state persists per trip

### 4.4 Insider Secrets — Pro Tips & Local Hacks
- Money-saving hacks: skip-the-line passes, city travel passes, budget dining
- Off-the-beaten-path: hidden viewpoints, sunset spots, local-favorite cafes
- Presented as short, scannable tip cards tied to the itinerary or destination

## 5. Content Model (Data Design)

Content is destination-centric with itineraries layered on top, so etiquette/packing/tips can be reused across multiple itineraries for the same place.

```
Destination
 ├─ id, name, country, region, coordinates, climate/season data
 ├─ EtiquetteGuide (1:1)       — social norms, tipping, dress code, phrases, laws, scams, transit
 ├─ PackingTemplate (1:many)   — keyed by season/activity-level; list of PackingItem
 └─ InsiderTips (1:many)       — money-saving / off-the-beaten-path, tagged by category

Itinerary ("Week Plan")
 ├─ id, title, destinationId, theme (budget/hidden-gems/road-trip/…), durationDays
 ├─ coverImage, summary, difficulty/pace rating
 └─ Days (1:many, ordered)
      └─ Day: dayNumber, title
           └─ Blocks (morning/afternoon/evening)
                └─ Activity: name, description, startTime, durationMin,
                             travelTimeToNextMin, transportMode, costTier, location(lat/lng)

User
 ├─ id, auth info, saved itineraries, packing-list check state
 └─ Trip (optional, user-created instance of an Itinerary with personalized dates/notes)
```

Key relationships:
- One Destination → many Itineraries (different themes/durations for the same place)
- One Destination → one EtiquetteGuide, many PackingTemplates (season-specific), many InsiderTips
- Packing checklist state and itinerary saves are per-user

## 6. Information Architecture / Page Structure

```
/                          Home — featured itineraries, browse by theme/destination
/browse                    Filterable grid: destination, theme, trip length, budget
/itinerary/[slug]          Full 7-day itinerary (day-by-day timeline)
/itinerary/[slug]/pack     Packing checklist for that itinerary's destination/season
/itinerary/[slug]/culture  Need-to-know etiquette & safety guide
/itinerary/[slug]/tips     Insider secrets for that destination
/destination/[slug]        Destination hub — all itineraries + shared etiquette/packing/tips
/account/saved             User's saved itineraries & trips
/account/packing-lists     Saved/checked packing lists, PDF export
```

Each itinerary page links out to its shared destination-level Culture, Packing, and Tips content — avoiding duplication when a destination has multiple itineraries.

## 7. Suggested Tech Stack (MVP)

- **Frontend**: Next.js (React) — SSR/SSG for SEO-friendly destination/itinerary pages
- **Styling**: Tailwind CSS
- **Backend/DB**: Postgres (via Prisma or Drizzone ORM) — relational fit for the model above
- **Auth**: NextAuth / Clerk (email + Google login)
- **PDF export**: react-pdf or a serverless PDF-generation endpoint for packing lists
- **Hosting**: Vercel (frontend) + managed Postgres (Supabase/Neon/RDS)
- **CMS for content authoring**: Headless CMS (e.g. Sanity or Payload) so itineraries/guides can be written without redeploying code — recommended given content is the core product, not just app logic

## 8. MVP Scope (Phase 1)

1. Browse + view itineraries (read-only, no auth required)
2. Day-by-day itinerary timeline with travel-time estimates
3. Destination culture/etiquette guide page
4. Packing checklist — interactive check-off, no persistence required for v1
5. Insider tips section
6. 3–5 fully authored sample itineraries across distinct destinations to prove the model

## 9. Phase 2+ (Post-MVP)

- User accounts: save itineraries, persist packing checklist state
- PDF export/download for packing lists and itineraries
- Group sharing (shareable link, collaborative checklist)
- User-submitted tips / ratings on itineraries
- Search/filter by budget tier, trip length, activity level
- Multi-language etiquette phrase support

## 10. Open Questions

- Who authors itinerary content — internal team, freelance local writers, or partially AI-assisted with human review?
- Monetization: subscription, one-time itinerary purchase, ads, or affiliate (booking/tours) links?
- Is offline access (beyond PDF) a requirement, e.g. PWA for use without signal while traveling?
