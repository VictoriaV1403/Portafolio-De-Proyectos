document.addEventListener("DOMContentLoaded", function () {
    // Desplazamiento suave para los enlaces del menú
    const links = document.querySelectorAll("nav ul li a, .menu-desplegable ul li a"); // Asegúrate de que cubra tanto el menú principal como el desplegable

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const targetId = this.getAttribute("href").substring(1); // Obtener el ID del destino
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajuste para el desplazamiento
                    behavior: "smooth"
                });
            }

            // Cerrar el menú al hacer clic en un enlace (en pantallas pequeñas)
            const menu = document.getElementById("menu-desplegable");
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
            }
        });
    });

    // Función para mostrar y ocultar el menú en pantallas pequeñas
    const menuToggle = document.getElementById("hamburguesa"); // El botón hamburguesa
    const menu = document.getElementById("menu-desplegable"); // El menú desplegable

    // Si el botón de menú es presionado, alternar la clase 'show' en el menú
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show"); // Alternar visibilidad del menú
    });
});



