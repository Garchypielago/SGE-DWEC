// Para realizar los ejercicios se proporciona el fichero listacoches.js, que contiene una lista de objetos de coches (matricula, marca, color, motor).
// console.log(listacoches[0]["matricula"]);


let listatabla = [];

document.addEventListener("DOMContentLoaded", limpiarNull());
function limpiarNull(){
    listacoches.forEach(coche => {
        if(coche["matricula"]==null){
            return;
        }
        if(coche["marca"]==null){
            return;
        }
        if(coche["color"]==null){
            return;
        }
        if(coche["motor"]==null){
            return;
        }
        listatabla.push(coche);
    });
    // console.log(listatabla);
}



// • Escribir una tabla con todos los datos de los coches que no contengan algún campo vacío.
// • La tabla debe estar dentro del elemento div de identificador lienzo.
// • La tabla contiene una cabecera con los nombres de los campos.
function dibujarTabla() {

}


// A partir de los dos objetos de formulario (selección y texto) se va a reescribir la tabla del ejercicio 1 con los coches que cumplen
// uno, o los dos, criterios de búsqueda.
// • La búsqueda por marca de coche se realiza al elegir una de ellas
// • Labúsqueda por matrícula se hace al ir introduciendo caracteres en el campo de texto. Se buscan matrículas que contengan
// la cadena escrita en cualquier posición de la matrícula.
const marcaSel = document.getElementsByName("marca");
console.log(marcaSel.valule);
document.getElementsByName("marca").addEventListener("", elegirPorMarca(marcaSel.valule));
function elegirPorMarca(marca) {
    let listaMarca = listatabla.find(x => x["marca"].includes(marca));
    dibujarTabla(listaMarca);
}


// En este apartado se quiere que, al pasar el ratón por las filas de la tabla, la fila cambie de color de fondo. Al pasar a otra fila,
// vuelve a su color inicial.
function elegirPorMatricula(matricula) {
    let listaMartricula = listaMarca.find(x=> x["marca"].includes(matricula));
    dibujarTabla(listaMartricula);
}


// Este apartado se puede realizar mientras se realizan los otros, o bien, implementarlo al final. Se quiere que
// • La tabla tenga un borde de 1px, sólido
// • Las filas vayan alternando de colores de fondo, las pares en beige, las impares en bisque.
function asignarEventos() {}
