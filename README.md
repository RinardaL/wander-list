# WanderList

Static site — plain HTML/CSS/JS, no build step, no backend, no dependencies to install.

## Open in VS Code

```
code "C:\Users\pc\OneDrive\wander-list"
```

## Run it locally

**Option A — Live Server extension (recommended)**
1. Install the "Live Server" extension (VS Code will prompt you via the recommendation, or search `ritwickdey.LiveServer` in the Extensions panel).
2. Right-click [index.html](index.html) → **Open with Live Server**.
3. It opens at `http://127.0.0.1:3000` and auto-reloads on save.

**Option B — terminal**
```
npm start
```
Serves the folder at `http://localhost:3000` (uses `npx serve`, no install needed — requires Node.js).

Don't open pages directly via `file://` (double-clicking the file) — always serve them over `http://` (Option A or B above). Some browsers handle script timing and lazy-loading differently over `file://`.

## Going live

### 1. Pick a host

This is a plain static site, so any static host works. Simplest options:

- **Netlify** — drag the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the Git repo for auto-deploys on push. A [netlify.toml](netlify.toml) is already included (security headers + sane CSS/JS caching).
- **Vercel** — `vercel deploy` from this folder, or connect the Git repo. No config file needed for a static site.
- **GitHub Pages** — push to a repo, enable Pages on the `main` branch.

All three (and most other static hosts) automatically serve [404.html](404.html) for any unmatched URL — no extra configuration needed.

### 2. Set your real domain

Every page currently has its canonical URL, Open Graph tags, and Twitter Card tags pointing at a placeholder: `https://www.wanderlist.example`. **This must be swapped to your real domain before launch**, or search engines and social previews will reference the wrong URL. `robots.txt` and `sitemap.xml` reference the same placeholder.

Once you have a domain, run this from the project folder (macOS/Linux/Git Bash):

```bash
grep -rl 'www.wanderlist.example' --include="*.html" --include="*.xml" --include="*.txt" . | \
  xargs sed -i 's/www\.wanderlist\.example/your-real-domain.com/g'
```

On Windows PowerShell:

```powershell
Get-ChildItem -Recurse -Include *.html,*.xml,*.txt | ForEach-Object {
  (Get-Content $_.FullName) -replace 'www\.wanderlist\.example', 'your-real-domain.com' | Set-Content $_.FullName
}
```

### 3. Pre-launch checklist

- [ ] Domain swapped everywhere (step 2 above)
- [ ] `contact.html`'s placeholder email (`hello@wanderlist.example`) updated to a real inbox
- [ ] Social links in the footer (currently `#`) pointed at real accounts, or removed
- [ ] Read through [privacy-policy.html](privacy-policy.html) and [terms.html](terms.html) — they're a reasonable starting scaffold, not legal advice; have them reviewed before relying on them
- [ ] Submit `sitemap.xml` to Google Search Console / Bing Webmaster Tools once the domain is live

## Structure

**Pages**
- [index.html](index.html) — homepage (hero, category browse, featured carousel, 3D globe, testimonials)
- [browse.html](browse.html) — full itinerary listing with style/budget/text filters
- [saved-trips.html](saved-trips.html) — renders whatever's saved in the visitor's browser (see Sessions below)
- 9 itinerary pages: [itinerary.html](itinerary.html) (Tokyo & Kyoto), [amalfi-coast.html](amalfi-coast.html), [utah-national-parks.html](utah-national-parks.html), [lisbon.html](lisbon.html), [banff.html](banff.html), [bali.html](bali.html), [paris.html](paris.html), [new-york-city.html](new-york-city.html), [barcelona.html](barcelona.html)
- [about.html](about.html), [how-it-works.html](how-it-works.html), [contact.html](contact.html)
- [privacy-policy.html](privacy-policy.html), [terms.html](terms.html)
- [404.html](404.html) — custom not-found page with a working search box

**Code**
- [css/style.css](css/style.css) — design system + styles
- [js/main.js](js/main.js) — all interactivity, animation, filtering, and session persistence
- [js/globe.js](js/globe.js) — the homepage's 3D globe (Three.js, loaded as an ES module from a CDN)

**SEO**
- [robots.txt](robots.txt), [sitemap.xml](sitemap.xml)
- Every page has a unique meta description, canonical tag, Open Graph + Twitter Card tags
- BreadcrumbList structured data (JSON-LD) on every page with a breadcrumb; FAQPage schema on How It Works

## Sessions (no account needed)

Two things persist per-browser via `localStorage`, with no login required:

- **Saved trips** — the ♥ button on any itinerary page saves it to `saved-trips.html`. Stored under the `wanderlist_saved_trips` key.
- **Packing checklist progress** — checked items persist per-trip, keyed by page filename (e.g. `wanderlist_packing_paris.html`).

This is intentionally device/browser-local, not account-based — clearing site data or switching browsers resets it. See [privacy-policy.html](privacy-policy.html) for the plain-language explanation shown to visitors.

## Notes

- Destination photos are hotlinked from Wikimedia Commons — an internet connection is required to see them load.
- [SPEC.md](SPEC.md) has the original product/technical spec.
