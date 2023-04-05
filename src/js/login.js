// Slider Login/Registro

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Validación JS

// Constante que recupera el formulario
const formulario = document.getElementById("form-login");
// Constante que recupera todos los campos input dentro del formulario
const inputs = document.querySelectorAll("#form-login");

// Expresiones regulares
const expresiones = {

	usuario: /^[a-z A-Z 0-9 \_ \-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-z A-Z À-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  cp: /^\d{5}$/, // 5 números.

}

// Evento dentro del formulario
// Evita que se envien los datos con el botón sin pasar por la validación
formulario.addEventListener("submit", (e) => {

  e.preventDefault();

})

const validarFormulario = (e) => {

  switch (e.target.id) {

    // Target.id muestra en consola el id del input donde se teclea un caracter
    // console.log(e.target.id);

    /* Para cada id existe un case con su nombre
      Para cada case un ciclo if
      Con test se comprueba que el valor coincida con las condiciones establecidas en la constante "expresiones". Si no es así, se ejecuta classList.add para agregar una clase CSS que colorea el campo cuando es inválido. En cuanto se vuelve valido, la clase se elimina con classList.remove, el color cambia debido a la comprobación anterior de tecla a tecla.
    */

    case "email-login":
    
      if (expresiones.correo.test(e.target.value)) {
        document.getElementById("form-email-login").classList.remove("form-invalid")
        document.getElementById("form-email-login").classList.add("form-valid")
        document.querySelector("#form-email-login .form-login-error").classList.remove("form-login-error-activo")
      } else {
        document.getElementById("form-email-login").classList.add("form-invalid")
        document.getElementById("form-email-login").classList.remove("form-valid")
        document.querySelector("#form-email-login .form-login-error").classList.add("form-login-error-activo")
      }
      
    break;

    // El ciclo if se repite cambiando la condición de la constante expresiones para cada valor esperado y cambiando el ID de cada input para recuperar el valor correspondiente

    case "password-login":

      if (expresiones.password.test(e.target.value)) {
      document.getElementById("form-password-login").classList.remove("form-invalid")
      document.getElementById("form-password-login").classList.add("form-valid")
      document.querySelector("#form-password-login .form-login-error").classList.remove("form-login-error-activo")
      } else {
      document.getElementById("form-password-login").classList.add("form-invalid")
      document.getElementById("form-password-login").classList.remove("form-valid")
      document.querySelector("#form-password-login .form-login-error").classList.add("form-login-error-activo")
      }

    break;

    case "nombre-create":
      
      if (expresiones.nombre.test(e.target.value)) {
        document.getElementById("form-nombre-create").classList.remove("form-invalid")
        document.getElementById("form-nombre-create").classList.add("form-valid")
        document.querySelector("#form-nombre-create .form-login-error").classList.remove("form-login-error-activo")
      } else {
        document.getElementById("form-nombre-create").classList.add("form-invalid")
        document.getElementById("form-nombre-create").classList.remove("form-valid")
        document.querySelector("#form-nombre-create .form-login-error").classList.add("form-login-error-activo")
      }

    break;

    case "apellido-create":
      if (expresiones.nombre.test(e.target.value)) {
        document.getElementById("form-apellido-create").classList.remove("form-invalid")
        document.getElementById("form-apellido-create").classList.add("form-valid")
        document.querySelector("#form-apellido-create .form-login-error").classList.remove("form-login-error-activo")
      } else {
        document.getElementById("form-apellido-create").classList.add("form-invalid")
        document.getElementById("form-apellido-create").classList.remove("form-valid")
        document.querySelector("#form-apellido-create .form-login-error").classList.add("form-login-error-activo")
      }
    break;

    case "username-create":
      if (expresiones.usuario.test(e.target.value)) {
        document.getElementById("form-username-create").classList.remove("form-invalid")
        document.getElementById("form-username-create").classList.add("form-valid")
        document.querySelector("#form-username-create .form-login-error").classList.remove("form-login-error-activo")
      } else {
        document.getElementById("form-username-create").classList.add("form-invalid")
        document.getElementById("form-username-create").classList.remove("form-valid")
        document.querySelector("#form-username-create .form-login-error").classList.add("form-login-error-activo")
      }
    break;

    case "ciudad-create":
      if (expresiones.nombre.test(e.target.value)) {
        document.getElementById("form-ciudad-create").classList.remove("form-invalid")
        document.getElementById("form-ciudad-create").classList.add("form-valid")
        document.querySelector("#form-ciudad-create .form-login-error").classList.remove("form-login-error-activo")
      } else {
        document.getElementById("form-ciudad-create").classList.add("form-invalid")
        document.getElementById("form-ciudad-create").classList.remove("form-valid")
        document.querySelector("#form-ciudad-create .form-login-error").classList.add("form-login-error-activo")
      }
    break;

    case "cp-create":
      if (expresiones.cp.test(e.target.value)) {
        document.getElementById("form-cp-create").classList.remove("form-invalid")
        document.getElementById("form-cp-create").classList.add("form-valid")
        document.querySelector("#form-cp-create .form-login-error").classList.remove("form-login-error-activo")
      } else {
        document.getElementById("form-cp-create").classList.add("form-invalid")
        document.getElementById("form-cp-create").classList.remove("form-valid")
        document.querySelector("#form-cp-create .form-login-error").classList.add("form-login-error-activo")
      }
    break;

    case "password-create":
      if (expresiones.password.test(e.target.value)) {
        document.getElementById("form-password-create").classList.remove("form-invalid")
        document.getElementById("form-password-create").classList.add("form-valid")
        document.querySelector("#form-password-create .form-login-error").classList.remove("form-login-error-activo")
      } else {
        document.getElementById("form-password-create").classList.add("form-invalid")
        document.getElementById("form-password-create").classList.remove("form-valid")
        document.querySelector("#form-password-create .form-login-error").classList.add("form-login-error-activo")
      }
    break;

    // Se agrega la función para validar contraseña

    case "password-match-create":
        validarPassword();
    break;

  }
  
}

// Evento que responde a cada tecla con "keyup"

inputs.forEach((input) => {

  input.addEventListener("keyup", validarFormulario);
  
  /*=> {

    // console.log("Tecla"); // Verificar en consola que el evento funciona

  }
  )

*/

})

// La función para validar la contraseña recupera los valores de los inputs en el documento y los asigna a dos variables. Después el ciclo if las compara y realiza la acción para mostrar el mensaje de error

const validarPassword = () => {

  var inputPassword1 = document.getElementById("password-create");
  var inputPassword2 = document.getElementById("password-match-create");

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById("form-password-match-create").classList.add("form-invalid")
    document.getElementById("form-password-match-create").classList.remove("form-valid")
    document.querySelector("#form-password-match-create .form-login-error").classList.add("form-login-error-activo")
  } else {
    document.getElementById("form-password-match-create").classList.remove("form-invalid")
    document.getElementById("form-password-match-create").classList.add("form-valid")
    document.querySelector("#form-password-match-create .form-login-error").classList.remove("form-login-error-activo")
  }

}

const form = document.querySelector('#form-crear-usuario');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que se recargue la página al enviar el formulario

  const nombre = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const telefono = document.querySelector('#telefono').value;
  const correo = document.querySelector('#correo').value;
  const password = document.querySelector('#password').value;

  const data = {
    nombre,
    apellido,
    telefono,
    correo,
    password
  };

  fetch('https://backmaque-production.up.railway.app/maque_ceramica/usuario/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

const formLogin = document.querySelector('#form-login');

formLogin.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que se recargue la página al enviar el formulario

  const correoLogin = document.querySelector('#correoLogin').value;
  const passwordLogin = document.querySelector('#passwordLogin').value;

  const data = {
    correo: correoLogin,
    password: passwordLogin
  };

  fetch('http://localhost:8080/maque_ceramica/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    // Si las credenciales son válidas, se redirige al usuario a la página principal
    window.location.href = 'http://localhost:8080/maque_ceramica/micuenta.html';
  })
  .catch(error => {
    console.error('Error:', error);
  });
});


/* Validación con Bootstrap

// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
*/