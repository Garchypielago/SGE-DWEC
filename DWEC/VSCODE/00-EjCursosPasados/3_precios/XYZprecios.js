// Ejercicio 3. Búsqueda de precios
//  El programa debe encontrar precios en los productos del archivo .js de datos (No es válido copiar el contenido del archivo de datos en el js del programa.) Los precios vienen dados con identificador, precio y nombre de producto, separados por comas.
//  Tras introducir un rango de precios y pulsar sobre “Iniciar la búsqueda” aparece el texto “REALIZANDO BÚSQUEDA...”
//  durante dos segundos en el espacio de “avisos”. Tras este tiempo aparece en el espacio “consola”, para cada producto,
//  • una línea con el precio original y el precio con iva (21%).
//  • otra línea con el identificador del producto, el nombre y el precio con iva redondeado
//  Nota: para realizar búsquedas válidas utilizar el rango entre 100 y 300€. Los precios son todos menores a 1000
//  Se tiene que cumplir que:
//  • Si no se introduce alguno de los dos valores se da el aviso de “DEBES INTRODUCIR UN RANGO CORRECTO DE
//  PRECIOS”
//  • Si no hay productos en el rango el aviso es “NO HAY PRODUCTOS EN ESE RANGO DE PRECIOS”

// creacion de dataSet, diccionario (array)
let dataSet = productos.split("\n");
let datos = [];

dataSet.forEach(producto => {
    producto = producto.split(",");
    producto[1] = (Number(producto[1]));
    producto.push(producto[1] * 1.21);
    datos.push(producto);
});

console.log(datos);

// crear el timeout


// buscador
const consola = document.getElementById('consola');
const avisos = document.getElementById('avisos');

const minimo = document.getElementById('pricemin');
const maximo = document.getElementById('pricemax');
document.getElementById("btnbuscar").onclick = buscar;

function buscar() {
    let tabla = "";
    let tablaC = false;
    let preciomin = minimo.value;
    let preciomax = maximo.value;

    if (minMax(preciomin, preciomax)) {
        avisos.innerHTML = "DEBES INTRODUCIR UN RANGO CORRECTO DE PRECIOS";
        consola.innerHTML = "";
        return;
    }


    datos.forEach(producto => {
        if (producto[3] <= preciomax && producto[3] >= preciomin) {
            tabla += "<p>Precio original: " + Math.round(producto[1] * 100) / 100 + "€, con IVA:" + Math.round(producto[3] * 100) / 100 + "€</p>";
            tabla += "<p>" + producto[0] + ":..." + producto[2] + "..." + Math.round(producto[3] * 100) / 100 + "€</p>";
            tabla += "<hr>";
            tablaC = true;
        }
    });

    avisos.innerHTML = "Búsqueda finalizada";
    if (tablaC) {
        consola.innerHTML = tabla;
    } else {
        consola.innerHTML = "<p>No hay productos en ese rango de precios</p>";
    }
}

function minMax(min, max) {
    if (max < min)
        return true;
    return false;
}




