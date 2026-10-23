// Menú lateral, año del pie de página y página activa.
(function () {
  var body = document.body;
  var btn = document.getElementById("menuToggle");
  var overlay = document.getElementById("menuOverlay");
  function setMenu(open) {
    body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", open);
  }
  btn.addEventListener("click", function () { setMenu(!body.classList.contains("menu-open")); });
  overlay.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  document.querySelectorAll(".current-year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  var here = location.pathname.split("/").pop();
  document.querySelectorAll(".menu-links a").forEach(function (a) {
    if (a.getAttribute("href").split("/").pop() === here) a.setAttribute("aria-current", "page");
  });
})();
