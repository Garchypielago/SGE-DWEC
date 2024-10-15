
// let bloque01 = document.getElementById("bloque01");

// function Ejercicio01() {
//     let sueldoInput = prompt("Escribe el sueldo:", 400);
//     let antiguoInput = prompt("Escribe la antigüedad", 8);

//     let empleado = {
//         sueldo: sueldoInput,
//         antiguo: antiguoInput
//     }

//     if (empleado.sueldo < 500) {
//         if (empleado.antiguo >= 10) {
//             empleado.sueldo *= 3;
//             bloque01.innerHTML = `<p> Se ha triplicado el sueldo del empleado. </p> <p> Nuevo sueldo: ${empleado.sueldo}€. </p> 
//         <button onclick="Ejercicio01();">Calcular de nuevo</button>`;
//         } else {
//             empleado.sueldo *= 2;
//             bloque01.innerHTML = `<p> Se ha doblado el sueldo del empleado. </p> <p> Nuevo sueldo: ${empleado.sueldo}€. </p> <button onclick="Ejercicio01();">Calcular de nuevo</button>`;
//         }
//     } else {
//         bloque01.innerHTML = `<p> No cumple los requisistos para el aumento. </p> <p> Sueldo: ${empleado.sueldo}€. </p> <button onclick="Ejercicio01();">Calcular de nuevo</button>`;
//     }

// }

function validarInput(input) {
    // Limitar el valor entre 1 y 9
    if (input.value < 1) input.value = "";
    if (input.value > 9) input.value = "";
    
    // Eliminar cualquier valor que no esté entre 1 y 9
    // if (input.value.length > 1 || !/^[1-9]$/.test(input.value)) {
    //     input.value = input.value.slice(0, 1);
    // }

}

function validarCuadrante(id){
    const cuadrante = document.getElementById(`${id}`);
    const inputs = cuadrante.querySelectorAll("p");
    
    let repetidos = false;

    let valores = [];
    inputs.forEach(input => {
        if (valores.includes(input)){
            repetidos=true;
            console.log("No esta bien");
        }
        valores.push(Number(input.value)); 
    });
}

function validarFila(fila){
    const tabla = document.getElementById("principal");
    const inputs = tabla.querySelectorAll(`p[class='${fila}'`);
    
    let repetidos = false;

    let valores = [];
    inputs.forEach(input => {
        if (valores.includes(input)){
            repetidos=true;
            console.log("No esta bien");
        }
        valores.push(Number(input.value)); 
    });
}

function validarColumna(columna){
    const tabla = document.getElementById("principal");
    const inputs = tabla.querySelectorAll(`p[class='${columna}'`);
    
    let repetidos = false;

    let valores = [];
    inputs.forEach(input => {
        if (valores.includes(input)){
            repetidos=true;
            console.log("No esta bien");
        }
        valores.push(Number(input.value)); 
    });
}




// function validarCuadrante(id){
//     const cuadrante = document.getElementById(`${id}`);
//     const inputs = cuadrante.querySelectorAll("input[type='number']");
//     // Obtiene los valores de los inputs
//     let valores = [];
//     inputs.forEach(input => {
//         valores.push(Number(input.value));  // Convierte el valor en número
//     });

//     console.log(valores);

// }
