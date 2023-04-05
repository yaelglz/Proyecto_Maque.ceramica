$(document).ready(function () {
  //espera a que el documento se haya cargado completamente antes de ejecutar esta función
  var leftColumn = $(".left-column"); //obtiene la columna izquierda por su clase
  var topOffset = leftColumn.offset().top; //obtiene la posición superior de la columna izquierda en relación con la ventana
  var stickyContainer = leftColumn.find(".sticky-container"); //obtiene el contenedor "sticky" dentro de la columna izquierda
  var fixedColumn = $("<div></div>") //crea un nuevo elemento div
    .addClass("left-column-fixed") //agrega la clase "left-column-fixed" al nuevo elemento div
    .appendTo("body") //añade el nuevo elemento div al cuerpo del documento HTML
    .hide(); //oculta el nuevo elemento div

  $(window).scroll(function () {
    //detecta cuando la ventana se desplaza
    if ($(window).scrollTop() > topOffset) {
      //si el desplazamiento de la ventana supera la posición superior de la columna izquierda
      fixedColumn.show(); //muestra el nuevo elemento div
      stickyContainer.addClass("fixed"); //agrega la clase "fixed" al contenedor "sticky"
    } else {
      fixedColumn.hide(); //oculta el nuevo elemento div
      stickyContainer.removeClass("fixed"); //elimina la clase "fixed" del contenedor "sticky"
    }
  });
});

let menuIcon = document.querySelector(".fa-bars");
let menuList = document.querySelector(".list-container");

menuIcon.addEventListener("click", function () {
  menuList.classList.toggle("show");
});



// const URL_MAIN = 'https://backmaque-production.up.railway.app/maque_ceramica/productos/'; 


/*
const data =
    {nombre: "Sopa Maruchan de Res",
    descripcion: "Sopa Maruchan sabor Res de 150 grs",
    precio: 17.0,
    url_Imagen: "sopaMaruchanRes.jpg"
};

*/
// fetch(URL_MAIN, { //URL del servicio a donde se hara el POST
//   method: 'POST', // or 'PUT'
//   headers: { // se agrega el header
//     'Content-Type': 'application/json', //tipo de contenido
//   },
//   body: JSON.stringify(data), //se agrega el cuerpo del POST
// })
//   .then(response => response.json()) //se obtiene la respuesta del servidor
//   .then(data => { //se obtiene el json
//     console.log('Success:', data); //se imprime el json
//   })
//   .catch((error) => { //si hay un error
//     console.error('Error:', error); //se imprime el error
//   });


//MetodoGET
//MetodoPOST
//MetodoPUT
//MetodoDELETE

