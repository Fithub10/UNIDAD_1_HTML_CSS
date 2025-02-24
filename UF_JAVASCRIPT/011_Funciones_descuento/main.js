function calculaDescuento(precio, descuento){
    let descuentoTotal = precio * descuento / 100;
    let pagofinal = precio - descuentoTotal;
    return pagofinal;
}

let precio = parseInt(prompt("Introduce el precio del producto"));
let descuento = parseInt(prompt("Introduce el descuento"));

let precioFinal = calculaDescuento(precio, descuento);

document.write(`
    El precio final del producto después de aplicar un descuento del ${descuento}% es: ${precioFinal} euros.
    `);