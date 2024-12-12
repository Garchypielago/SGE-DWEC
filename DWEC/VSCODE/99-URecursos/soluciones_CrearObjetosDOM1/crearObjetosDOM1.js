// Ejercicio 1

const div_ej1 = document.getElementById("ej1");
const objetoTexto = document.createElement("div");
objetoTexto.textContent = "Hola, Mundo!";
objetoTexto.style.backgroundColor = "lightblue";
objetoTexto.style.fontSize = "20px";
objetoTexto.style.margin = "10px";
div_ej1.appendChild(objetoTexto);

// Ejercicio 2

const div_ej2 = document.getElementById("ej2");

const objetoNumero = document.createElement("div");
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
objetoNumero.textContent = `Número: ${numeroAleatorio}`;
objetoNumero.style.border = "2px solid red";
objetoNumero.style.backgroundColor = "lightyellow";
div_ej2.appendChild(objetoNumero);

// Ejercicio 3

const div_ej3 = document.getElementById("ej3");

const barraProgreso = document.createElement("div");
const porcentajeCompletado = 50;
barraProgreso.style.width = `${porcentajeCompletado}%`;
barraProgreso.style.height = "30px";
barraProgreso.style.backgroundColor = "green";
div_ej3.appendChild(barraProgreso);

// Ejercicio 3 bis

const div_ej3b = document.getElementById("ej3bis");

const barraEnProgreso = document.createElement("div");
let porcentajeIncremental = 20;
barraEnProgreso.style.height = "30px";
barraEnProgreso.style.backgroundColor = "green";
div_ej3b.appendChild(barraEnProgreso);

let delay = setInterval(() => {
  porcentajeIncremental += 1;
  barraEnProgreso.style.width = `${porcentajeIncremental}%`;
  if (barraEnProgreso.style.width === "95%") {
    clearInterval(delay);
  }
}, 100);

// Ejercicio 4

const div_ej4 = document.getElementById("ej4");

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    const objDiv = document.createElement("div");
    objDiv.textContent = `Texto ${i + 1}`;
    objDiv.style.backgroundColor = "lightblue";
    objDiv.style.margin = "5px";
    div_ej4.appendChild(objDiv);
  } else {
    const objP = document.createElement("span");
    const txtP = document.createTextNode(`Texto ${i + 1}`);
    objP.style.backgroundColor = "lightcoral";
    objP.style.margin = "5px";
    objP.appendChild(txtP);
    div_ej4.appendChild(objP);
  }
}

// Ejercicio 4 bis

const div_ej4b = document.getElementById("ej4bis");

for (let i = 0; i < 5; i++) {
  const objeto = document.createElement(i % 2 === 0 ? "div" : "span");
  objeto.textContent = i % 2 === 0 ? `Texto ${i + 1}` : `Número ${i + 1}`;
  objeto.style.backgroundColor = i % 2 === 0 ? "lightblue" : "lightcoral";
  objeto.style.margin = "5px";
  div_ej4b.appendChild(objeto);
}

// Ejercicio 4 triple

const div_ej4tres = document.getElementById("ej4tres");

let objinput;

for (let i = 0; i < 7; i++) {
  if (i % 2 === 0) {
    objinput = document.createElement("input");
    objinput.setAttribute("type", "text");
    objinput.value = "10";
    objinput.name = "texto";
    div_ej4tres.appendChild(objinput);
  } else {
    objinput = document.createElement("input");
    objinput.setAttribute("type", "number");
    objinput.value = "20";
    objinput.name = "numero";
    div_ej4tres.appendChild(objinput);
  }
}

// Ejercicio 5

const div_ej5 = document.getElementById("ej5");

let posicion = 0;
let direccion = 1;
let final = div_ej5.clientWidth;

const objetoAnimado = document.createElement("div");
objetoAnimado.textContent = "Objeto Animado";
objetoAnimado.style.position = "relative";
objetoAnimado.style.left = `${posicion}px`;
objetoAnimado.classList.add("ejercicio5");

