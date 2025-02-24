// Array que pone por orden los meses
const meses = [
   "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
let numeroIntroducido = parseInt(prompt('Escribe un número del 1 al 12 para saber a qué mes corresponde'));
let mes;
let numeroReal = numeroIntroducido-1;
//modifica el numero para darle logica real y que no sea el 0 enero
mes = meses[numeroReal];
if (!mes) window.location.reload();
// 
alert("el mes correspondiente al Número " + numeroIntroducido + " es " + mes);
console.log("el mes correspondiente al Número " + numeroIntroducido + " es " + mes);
