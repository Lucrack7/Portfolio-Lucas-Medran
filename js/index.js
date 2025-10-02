// --- DATA DE HABILIDADES (FIFA CARD) ---
const developerStats = [
    { name: "FRONT", label: "Frontend", score: 90, description: "HTML, CSS/Tailwind, JS, React, Angular" },
    { name: "BACK", label: "Backend", score: 80, description: "Python, Node.js, APIs" },
    { name: "GIT", label: "Control Versiones", score: 82, description: "Git, GitHub, Colaboración" },
    { name: "CTV", label: "Creatividad", score: 93, description: "Ingenio" },
    { name: "ADA", label: "Adaptabilidad", score: 87, description: "Aprendizaje rápido" },
    { name: "JE", label: "Juego en equipo", score: 95, description: "Compañerismo" },
];

/**
 * Calcula el rating global (OVR) como el promedio de las estadísticas.
 * @param {Array} stats - Array de objetos de estadísticas.
 * @returns {number} OVR redondeado.
 */
function calculateOVR(stats) {
    if (stats.length === 0) return 0;
    const sum = stats.reduce((acc, stat) => acc + stat.score, 0);
    return Math.round(sum / stats.length);
}

/**
 * Renderiza la carta FIFA con el OVR y las estadísticas.
 */
function renderFifaCard() {
    const ovr = calculateOVR(developerStats);
    const ovrContainer = document.getElementById('player-ovr-container');
    const statsContainer = document.getElementById('stats-container');

    if (ovrContainer) {
        // Renderizar el OVR (Rating Global)
        ovrContainer.innerHTML = `
                    <p class="text-gray-300 font-normal text-base">OVR</p>
                    <p class="text-[var(--accent-color)]">${ovr}</p>
                `;
    }

    if (statsContainer) {
        // Renderizar las estadísticas
        statsContainer.innerHTML = developerStats.map(stat => `
                    <div class="stat-line">
                        <span class="text-lg stat-value">${stat.score}</span>
                        <div class="stat-bar">
                            <!-- El width se calcula basado en el score / 99 * 100% -->
                            <div class="stat-fill" style="width: ${Math.min(100, (stat.score / 99) * 100)}%;"></div>
                        </div>
                        <span class="text-base font-semibold text-[var(--text-color)]">${stat.label} (${stat.name})</span>
                    </div>
                `).join('');
    }
}


