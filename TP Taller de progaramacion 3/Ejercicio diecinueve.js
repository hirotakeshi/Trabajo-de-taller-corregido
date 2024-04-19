var nota = prompt("Ingrese su nota:");


nota = parseFloat(nota);


var calificacion;
if (nota >= 0 && nota < 3) {
    calificacion = "Muy deficiente";
} else if (nota >= 3 && nota < 5) {
    calificacion = "Insuficiente";
} else if (nota >= 5 && nota < 6) {
    calificacion = "Suficiente";
} else if (nota >= 6 && nota < 7) {
    calificacion = "Bien";
} else if (nota >= 7 && nota < 9) {
    calificacion = "Notable";
} else if (nota >= 9 && nota <= 10) {
    calificacion = "Sobresaliente";
} else {
    calificacion = "Nota fuera de rango";
}

alert("La calificación es: " + calificacion);