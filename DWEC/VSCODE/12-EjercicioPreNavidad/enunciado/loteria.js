/* Variables y constantes del programa */
const page = document.getElementsByTagName("body")[0];

const animationsBtn = document.getElementById('animations');
const listadoClass = document.getElementsByClassName("listado");

const cleanerBtn = document.getElementById('cleaner');

const winPrice = document.getElementsByName('premio');
const typeprice = document.getElementById('tipopremio');
const numbers = Array.from(document.getElementsByClassName('numero'));
const price = document.getElementById('importe');
const places = document.getElementById('provincias');


const quintosBtn = document.getElementById('verquintos');
const quintosList = document.getElementById('listadoquintos');

const searchNum = document.getElementById('buscapornumero');
const searchLast = document.querySelector("select[id='buscaporterminacion']");

const mesajes = document.getElementById('mensajes');
const pricesList = document.getElementById('listabusqueda');



/* Objetos a utilizar en el programa */
let intervalo = null;
let puntos = false;
let resetPage

const quintos = [];
listapremios.forEach(price => {
    if (price["premio"] >= 1000)
        quintos.push(price);
})


/* Asignación de eventos */
document.addEventListener("DOMContentLoaded", function () {
    resetPage = document.getElementsByTagName("body")[0].innerHTML;
    resetListeners();
})

function resetListeners() {
    animationsBtn.addEventListener("click", () => {
        if (intervalo == null) {
            empezar();
        } else {
            parar();
        }
    });
    cleanerBtn.addEventListener("click", cleaner);
    winPrice.forEach(element => {
        element.addEventListener("change", showPrice);
    });

    quintosBtn.addEventListener("click", showQuintos);
    // searchNum.addEventListener("keyup", search);
    // searchLast.addEventListener("change", filterSearch);
}




/* Funciones genéricas */
function showTable(tableList) {
    const newTable = document.createElement("table");
    newTable.classList.add("listado");
    const newTRHeader = document.createElement("tr");
    const newTd1 = document.createElement("td");
    newTd1.classList.add("listado");
    newTd1.textContent = "Número";
    newTRHeader.appendChild(newTd1);
    const newTd2 = document.createElement("td");
    newTd2.classList.add("listado");
    newTd2.textContent = "Premiado con"
    newTRHeader.appendChild(newTd2);
    const newTd3 = document.createElement("td");
    newTd3.classList.add("listado");
    newTd3.textContent = "Vendido en"
    newTRHeader.appendChild(newTd3);
    newTable.appendChild(newTRHeader);
    console.log(newTable);

    tableList.forEach(register => {
        const newTr = document.createElement("tr");
        const newTd4 = document.createElement("td");
        newTd4.textContent = register["numero"];
        newTd4.classList.add("boleto");
        newTr.appendChild(newTd4);
        const newTd5 = document.createElement("td");
        newTd5.textContent = register["premio"];
        newTd5.classList.add("boleto");
        newTr.appendChild(newTd5);
        const newTd6 = document.createElement("td");
        newTd6.textContent = register["provincia"];
        newTd6.classList.add("boleto");
        newTr.appendChild(newTd6);
        newTable.appendChild(newTr);
    });
    return newTable;
}



/* Funciones activadas por eventos */
// adornos
function empezar() {
    animationsBtn.innerHTML = "Desactivar animación";
    intervalo = setInterval(rotar, 500);
}
function rotar() {
    let list = Array.from(listadoClass)
    if (!puntos) {
        list.forEach(element => {
            if (element.nodeName == "TABLE")
                element.classList.add("puntos");
        });
    } else {
        list.forEach(element => {
            if (element.nodeName == "TABLE")
                element.classList.remove("puntos");
        });
    }
    puntos = !puntos;
}
function parar() {
    animationsBtn.innerHTML = "Activar animación";
    clearInterval(intervalo);
    intervalo = null;
}

// premios gordos
function showPrice() {
    let checkValue = document.querySelector("input[name='premio']:checked").value;
    if (checkValue == null) {
        return;
    }
    if (checkValue == 1) {
        printPrice(listapremios.find(x => x["premio"] == 400000));
        return;
    }
    if (checkValue == 2) {
        printPrice(listapremios.find(x => x["premio"] == 125000));
        return;
    }
    if (checkValue == 3) {
        printPrice(listapremios.find(x => x["premio"] == 50000));
        return;
    }
}
function printPrice(price) {
    typeprice.innerHTML = "Primer premio";
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].innerHTML = premio["numero"][i];
    };
    price.innerHTML = premio["premio"] + "€";
    places.innerHTML = premio["provincia"];
}

// listadoQuintos
function showQuintos() {
    if (quintosList.style.visibility == "visible"){
        quintosList.removeChild(quintosList.firstChild);
        quintosList.style.visibility = "hidden";
    } else {
        quintosList.style.visibility = "visible";
        quintosList.appendChild(showTable(quintos));
    }
}



/* Inicio de la página */
function cleaner() {
    page.innerHTML = resetPage;
    resetListeners();
}