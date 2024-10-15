// const textoPrincipal = document.getElementById("textoPrincipal");
// const textoBuscar = document.getElementById("textoBuscar");
// const textoReemplazar = document.getElementById("textoReemplazar");

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

const textoNuevo = document.getElementById("textoNuevo");

function buscarPrimera() {
  let arrayTP = document.getElementById("textoPrincipal").value.split(" ");
  let textoBuscar = document.getElementById("textoBuscar").value;
  let textoReemplazar = document.getElementById("textoReemplazar").value;

  if (arrayTP.indexOf(textoBuscar) != -1) {
    let nuevoTexto = "";
    arrayTP[arrayTP.indexOf(textoBuscar)] = textoReemplazar;
    arrayTP.forEach(element => {
      if (element != "." || element != "," || element != ";" || element != "!" || element != "¿" || element != ")" || element != "]" || element != "}" || element != "/") {
        nuevoTexto += " " + element;
      } else {
        nuevoTexto += element;
      }
    });

    textoNuevo.innerText = nuevoTexto;

  } else {
    textoNuevo.innerText = "No se ha encontrado esa palabra";
  }
}

function buscarTodas() {
  let arrayTP = document.getElementById("textoPrincipal").value.split(" ");
  let textoBuscar = document.getElementById("textoBuscar").value;
  let textoReemplazar = document.getElementById("textoReemplazar").value;

  if (arrayTP.indexOf(textoBuscar) != -1) {
    let nuevoTexto = "";

    while (arrayTP.indexOf(textoBuscar) != -1) {
      arrayTP[arrayTP.indexOf(textoBuscar)] = textoReemplazar;
    }

    arrayTP.forEach(element => {
      if (element != "." || element != "," || element != ";" || element != "!" || element != "¿" || element != ")" || element != "]" || element != "}" || element != "/") {
        nuevoTexto += " " + element;
      } else {
        nuevoTexto += element;
      }
    });
    textoNuevo.innerText = nuevoTexto;

  } else {
    textoNuevo.innerText = "No se ha encontrado esa palabra";
  }
}
