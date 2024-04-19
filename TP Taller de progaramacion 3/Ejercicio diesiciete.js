var numero = prompt("Ingrese un número:");


numero = parseInt(numero);


var esPrimo = true;
if (numero <= 1) {
    esPrimo = false;
} else {
   
    for (var i = 2; i <= numero / 2; i++) {
       
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}


if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}