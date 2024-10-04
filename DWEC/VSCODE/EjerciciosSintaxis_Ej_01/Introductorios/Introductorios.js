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

// Ejercicios más complicados

// 13. Hacer la traza del siguiente script, para los siguientes casos:
// a. Que el usuario quiera ejecutar el programa e introduzca un número par.
// b. Que el usuario quiera ejecutar el programa e introduzca un número impar.
// c. Que el usuario no quiera ejecutar el programa.
// var x,y,ejecutar;
// ejecutar=confirm("¿Desea ejecutar el programa?");
// if (ejecutar){
// alert("Practica de la estructura if");
// x=prompt("Introduce un número ","");
// x=parseInt(x);
// y=x%2;
// if (y==0){
// alert("El número "+x+" es par ");
// }
// else{
// alert("El número "+x+" es impar");
// }
// }
// else{
// alert("Perdiste una oportunidad");
// }
// 14. Escribir un script que permita introducir un nombre por pantalla y que en el caso de que sea “Ramón” muestre un mensaje
// felicitándolo por su regreso. En todos los casos se muestra un mensaje informando de que la página Web hoy no está
// disponible.
// 15. Escribir un script que pregunte por un país. Si es España muestra el siguiente mensaje: “Bienvenido a nuestro país”. En
// cualquier otro caso no debe hacer nada.
// 16. Escribir un script que permita introducir un número de año y que nos diga si pertenece al segundo milenio o no.
// 17. Escribir un script que permita introducir un número y que muestre un mensaje si el número es múltiplo de 3 (si el resto de
// dividirlo por 3 es 0) y otro si no lo es.
// 18. Escribir un script que permita introducir el nombre del mes y el día. Por pantalla se debe mostrar un mensaje indicando si
// es el día de Navidad o no.
// 1
// 19. Escribir un script que pregunte si se quiere dar sus datos personales utilizando la ventana confirm(), en caso de aceptar se
// deben ejecutar las siguientes instrucciones:
// a. Preguntar su nombre.
// b. Preguntar la edad que tendrá al final del año actual.
// c. Calcular el año de nacimiento.
// d. Mostrar una ventana dando las gracias y el año en el que nació.
// En el caso de no aceptar muestra en una ventana el sistema operativo que utiliza.
// 20. Escribir un script que permita introducir dos números y que muestre un mensaje indicando cual es el mayor. En el caso de
// que sean iguales mostrar un mensaje indicándolo.
// 21. Escribir un script que permita introducir tres números y que muestre un mensaje indicando cual es el menor.
// 22. Escribir un script que pregunte por el nombre de dos personas (una orden para cada caso) y por la edad de cada uno (una
// orden para cada caso). A continuación se debe mostrar por pantalla el nombre de la persona mayor y en el caso de que
// tengan la misma edad se debe indicar en pantalla.
// 23. Escribir un script que pregunte si quiere ver la frase del dí utilizando la orden confirm(). En el caso de que pulse Aceptar se
// debe mostrar por pantalla la frase: “No por mucho madrugar amanece más temprano” y en el caso de pulsar Cancelar se
// debe mostrar por pantalla el siguiente mensaje: “¡Vaya falta de curiosidad!”
// 24. Escribir un script que pregunte por la ciudad de nacimiento del usuario utilizando la orden prompt(). Si el usuario pulsa
// Cancelar mostrar el siguiente mensaje: “Pues me quedo sin saber dónde naciste”, si el usuario pulsa Aceptar se debe
// comprobar si la ciudad es Oviedo y en caso afirmativo mostrar el mensaje: “Naciste en Oviedo, como yo” y si no mostrar
// un mensaje indicando la ciudad de nacimiento.
// 25. Hacer los ejercicios 15, 16 y 18 utilizando el operador ?
// 26. Hacer un script que al introducir el nombre de uno de los trabajadores de la oficina (Lucas, Julian, Rosa o Carmen) muestre
// un recado distinto para cada uno de ellos. En el caso de que el nombre introducido no sea de ningún trabajador entonces
// debe mostrar una pantalla con un mensaje de bienvenida. Utiliza la instrucción switch.
// 27. Analizar el código del script siguiente utilizando una traza para ello. Indicar que es lo que se ve en pantalla en cada caso.
// <SCRIPT LANGUAGE="Javascript">
// var x=3;
// var y=3;
// var i,resultado;
// resultado=x;
// for (i=resultado;i<y;i++){
// resultado*=y;
// }
// document.write("El resultado es "+resultado);
// </SCRIPT>
// Hacer de nuevo la traza anterior en el caso de que x se inicialice en 1 en la primera instrucción.
// 28. Hacer un script que pregunte por la nota de 4 asignaturas y después nos muestre la media. Utilizar el bucle for.
// 29. Hacer un script que pregunte el número de mes en el que estamos, en función de ello debe pedir al usuario la cantidad que
// ha ingresado cada uno de los meses. Al final debe mostrar la suma total de los ingresos en lo que va de año y el iva de esa
// cantidad.Utilizar el bucle for.
// 30. Hacer un script que muestre en pantalla los números pares de 0 a 50 excepto los que son decenas (10, 20, . . . ). Utilizar el
// bucle for.
// 31. Hacer un script que lea un número por teclado y calcule su factorial. El factorial de un número se calcula multiplicando el
// número por todos sus antecesores hasta el 1.
// Por ejemplo: el factorial de 5 es 5*4*3*2*1. Utilizar el bucle for.
// 32. Hacer un script pida los ingresos y los gastos de los meses del primer trimestre. Al final debe mostrar un mensaje indicando
// si se ha ganado dinero o se está en números rojos. Utilizar el bucle for.
// 33. Hacer el mismo script que el ejercicio anterior pero utilizando el bucle while en vez de el bucle for.
// 34. Analizar el código del script siguiente utilizando una traza para ello. Indicar que es lo que se ve en pantalla en cada caso.
// 2
// <SCRIPT LANGUAGE="Javascript">
// var x,a;
// var n=20000;
// x=1;
// a=10;
// while (a<n){
// x+=1;
// a*=10
// }
// document.write(x);
// </SCRIPT>
// 35. Analizar el código del script siguiente utilizando una traza para ello. Indicar que es lo que se ve en pantalla en cada caso
// <SCRIPT LANGUAGE="Javascript">
// var a,b,p;
// a=3;
// b=4;
// p=0;
// while (b!=0){
// p+=a;
// b-=1;
// }
// document.write(p);
// </SCRIPT>
// 36. Repetir el ejercicio 30 con la instrucción while.
// 37. Analizar el código del script siguiente utilizando una traza para ello. Indicar que es lo que se ve en pantalla en cada caso.
// <SCRIPT LANGUAGE="Javascript">
// var a,b,r;
// a=10;
// while (a>0){
// b=a;
// r=1;
// if (a==4){
// document.write("a es 4");
// a-=4;
// continue;
// }
// for (b;b>0;b--){
// r*=b;
// if (b==2)break;
// }
// a=b*2;
// document.write(a+"--->"+r+"<br>");
// }
// </SCRIPT>
// 38. Hacer un script que pregunte por la clave de entrada. El programa sólo finalizará cuando se introduzca la clave correcta,
// entonces se mostrará por pantalla el siguiente mensaje: “Clave correcta”. Utiliza el bucle while.
// 39. Añadir al siguiente script las órdenes necesarias para que sólo pregunte por la clave 3 veces cómo máximo. Utiliza el bucle
// break.












// // explicaion del for in, y claves valor
// const miobjeto = {
//     nombre: "pepe",
//     edad: 25,
//     numero: 123456789
// }

// let valores = ""
// let claves = ""
// for (let k in miobjeto){
//     valores += miobjeto[k];
//     claves += k
// }
// console.log(valores);
// console.log(claves);