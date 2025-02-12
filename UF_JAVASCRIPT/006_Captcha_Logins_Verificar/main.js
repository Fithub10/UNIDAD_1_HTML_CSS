
// Selecciona elementos del DOM
let inputRespuesta = document.getElementById("respuestaUsuario");
let botonVerificar = document.getElementById("verificarBtn");

// Agrega evento de click al botón
botonVerificar.addEventListener("click", function () {
    let respuesta = inputRespuesta.value; // Obtener el valor del input

    // Convierte la respuesta a número y valida
    if (parseInt(respuesta) === 14) { // Si La respuesta correcta es 14
        alert("Correcto ! El Acceso ha sido concedido. ¡Bienvenido!");
    } else { // En caso de lo contrario
        alert("Incorrecto! No tienes acceso concedido. Intenta de nuevo.");
        window.location.reload(); // Recargar la página para volver a intentarlo
    }
});