// --- DATA DE PROYECTOS ---
const projectsData = [
    // HTML - CSS - JS
    { id: 1, title: "Clon de ML", categories: ["html/css/js", "all"], description: "Clon de Mercado Libre", link: "https://lucrack7.github.io/Clon_MercadoLibre/", imgSrc: "/img/html_2.png", tags: ["Html", "Css", "Javascript"] },
    { id: 2, title: "Servicios de Gym", categories: ["html/css/js", "all"], description: "Web de Servicios de Gym", link: "https://servicios-gym.netlify.app/", imgSrc: "/img/html_16.png", tags: ["Html", "Css", "Javascript"] },
    { id: 3, title: "Restaurante italiano", categories: ["html/css/js", "all"], description: "Web de Restaurante italiano", link: "https://restoitaliano.netlify.app/", imgSrc: "/img/html_5.png", tags: ["Html", "Css", "Javascript"] },
    { id: 4, title: "Web moderna", categories: ["html/css/js", "all"], description: "Landing page moderna", link: "https://pagwebmoderna.netlify.app/", imgSrc: "/img/html_17.png", tags: ["Html", "Css", "Javascript"] },
    { id: 5, title: "Tienda Zapatillas", categories: ["html/css/js", "all"], description: "E-commerce de zapatillas", link: "https://tienda-ventas-zapas.netlify.app/", imgSrc: "/img/html_9.png", tags: ["Html", "Css", "Javascript"] },
    { id: 6, title: "Comercio", categories: ["html/css/js", "all"], description: "Página de comercio Todo Kool", link: "https://lucrack7.github.io/Todo_Kool/", imgSrc: "/img/html_6.png", tags: ["Html", "Css", "Javascript"] },
    { id: 7, title: "Restaurante", categories: ["html/css/js", "all"], description: "Página de menú restaurante", link: "https://restaurante-menu-pag.netlify.app/", imgSrc: "/img/html_14.png", tags: ["Html", "Css", "Javascript"] },
    { id: 8, title: "Comercio Electrónico", categories: ["html/css/js", "all"], description: "E-commerce básico", link: "https://lucrack7.github.io/ecommerce/", imgSrc: "/img/html_4.png", tags: ["Html", "Css", "Javascript"] },
    { id: 9, title: "La Scalonetta", categories: ["html/css/js", "all"], description: "Galería temática de la selección", link: "https://lucrack7.github.io/galeria_scaloneta/", imgSrc: "/img/html_13.png", tags: ["Html", "Css", "Javascript"] },
    { id: 10, title: "Cuenta Regresiva MB22", categories: ["html/css/js", "all"], description: "Contador regresivo", link: "https://cta-reg-mb-22.netlify.app/", imgSrc: "/img/html_1.png", tags: ["Html", "Css", "Javascript"] },
    { id: 11, title: "Panel de datos interactivo", categories: ["html/css/js", "all"], description: "Dashboard con datos dinámicos", link: "https://paneldatosinteractivos.netlify.app/", imgSrc: "/img/html_20.png", tags: ["Html", "Css", "Javascript"] },
    { id: 12, title: "Pokemones", categories: ["html/css/js", "all"], description: "Listado de pokemones", link: "https://pokemones77.netlify.app/", imgSrc: "/img/html_7.png", tags: ["Html", "Css", "Javascript"] },
    { id: 13, title: "Calculadora", categories: ["html/css/js", "all"], description: "Calculadora básica", link: "https://lucrack7.github.io/Calculadora/", imgSrc: "/img/html_15.png", tags: ["Html", "Css", "Javascript"] },
    { id: 14, title: "Página de Login", categories: ["html/css/js", "all"], description: "Formulario de inicio de sesión", link: "https://lucrack7.github.io/from_login/", imgSrc: "/img/html_3.png", tags: ["Html", "Css", "Javascript"] },
    { id: 15, title: "Adivinar Número", categories: ["html/css/js", "all"], description: "Juego de adivinar número", link: "https://adivinarnum.netlify.app/", imgSrc: "/img/html_8.png", tags: ["Html", "Css", "Javascript"] },
    { id: 16, title: "App Clima JS", categories: ["html/css/js", "all"], description: "App de clima con API", link: "https://aplicacion-clima-1.netlify.app/", imgSrc: "/img/html_10.png", tags: ["Html", "Css", "Javascript"] },
    { id: 17, title: "Buscador de Pelis JS", categories: ["html/css/js", "all"], description: "Buscador de películas", link: "https://busq-pelis-js.netlify.app/", imgSrc: "/img/html_11.png", tags: ["Html", "Css", "Javascript"] },
    { id: 18, title: "App Dibujo", categories: ["html/css/js", "all"], description: "Pizarra interactiva", link: "https://app-dibu.netlify.app/", imgSrc: "/img/html_12.png", tags: ["Html", "Css", "Javascript"] },
    { id: 19, title: "Juego de Memoria", categories: ["html/css/js", "all"], description: "Juego clásico de cartas", link: "https://juegodelamemoria.netlify.app/", imgSrc: "/img/html_18.png", tags: ["Html", "Css", "Javascript"] },
    { id: 20, title: "Juego de Ahorcado", categories: ["html/css/js", "all"], description: "Juego clásico de ahorcado", link: "https://juegoahcd.netlify.app/", imgSrc: "/img/html_19.png", tags: ["Html", "Css", "Javascript"] },

    // REACT
    { id: 21, title: "Administrador de Clientes", categories: ["react", "all"], description: "CRM con React", link: "https://papaya-donut-3eca14.netlify.app/", imgSrc: "/img/React_1.png", tags: ["React"] },
    { id: 22, title: "Control de Gastos", categories: ["react", "all"], description: "App de control de gastos", link: "https://neon-meringue-38ff4c.netlify.app/", imgSrc: "/img/React_2.png", tags: ["React"] },
    { id: 23, title: "Cotizador de Seguros", categories: ["react", "all"], description: "Cotizador interactivo", link: "https://profound-kitsune-ff3b24.netlify.app/", imgSrc: "/img/React_3.png", tags: ["React"] },
    { id: 24, title: "Frases de Breaking Bad", categories: ["react", "all"], description: "Generador de frases", link: "https://voluble-florentine-6fce18.netlify.app/", imgSrc: "/img/React_4.png", tags: ["React"] },
    { id: 25, title: "Apps Clima", categories: ["react", "all"], description: "Aplicación del clima con API", link: "https://sunny-elf-2fb3d9.netlify.app/", imgSrc: "/img/React_5.png", tags: ["React"] },
    { id: 26, title: "Cotizador de Criptomonedas", categories: ["react", "all"], description: "Cotizador de cryptos", link: "https://astonishing-wisp-a70375.netlify.app/", imgSrc: "/img/React_6.png", tags: ["React"] },
    { id: 27, title: "Buscador de Imágenes", categories: ["react", "all"], description: "Buscador con API de imágenes", link: "https://cheerful-florentine-5ae501.netlify.app/", imgSrc: "/img/React_7.png", tags: ["React"] },
    { id: 28, title: "Lista de tareas", categories: ["react", "all"], description: "Gestión de tareas pendientes", link: "https://tareas-pendientes-react.netlify.app/", imgSrc: "/img/React_8.png", tags: ["React"] },
    { id: 29, title: "Buscador de pelis", categories: ["react", "all"], description: "Buscador de películas", link: "https://bsq-pelis-react.netlify.app/", imgSrc: "/img/React_9.png", tags: ["React"] },
    { id: 30, title: "Carrito de compras", categories: ["react", "all"], description: "E-commerce carrito", link: "https://tienda-carrito-compras-react.netlify.app/", imgSrc: "/img/React_10.png", tags: ["React"] },
    { id: 31, title: "Clima React", categories: ["react", "all"], description: "Aplicación del clima con React", link: "https://aplicacion-clima-react-7.netlify.app/", imgSrc: "/img/React_11.png", tags: ["React"] },
    { id: 32, title: "Presupuesto de suscripciones", categories: ["react", "all"], description: "Control de suscripciones", link: "https://suscripcionesapp.netlify.app/", imgSrc: "/img/React_12.png", tags: ["React"] },

    // ANGULAR
    { id: 33, title: "Venta de comida rápida", categories: ["angular", "all"], description: "App de venta de comida rápida", link: "https://appcomidarapida.netlify.app/", imgSrc: "/img/angular_4.png", tags: ["Angular"] },
    { id: 34, title: "Buscador de Gifs", categories: ["angular", "all"], description: "App buscador de GIFs", link: "https://appbuscadorgifs.netlify.app/", imgSrc: "/img/angular_5.png", tags: ["Angular"] },
    { id: 35, title: "Pokedex", categories: ["angular", "all"], description: "App Pokedex Lite", link: "https://pokedexlite77.netlify.app/", imgSrc: "/img/angular_6.png", tags: ["Angular"] },
    { id: 36, title: "Landing Page", categories: ["angular", "all"], description: "Landing page con Angular", link: "https://landing-page-a.netlify.app/", imgSrc: "/img/angular_1.png", tags: ["Angular"] },
    { id: 37, title: "Lista Cursos", categories: ["angular", "all"], description: "App de lista de cursos", link: "https://listas-cursos-a.netlify.app/", imgSrc: "/img/angular_2.png", tags: ["Angular"] },
    { id: 38, title: "Listas Tareas", categories: ["angular", "all"], description: "App lista de tareas", link: "https://angular-lista-tarea.netlify.app/", imgSrc: "/img/angular_3.png", tags: ["Angular"] },
    { id: 39, title: "Rick and Morty", categories: ["angular", "all"], description: "App con API Rick and Morty", link: "#", imgSrc: "/img/angular_7.png", tags: ["Angular"] },

    // PYTHON
    { id: 40, title: "Barra de proceso", categories: ["python", "all"], description: "Script barra de proceso (GitHub)", link: "https://github.com/Lucrack7/barra_de_proceso", imgSrc: "/img/py_1.png", tags: ["Python"] },
    { id: 41, title: "Texto a Voz", categories: ["python", "all"], description: "Conversión de texto a voz (GitHub)", link: "https://github.com/Lucrack7/texto_a_voz", imgSrc: "/img/py_2.png", tags: ["Python"] },
    { id: 42, title: "Juego de TaTeTi", categories: ["python", "all"], description: "Juego clásico de TaTeTi (GitHub)", link: "https://github.com/Lucrack7/juego_TaTeTi.py", imgSrc: "/img/py_3.png", tags: ["Python"] },
    { id: 43, title: "Formularios Py a Excel", categories: ["python", "all"], description: "Exportar formularios a Excel (GitHub)", link: "https://github.com/Lucrack7/formulariosExel_a_py", imgSrc: "/img/py_4.png", tags: ["Python"] },
    { id: 44, title: "Cronómetro", categories: ["python", "all"], description: "Cronómetro en Python (GitHub)", link: "https://github.com/Lucrack7/cronometro.py", imgSrc: "/img/py_5.png", tags: ["Python"] },
    { id: 45, title: "Juego de trivia", categories: ["python", "all"], description: "Juego de trivia (GitHub)", link: "https://github.com/Lucrack7/juego_trivia.py", imgSrc: "/img/py_6.png", tags: ["Python"] },
    { id: 46, title: "Conversor de unidades", categories: ["python", "all"], description: "Conversor de unidades (GitHub)", link: "https://github.com/Lucrack7/conversor_unidades.py", imgSrc: "/img/py_7.png", tags: ["Python"] }
];


