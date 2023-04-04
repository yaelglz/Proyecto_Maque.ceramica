<?php
// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$motivo = $_POST['motivo'];
$mensaje = $_POST['mensaje'];

// Destinatario del correo electrónico
$para = 'admin@ejemplo.com';

// Asunto del correo electrónico
$asunto = 'Nuevo mensaje de contacto';

// Construir el mensaje del correo electrónico
$mensaje_correo = "Has recibido un nuevo mensaje de contacto desde tu sitio web:\n\n";
$mensaje_correo .= "Nombre: $nombre\n";
$mensaje_correo .= "Correo electrónico: $correo\n";
$mensaje_correo .= "Teléfono: $telefono\n";
$mensaje_correo .= "Motivo: $motivo\n";
$mensaje_correo .= "Mensaje:\n$mensaje\n";

// Cabeceras del correo electrónico
$cabeceras = "From: $nombre <$correo>\r\n";
$cabeceras .= "Reply-To: $correo\r\n";
$cabeceras .= "X-Mailer: PHP/" . phpversion();

// Enviar el correo electrónico
if (mail($para, $asunto, $mensaje_correo, $cabeceras)) {
    // Si se envió correctamente, redirigir al usuario a una página de confirmación
    header('Location: confirmacion.html');
} else {
    // Si hubo un error al enviar el correo electrónico, mostrar un mensaje de error
    echo "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo más tarde.";
}
?>
