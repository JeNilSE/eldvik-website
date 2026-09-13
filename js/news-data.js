/**
 * Eldvik — guild news
 * ----------------------------------------------------------------
 * HOW TO ADD A NEW POST:
 *   1. Copy one whole { ... } block below, commas included.
 *   2. Paste it in anywhere inside the square brackets.
 *   3. Change "date", "title", "text" and "link" to your new post.
 *   4. Save the file.
 *
 * That's it. You do NOT need to keep the list in order yourself, and you
 * do NOT need to touch any other file — the Home page always shows the
 * 3 most recent posts automatically, newest first, based on "date".
 *
 * "date" must be written as YYYY-MM-DD (year-month-day) so the sorting
 * works correctly, for example "2026-09-13" for 13 September 2026.
 * "title" and "text" can be anything you like.
 *
 * "link" is OPTIONAL. If you give it a web address, the post's title
 * becomes a clickable link that opens in a new tab. Leave it as an empty
 * string ("") if a post has nothing to link to — the title will just be
 * plain text, and nothing breaks.
 */
window.ELDVIK_NEWS = [
  {
    date: "2026-09-13",
    title: "Eldvik is here",
    text: "We have started building Eldvik ahead of the launch of World of Warcraft: Forever. The Discord is open and we are looking for people to join us.",
    // Uses the same Discord link set in js/config.js, so it updates
    // automatically whenever that one changes.
    link: window.ELDVIK_CONFIG ? window.ELDVIK_CONFIG.discordInviteUrl : ""
  },
  {
    date: "2026-09-12",
    title: "World of Warcraft: Forever announced",
    text: "Blizzard announced World of Warcraft: Forever at BlizzCon. It launches on November 4, 2026, with three new zones, over 1000 new quests, nine new dungeons and two raids.",
    link: "https://www.wowhead.com/forever/news/classic-announced-at-blizzcon-warcraft-forever-382822"
  }
];