// --- ESTADO GLOBAL DE TRABAJOS ---
let currentFilter = 'html/css/js';
let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let filteredProjects = [];

// Elementos del DOM
const projectsGallery = document.getElementById('projects-gallery');
const paginationControls = document.getElementById('pagination-controls');
const noResults = document.getElementById('no-results');


// --- LÓGICA DE FILTRADO Y PAGINACIÓN ---

/**
 * Renderiza los proyectos en la galería.
 * @param {Array} projects - Proyectos a renderizar.
 */
function renderProjects(projects) {
    projectsGallery.innerHTML = '';

    if (projects.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    noResults.classList.add('hidden');

    projects.forEach(project => {
        const tagElements = project.tags.map(tag =>
            `<span class="inline-block bg-gray-600 px-2 py-0.5 rounded-full text-xs text-white">${tag}</span>`
        ).join('');

        const projectHTML = `
                    <div class="item rounded-xl overflow-hidden">
                        <img src="${project.imgSrc}" 
                            onerror="this.onerror=null;this.src='https://placehold.co/600x400/1a1a2e/ffc107?text=${project.title.replace(/\s/g, '+')}';" 
                            alt="${project.description}" class="w-full">
                        <div class="info p-4">
                            <h3 class="text-xl font-bold mb-2 text-[var(--text-color)]">${project.title}</h3>
                            <div class="mb-3 space-x-2 text-sm flex flex-wrap gap-y-1">
                                ${tagElements}
                            </div>
                            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="text-[var(--accent-color)] hover:opacity-90 font-semibold transition duration-300">
                                Ver Trabajo <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                            </a>
                        </div>
                    </div>
                `;
        projectsGallery.innerHTML += projectHTML;
    });
}

/**
 * Renderiza los controles de paginación.
 * @param {number} totalItems - Número total de proyectos filtrados.
 */
function renderPaginationControls(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    paginationControls.innerHTML = '';

    if (totalPages <= 1) return;

    // Botón Anterior
    const prevDisabled = currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80';
    paginationControls.innerHTML += `
                <button id="prev-page" class="p-3 rounded-lg font-bold text-lg ${prevDisabled}" ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            `;

    // Indicador de Página
    paginationControls.innerHTML += `<span class="font-medium text-lg text-[var(--text-color)]">Página ${currentPage} de ${totalPages}</span>`;

    // Botón Siguiente
    const nextDisabled = currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80';
    paginationControls.innerHTML += `
                <button id="next-page" class="p-3 rounded-lg font-bold text-lg ${nextDisabled}" ${currentPage === totalPages ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            `;

    // Agregar event listeners a los botones de paginación
    document.getElementById('prev-page')?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateTrabajosView();
        }
    });

    document.getElementById('next-page')?.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateTrabajosView();
        }
    });
}

