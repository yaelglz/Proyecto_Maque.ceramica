const formulario = document.getElementById("formulario-info");
const nombre = document.getElementById("nombre-pago");
const apellido = document.getElementById("apellido-pago");
const email = document.getElementById("email-pago");
const direccion = document.getElementById("direccion-pago");
const colonia = document.getElementById("colonia-pago");
const estado = document.getElementById("estado");
const cp = document.getElementById("cp-pago");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    const nombreValor = nombre.value.trim();
    const apellidoValor = apellido.value.trim();
    const emailValor = email.value.trim();
    const direccionValor = direccion.value.trim();
    const coloniaValor = colonia.value.trim();
    const estadoValor = estado.value.trim();
    const cpValor = cp.value.trim();

    if (nombreValor === "") {
        setErrorInput(nombre, "El campo Nombres es obligatorio");
    } else {
        setSuccessInput(nombre);
    }

    if (apellidoValor === "") {
        setErrorInput(apellido, "El campo Apellidos es obligatorio");
    } else {
        setSuccessInput(apellido);
    }

    if (emailValor === "") {
        setErrorInput(email, "El campo Correo electrónico es obligatorio");
    } else if (!esEmailValido(emailValor)) {
        setErrorInput(email, "El correo electrónico no es válido");
    } else {
        setSuccessInput(email);
    }

    if (direccionValor === "") {
        setErrorInput(direccion, "El campo Dirección es obligatorio");
    } else {
        setSuccessInput(direccion);
    }

    if (coloniaValor === "") {
        setErrorInput(colonia, "El campo Colonia es obligatorio");
    } else {
        setSuccessInput(colonia);
    }

    if (estadoValor === "") {
        setErrorInput(estado, "El campo Estado es obligatorio");
    } else {
        setSuccessInput(estado);
    }

    if (cpValor === "") {
        setErrorInput(cp, "El campo CP es obligatorio");
    } else if (!esCpValido(cpValor)) {
        setErrorInput(cp, "El CP no es válido");
    } else {
        setSuccessInput(cp);
    }
}

function setErrorInput(input, mensaje) {
    const inputControl = input.parentElement;
    const small = inputControl.querySelector("small");

    inputControl.className = "col-12 error";
    small.innerText = mensaje;
}

function setSuccessInput(input) {
    const inputControl = input.parentElement;

    inputControl.className = "col-12 success";
}

function esEmailValido(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function esCpValido(cp) {
    return /^\d{5}$/.test(cp);
}

