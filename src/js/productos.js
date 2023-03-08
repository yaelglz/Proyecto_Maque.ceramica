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

//Ordenamiendo de Cards
var btnToggle = document.querySelectorAll('.btn-toggle');
var products = document.querySelector('.products');

btnToggle.forEach(function (button) {
    button.addEventListener('click', function () {
        var mode = this.dataset.mode;
        var iconCards = '<i class="fas fa-th-large"></i>';
        var iconRows = '<i class="fas fa-th-list"></i>';

        if (mode === 'cards') {
            this.classList.add('active');
            this.nextElementSibling.classList.remove('active');
            products.classList.remove('rows');
            products.classList.add('cards');
            this.innerHTML = iconCards;
            this.nextElementSibling.innerHTML = iconRows;
        } else if (mode === 'rows') {
            this.classList.add('active');
            this.previousElementSibling.classList.remove('active');
            products.classList.remove('cards');
            products.classList.add('rows');
            this.innerHTML = iconRows;
            this.previousElementSibling.innerHTML = iconCards;
        }
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