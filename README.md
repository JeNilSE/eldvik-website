# Eldvik website — notes for future you

This is a plain website: just HTML, CSS and a little JavaScript. No installs,
no build step. You can hand this whole folder to Claude any time and say
"update X" — these notes are just so you know what's here.

## What's in this folder

- `index.html`, `about.html`, `recruitment.html`, `progression.html`,
  `join.html` — the pages. (`join.html` isn't in the menu — it's reached via
  the "How to join" button on the Recruitment page.)
- `css/style.css` — all the colors, fonts and layout.
- `js/config.js` — **the Discord invite link lives here, in one place.**
- `js/progression-data.js` — **raid status and boss kills live here, in one
  place**, for the Progression page.
- `js/news-data.js` — **guild news posts live here, in one place**. Copy an
  entry, change the date/title/text, save — the Home page always shows the
  3 newest automatically.
- `js/main.js` — small page behaviors (mobile menu, filling in the Discord link).
- `js/i18n.js` / `js/progression.js` / `js/news.js` — the systems that read
  the data files above.
- `lang/en.json` — the English text, kept here as the master copy for translators.
- `images/banner.jpg`, `images/icon.jpg` — your artwork.

## Things you'll probably ask Claude to change later

- **"Update the Discord link"** → one line in `js/config.js`.
- **"Update a raid's status / boss kills"** → `js/progression-data.js`.
- **"Add a news post"** → `js/news-data.js`.
- **"Open/close recruitment for a role"** → `js/recruitment-data.js`.
- **"Use a real image for the Tank/Healer/DPS icons"** → just add
  `images/tank.png`, `images/healer.png` and/or `images/dps.png`. The site
  automatically uses a file the moment it exists; no code changes needed.
- **"Update the faction / raid nights"** → the info boxes near the top
  of `index.html` and `recruitment.html` (currently say "TBA").
- **"Add Swedish/Norwegian/Danish"** → Claude copies `lang/en.json` to e.g.
  `lang/sv.json`, translates it, and adds one line in `js/i18n.js`. No other
  files need to change, and the site doesn't need to be rebuilt — just
  re-published (see deployment notes separately).
- **"Change the banner or logo image"** → replace `images/banner.jpg` or
  `images/icon.jpg` with a new file of the same name.

## Previewing on your own computer

Double-click `index.html` — it opens in your browser and works fully in
English. (The other languages, once added, need the site to be viewed via a
real web address rather than double-clicking a file — Claude will handle
that automatically once we get to deployment.)
