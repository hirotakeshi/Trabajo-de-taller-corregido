
var numero1 = prompt("Ingrese el primer número:");
var numero2 = prompt("Ingrese el segundo número:");


numero1 = parseInt(numero1);
numero2 = parseInt(numero2);


console.log("Los divisores comunes de " + numero1 + " y " + numero2 + " son:");


console.log("Divisores de " + numero1 + ":");
for (var i = 1; i <= numero1; i++) {
    if (numero1 % i === 0) {
        console.log(i);
    }
}


console.log("Divisores comunes de " + numero2 + ":");
for (var j = 1; j <= numero2; j++) {
    if (numero2 % j === 0 && numero1 % j === 0) {
        console.log(j);
    }
}