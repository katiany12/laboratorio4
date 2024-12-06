// Validación del formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Capturar los valores de los campos
    const nombre = document.getElementById("Nombre").value.trim();
    const apellido = document.getElementById("ape").value.trim();
    const usuario = document.getElementById("Usur").value.trim();
    const contrasena = document.getElementById("contr").value;
    const correo = document.getElementById("Em").value.trim();
    const fecha = document.getElementById("Fecha").value;

    // Expresiones regulares
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexUsuario = /^[a-zA-Z0-9_]{3,}$/;

    // Array para almacenar errores
    let errores = [];

    // Validaciones
    if (nombre.length < 2) {
        errores.push("El nombre debe tener al menos 2 caracteres.");
    }

    if (apellido.length < 2) {
        errores.push("El apellido debe tener al menos 2 caracteres.");
    }

    if (!regexUsuario.test(usuario)) {
        errores.push("El usuario debe tener al menos 3 caracteres y solo puede contener letras, números y guiones bajos.");
    }

    if (contrasena.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres.");
    }

    if (!regexCorreo.test(correo)) {
        errores.push("El correo electrónico no es válido.");
    }

    if (!fecha) {
        errores.push("Debe seleccionar una fecha de nacimiento.");
    }

    // Mostrar errores o enviar formulario
    const erroresContenedor = document.getElementById("errores");
    erroresContenedor.innerHTML = ""; // Limpiar errores previos

    if (errores.length > 0) {
        errores.forEach(error => {
            const li = document.createElement("li");
            li.textContent = error;
            li.style.color = "red";
            erroresContenedor.appendChild(li);
        });
    } else {
        alert("Formulario enviado correctamente.");
        document.querySelector("form").submit();
    }
}

// Asociar el evento de validación al formulario
document.querySelector("form").addEventListener("submit", validarFormulario);