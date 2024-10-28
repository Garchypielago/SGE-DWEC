const divTablero = document.getElementById("tablero");
const divCrono = document.getElementById("crono");
const divMensajes = document.getElementById("mensajes");
const TASoluciones = document.getElementById("posiciones");
let solucion;
let solucionCoor;
let jugadasRestantes = 10;
let jugadasPosiciones = [];

/* 
1,3
5,7
12,4
6,14
7,10
 */

function newTablero(){
    let tabla = "<table id='tablero'>";

    tabla += "<tr>";
    tabla += "<td>🔑</td>"
    for (j=1; j<=20; j++){
        tabla += "<td>"+j+"</td>";
    }
    tabla += "</tr>";

    for (i=1; i<=20; i++){
        tabla += "<tr>";
        tabla += "<td>"+i+"</td>";
        for (j=1; j<=20; j++){
            tabla += "<td class='celda' id='x" + j + "y" + i + "'></td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";

    divTablero.innerHTML = tabla;
}

let contador =60;
let idIntervalo = null;

// imprimir el numero
function reloj() {
    contador--;
    divCrono.innerText = contador;
    if (contador == 0) {
        mostrarSolucion();
    }
}

function start(){
    if (idIntervalo == null){
        newTablero();
        calcularLlave();
        idIntervalo = setInterval(reloj, 1000);
    }
}

// todo hacer que se reinicie la llave
function calcularLlave(){
    let y = Math.floor(Math.random() * 20) + 1;
    let x = Math.floor(Math.random() * 20) + 1;
    console.log("LLAVE: "+x+","+y);
    solucionCoor=[x,y];
    solucion = "x"+x+"y"+y;
}

function mostrarSolucion(){
    const llaveCelda = document.getElementById(solucion);
    llaveCelda.innerText = "🔑";
    pintarIntentos();
    reiniciar();
}

function reiniciar(){
    divCrono.innerText = 'Pulsa "Comenzar a jugar" para que se active el tiempo';
    divMensajes.innerText = "Tienes 1 minuto para encontrar la llave";
    clearInterval(idIntervalo);
    idIntervalo= null;
    contador =60;
    jugadasRestantes = 10;
    jugadasPosiciones = [];
}

function buscarLlave(){
    let respuesta = TASoluciones.value.split("\n");
    let jugadasPosicionesAuxiliar=[];
    let mensajesAuxiliar = "";
    let error = false;
    let ganar = false;

    if (validarRespuesta(respuesta)){
        respuesta.forEach(elemento => {
            posicion = elemento.trim();
            posicion = posicion.split(",");
            if (validarPosicion(posicion)){
                let dis = calcularDistancia(posicion);
                jugadasPosicionesAuxiliar.push("x"+posicion[0]+"y"+posicion[1]);
                mensajesAuxiliar += posicion.toString() + " => " + dis +"\n";
                console.log(elemento + " => " + dis);
                if (dis==0){
                    ganar=true;
                }
            } else {
                error = true;
            }
        });
    } else {
        error = true;
    }
    if (error){
        divMensajes.innerText = "Has introducido algo mal, jugada no contada.";
    } else {
        divMensajes.innerText = mensajesAuxiliar;
        jugadasPosiciones = jugadasPosiciones.concat(jugadasPosicionesAuxiliar);
        jugadasRestantes--;
        if(jugadasRestantes==0){
            mostrarSolucion();
        }
        if (ganar){
            mostrarSolucion()
        }

    }

    TASoluciones.value = "";
    
}

function validarRespuesta(respuesta){
    if (respuesta.length > 5){
        return false;
    }
    return true;
}

function validarPosicion(posicion){
    if (posicion.length != 2){
        return false;
    }
    // if (typeof parseInt(posicion[0]) != "number" || typeof parseInt(posicion[1]) != "number" ){
    //     return false;
    // }
    if (posicion[0] < 1 || posicion[0] > 20 || posicion[1] < 1 || posicion[1] > 20  ){
        return false;
    }
    return true;
}

function calcularDistancia(posicion){
    let xsol = solucionCoor[0];
    let ysol = solucionCoor[1];
    let xres = posicion[0];
    let yres = posicion[1];

    let calculo = Math.floor(Math.sqrt( Math.pow((xres - xsol),2) + Math.pow((yres - ysol),2) ));
    return calculo;
}

function pintarIntentos(){
    jugadasPosiciones.forEach(posicion => {
        if (posicion!=solucion){
            document.getElementById(posicion).innerHTML = "🔴";
        } else {
            document.getElementById(posicion).innerHTML = "🟢";
        }
    });
}