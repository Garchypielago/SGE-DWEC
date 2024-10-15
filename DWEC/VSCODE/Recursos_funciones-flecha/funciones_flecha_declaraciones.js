const tabla=document.getElementById("tabla");

function escribirTabla(a,b){
    let contenido = "<table>";
    for (let i=0; i <=b; i++){
        contenido += "<tr>";
        contenido += `<td>${a}</td><td>x</td><td>${i}</td><td>=</td><td>${a*i}</td>`;
        contenido += "</tr>";
    }
    contenido+= "</table>";
    tabla.innerHTML= contenido;
}

// FUNCIONES FLECHA

let escribirTabla0p = () => {
    let n = prompt("Dame un número del 1 al 10");
    escribirTabla(n,10);
}

let escribirTabla1p = n => {
    escribirTabla(n,10);
}

let escribirTabla2p = (a, b) => {
    escribirTabla(a,b);
}
