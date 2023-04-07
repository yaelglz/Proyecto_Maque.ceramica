let carrito = [];

const carritoContenedor = document.querySelector("#cartCount");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const procesarCompra = document.querySelector("#procesarCompra");
const activarFuncion = document.querySelector("#activarFuncion");
const botonesCategorias = document.querySelectorAll(".boton-categoria");


if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}



document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();

});
/************* CARDS***************/
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

function handleSortChange() {
  const selectElem = document.getElementById("menu");
  const selectedValue = selectElem.value;
  let sortedProducts;

  switch (selectedValue) {
    case "1":
      // Ordenar por precio de mayor a menor
      sortedProducts = productos.sort((a, b) => b.precio - a.precio);
      break;
    case "2":
      // Ordenar por precio de menor a mayor
      sortedProducts = productos.sort((a, b) => a.precio - b.precio);
      break;
    default:
      sortedProducts = productos;
  }

  // Limpiar el div de productos antes de agregar los productos ordenados
  const div_Productos = document.getElementById("div_Productos");
  div_Productos.innerHTML = "";

  // Agregar los productos ordenados al div de productos
  sortedProducts.forEach((p, index) => {
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
    // foreach para agregar los productos al div del HTML

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
  });
}

botonesCategorias.forEach(button => {
  button.addEventListener('click', () => {
    const productosElegidos = productos.filter(producto => producto.categorias.categoria === button.id);
    console.log(productosElegidos)
    const div_Productos = document.getElementById("div_Productos");
    div_Productos.innerHTML = "";

    // Agregar los productos ordenados al div de productos
    productosElegidos.forEach((p, index) => {
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
      // foreach para agregar los productos al div del HTML

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
    });
  })
})


/********************VIDEO **********************/
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
  if (modalBody) {
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
    })
  };
  if (carrito.length === 0) {
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo" style="color: black !important;">¡Aun no agregaste nada!</p>
    `
  }

  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  }
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

if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Aun no agregaste nada!",
        text: "¡Agrega productos a tu canasta!",
        icon: "error",
        button: "Aceptar",
      })
    } else {
      location.href = "pagar.html";

    }
  });
}

/*****PROCESAR COMPRA CODIGO DIANA***/

function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              
              <td>${nombre}</td>
            <td>$ ${precio}</td>
            <td>${cantidad}</td>
            <td>$ ${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

/************* */
window.addEventListener("load", function () { //cuando se cargue la página
  let div = document.getElementById("div_Productos"); //div donde se va a agregar los productos
  addItems(div); //se llama a la función addItems
});



  // // Hacer la petición POST al servidor con los datos del carrito
  // fetch("https://backmaque-production.up.railway.app/maque_ceramica/carrito/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(carrito),
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       // Si la respuesta del servidor es OK (200), entonces la compra se procesó correctamente
  //       // y puedes vaciar el carrito
  //       vaciarCarrito();
  //       mostrarCarrito();
  //       alert("La compra se ha procesado correctamente");
  //     } else {
  //       // Si la respuesta del servidor no es OK, entonces hubo un error al procesar la compra
  //       alert("Ha ocurrido un error al procesar la compra");
  //     }
  //   })
  //   .catch((error) => {
  //     // Si hubo un error al hacer la petición al servidor, entonces muestra un mensaje de error
  //     alert("Ha ocurrido un error al procesar la compra");
  //     console.error(error);
  //   });