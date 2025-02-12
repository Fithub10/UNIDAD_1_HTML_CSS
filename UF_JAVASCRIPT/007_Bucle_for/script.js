// Seleccionamos el contenedor donde imprimiremos los resultados
let resultado = document.getElementById("resultado");

// Función para limpiar el contenido del resultado antes de cada ejecución
function limpiarResultado() {
    resultado.innerHTML = "";
}

// ======================== EJERCICIO PARTE A: Bucle del 0 al 4 ========================
function ejecutarParteA() {
    limpiarResultado(); // Borrar contenido anterior
    resultado.innerHTML += "<h3>Parte A: Imprimir del 0 al 4</h3>";

    for (let i = 0; i < 5; i++) {
        console.log("Parte A - Valor de i:", i);
        resultado.innerHTML += `Valor de i: ${i} <br>`;
    }
}

// ======================== EJERCICIO PARTE B: Detener el bucle en 2 ========================
function ejecutarParteB() {
    limpiarResultado(); // Borrar contenido anterior
    resultado.innerHTML += "<h3>Parte B: Romper el bucle en i = 2</h3>";

    for (let i = 0; i < 5; i++) {
        if (i === 2) {
            console.log("Parte B - Se detiene el bucle en i =", i);
            resultado.innerHTML += `Bucle detenido en i = ${i} <br>`;
            break; // Detenemos el bucle
        }
        console.log("Parte B - Valor de i:", i);
        resultado.innerHTML += `Valor de i: ${i} <br>`;
    }
}

// ======================== EJERCICIO PARTE C: Nuevas Funcionalidades ========================
function ejecutarParteC() {
    limpiarResultado(); // Borrar contenido anterior
    resultado.innerHTML += "<h3>Parte C: Variaciones del Bucle For</h3>";

    // -------------------- Imprimir solo números pares --------------------
    resultado.innerHTML += "<h4>1. Números Pares del 1 al 20</h4>";
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) continue; // Saltamos los impares
        console.log("Parte C - Número par:", i);
        resultado.innerHTML += `Número par: ${i} <br>`;
    }

    // -------------------- Sumar los primeros 100 números naturales --------------------
    resultado.innerHTML += "<h4>2. Suma de los Primeros 100 Números</h4>";
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    console.log("Parte C - Suma de los primeros 100 números naturales:", suma);
    resultado.innerHTML += `La suma de los primeros 100 números es: ${suma} <br>`;

    // -------------------- Imprimir un patrón de asteriscos en forma de triángulo --------------------
    resultado.innerHTML += "<h4>3. Patrón de Asteriscos (Triángulo)</h4>";
    let patron = "";
    for (let i = 1; i <= 8; i++) { // Generamos 8 líneas
        for (let j = 1; j <= i; j++) { // Agregamos los asteriscos en cada línea
            patron += "*";
        }
        patron += "<br>"; // Salto de línea después de cada fila
    }
    console.log("Parte C - Patrón de Asteriscos:");
    console.log(patron.replace(/<br>/g, "\n")); // Para verlo correctamente en consola
    resultado.innerHTML += patron;
}
