let numero1 = prompt("Escribe el primer número que quieres comparar");
let numero2 = prompt("Escribe el Segundo número");

if (numero1 > numero2) {
    document.write("El " + numero1 +" Es el mayor y el " + numero2 + " es el menor");
} else if (numero2 > numero1) {
    document.write("El " + numero2 + " Es el mayor y el " + numero1 + " es el menor");
} else if (numero1 === numero2) {
    document.write("El " + numero1 + " Y el " + numero2 + " Son iguales");
} else {
    document.write("Escribe un numero!");
}
