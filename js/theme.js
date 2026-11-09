// Obtiene el control de tema definido en el encabezado.
const themeToggle = document.querySelector(".theme-toggle");

// Calcula un descuento aleatorio para cada producto de la sección de ofertas.
document.querySelectorAll(".discount-prices").forEach((price) => {
    const originalPrice = Number(price.dataset.originalPrice);
    const discountPercent = Math.floor(Math.random() * 41) + 10;
    const salePrice = (originalPrice * (1 - discountPercent / 100)).toFixed(2);
    const salePriceElement = price.querySelector(".sale-price");
    const discountBadge = price.querySelector(".discount-badge");

    salePriceElement.textContent = `$${salePrice}`;
    salePriceElement.hidden = false;
    discountBadge.textContent = `-${discountPercent}%`;
    discountBadge.hidden = false;
});

// Alterna los colores del documento y sincroniza el texto y estado accesible del botón.
themeToggle.addEventListener("click", () => {
    const isLightTheme = document.documentElement.dataset.theme !== "light";

    document.documentElement.dataset.theme = isLightTheme ? "light" : "dark";
    themeToggle.textContent = isLightTheme ? "Cambiar a modo oscuro" : "Cambiar a modo claro";
    themeToggle.setAttribute("aria-pressed", String(isLightTheme));
});

// Confirma el formulario localmente; no hay un servidor configurado para recibir consultas.
const contactForm = document.querySelector('form[name="formulario"]');
const formStatus = document.querySelector("#mensaje-formulario");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "¡Gracias! El formulario se completó. Esta página aún no envía la consulta a un servidor.";
    formStatus.hidden = false;
});

// Oculta la confirmación cuando se borran los campos.
contactForm.addEventListener("reset", () => {
    formStatus.hidden = true;
    formStatus.textContent = "";
});