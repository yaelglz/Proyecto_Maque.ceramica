
  
  // Definir la función para manejar la llamada al endpoint en la API
  function guardarInfo(e) {
    e.preventDefault(); // Evitar que se recargue la página al hacer clic en el botón
  
    let nombre = document.getElementById("nombre-pago");
    let apellido = document.getElementById("apellido-pago");
    let correo = document.getElementById("email-pago");
    let direccion = document.getElementById("direccion-pago");
    let colonia = document.getElementById("colonia-pago");
    let numInt = document.getElementById("numint-pago");
    let telefono = document.getElementById("telefono-pago");
    let entrecalles = document.getElementById("entre-pago");
    let ciudad = document.getElementById("ciudad-pago");
    let estado = document.getElementById("estado-pago");
    let cp = document.getElementById("cp-pago");
  
    // Es importante que tomemos el valor del input del formulario, y no todo el conjunto de datos. Para eso, usamos el .value para decirle que estoy recogiendo el valor que hay dentro de ese input.
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(correo.value);
    console.log(direccion.value);
    console.log(colonia.value);
    console.log(numInt.value);
    console.log(telefono.value);
    console.log(entrecalles.value);
    console.log(estado.value);
    console.log(cp.value);
    console.log(ciudad.value);
  
    // Esta es una constante llamada data, que contiene el cuerpo de la solicitud. Puedo declararla como una variable o agregarla directamente al cuerpo de mi metodo POST.
    const data = {
      nombre: nombre.value,
      apellido: apellido.value,
      correo: correo.value,
      calle_numero: direccion.value,
      colonia: colonia.value,
      interior: numInt.value,
      telefono: telefono.value,
      entre_calles: entrecalles.value,
      ciudad: ciudad.value,
      estado: estado.value,
      cp: cp.value,
    };
  
    // Hago un fetch a mi API, con la finalidad de postear productos nuevos.
    fetch('https://backmaque-production.up.railway.app/maque_ceramica/productos/', {
      method: "POST", // metodo a implementar
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Aqui estoy llamando a mi cuerpo de la solicitud.
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Producto Guardado:", data); // Mensaje para cuando se agreguen los datos correctamente
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


/*****PROCESAR COMPRA****

const activarFuncion = document.querySelector('#guardar-info')

activaFuncion.addEventListener

function procesarPedido() {

            carrito.forEach((prod) =>{
                const listaCompra = document.querySelector('#resumen-carrito tbody')
                const {id, nombre, descripcion, precio } = prod

                const row = document.createElement('row')
                row.innerHTML += `
                <ul id="resumen-carrito" class="list-group">
                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h5>${nombre}</h5>
                            <span id="descripcion-res">${descripcion}</span>
                        </div>
                        <span id="descripcion-res">$200.00</span>
                        <span id="cantidad-prod">${cantidad}</span>
                    </li>
                `
            }) 
}
*/





    /*****animacion cargador*****/