const themeToggle = document.getElementById("theme-toggle");
const searchInput = document.getElementById("pattern-search");

function updateThemeToggle(theme) {
  if (!themeToggle) return;
  const label = themeToggle.dataset.themeLabel || "Theme";
  const lightLabel = themeToggle.dataset.lightLabel || "Light";
  const darkLabel = themeToggle.dataset.darkLabel || "Dark";
  themeToggle.textContent = `${label}: ${theme === "dark" ? darkLabel : lightLabel}`;
  themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  updateThemeToggle(theme);
}

updateThemeToggle(document.documentElement.dataset.theme || "light");

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "light";
  setTheme(current === "dark" ? "light" : "dark");
});

searchInput?.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase().trim();
  document.querySelectorAll("[data-pattern-link]").forEach((link) => {
    const match = link.textContent.toLowerCase().includes(value);
    link.closest("li").style.display = match ? "" : "none";
  });
});
