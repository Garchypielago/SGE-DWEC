"use strict";

function fajax(parametro) {

    fetch("https://pokeapi.co/api/v2/pokemon/10001")
        .then(response => {
            console.log("OK")
            console.log(response);
            response.text().then((respuesta) => {
                document.getElementById('capa').innerHTML = JSON.stringify(respuesta);
            });
        })
        .catch(error => {
            console.log("Error")
            console.log(error)
        });

}

