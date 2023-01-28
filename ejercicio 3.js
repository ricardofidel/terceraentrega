var modulo;
var vector;
var condicion;
modulo= new Array (3);
for (var i = 0; i < 3; i++) {
 modulo[i]= prompt("ingrese el vector 1"+ "(" +(i+1)+")" );
}
vector = new Array (3);
for (var i = 0; i < 3; i++) {
    vector[i]= prompt("ingrese el vector 2"+ "(" +(i+1)+")");
}
condicion = ((modulo[0] * modulo[1]) + (modulo[0] * vector[1]) + (modulo[2] * vector[2]))
if (condicion == 0) {
    console.log ("a y b son ortogonales ")
} else {
    console.log ("El producto interno a / b: ")
    console.log (son)
    console.log ("a y b no son ortogonales")
}