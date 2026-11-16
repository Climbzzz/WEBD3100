const themeToggle = document.querySelector("#theme-toggle");

if (!(themeToggle instanceof HTMLButtonElement)) {
  throw new Error("Theme toggle button was not found.");
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "light";
  const nextTheme = isDark ? "light" : "dark";

  document.documentElement.dataset.theme = nextTheme;
  themeToggle.textContent = `Switch to ${isDark ? "dark" : "light"} mode`;
  themeToggle.setAttribute("aria-pressed", String(!isDark));
});
