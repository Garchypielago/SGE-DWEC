//Numero aleatorio, minimo y maximo incluidos

function numeroAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Funcion manejadora que cambia de color el fondo
// con doble click en el documento
// usando la función numeroAleatorio

function cambiarColorDoc() {
  document.body.bgColor =
    "rgb(" +
    numeroAleatorio(0, 255) +
    "," +
    numeroAleatorio(0, 255) +
    "," +
    numeroAleatorio(0, 255) +
    ")";
}

const inputcolor = document.getElementById("papercolor");

// Según el color seleccionado en el input de color
function cambiarColor() {
  document.body.bgColor = inputcolor.value;
}

//asignamos el doble click al documento
document.ondblclick = cambiarColorDoc;

// al cambiar el color con el input
inputcolor.addEventListener("change", cambiarColor);
