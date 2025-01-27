// Ciudades a añadir como opciones al input select
// const cities = ["Granada", "Valencia", "Madrid", "Toledo"];

/*

Estos métodos describen cómo asignar datos a un objeto DOM creado dinámicamente
y cómo usarlos al lanzar el evento enlazado al objeto

function usarDatosObjetoDOM() {
// this es el objeto que invoca el evento, obj en la función crearObjetoDOM
  let informacion = this.info;
  console.log("usarDatosObjetoDOM:" + informacion);
}

function crearObjetoDOM() {
  const obj = document.createElement(tag);
  let informacion = {a:10, b:"data"}
  obj.info = informacion;
  obj.addEventListener("click", usarDatosObjetoDOM);
}

Estilos a añadir a cada círculo con el campo a asignar del objeto

left : obj.ejex  en px ; ej: 20px
top : obj.ejey en px
width : obj.box en px
height : obj.box en px
boxShadow : 0 0 0 obj.margin en px obj.colormargin; ej: 0 0 0 30px #f799f0
backgroundColor : obj.colorbox;

Además hay que añadir la clase circle
*/

// lista de opciones
const cities = ["Granada", "Valencia", "Madrid", "Toledo"];



// 1 Array de circulosdata
circle_data = JSON.parse(circle_data);
// 1 ~

document.addEventListener("DOMContentLoaded", () => {
  createObjectDOMList(circle_data);
  createSelect();
});

// 2
const div_grafica = document.getElementById('grafica');
const div_cityname = document.getElementById('cityname');
const div_citystats = document.getElementById('citystats');

function createObjectDOMList(list) {  
  div_grafica.innerHTML="";

  Array.from(list).forEach(circle =>{
    crearObjetoDOM(circle);
  });
}

function clickCircle() {
  // this es el objeto que invoca el evento, obj en la función crearObjetoDOM
  div_citystats.innerHTML="";
  div_citystats.appendChild(createText(this.info.cod));
  div_citystats.appendChild(createText(this.info.valor));
  div_citystats.appendChild(createText(this.info.incremento));

}

function overCircle() {
  // this es el objeto que invoca el evento, obj en la función crearObjetoDOM
  div_cityname.appendChild(createText(this.info.label));
}
function leaveCircle() {
  div_cityname.innerHTML="";
}

function createText(text){
  const newText = document.createElement("div");

  newText.classList.add("info");
  newText.textContent=text;

  return newText;
}

function crearObjetoDOM(circle) {
  const newCircle = document.createElement("div");

  newCircle.classList.add("circle");
  newCircle.style.left = circle.ejex + "px";
  newCircle.style.top = circle.ejey + "px";
  newCircle.style.height = circle.box + "px";
  newCircle.style.width = circle.box + "px";

  newCircle.style.boxShadow = "0 0 0 " + circle.margin + "px " + circle.colormargin;
  newCircle.style.backgroundColor = circle.colorbox;

  let informacion = { cod: circle.cod, valor: circle.box, incremento: circle.margin, label: circle.label };
  newCircle.info = informacion;
  newCircle.addEventListener("click", clickCircle);
  newCircle.addEventListener("mouseenter", overCircle);
  newCircle.addEventListener("mouseleave", leaveCircle);


  div_grafica.appendChild(newCircle);
}

//  2 ~

function filtreProvincias(provincia){
  let list = Array.from(circle_data)
  createObjectDOMList(list.filter(ele => {
    return ele.label.equalsIgnoreCase(provincia);
  }));
}

// 4 TODO borrar info bloque tras cambiar
const select_scities = document.getElementById('scities');

function createSelect() {
  const newOption = document.createElement("option");
  newOption.textContent = "Todas las provincias";
  newOption.value = "";
  select_scities.appendChild(newOption);

  cities.forEach((city) => {
    const newOption = document.createElement("option");
    newOption.textContent = city;
    newOption.value = city;

    select_scities.appendChild(newOption);
  });
}
// 4 ~