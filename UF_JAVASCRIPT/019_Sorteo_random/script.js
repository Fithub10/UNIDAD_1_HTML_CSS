// Capturamos los elementos del DOM
const formulario = document.querySelector("#form");
const campoNombre = document.querySelector("#nombre");
const listaConcursantes = document.querySelector("#listaConcursantes");
const listaPremios = document.querySelector("#listaPremios");
const botonSortear = document.querySelector("#botonSortear");
const botonPremio = document.querySelector("#botonPremio");
const botonLimpiarLista = document.querySelector("#limpiarLista");
const botonReiniciar = document.querySelector("#reiniciar");
const resultadoSorteo = document.querySelector("#resultadoSorteo");

// Variables para almacenar participantes, ganador y premio
let participantes = [];
let ganador = "";
let premioGanado = "";

// Lista de premios predefinidos
const premios = ["Sigue intentando", "iPhone", "MacBook", "Descuento del 20%"];

// Función para mostrar los premios en la pantalla
function mostrarPremios() {
    listaPremios.innerHTML = ""; // Limpiamos la lista antes de actualizarla
    premios.forEach((premio, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${premio}`;
        li.classList.add("premio-item"); // Añadimos la clase para estilos
        listaPremios.appendChild(li);
    });
}

// Función para resaltar el premio sorteado
function resaltarPremioSorteado(premio) {
    const itemsPremios = document.querySelectorAll(".premio-item");
    itemsPremios.forEach((item) => {
        if (item.textContent.includes(premio)) {
            item.classList.add("sorteado"); // Añadimos la clase para resaltar
        } else {
            item.classList.remove("sorteado"); // Quitamos la clase si no es el premio sorteado
        }
    });
}

// Evento para añadir participantes
formulario.onsubmit = function (e) {
    e.preventDefault(); // Evitamos que la página se recargue
    const nombreConcursante = campoNombre.value.trim();

    if (nombreConcursante !== "") {
        if (participantes.includes(nombreConcursante)) {
            alert("Este nombre ya está en la lista.");
        } else {
            participantes.push(nombreConcursante);
            actualizarLista();
            campoNombre.value = "";
        }
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
};

// Función para actualizar la lista de participantes
function actualizarLista() {
    listaConcursantes.innerHTML = "";
    participantes.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        li.classList.add("participante-item");
        listaConcursantes.appendChild(li);
    });
}

// Función para sortear un ganador
function sortearGanador() {
    if (participantes.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * participantes.length);
        ganador = participantes[indiceAleatorio];
        resultadoSorteo.innerText = `El ganador es: ${ganador}. Ahora sortea un premio.`;
    } else {
        alert("No hay participantes para sortear.");
    }
}

// Función para sortear un premio
function sortearPremio() {
    if (ganador !== "") {
        const indicePremio = Math.floor(Math.random() * premios.length);
        premioGanado = premios[indicePremio];
        resultadoSorteo.innerText = `${ganador} ha ganado el premio: ${premioGanado}`;
        resaltarPremioSorteado(premioGanado); // Resaltamos el premio sorteado
    } else {
        alert("Primero debes sortear un ganador.");
    }
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    participantes = [];
    ganador = "";
    premioGanado = "";
    resultadoSorteo.innerText = "";
    actualizarLista();
    mostrarPremios(); // Volvemos a mostrar los premios sin resaltar
}

// Asignamos las funciones a los botones
botonSortear.addEventListener("click", sortearGanador);
botonPremio.addEventListener("click", sortearPremio);
botonLimpiarLista.addEventListener("click", () => {
    participantes = [];
    actualizarLista();
});
botonReiniciar.addEventListener("click", reiniciarSorteo);

// Mostramos los premios al cargar la página
mostrarPremios();