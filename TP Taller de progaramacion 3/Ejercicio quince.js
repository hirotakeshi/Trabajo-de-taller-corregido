
var numero = prompt("Ingrese un número:");


numero = parseInt(numero);


console.log("Los divisores de " + numero + " son:");


for (var i = 1; i <= numero; i++) {
    
    if (numero % i === 0) {
    
        console.log(i);
    }
}