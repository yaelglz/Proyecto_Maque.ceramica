// Obtener el botón de hamburguesa y la lista de categorías
var botonHamburguesa = document.querySelector('.menu-hamburguesa');
var listaCategorias = document.querySelector('.barra-categorias ul');

// Mostrar u ocultar la lista de categorías al hacer clic en el botón de hamburguesa
botonHamburguesa.addEventListener('click', function () {
    listaCategorias.classList.toggle('mostrar');
});

var menu = document.getElementById("menu");
menu.style.padding = "1px";
menu.style.border = "none";
menu.style.outline = "none";
menu.style.borderRadius = "4px";
menu.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
menu.style.color = "#333";
menu.style.fontFamily = "Arial, sans-serif";
menu.style.fontSize = "16px";

// Ocultar contenido al cargar la página
const toggleButtons = document.querySelectorAll('.btn-toggle, .btn-toggle-content-row');
const contentRows = document.querySelectorAll('.content-row');
const contentCards = document.querySelectorAll('.content-card');
const cardsDiv = document.querySelector('#cards');

cardsDiv.classList.add('hidden');

toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Obtener el modo actual
        const currentMode = document.querySelector('.btn-toggle.active').dataset.mode;

        // Quitar la clase 'active' del botón actual
        document.querySelector('.btn-toggle.active').classList.remove('active');

        // Agregar la clase 'active' al botón seleccionado
        this.classList.add('active');

        // Mostrar contenido de acuerdo al modo seleccionado
        if (currentMode === 'rows') {
            // Ocultar contenido en modo 'rows'
            contentRows.forEach(row => row.style.display = 'none');

            // Mostrar contenido en modo 'cards'
            contentCards.forEach(card => card.style.display = 'block');

            // Mostrar el contenido cuando se haga clic en el botón 'content-card'
            cardsDiv.classList.remove('hidden');
        } else {
            // Ocultar contenido en modo 'cards'
            contentCards.forEach(card => card.style.display = 'none');

            // Mostrar contenido en modo 'rows'
            contentRows.forEach(row => row.style.display = 'block');

            // Ocultar el contenido cuando se cambie de modo
            cardsDiv.classList.add('hidden');
        }
    });
});
// Ocultar el contenedor al cargar la página
document.querySelector('#cards').classList.add('hidden');


//Filtrar por categorías
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    const subcategories = category.querySelectorAll('.subcategory');

    subcategories.forEach(subcategory => {
        subcategory.addEventListener('click', (event) => {
            event.preventDefault();

            const filter = subcategory.textContent.trim().toLowerCase();
            const products = document.querySelectorAll('.producto');

            products.forEach(product => {
                const productCategory = product.querySelector('.category').textContent.trim().toLowerCase();
                const productSubcategory = product.querySelector('.subcategory').textContent.trim().toLowerCase();

                if (productCategory === filter || productSubcategory === filter) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});


//Navegar entre las páginas
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");

var pagina1 = document.getElementById("pagina-1");
var pagina2 = document.getElementById("pagina-2");
var pagina3 = document.getElementById("pagina-3");

var prevBtn = document.getElementById("prev");
var page1Btn = document.getElementById("page-1");
var page2Btn = document.getElementById("page-2");
var page3Btn = document.getElementById("page-3");
var nextBtn = document.getElementById("next");

var page1 = document.getElementById("page-1");
var page2 = document.getElementById("page-2");
var page3 = document.getElementById("page-3");

var currentPage = 1;

function updateButtons() {
    if (currentPage === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentPage === 3) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

    page1Btn.classList.remove("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.remove("active");

    if (currentPage === 1) {
        page1Btn.classList.add("active");
    } else if (currentPage === 2) {
        page2Btn.classList.add("active");
    } else {
        page3Btn.classList.add("active");
    }

    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";

    if (currentPage === 1) {
        page1.style.display = "block";
    } else if (currentPage === 2) {
        page2.style.display = "block";
    } else {
        page3.style.display = "block";
    }
}

updateButtons();

prevBtn.addEventListener("click", function () {
    currentPage--;
    updateButtons();
});

page1Btn.addEventListener("click", function () {
    currentPage = 1;
    updateButtons();
});

page2Btn.addEventListener("click", function () {
    currentPage = 2;
    updateButtons();
});

page3Btn.addEventListener("click", function () {
    currentPage = 3;
    updateButtons();
});

nextBtn.addEventListener("click", function () {
    currentPage++;
    updateButtons();
});

//Ocultar y mostrar el sidebar
if (window.innerWidth <= 4) {
    document.querySelector('.sidebar').classList.add('oculto');
}

// Obtener el botón de "Agregar al carrito" por su id
const addToCartButton = document.getElementById('add-to-cart');

// Agregar un evento de clic al botón
addToCartButton.addEventListener('click', () => {
    // Mostrar una alerta cuando se hace clic en el botón
    alert('¡Producto agregado al carrito!');
});

document.getElementById("cards").style.display = "block";