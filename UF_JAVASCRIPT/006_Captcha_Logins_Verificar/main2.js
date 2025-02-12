 // Definimos las variables necesarias
 let intentosRestantes = 3; // Número máximo de intentos permitidos
 let respuestaCorrecta = 14; // Respuesta correcta del captcha

 // Seleccionamos los elementos del HTML
 let campoRespuesta = document.getElementById("campoRespuesta"); 
 let botonVerificar = document.getElementById("botonVerificar");

 // Agregamos un evento al botón para ejecutar la validación al hacer clic
 botonVerificar.addEventListener("click", function() {
     let respuestaUsuario = campoRespuesta.value; // Obtenemos lo que el usuario escribió en el input

     // Validamos si el usuario ingresó un número o no
     if (isNaN(respuestaUsuario)) { 
         alert("Debes introducir un número válido.");
         campoRespuesta.value = ""; // Borrar el campo para que lo intente de nuevo
         return; // Salimos de la función sin restar intentos
     }

     // Convertimos la respuesta en un número para compararla correctamente
     respuestaUsuario = parseInt(respuestaUsuario);

     // Si la respuesta es correcta, damos acceso y terminamos el proceso
     if (respuestaUsuario === respuestaCorrecta) {
         alert("Acceso concedido. Bienvenido.");
         return; 
     }

     // Si la respuesta es incorrecta, restamos un intento
     intentosRestantes--;

     // Mostramos un mensaje con los intentos restantes
     alert(`Respuesta incorrecta. Intentos restantes: ${intentosRestantes}`);

     // Si ya no quedan intentos, redirigimos al usuario
     if (intentosRestantes === 0) {
         alert("Has fallado 3 veces. Serás redirigido.");
         window.location.href = "https://www.cni.es/"; // Redirige a la web del CNI 
     }
 });
