/**
 * Eldvik — applies js/recruitment-data.js to the role status rows on the
 * Recruitment page. The HTML already shows "Open" for every role as a
 * fallback, so this only matters once a role is marked "closed".
 */
(function () {
  "use strict";

  var ICON_OPEN = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>';
  var ICON_CLOSED = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  document.addEventListener("DOMContentLoaded", function () {
    var data = window.ELDVIK_RECRUITMENT || {};

    document.querySelectorAll("[data-recruitment-status]").forEach(function (el) {
      var role = el.getAttribute("data-recruitment-status");
      var isClosed = data[role] === "closed";

      el.classList.toggle("is-open", !isClosed);
      el.classList.toggle("is-closed", isClosed);

      var icon = el.querySelector(".recruit-row__status-icon");
      if (icon) icon.innerHTML = isClosed ? ICON_CLOSED : ICON_OPEN;

      var label = el.querySelector(".recruit-row__status-label");
      if (label) label.textContent = isClosed ? "Closed" : "Open";
    });
  });
})();
