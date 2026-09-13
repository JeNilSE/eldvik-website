/**
 * Eldvik — lightweight, no-rebuild translation system
 * ----------------------------------------------------------------
 * How this works:
 *  - Every page already contains its full English text directly in the
 *    HTML (marked with data-i18n="key" attributes). That means the site
 *    works perfectly even if this script fails to load — English is the
 *    safe fallback, always.
 *  - To ADD A LANGUAGE LATER (e.g. Swedish):
 *      1. Copy lang/en.json to lang/sv.json and translate the values.
 *      2. Add one line to the LANGUAGES list below, e.g.
 *         { code: "sv", label: "Svenska" }
 *    That's it — no rebuild, no other files need to change. The language
 *    switcher in the nav bar is generated automatically from this list.
 */
(function () {
  "use strict";

  // ---- Add new languages here (see instructions above) ----------------
  var LANGUAGES = [
    { code: "en", label: "English" }
    // { code: "sv", label: "Svenska" },
    // { code: "no", label: "Norsk" },
    // { code: "da", label: "Dansk" },
  ];
  // -----------------------------------------------------------------------

  var STORAGE_KEY = "eldvikLang";
  var DEFAULT_LANG = "en";

  function getStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredLang(code) {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      /* ignore (private browsing etc.) */
    }
  }

  function getUrlLang() {
    var params = new URLSearchParams(window.location.search);
    return params.get("lang");
  }

  function isKnownLanguage(code) {
    return LANGUAGES.some(function (l) { return l.code === code; });
  }

  function applyTranslations(dict) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });
  }

  function renderSwitcher(currentCode) {
    var containers = document.querySelectorAll(".lang-switch");
    if (!containers.length) return;

    // With only one language available, keep the switcher out of the way.
    if (LANGUAGES.length < 2) {
      containers.forEach(function (c) { c.style.display = "none"; });
      return;
    }

    var currentLabel = (LANGUAGES.filter(function (l) { return l.code === currentCode; })[0] || LANGUAGES[0]).label;

    containers.forEach(function (container) {
      container.innerHTML = "";
      container.style.display = "";

      var button = document.createElement("button");
      button.type = "button";
      button.className = "lang-switch__button";
      button.setAttribute("aria-haspopup", "true");
      button.setAttribute("aria-expanded", "false");
      button.textContent = currentLabel + " ▾";

      var menu = document.createElement("ul");
      menu.className = "lang-switch__menu";

      LANGUAGES.forEach(function (lang) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "?lang=" + lang.code;
        a.textContent = lang.label;
        a.addEventListener("click", function (e) {
          e.preventDefault();
          setStoredLang(lang.code);
          window.location.search = "?lang=" + lang.code;
        });
        li.appendChild(a);
        menu.appendChild(li);
      });

      container.appendChild(button);
      container.appendChild(menu);
    });
  }

  function init() {
    var urlLang = getUrlLang();
    var storedLang = getStoredLang();
    var lang = DEFAULT_LANG;

    if (urlLang && isKnownLanguage(urlLang)) {
      lang = urlLang;
      setStoredLang(urlLang);
    } else if (storedLang && isKnownLanguage(storedLang)) {
      lang = storedLang;
    }

    document.documentElement.setAttribute("lang", lang);
    renderSwitcher(lang);

    if (lang === DEFAULT_LANG) {
      return; // English is already in the HTML — nothing to fetch.
    }

    fetch("lang/" + lang + ".json")
      .then(function (res) {
        if (!res.ok) throw new Error("Translation file missing: " + lang);
        return res.json();
      })
      .then(applyTranslations)
      .catch(function () {
        // Translation file not ready yet — silently keep the English text.
        document.documentElement.setAttribute("lang", DEFAULT_LANG);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
