const themeToggle = document.getElementById("theme-toggle");
const searchInput = document.getElementById("pattern-search");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

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
