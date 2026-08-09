(function () {
  function readTheme() {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  }

  function writeTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage failures in private or restricted browser contexts.
    }
  }

  function normalize(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .trim();
  }

  function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    const currentTheme =
      document.documentElement.dataset.theme ||
      readTheme() ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    function update(theme) {
      const label = themeToggle.dataset.themeLabel || "Theme";
      const lightLabel = themeToggle.dataset.lightLabel || "Light";
      const darkLabel = themeToggle.dataset.darkLabel || "Dark";
      document.documentElement.dataset.theme = theme;
      themeToggle.setAttribute(
        "aria-label",
        `${label}: ${theme === "dark" ? darkLabel : lightLabel}`,
      );
      themeToggle.setAttribute(
        "title",
        `${label}: ${theme === "dark" ? darkLabel : lightLabel}`,
      );
      themeToggle.setAttribute(
        "aria-pressed",
        theme === "dark" ? "true" : "false",
      );
    }

    update(currentTheme);

    themeToggle.addEventListener("click", () => {
      const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      writeTheme(nextTheme);
      update(nextTheme);
    });
  }

  function initSearch() {
    const searchInput = document.getElementById("pattern-search");
    const patternLinks = Array.from(
      document.querySelectorAll("[data-pattern-link]"),
    );
    if (!searchInput || patternLinks.length === 0) return;

    const nav = document.querySelector(".nav");
    const emptyState = document.createElement("p");
    emptyState.className = "search-empty";
    emptyState.hidden = true;
    emptyState.textContent = "No matching patterns.";
    nav?.append(emptyState);

    function filter() {
      const query = normalize(searchInput.value);
      let firstMatch = null;
      let visibleCount = 0;

      patternLinks.forEach((link) => {
        const item = link.closest("li");
        const section = link.closest("section");
        const text = normalize(link.textContent || "");
        const group = normalize(
          section?.querySelector("h2")?.textContent || "",
        );
        const isMatch =
          query.length === 0 || text.includes(query) || group.includes(query);

        if (item) item.hidden = !isMatch;
        if (isMatch) {
          visibleCount += 1;
          firstMatch ??= link;
        }
      });

      document.querySelectorAll(".nav section").forEach((section) => {
        const hasVisibleItem = Boolean(
          section.querySelector("li:not([hidden])"),
        );
        section.hidden = query.length > 0 && !hasVisibleItem;
      });

      emptyState.hidden = visibleCount > 0;
      searchInput.dataset.firstResult = firstMatch?.getAttribute("href") || "";
    }

    searchInput.addEventListener("input", filter);
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && searchInput.dataset.firstResult) {
        window.location.href = searchInput.dataset.firstResult;
      }
      if (event.key === "Escape") {
        searchInput.value = "";
        filter();
        searchInput.blur();
      }
    });

    window.addEventListener("keydown", (event) => {
      const isSearchShortcut =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
      if (!isSearchShortcut) return;
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initSearch();
  });
})();