div_ej5.appendChild(objetoAnimado);

function desplazar() {
  posicion += direccion;

  if (posicion > final - objetoAnimado.clientWidth) {
    direccion = -1;
  } else if (posicion <= 0) {
    direccion = 1;
    //    clearInterval(delay5);
  }
  objetoAnimado.style.left = `${posicion}px`;
}

let delay5 = setInterval(desplazar, 5);

// Ejercicio 6

const div_ej6 = document.getElementById("ej6");

function insertar(evento) {
  // Creamos el elemento LI y su texto por separado
  let nuevoHijo = document.createElement("LI");
  let nodoTexto = document.createTextNode(Math.random());
  // Unimos el texto al elemento LI
  nuevoHijo.appendChild(nodoTexto);
  // Añadimos el elemento LI a la UL
  document.getElementById("miLista").appendChild(nuevoHijo);
}

const miLista = document.createElement("ul");

miLista.setAttribute("id", "miLista");
div_ej6.appendChild(miLista);

const buttonLista = document.createElement("button");

buttonLista.innerText = "Nuevo número";
buttonLista.addEventListener("click", insertar);

div_ej6.appendChild(buttonLista);

// Ejercicio 7

const div_ej7 = document.getElementById("ej7");

const tablaTextoNumeros = document.createElement("table");

for (let i = 0; i < 3; i++) {
  const fila = document.createElement("tr");

  for (let j = 0; j < 3; j++) {
    const celda = document.createElement("td");
    const contenido = i % 2 === 0 ? `Texto ${j + 1}` : `Número ${j + 1}`;
    celda.textContent = contenido;
    celda.style.backgroundColor = j % 2 === 0 ? "lightblue" : "lightyellow";
    fila.appendChild(celda);
  }

  tablaTextoNumeros.appendChild(fila);
}

div_ej7.appendChild(tablaTextoNumeros);

// Ejercicio 8

const div_ej8 = document.getElementById("ej8");

const tablaColoresAleatorios = document.createElement("table");

for (let i = 0; i < 4; i++) {
  const fila = document.createElement("tr");

  for (let j = 0; j < 4; j++) {
    const celda = document.createElement("td");
    const colorAleatorio = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
    celda.style.backgroundColor = colorAleatorio;
    celda.style.height = "10px";
    celda.style.width = "10px";
    celda.style.border = "1px solid black";
    fila.appendChild(celda);
  }

  tablaColoresAleatorios.appendChild(fila);
}

div_ej8.appendChild(tablaColoresAleatorios);

// Ejercicio 9

const div_ej9 = document.getElementById("ej9");

const tablaMultiplicacion = document.createElement("table");

for (let i = 1; i <= 5; i++) {
  const fila = document.createElement("tr");

  for (let j = 1; j <= 5; j++) {
    const celda = document.createElement("td");
    celda.textContent = i * j;

    // Estilos diferentes para la diagonal principal
    if (i === j) {
      celda.style.backgroundColor = "lightgreen";
      celda.style.fontWeight = "bold";
    }

    fila.appendChild(celda);
  }

  tablaMultiplicacion.appendChild(fila);
}

div_ej9.appendChild(tablaMultiplicacion);

// Ejercicio 10

const div_ej10 = document.getElementById("ej10");

const tablaEliminarFila = document.createElement("table");

for (let i = 0; i < 3; i++) {
  const fila = document.createElement("tr");

  for (let j = 0; j < 3; j++) {
    const celda = document.createElement("td");
    celda.textContent = `| Fila ${i + 1}, Columna ${j + 1} |`;
    celda.addEventListener("click", () => {
      tablaEliminarFila.deleteRow(i);
    });
    fila.appendChild(celda);
  }

  tablaEliminarFila.appendChild(fila);
}

div_ej10.appendChild(tablaEliminarFila);

// Ejercicio 11

const div_ej11 = document.getElementById("ej11");

const tablaEliminarColumna = document.createElement("table");

