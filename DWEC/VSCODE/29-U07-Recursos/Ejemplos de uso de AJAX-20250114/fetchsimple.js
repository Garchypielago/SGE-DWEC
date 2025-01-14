"use strict";

function fajax(parametro){

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        console.log("OK")
        console.log(response);
        document.getElementById('capa').innerHTML=JSON.stringify(response);
    })
    .catch(error => {
        console.log("Error")
        console.log(error)

    });

}

