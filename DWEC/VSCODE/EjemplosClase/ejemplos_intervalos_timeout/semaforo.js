const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
const rojo = document.getElementById("rojo");

let idTiempo = null;

let empezar = () => {
    if (idTiempo == null) {
        idTiempo = setTimeout(() => {
            enVerde();
        }, 1000);
    }
}


/* function empezar(){
    idTiempo = setTimeout(enVerde,5000);
} */

function enVerde() {
    rojo.innerText = "";
    verde.innerText = "Pasen Coches";
    idTiempo = setTimeout(enAmarillo, 5000);
}

function enAmarillo() {
    verde.innerText = "";
    amarillo.innerText = "Frenen Porfa";
    idTiempo = setTimeout(enRojo, 1500);
}

function enRojo() {
    amarillo.innerText = "";
    rojo.innerText = "Multita";
    idTiempo = setTimeout(enVerde, 3000);
}

function parar() {
    verde.innerText = "";
    amarillo.innerText = "";
    rojo.innerText = "";
    clearTimeout(idTiempo);
    idTiempo = null;
}



