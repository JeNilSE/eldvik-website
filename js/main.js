/**
 * Eldvik — small page behaviours:
 *  - fills in every Discord link from js/config.js (one source of truth)
 *  - mobile nav toggle
 *  - current year in the footer
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // Wire up every Discord link/button from the single config value.
    var discordUrl = (window.ELDVIK_CONFIG && window.ELDVIK_CONFIG.discordInviteUrl) || "#";
    document.querySelectorAll("[data-discord-link]").forEach(function (el) {
      el.setAttribute("href", discordUrl);
    });

    // Mobile nav toggle.
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".site-nav__links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var isOpen = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }

    // Language switcher dropdown open/close.
    var langButton = document.querySelector(".lang-switch__button");
    var langMenu = document.querySelector(".lang-switch__menu");
    if (langButton && langMenu) {
      langButton.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = langMenu.classList.toggle("is-open");
        langButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      document.addEventListener("click", function () {
        langMenu.classList.remove("is-open");
        langButton.setAttribute("aria-expanded", "false");
      });
    }

    // Footer year.
    document.querySelectorAll("[data-current-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
