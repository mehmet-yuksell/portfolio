// Runs before first paint to apply the saved or system theme (prevents a flash).
(function () {
  var theme = "dark";
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      theme = stored;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light";
    }
  } catch {
    /* storage unavailable: keep the dark default */
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();
