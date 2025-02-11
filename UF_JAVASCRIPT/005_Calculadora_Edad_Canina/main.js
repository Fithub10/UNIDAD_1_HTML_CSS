/*Funcion que pide la edad del perro*/

let edadperro = parseInt(prompt("Introduce la edad actual de tu perro"));
document.write(`<br> Edad Animal del perro: ${edadperro} años`);



/*Funcion Explica que calcula la edad del perro multiplicada 7 */

let explicacion =(`<br> \n La edad de su perro se multiplicara por 7 para convertir ese valor en su edad humana!`);
document.write(explicacion)


/*Funcion que entrega la edad humana del perro despues de calcularlo y lo muestra  */
let edadhumano = 7 ;
let calculo = edadperro * edadhumano;
document.write(`<br> \n La edad Humana de su canino es : ${calculo} años`);
