/*Funcion que pide el primer numero y lo muestra*/

let num1 = parseInt(prompt("Introduce el Primer número que usaras para la suma de dos cifras !"));
document.write(`<br> Primer número introducido: ${num1}`);



/*Funcion que pide el segundo numero y lo muestra en document.write */

let num2 = parseInt(prompt("Introduce el Segundo número"));
document.write(`<br> \n Segundo número introducido: ${num2}`);



/*Funcion que realiza la suma entre los numeros introducidos en los prompts utilizados */

let suma = num1 + num2;
document.write(`<br> \n El resultado de la Suma de los dos números es: ${suma}`);