function eliminaCol(c) {
  let filas = tablaEliminarColumna.rows;
  Array.from(filas).forEach((f) => {
    f.deleteCell(c);
  });
}

for (let i = 0; i < 3; i++) {
  const fila = document.createElement("tr");

  for (let j = 0; j < 3; j++) {
    const celda = document.createElement("td");
    celda.textContent = `| Fila ${i + 1}, Columna ${j + 1} |`;
    celda.addEventListener("click", function () {
      eliminaCol(j);
    });
    fila.appendChild(celda);
  }

  tablaEliminarColumna.appendChild(fila);
}

div_ej11.appendChild(tablaEliminarColumna);

// Ejercicio 12

const div_ej12 = document.getElementById("ej12");

// Funcion que devuelve true si es casi primo (segun la definicion del ejercicio)
function esCasiPrimo(n) {
  let oportunidad = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      oportunidad++;
      if (oportunidad > 1) {
        return false;
      }
    }
  }

  if (oportunidad == 1) return true;
  else return false;
}

// Creamos la tabla y sus elementos
function crearTabla() {
  // Creamos la tabla
  let tabla = document.createElement("TABLE");

  let numeroUnico = 1;

  for (let i = 0; i < 10; i++) {
    // Creamos un elemento TR
    let fila = document.createElement("TR");
    for (let j = 0; j < 10; j++) {
      // Creamos TD y texto
      let celda = document.createElement("td");
      let texto = document.createTextNode(numeroUnico);
      // Anexamos texto al TD
      celda.appendChild(texto);
      // anexamos el TD al TR
      fila.appendChild(celda);

      // Si es casi primo, cambiamos el fondo
      if (esCasiPrimo(numeroUnico)) {
        celda.style.backgroundColor = "Yellow";
      }

      // Incrementamos el numero unico
      numeroUnico++;
    }
    // Anexamos el TR a la tabla
    tabla.appendChild(fila);
  }
  // Anexamos la tabla al body
  div_ej12.appendChild(tabla);
}

crearTabla();

// Ejercicio 13

const div_ej13 = document.getElementById("ej13");

// Creamos 50 checkbox con numeros aleatorios del 1 al 100
function crearCheckbox() {
  for (let i = 0; i < 50; i++) {
    let valorAleatorio = Math.ceil(Math.random() * 100);
    // Creamos el checkbox con value aleatorio
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = valorAleatorio;
    checkbox.id = "id" + i;

    // Al lado del checkbox tenemos un label con el mismo valor aleatorio
    let label = document.createElement("label");
    label.appendChild(document.createTextNode(valorAleatorio));

    // Anexamos checkbox y etiqueta al body
    div_ej13.appendChild(checkbox);
    div_ej13.appendChild(label);
  }
}

crearCheckbox();

// Ejercicio 14

const div_ej14 = document.getElementById("ej14");

// Funcion para ocultar elemento
function ocultar(evento) {
  let miID = evento.target.id;
  // Ocultamos el elemento
  document.getElementById(miID).hidden = true;
}

// Funcion para eliminar elemento
function eliminar(evento) {
  let miID = evento.target.id;
  //alert(evento.target.id);
  // Obtenemos el elemento
  let elemento = document.getElementById(miID);
  //Eliminamos el elemento desde su padre
  elemento.parentNode.removeChild(elemento);
}

// Funcion para mostrar los ocultos
function volverAMostrar() {
  // Por cada elemento, pone hidden a false
  for (let i = 1; i <= 3; i++) {
    let elemento = document.getElementById("miP" + i);
    if (elemento != null) {
      elemento.hidden = false;
    }
  }
}

for (let i = 1; i <= 3; i++) {
  let p = document.createElement("p");
  p.setAttribute("id", "miP" + i);
  p.innerText = `Parrafo ${i} `;
  p.addEventListener("click", ocultar);
  p.addEventListener("dblclick", eliminar);
  div_ej14.appendChild(p);
}
