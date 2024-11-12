// Alejandro Garcia Sanchez

// ==============================

// README he añadido una funcionalidad para que cunado este en el
// el automatico no funcinen el resto de botones, me parece buena idea

// aparte he capitalizado las skills

// divido para cada per
let array_personajes = listaHabilidades.split("\n");

for (let i = 0; i < array_personajes.length; i++) {
    // divido nombre y habilidades
    // aqui tengo el nombre y las habilidades junntas
    let personaje_aux = array_personajes[i].split("|");
    let habilidades_aux = personaje_aux[1].split("...");
    // divido habilidades
    array_personajes[i] = [];
    array_personajes[i].push(personaje_aux[0]);
    array_personajes[i].push(habilidades_aux);
    array_personajes[i].push(personaje_aux[2]);
}

console.log(array_personajes[0]);
// con esto tengo montado mi dataset

const nescritor = document.getElementById('nescritor');
const nombre = document.getElementById('nombre');
const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const skill3 = document.getElementById('skill3');
const descripcion = document.getElementById('descripcion');
const avisos = document.getElementById('avisos');
const auto = document.getElementById('auto');
const findskill = document.getElementById('findskill');
let posicion_actual = -1;
let intervalo = null;


// Funcionalidad de resetear el doc
document.getElementById("reset").addEventListener("click", () => {
    if (intervalo == null)
        resetear();
})
function resetear() {
    nescritor.innerHTML = "";
    nombre.innerHTML = "";
    skill1.innerHTML = "";
    skill2.innerHTML = "";
    skill3.innerHTML = "";
    descripcion.innerHTML = "";
    avisos.innerHTML = "";
    posicion_actual = -1;
}

// funcion general para el resto de funciones
function mostrar() {
    nescritor.innerHTML = posicion_actual + 1;
    nombre.innerHTML = array_personajes[posicion_actual][0];

    // los capitalize los añado por que me gusta mas.
    skill1.innerHTML = array_personajes[posicion_actual][1][0].split(" ")[0];
    skill1.style = "text-transform: capitalize";
    skill2.innerHTML = array_personajes[posicion_actual][1][1].split(" ")[0];
    skill2.style = "text-transform: capitalize";
    skill3.innerHTML = array_personajes[posicion_actual][1][2].split(" ")[0];
    skill3.style = "text-transform: capitalize";

    descripcion.innerHTML = array_personajes[posicion_actual][2];
    avisos.innerHTML = "";
}

// funcion de siguiente
document.getElementById("next").addEventListener("click", () => {
    if (intervalo == null)
        siguiente();
})
function siguiente() {
    if (posicion_actual == array_personajes.length - 1) {
        avisos.innerHTML = "Estas al final de la lista";
    } else {
        posicion_actual++;
        mostrar();
    }
}

// funcion de anterior
document.getElementById("prev").addEventListener("click", () => {
    if (intervalo == null)
        anterior();
})
function anterior() {
    if (posicion_actual == 0) {
        avisos.innerHTML = "Estas al inicio de la lista";

        // lo siguinete controla el error de reset y dar a anterior
    } else if (posicion_actual == -1) {
        posicion_actual = array_personajes.length - 1;
        mostrar();
    } else {
        posicion_actual--;
        mostrar();
    }
}

// funcion de ir al primero
document.getElementById("first").addEventListener("click", () => {
    if (intervalo == null)
        primero();
})
function primero() {
    posicion_actual = 0;
    mostrar();
}

// funcion de ir al ultimo
document.getElementById("last").addEventListener("click", () => {
    if (intervalo == null)
        ultimo();
})
function ultimo() {
    posicion_actual = array_personajes.length - 1;
    mostrar();
}

// funcion de bucle
document.getElementById("auto").addEventListener("click", () => {
    if (intervalo == null) {
        empezar();
    } else {
        parar();
    }
})
function empezar() {
    auto.innerHTML = "Parar";
    intervalo = setInterval(rotar, 500);
}
function rotar() {
    if (posicion_actual < array_personajes.length - 1) {
        posicion_actual++;
        mostrar();
    } else {
        posicion_actual = 0;
        mostrar();
    }
}
function parar() {
    auto.innerHTML = "Automático";
    clearInterval(intervalo);
    intervalo = null;
}

// funcion de busqueda
document.getElementById("gofind").addEventListener("click", () => {
    if (intervalo == null)
        buscar(findskill.value);
})
function buscar(valor) {
    let auxiliar = "";
    for (let i = 0; i < array_personajes.length; i++) {
        auxiliar = array_personajes[i][2].toLowerCase();
        if (auxiliar.includes(valor.toLowerCase())) {
            posicion_actual = i;
            mostrar();
            return;
        }
    }
    avisos.innerHTML = "No se encuentra esa palabra en los comentarios"
}






