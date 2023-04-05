let nombreUsuario, correoUsuario;

function addItems(div_NombreUsuario, div_CorreoUsuario) {    
    const userId = 11; // Id del usuario que se quiere obtener el nombre, en este caso es 1
    
    fetch('https://backmaque-production.up.railway.app/maque_ceramica/usuario/' + userId, {
        method: 'get' //tipo de método
    }).then(function(response) {//response es la respuesta del servidor
        response.json().then(function (json) { //json es el objeto que se obtiene del servicio
            console.log(json); //imprime el json
            nombreUsuario = json.nombre; //se guarda el nombre de usuario en la variable nombreUsuario
            correoUsuario = json.correo; //se guarda el correo electrónico en la variable correoUsuario
            
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
            
        });//then
    }).catch(function(err) { //si hay un error
        console.log(err); //imprime el error
    });   
}

window.addEventListener("load", function (){
    let divNombre = document.getElementById("div_NombreUsuario");
    let divCorreo = document.getElementById("div_CorreoUsuario");

    addItems(divNombre, divCorreo);   
});


let calle_numero, colonia, cp, ciudad, estado;

function addItemsDireccion(div_CalleNumero, div_Colonia, div_CP, div_Ciudad, div_Estado) {    
    const userIdDireccion = 1; // Id del usuario que se quiere obtener el nombre, en este caso es 4
    
    fetch('https://backmaque-production.up.railway.app/maque_ceramica/direccion/' + userIdDireccion, {
        method: 'get' //tipo de método
    }).then(function(response) {//response es la respuesta del servidor
        response.json().then(function (json) { //json es el objeto que se obtiene del servicio
            console.log(json); //imprime el json

            calle_numero = json.calle_numero; //se guarda la calle y número en la variable calle_numero
            colonia = json.colonia; //se guarda la colonia en la variable colonia
            cp = json.cp; //se guarda el código postal en la variable cp
            ciudad = json.ciudad; //se guarda la ciudad en la variable ciudad
            estado = json.estado; //se guarda el estado en la variable estado

            div_CalleNumero.innerHTML += `
                <div>
                    ${calle_numero}
                </div>
            `;
            div_Colonia.innerHTML += `
                <div>
                    ${colonia}
                </div>
            `;
            div_CP.innerHTML += `
                <div>
                    ${cp}
                </div>
            `;
            div_Ciudad.innerHTML += `
                <div>
                    ${ciudad}
                </div>
            `;
            div_Estado.innerHTML += `
                <div>
                    ${estado}
                </div>
            `;
            
        });//then
    }).catch(function(err) { //si hay un error
        console.log(err); //imprime el error
    });   
}

window.addEventListener("load", function (){
    let div_CalleNumero = document.getElementById("div_CalleNumero");
    let div_Colonia = document.getElementById("div_Colonia");
    let div_CP = document.getElementById("div_CP");
    let div_Ciudad = document.getElementById("div_Ciudad");
    let div_Estado = document.getElementById("div_Estado");

    addItemsDireccion(div_CalleNumero, div_Colonia, div_CP, div_Ciudad, div_Estado);   
});

