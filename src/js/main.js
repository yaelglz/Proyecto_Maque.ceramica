let carrito = [];

const carritoContenedor = document.querySelector("#cartCount");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    mostrarCarrito();
});

let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN = 'https://backmaque-production.up.railway.app/maque_ceramica/productos/'; //URL a donde se hace la petición
function addItems(div_Productos) { //div_Productos es el div donde se va a agregar los productos

    fetch(URL_MAIN, {
        method: 'get' //tipo de método
    }).then(function (response) {//response es la respuesta del servidor
        response.json().then(function (json) { //json es el objeto que se obtiene del servicio
            console.log(json); //imprime el json
            console.log(json.length); //imprime el tamaño del json
            productos = json; //se guarda el json en la variable productos
            Array.from(json).forEach((p, index) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
                div_Productos.innerHTML += `
          <div class="col-md-4 mb-4 mx-auto">
            <div class="card card-custom">
              <img src="../img/Inventario/${p.uRL_Imagen}" class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">${p.nombre}</h5>
                <p class="card-text text-center">$ ${p.precio} MXN</p>
              </div>
              <div class="image_overlay">
                <div class="image__title">
                  <button class="btn btn-primary ver-mas btn-style" data-toggle="modal" data-target="#modal-${index}">Ver más</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="modal-${index}" tabindex="-1" role="dialog" aria-labelledby="modal-${index}-label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modal-${index}-label">${p.nombre}</h5>
                </div>
                <div class="modal-body">
                  <img src="../img/Inventario/${p.uRL_Imagen}" class="img-fluid mb-3" alt="...">
                  <p>${p.descripcion}</p>
                  <p>${p.cantidad} disponibles</p>
                  <p class="font-weight-bold mb-0">$ ${p.precio} MXN.</p>
                  <div style="text-align: right;">
                    <button onclick= "agregarProducto(${p.id})" type="button" class="btn btn-canasta add-to-cart">Agregar a la canasta</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
            }); // foreach para agregar los productos al div del HTML



            Array.from(document.getElementsByClassName("add-to-cart")).forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    document.getElementById(`modal-${index}`).style.display = "none";
                    document.getElementById(`modal-${index}`).classList.remove("show");
                });
            });

            Array.from(document.getElementsByClassName("ver-mas")).forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    document.getElementById(`modal-${index}`).style.display = "block";
                    document.getElementById(`modal-${index}`).classList.add("show");
                });
            });

            Array.from(document.getElementsByClassName("modal")).forEach((modal) => {
                modal.addEventListener("click", (e) => {
                    if (e.target === modal) {
                        modal.style.display = "none";
                    }
                });
            });


        });//then
    }).catch(function (err) { //si hay un error
        console.log(err); //imprime el error
    });
    console.log(document.getElementById("div_Productos")); //imprime el div donde se va a agregar los productos
}// addItems


function agregarProducto(id) {

    const existe = carrito.some((item) => item.id === id);
    if (existe) {
        const productos = carrito.map((item) => {
            if (item.id === id) {
                item.cantidad++;
                return item;
            }
        });
    } else {
        const item = productos.find((item) => item.id === id);
        carrito.push(item);
    }




    mostrarCarrito();
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body-carrito");
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
        const { id, nombre, precio, uRL_Imagen, descripcion, cantidad } = prod;
        modalBody.innerHTML += `
    <div class="modal-contenedor">
      <div>
        <img src="../img/Inventario/${uRL_Imagen}" class="img-fluid img-carrito">
      </div>

      <div>
        <p>Producto: ${nombre}</p>
        <p>Precio: $${precio} MXN</p>
        <p>Cantidad: ${cantidad}</p>

        <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar producto</button>
      </div>
    </div>
    `;
    });
    if (carrito.length === 0) {
        modalBody.innerHTML = `
    <p class="text-center text-primary parrafo" style="color: black !important;">¡Aun no agregaste nada!</p>
    `
    }

    carritoContenedor.textContent = carrito.length;

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    guardarStorage();
}

function eliminarProducto(id) {
    const itemid = id;
    carrito = carrito.filter((item) => item.id !== itemid);
    mostrarCarrito();
}

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
});

window.addEventListener("load", function () { //cuando se cargue la página
    let div = document.getElementById("div_Productos"); //div donde se va a agregar los productos
    addItems(div); //se llama a la función addItems
});