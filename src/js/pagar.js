const formulario = document.getElementById("formulario-pago");

formulario.addEventListener("submit", function (event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById("nombre-pago").value;
    const apellido = document.getElementById("apellido-pago").value;
    const email = document.getElementById("email-pago").value;
    const direccion = document.getElementById("username-pago").value;
    const colonia = document.getElementById("direccion-pago").value;
    const estado = document.getElementById("estado").value;
    const cp = document.getElementById("cp-pago").value;

    // Validar cada campo de entrada
    if (!nombre) {
        alert("Por favor ingresa tu nombre");
        return;
    }
})