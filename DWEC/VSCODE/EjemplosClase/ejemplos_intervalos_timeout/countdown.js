const marcador = document.getElementById("marcador");
const principal = document.getElementById("principal");

let contador = 10;

let intervalo = null;

function descontar() {
    contador--;
    marcador.innerText = contador;
    if (contador == 0) {
        clearInterval(intervalo);
        intervalo= null;
        explotar();
    }
}

function empezar() {
    principal.innerText = ""
    if (intervalo == null){
        intervalo = setInterval(descontar, 1000);
    }
    // intervalo = setInterval(descontar, 1000);
}

function explotar() {
    principal.innerText = "No jugaste ROBLOX conmigo :(";
    contador = 10;
}

function cancelar() {
    clearInterval(intervalo);
    intervalo= null;
    contador = 10;
    marcador.innerText = "";
}