/**
 * Filtra la data y actualiza la vista con paginación.
 */
function updateTrabajosView() {
    // 1. Filtrar proyectos
    filteredProjects = projectsData.filter(project =>
        project.categories.includes(currentFilter)
    );

    // 2. Obtener proyectos para la página actual
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const projectsToRender = filteredProjects.slice(start, end);

    // 3. Renderizar proyectos y controles
    renderProjects(projectsToRender);
    renderPaginationControls(filteredProjects.length);
}

/**
 * Cambia el filtro de categoría y actualiza la vista.
 * @param {string} categoria - La categoría de tecnología.
 * @param {boolean} resetPage - True para resetear la página a 1.
 */
function verCategoria(categoria, resetPage = true) {
    currentFilter = categoria;
    if (resetPage) {
        currentPage = 1;
    }

    // 1. Actualizar botón activo visualmente
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.filter-btn[data-category="${categoria}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // 2. Actualizar la vista de proyectos y paginación
    updateTrabajosView();
}


// --- LÓGICA DE NAVEGACIÓN Y SECCIONES ---

const sections = ['inicio', 'servicios', 'habilidades', 'trabajos', 'contacto'];
const navLinks = document.querySelectorAll('.nav-link');
const burger = document.getElementById('burger');
const navLinksMobile = document.getElementById('nav-links');

function showSection(sectionId) {
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.classList.add('hidden-section');
            section.classList.add('hidden'); // Ensure it's hidden with Tailwind class
        }
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden-section');
        activeSection.classList.remove('hidden');
    }

    // Update the active class in navigation links
    [...navLinks, ...navLinksMobile.querySelectorAll('a')].forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active-nav');
        }
    });

    if (sectionId === 'trabajos') {
        // Asegurar que el filtro y paginación se carguen al mostrar la sección
        verCategoria(currentFilter, false); // No resetear la página si ya estábamos en trabajos
    }
}

