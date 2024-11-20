
// "use strict";

let nombre = prompt("Escribe tu nombre: ", "Nombre");

const bloque1 = document.getElementById("bloque1");
const bloque2 = document.getElementById("bloque2");

alert("Hola, " + nombre + "!");
console.log("Hola, Mundo!");
document.write("Hola, Mundo!");

bloque1.innerText = "Hola, Mundo";
bloque1.innerText += ", y " + nombre;

bloque2.innerHTML = "Hola, Mundo";
bloque2.innerHTML += ", y " + nombre;

// valor = (a==b) ? 5:10;