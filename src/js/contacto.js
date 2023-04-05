
function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos requeridos.");
        return false;
    }

    // Validar formato de correo electrónico
    let formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formatoCorreo.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validar formato de número de teléfono
    let formatoTelefono = /^\d+$/;
    if (telefono !== "" && !formatoTelefono.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        return false;
    }
    form.reset();
    // Si todos los campos son válidos, enviar formulario
    return true;
}
