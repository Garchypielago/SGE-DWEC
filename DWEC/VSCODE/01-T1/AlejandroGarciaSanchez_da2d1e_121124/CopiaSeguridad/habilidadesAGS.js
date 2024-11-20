// Alejandro Garcia Sanchez

// ==============================

// divido para cada per
let array_personajes = listaHabilidades.split("\n");

for (let i = 0; i < array_personajes.length; i++) {
    // divido nombre y habilidades
    // aqui tengo el nombre y las habilidades junntas
    let personaje_aux = array_personajes[i].split("|");
    let habilidades_aux = personaje_aux[1].split("...");
    for (let j = 0; j < habilidades_aux.length; j++) {
        habilidades_aux[j] = habilidades_aux[j].split(" ")[0];
    }
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

document.getElementById("reset").addEventListener("click", () => {
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

function mostrar() {
    nescritor.innerHTML = posicion_actual + 1;
    nombre.innerHTML = array_personajes[posicion_actual][0];
    skill1.innerHTML = array_personajes[posicion_actual][1][0];
    skill2.innerHTML = array_personajes[posicion_actual][1][1];
    skill3.innerHTML = array_personajes[posicion_actual][1][2];
    descripcion.innerHTML = array_personajes[posicion_actual][2];
    avisos.innerHTML = "";
}

document.getElementById("next").addEventListener("click", () => {
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

document.getElementById("prev").addEventListener("click", () => {
    anterior();
})
function anterior() {
    if (posicion_actual == 0) {
        avisos.innerHTML = "Estas al inicio de la lista";
    } else if(posicion_actual==-1){
        posicion_actual=array_personajes.length -1;
        mostrar();
    }else{
        posicion_actual--;
        mostrar();
    }
}

document.getElementById("first").addEventListener("click", () => {
    primero();
})
function primero() {
    posicion_actual = 0;
    mostrar();
}

document.getElementById("last").addEventListener("click", () => {
    ultimo();
})
function ultimo() {
    posicion_actual = array_personajes.length - 1;
    mostrar();
}




let intervalo = null;
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
    if (posicion_actual < array_personajes.length - 1 ) {
        posicion_actual++;
        mostrar();
    }else {
        posicion_actual = 0;
        mostrar();
    }
}
function parar() {
    auto.innerHTML = "Automático";
    clearInterval(intervalo);
    intervalo= null;
}

document.getElementById("gofind").addEventListener("click", () => {
    buscar(findskill.value);
})

function buscar(valor){
    let auxiliar = "";
    for (let i = 0; i < array_personajes.length; i++) {
        auxiliar = array_personajes[i][2].toLowerCase();
        if (auxiliar.includes(valor.toLowerCase())){
            posicion_actual=i;
            mostrar();
            return;
        }
    }
    avisos.innerHTML = "No se encuentra esa palabra en los comentarios"
}






