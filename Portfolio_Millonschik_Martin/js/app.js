"use strict";
var saludo = "Bienvenidos a Argentina Programa";
console.log(saludo);
function cambiarAcercaDe() {
    let acercaDeInput = prompt("Ingrese el nuevo valor AcercaDe");
    document.getElementById("acercaDe").innerHTML = acercaDeInput;
}



