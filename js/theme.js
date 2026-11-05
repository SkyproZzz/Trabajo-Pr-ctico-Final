const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
    const isLightTheme = document.documentElement.dataset.theme !== "light";

    document.documentElement.dataset.theme = isLightTheme ? "light" : "dark";
    themeToggle.textContent = isLightTheme ? "Cambiar a modo oscuro" : "Cambiar a modo claro";
    themeToggle.setAttribute("aria-pressed", String(isLightTheme));
});