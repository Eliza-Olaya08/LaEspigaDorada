// Obtener el formulario
const formulario = document.getElementById("formularioLogin");

// Escuchar cuando el usuario envíe el formulario
formulario.addEventListener("submit", function(event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener los datos ingresados
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Verificar las credenciales
    if (usuario === "admin" && contrasena === "12345") {

        // Mostrar mensaje de bienvenida
        alert("¡Bienvenido a La Espiga Dorada!");

        // Ir a la página principal
        window.location.replace("main.html");

    } else {

        // Mostrar mensaje de error
        document.getElementById("mensaje").textContent =
            "Usuario o contraseña incorrectos.";

    }

});