const texto = "Hola, mundo";

let i = 0;

// document.write("Hola, mundo");

function cambiaBloque(){
    const bloque1 = document.getElementById("bloque1");
    bloque1.innerText = texto;
    bloque1.style.backgroundColor = "blue";
    bloque1.style.borderColor = "blue";
}

function escribirTexto(){
    document.write(texto);
    console.log(texto)
}

function cambiaContador(){
    const bloque2 = document.getElementById("bloque2");
    bloque2.innerText = i;
    console.log(i)
    i += 1;
}