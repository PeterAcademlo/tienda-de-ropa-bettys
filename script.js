document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const loaderContainer = document.querySelector(".loader-container");
        loaderContainer.classList.add("hide-loader");
        setTimeout(function() {
            loaderContainer.style.display = "none";
            document.body.classList.add("loaded"); // Agregar clase al body para mostrar contenido
        }, 1000); // Duración de la transición del loader
    }, 3000); // Tiempo que aparece el loader antes de desaparecer
});

// Smooth scroll and sticky header functionality
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const header = document.querySelector("header");
    const stickyOffset = header.offsetTop;

    for (const link of links) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: "smooth",
            });
        });
    }

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > stickyOffset) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
});

// Form submission functionality
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario
        // No se realiza ninguna acción aquí
    });
});
