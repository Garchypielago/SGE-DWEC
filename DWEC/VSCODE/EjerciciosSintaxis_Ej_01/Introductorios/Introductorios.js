// // 1. Pide un día de la semana y emite un mensaje en el caso de que la variable dia sea domingo.
// let dia = prompt("Escribe un dia de la semana:", "Día");

// if (dia.toLowerCase() == "domingo") {
//     console.log(dia);
//     console.log("Es domingo");
// } else {
//     console.log("No es domingo");
// }

// // 2. Pregunta la edad de Luis y Ana por pantalla y comprueba que son números y son edades humanas posibles.
// let edadLuis = prompt("Escribe la edad de Luis", "Edad");

// let edadAna = prompt("Escribe la edad de Ana", "Edad");

// if ((edadLuis == parseInt(edadLuis) && edadLuis > 0)) {
//     console.log("Bien");
// } else {
//     console.log("Imposible");
// }

// if ((edadAna == parseInt(edadAna) && edadAna > 0)) {
//     console.log("Bien");
// } else {
//     console.log("Imposible");
// }

//// 3. Añade al programa anterior si son mayores de edad o son jubilados.
// let edadLuis = prompt("Escribe la edad de Luis", "Edad");

// let edadAna = prompt("Escribe la edad de Ana", "Edad");

// if ((edadLuis == parseInt(edadLuis) && edadLuis > 0)) {
//     if(edadLuis>67){
//         console.log("Jubilado");
//     } else if (edadLuis>18){
//         console.log("Mayor de edad");
//     } else{
//         console.log("Eres menor de edad")
//     }
// } else {
//     console.log("Error");
// }

// if ((edadAna == parseInt(edadAna) && edadAna > 0)) {
//     if(edadAna>67){
//         console.log("Jubilado");
//     } else if (edadAna>18){
//         console.log("Mayor de edad");
//     } else{
//         console.log("Eres menor de edad")
//     }
// } else {
//     console.log("Error");
// }


//// 4. Pide un nombre por pantalla y muestra un mensaje personalizado.
// let nombre = prompt("Escribe un nombre", "Nombre");
// console.log("Buenasss, " + nombre);


// // 5. Escribe los números pares de 0 a 30.
// for(let i=0; i<=30; i++){
//     console.log(i);
// }


// // 6. Escribe las potencias de 2 hasta 3000.
// for(let i=0; 2**i<=3000; i++){
//         console.log(2**i);
// }

// // 7. Pregunta una clave hasta que se corresponda con una asignada en el programa.
// const programa = ["psp", "dwec", "empresa"];
// let input =""
// do{
//     input = prompt("Escribe una asigatura", "Asignatura");
// }while(!programa.includes(input.toLowerCase()));


// // 8. Introduce una clave. Pregunta por esta clave hasta que se introduzca correctamente.
// const clave = "clave";
// let input =""
// do{
//     input = prompt("Escribe una clave", "Clave");
// }while(input!=clave);

// // 9. Mejora el programa anterior para permitir sólo tres respuestas incorrectas.
// const clave = "clave";
// let input = ""
// let contador = 0;
// do {
//     input = prompt("Escribe una clave", "Clave");
//     if (contador++ == 2) {
//         break;
//     }
// } while (input != clave);


// // 10. Presenta todos los números pares del 0 al 50 excepto los que sean múltiplos de 3
// for (let i=0; i<=50; i++){
//     if(i%3!=0){
//         console.log(i);
//     }
// }






// explicaion del for in, y claves valor
const miobjeto = {
    nombre: "pepe",
    edad: 25,
    numero: 123456789
}

let valores = ""
let claves = ""
for (let k in miobjeto){
    valores += miobjeto[k];
    claves += k
}
console.log(valores);
console.log(claves);