/**
 * Eldvik — swaps the Tank/Healer/DPS role icons for real image files, if
 * they exist.
 *
 * To use your own artwork later: just add images/tank.png, images/healer.png
 * and/or images/dps.png (any of the three, no need to add all at once).
 * This script checks whether each file exists, and if it does, uses it in
 * place of the built-in icon. If a file isn't there, nothing changes —
 * the built-in icon keeps showing, and nothing breaks.
 *
 * You don't need to edit this file or any other code to do this.
 */
(function () {
  "use strict";

  var ROLE_IMAGES = {
    tank: "images/tank.png",
    healer: "images/healer.png",
    dps: "images/dps.png"
  };

  document.addEventListener("DOMContentLoaded", function () {
    Object.keys(ROLE_IMAGES).forEach(function (role) {
      var container = document.querySelector('[data-role-icon="' + role + '"]');
      if (!container) return;

      var src = ROLE_IMAGES[role];
      var probe = new Image();
      probe.onload = function () {
        container.innerHTML = "";
        var img = document.createElement("img");
        img.src = src;
        img.alt = "";
        img.className = "recruit-row__icon-img";
        container.appendChild(img);
      };
      // onerror intentionally does nothing — the inline SVG already in
      // the page stays as the fallback.
      probe.src = src;
    });
  });
})();
