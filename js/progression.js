/**
 * Eldvik — fills in the raid progression fields from js/progression-data.js.
 * The HTML already contains today's correct values as a fallback, so this
 * only matters once someone updates the data file.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var data = window.ELDVIK_PROGRESSION || {};

    document.querySelectorAll("[data-progression]").forEach(function (el) {
      var key = el.getAttribute("data-progression");
      if (!Object.prototype.hasOwnProperty.call(data, key)) return;

      var value = data[key];
      el.textContent = value ? value : "Not tracked yet";
      el.classList.toggle("is-empty", !value);
    });
  });
})();
