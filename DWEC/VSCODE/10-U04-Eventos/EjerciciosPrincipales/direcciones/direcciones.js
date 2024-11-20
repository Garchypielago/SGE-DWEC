const datos = listaUsuarios;
const lienzo = document.getElementById('lienzo');

let nombres = false;
let empresas = false;
let ciudades = false;


// parte de la creacion de tabla
function separarDatos(datos) {
    datos = datos.split("\n");
    let datosPintar = [];

    // aqui el index si lo pones asi se refiere a la posicion (valor, clave)
    datos.forEach(linea => {
        // console.log(linea, index);
        let pintar = true;
        let usuario = linea.split(",");

        if (usuario[0] == ("") || usuario[1] == ("") || usuario[usuario.length - 1] == ("")) {
            pintar = false;
        }

        if (pintar) {
            if (usuario.length > 3) {
                let pos1 = usuario[1];
                for (let i = 2; i < usuario.length - 1; i++) {
                    pos1 += "," + usuario[i];
                }
                usuario = [usuario[0], pos1, usuario[usuario.length - 1]];
            }

            datosPintar.push(usuario);
        }
    });

    return datosPintar;
}

function crearTablas(datosSeparados) {
    let tabla = "<table>";

    datosSeparados.forEach(elementoArray => {
        let auxiliar = '<tr>';

        if (nombres) {
            auxiliar += '<td>' + elementoArray[0] + "</td>";
        } else if (!nombres) {
            auxiliar += '<td style="visibility: hidden;">' + elementoArray[0] + "</td>";
        }

        if (ciudades) {
            auxiliar += '<td>' + elementoArray[1] + "</td>";
        } else if (!ciudades) {
            auxiliar += '<td style="visibility: hidden;">' + elementoArray[1] + "</td>";
        }

        if (empresas) {
            auxiliar += '<td>' + elementoArray[2] + "</td>";
        } else if (!empresas) {
            auxiliar += '<td style="visibility: hidden;">' + elementoArray[2] + "</td>";
        }

        tabla += auxiliar + "</tr>";
    });

    tabla += "</table>"

    lienzo.innerHTML = tabla;
}

document.addEventListener("DOMContentLoaded", crearTablas(separarDatos(datos)));

document.getElementById("btnusuario").addEventListener("click", () => {
    nombres = !nombres;
    crearTablas(separarDatos(datos));
})

document.getElementById("btnciudad").addEventListener("click", () => {
    empresas = !empresas;
    crearTablas(separarDatos(datos));
})

document.getElementById("btnempresa").addEventListener("click", () => {
    ciudades = !ciudades;
    crearTablas(separarDatos(datos));
})



