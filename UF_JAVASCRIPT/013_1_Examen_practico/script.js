/* Solicitamos el nombre del alumno al usuario mediante prompt() 
que muestra una caja donde ira el nombre del Alumno*/
let nombre = prompt("Inserta el nombre del Alumno:");

/* Creamos un array donde almacenaremos las 5 valoraciones */
let valoraciones = [];

/* Usamos un bucle for para pedir las 5 notas */
for (let i = 0; i < 5; i++) {
    // Aqui se ingresaran las notas
    let nota = prompt(`Inserta la nota ${i + 1} (de 0 a 10):`);

    // Convertimos la entrada en un número decimal
    nota = parseFloat(nota);

    // Si la nota no es un número o está fuera del rango permitido, mostramos un mensaje de error
    // y restamos 1 a "i" para que vuelva a pedir la misma nota y no se quede sin un campo en la media 
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("¡¡Debes ingresar un número válido entre 0 y 10 !!");
        i--; // Restamos 1 a i para que no lo cuente y se pueda usarse correctamente el bucle 
    } else {
        // Si la nota es correcta, lo envia al array
        valoraciones.push(nota);
    }
}

/* Creamos una función que recibe un array de notas y calcula la media */
function calcularMedia(valoracionesArray) {
    let suma = 0; // Empezamos con la suma en 0

    // Sumamos cada nota del array
    for (let i = 0; i < valoracionesArray.length; i++) {
        suma += valoracionesArray[i];
    }
    // Dividimos la suma total entre la cantidad de notas para obtener la media
    return suma / valoracionesArray.length;
}

/* Llamamos a la función calcularMedia() pasando como argumento el array de notas
 toFixed(2) redondea el resultado a 2 decimales para que la media no tenga demasiados decimales*/
let media = calcularMedia(valoraciones).toFixed(2);

/* Creamos una función para convertir la media en una calificación de texto*/
function obtenerCalificacion(media) {

    if (media < 5) {
        return "Suspenso"; // Si es menor que 5, Suspenso

    } else if (media < 6) {
        return "Suficiente"; // Si está entre 5 y 5.99, Suficiente

    } else if (media < 7) {
        return "Bien"; // Si  está entre 6 y 6.99,  Bien

    } else if (media < 8) {
        return "Notable"; // Si está entre 7 y 7.99, Notable

    } else {
        return "Sobresaliente"; // Si es 8 o superior, Sobresaliente
    }
}

/* Llamamos a la función obtenerCalificacion para convertir el numero a texto */
let calificacionFinal = obtenerCalificacion(media);

/* Creamos una variable donde ira todo el contenido HTML guardado*/
let resultadoHTML = "<h4><b>Valoraciones</b></h4>"; // Empezamos con un título

/* Agregamos el nombre del Alumno al contenido HTML */
resultadoHTML += `<p><em>Nombre del Alumno: ${nombre}</em></p>`;

/* Usamos otro bucle for para recorrer las notas y mostrar cada una junto con su calificación */
for (let i = 0; i < valoraciones.length; i++) {
    // Mostramos la nota junto con su equivalencia en texto
    resultadoHTML += `<p>Valoracion Examen ${i + 1}:  <b> ${valoraciones[i]}</b> - ${obtenerCalificacion(valoraciones[i])}</p>`;
}

/* Mostramos la media y la calificación final obtenida */
resultadoHTML += `<h4>Media: <b><u>${media}</u></b></h4>`;
resultadoHTML += `<h2>Nota final: <b><u>${calificacionFinal}</u></b></h2>`;

/* Insertamos el contenido en el HTML, dentro del <div id="resultado"> */
document.getElementById("resultado").innerHTML = resultadoHTML;
