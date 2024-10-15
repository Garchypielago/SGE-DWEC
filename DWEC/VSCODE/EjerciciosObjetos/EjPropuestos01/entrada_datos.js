// const textoPrincipal = document.getElementById("textoPrincipal");
// const textoBuscar = document.getElementById("textoBuscar");
// const textoReemplazar = document.getElementById("textoReemplazar");

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

const textoNuevo = document.getElementById("textoNuevo");

function buscarPrimera(){
  let arrayTP = document.getElementById("textoPrincipal").value.split(" ");
  let textoBuscar = document.getElementById("textoBuscar").value;
  let textoReemplazar = document.getElementById("textoReemplazar").value;

  if (arrayTP.indexOf(textoBuscar)!=-1){
    
    arrayTP[arrayTP.indexOf(textoBuscar)] = textoReemplazar;
    textoNuevo.innerText = arrayTP.toString();
  } else {

  }


}
