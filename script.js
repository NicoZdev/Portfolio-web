// Navegación Suave entre Secciones
document.querySelectorAll('.navegar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Oculta el menú desplegable en pantallas pequeñas después de hacer clic
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Toggle del menú desplegable en pantallas pequeñas
const menuToggle = document.querySelector('.hamburger'); // Ajusta a la clase correcta
const navbarMenu = document.querySelector('.menu');

if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    });
}

function toggleMenu() {
    if (navbarMenu) {
        navbarMenu.classList.remove('show');
    }
}

// Efecto de zoom para imágenes
document.querySelectorAll('.tarjetas img, .galeria img').forEach(image => {
    image.addEventListener('click', function () {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="${this.src}" alt="Zoom Image" class="modal-image">
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', function () {
            modal.remove();
        });

        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById('name');
    const text = "Nicolás Zarantonello";
    let index = 0;

    if (nameElement) {
        function type() {
            if (index < text.length) {
                nameElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100); // Ajusta la velocidad de escritura aquí
            }
        }

        type();
    }
});
