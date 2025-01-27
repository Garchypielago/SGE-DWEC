document.addEventListener("DOMContentLoaded", () => leeFicheroCSV("csv/ccaa.csv", true));

let lecturaDatos;
let ccaaListado = [];
let provinciasListado = [];

async function leeFicheroCSV(url, inicio) {
    return await fetch(url)
        .then(async (response) => {
            lecturaDatos = await response.text();
        })
        .then(() => {
            if (inicio) {
                lecturaDatos.split("\n").forEach((line, index) => {
                    if (index == 0)
                        return;
                    let code = Number(line.split(",")[0]);
                    let rute = "csv/";
                    switch (code) {
                        case 1:
                            rute += "andalucia.csv";
                            break;
                        case 7:
                            rute += "castillaleon.csv";
                            break;
                        case 8:
                            rute += "castillalamancha.csv";
                            break;
                        case 13:
                            rute += "madrid.csv";
                            break;
                        default:
                            rute = "";
                            break;
                    }
                    ccaaListado.push([line.split(",")[1], code, rute]);
                });
                console.log(ccaaListado)
            } else {
                lecturaDatos.split("\n").forEach((line, index) => {
                    if (index == 0)
                        return;
                    let code = Number(line.split(",")[0]);
                    provinciasListado.push([line.split(",")[1], code]);
                });
                console.log(provinciasListado)
            }
        })
        .catch((err) => console.log(err));
}


