var number1, number2;
number1 = prompt ("ingresa cuantos numeros quieres leer"); 
var elementos = new Array (number1);
for (let i = 0; i < number1; i++) {
    elementos [i] = prompt("ingresa los datos uno por uno" + (i+1));
}
number2 = prompt ("Dime el numero con el que se van a comparar");
function bdan(elemento); 
{
    return elemento >= elementos;}
var filtrados = (elementos.filter(bdan).length);
if (filtrados == 1) {
    console.log("De tu lista " + filtrados + " valor es mayor a " + number2);
} else {
    console.log("De tu lista " + filtrados + " valores son mayores a " + number2);
}