/**
 * Eldvik — renders the 3 most recent posts from js/news-data.js into
 * #news-list on the Home page, newest first.
 */
(function () {
  "use strict";

  var MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function formatDate(iso) {
    var parts = iso.split("-");
    var year = parseInt(parts[0], 10);
    var month = MONTHS[parseInt(parts[1], 10) - 1];
    var day = parseInt(parts[2], 10);
    return day + " " + month + " " + year;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("news-list");
    if (!container) return;

    var posts = (window.ELDVIK_NEWS || [])
      .slice()
      .sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; })
      .slice(0, 3);

    posts.forEach(function (post) {
      var item = document.createElement("article");
      item.className = "news-item";

      var date = document.createElement("p");
      date.className = "news-item__date";
      date.textContent = formatDate(post.date);

      var title = document.createElement("h3");
      title.textContent = post.title;

      var text = document.createElement("p");
      text.className = "news-item__text";
      text.textContent = post.text;

      item.appendChild(date);
      item.appendChild(title);
      item.appendChild(text);
      container.appendChild(item);
    });
  });
})();
