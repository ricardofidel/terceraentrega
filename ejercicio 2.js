var number1, suma, division;
number1 = prompt("numeros de datos a ingresar");
var Array1 = new Array(number1);

for (var i = 0; i < number1; i++) {
    Array1 [i] = parseFloat(prompt("Coloca aqui los datos" + (i+1)))
}
function ej (){ 
    num1 = 0
    num2 = Array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        number1);
      return number2;}     
suma = ej();
division = (suma / number1);

function bdan(elemento) {
    return elemento >= division;
  }
  var filtrados = (Array1.filter(bdan).length);
if (filtrados == 1) {
    console.log(filtrados + "el valor es mayor al promedio")
} else {
    console.log(filtrados + "los valores son mayores al promedio")
}