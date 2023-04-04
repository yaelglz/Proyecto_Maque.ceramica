const formulario = document.getElementById('formulario-info');
const inputs = document.querySelectorAll('#formulario-info input');


const expresiones = {
    usuario: /^[A-Z0-9 _]*[A-Z0-9][A-Z0-9 _]*$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
//le especificas el input con el nombre del input
const validarFromulario = (e) => {
    switch (e.target.id) {
        case "nombre-pago":
            if (expresiones.nombre.test(e.target.value)) {//e.target.value accedemos al valor del input
                document.getElementById("form-nombre-create").classList.remove("form-invalid")
                document.getElementById("form-nombre-create").classList.add("form-valid")
                document.querySelector("#form-nombre-create .form-login-error").classList.remove("form-login-error-activo")
            } else {
                document.getElementById("form-nombre-create").classList.add("form-invalid")
                document.getElementById("form-nombre-create").classList.remove("form-valid")
                document.querySelector("#form-nombre-create .form-login-error").classList.add("form-login-error-activo")
            }
            break;

        case "apellido-pago":
            if (expresiones.nombre.test(e.target.value)) {//e.target.value accedemos al valor del input
                document.getElementById("form-apellido-create").classList.remove("form-invalid")
                document.getElementById("form-apellido-create").classList.add("form-valid")
                document.querySelector("#form-apellido-create .form-login-error").classList.remove("form-login-error-activo")
            } else {
                document.getElementById("form-apellido-create").classList.add("form-invalid")
                document.getElementById("form-apellido-create").classList.remove("form-valid")
                document.querySelector("#form-apellido-create .form-login-error").classList.add("form-login-error-activo")
            }

            break;

        case "email-pago":
            if (expresiones.correo.test(e.target.value)) {//e.target.value accedemos al valor del input
                document.getElementById("form-email-create").classList.remove("form-invalid")
                document.getElementById("form-email-create").classList.add("form-valid")
                document.querySelector("#form-email-create .form-login-error").classList.remove("form-login-error-activo")
            } else {
                document.getElementById("form-email-create").classList.add("form-invalid")
                document.getElementById("form-email-create").classList.remove("form-valid")
                document.querySelector("#form-email-create .form-login-error").classList.add("form-login-error-activo")
            }

            break;


    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFromulario);
    input.addEventListener('blur', validarFromulario);

});


//evita que se mande el formulario si está incompleto
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

//********************** */

function validar() {
    var direccion = document.getElementById("direccion-pago").value;
    var colonia = document.getElementById("colonia-pago").value;
    var estado = document.getElementById("estado-pago").value;
    var cp = document.getElementById("cp-pago").value;

    if (direccion.trim() == "") {
        alert("Por favor, introduce una dirección válida.");
        return false;
    }

    if (colonia.trim() == "") {
        alert("Por favor, introduce una colonia válida.");
        return false;
    }

    if (estado.trim() == "") {
        alert("Por favor, selecciona un estado válido.");
        return false;
    }

    if (cp.trim() == "") {
        alert("Por favor, introduce un código postal válido.");
        return false;
    } else if (isNaN(cp) || cp.length != 5) {
        alert("Por favor, introduce un código postal válido de 5 dígitos.");
        return false;
    }

    return true;
}


/********** validacion tarjeta ***********/


function validarNumeroTarjeta(numeroTarjeta) {
    // Eliminar espacios en blanco y guiones
    numeroTarjeta = numeroTarjeta.replace(/\s+/g, '').replace(/-/g, '');

    // Validar que el número de tarjeta contenga sólo dígitos y tenga una longitud de 16
    if (/^\d{16}$/.test(numeroTarjeta)) {
        // Tarjeta válida
        return true;
    } else {
        // Tarjeta inválida
        alert('El número de tarjeta ingresado es inválido.');
        return false;
    }
}

function validarFormularioTarjeta() {
    // Obtener valores de los campos
    var numeroTarjeta = document.getElementById('numero-tarjeta').value;
    var nombreTarjeta = document.getElementById('nombre-tarjeta').value;
    var mesCaducidad = document.getElementById('mes-caducidad').value;
    var anioCaducidad = document.getElementById('anio-caducidad').value;
    var cvc = document.getElementById('cvc-pago').value;

    // Validar campos requeridos
    if (numeroTarjeta.trim() == '') {
        alert('Por favor ingrese el número de la tarjeta.');
        return false;
    }
    if (nombreTarjeta.trim() == '') {
        alert('Por favor ingrese el nombre del tarjetahabiente.');
        return false;
    }
    if (mesCaducidad == 'Elige una opción') {
        alert('Por favor seleccione el mes de caducidad.');
        return false;
    }
    if (anioCaducidad == 'Elige una opción') {
        alert('Por favor seleccione el año de caducidad.');
        return false;
    }
    if (cvc.trim() == '') {
        alert('Por favor ingrese el código de seguridad (CVC).');
        return false;
    }

    // Validar número de tarjeta
    if (!validarNumeroTarjeta(numeroTarjeta)) {
        return false;
    }

    // Formulario válido
    return true;
}