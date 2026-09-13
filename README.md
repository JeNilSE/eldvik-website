# Eldvik website — notes for future you

This is a plain website: just HTML, CSS and a little JavaScript. No installs,
no build step. You can hand this whole folder to Claude any time and say
"update X" — these notes are just so you know what's here.

## What's in this folder

- `index.html`, `about.html`, `recruitment.html`, `join.html` — the four pages.
- `css/style.css` — all the colors, fonts and layout.
- `js/config.js` — **the Discord invite link lives here, in one place.**
- `js/main.js` — small page behaviors (mobile menu, filling in the Discord link).
- `js/i18n.js` — the translation system (see below).
- `lang/en.json` — the English text, kept here as the master copy for translators.
- `images/banner.jpg`, `images/icon.jpg` — your artwork.

## Things you'll probably ask Claude to change later

- **"Update the Discord link"** → one line in `js/config.js`.
- **"Update the realm / faction / raid nights"** → the info boxes near the top
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