function toggleMenu() {
    navLinksMobile.classList.toggle('active');
    burger.classList.toggle('toggle');
}


// --- LÓGICA DE MODO OSCURO ---
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;

/**
 * Aplica el tema guardado o el tema por defecto.
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');

    // Establecer tema por defecto (dark mode) si no hay nada guardado
    if (savedTheme === 'light-mode') {
        setTheme('light-mode');
    } else {
        setTheme('dark-mode'); // Forzar el dark mode por defecto (el CSS base)
    }
}

/**
 * Cambia el tema y actualiza el icono.
 * @param {string} theme - 'dark-mode' o 'light-mode'.
 */
function setTheme(theme) {
    if (theme === 'light-mode') {
        bodyElement.classList.add('light-mode');
        themeToggle.querySelector('i').className = 'fa-solid fa-moon w-6 h-6'; // Icono de Luna
        localStorage.setItem('theme', 'light-mode');
    } else {
        bodyElement.classList.remove('light-mode');
        themeToggle.querySelector('i').className = 'fa-solid fa-sun w-6 h-6'; // Icono de Sol
        localStorage.setItem('theme', 'dark-mode');
    }
}

// Listener para el toggle
themeToggle.addEventListener('click', () => {
    const isLight = bodyElement.classList.contains('light-mode');
    const newTheme = isLight ? 'dark-mode' : 'light-mode';
    setTheme(newTheme);
});

// --- INICIALIZACIÓN ---

window.onload = function () {
    initTheme(); // Inicializar modo oscuro/claro

    // Cargar la sección correcta al inicio
    const hash = window.location.hash.substring(1);
    const initialSection = sections.includes(hash) ? hash : 'inicio';
    showSection(initialSection);

    // Inicializar la vista de trabajos (necesario aunque no se muestre inicialmente)
    updateTrabajosView();

    // Inicializar la carta FIFA
    renderFifaCard();
};

// Listen for hash changes
window.onhashchange = function () {
    const hash = window.location.hash.substring(1);
    const initialSection = sections.includes(hash) ? hash : 'inicio';
    showSection(initialSection);
};
