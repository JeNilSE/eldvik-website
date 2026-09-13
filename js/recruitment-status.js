/**
 * Eldvik — applies js/recruitment-data.js to the role status rows on the
 * Recruitment page. Both the open and closed icons are always in the
 * HTML; this just marks which one is active and updates the label, so
 * it works even if this script fails to load (everything defaults to
 * "open", matching js/recruitment-data.js's starting values).
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var data = window.ELDVIK_RECRUITMENT || {};

    document.querySelectorAll("[data-recruitment-status]").forEach(function (el) {
      var role = el.getAttribute("data-recruitment-status");
      var isClosed = data[role] === "closed";

      el.classList.toggle("is-open", !isClosed);
      el.classList.toggle("is-closed", isClosed);

      var label = el.querySelector(".recruit-row__status-label");
      if (label) label.textContent = isClosed ? "Closed" : "Open";
    });
  });
})();
