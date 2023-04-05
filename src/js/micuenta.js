let nombreUsuario, correoUsuario, direccionUsuario;

function addItems(div_NombreUsuario, div_CorreoUsuario, div_DireccionUsuario) {    
    const userId = 6; // Id del usuario que se quiere obtener el nombre, en este caso es 1
    
    fetch('http://localhost:8080/maque_ceramica/usuario/' + userId, {
        method: 'get' //tipo de método
    }).then(function(response) {//response es la respuesta del servidor
        response.json().then(function (json) { //json es el objeto que se obtiene del servicio
            console.log(json); //imprime el json
            nombreUsuario = json.nombre; //se guarda el nombre de usuario en la variable nombreUsuario
            correoUsuario = json.correo; //se guarda el correo electrónico en la variable correoUsuario
            direccionUsuario = json.direcciones
            div_NombreUsuario.innerHTML += `
                <div>
                    ${nombreUsuario}
                </div>
            `;
            div_CorreoUsuario.innerHTML += `
                <div>
                    ${correoUsuario}
                </div>
            `;
            div_DireccionUsuario.innerHTML += `
                <div>
                    ${direccionUsuario}
                </div>
            `;
        });//then
    }).catch(function(err) { //si hay un error
        console.log(err); //imprime el error
    });   
}

window.addEventListener("load", function (){
    let divNombre = document.getElementById("div_NombreUsuario");
    let divCorreo = document.getElementById("div_CorreoUsuario");
    let divDireccion = document.getElementById("div_DireccionUsuario");
    addItems(divNombre, divCorreo, divDireccion);   
});
