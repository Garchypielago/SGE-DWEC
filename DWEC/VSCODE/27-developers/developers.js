// Obtencion de los datos
let lecturaDatos;
let devs = [];

document.addEventListener("DOMContentLoaded", () => {
    leeFicheroJson();
});

async function leeFicheroJson() {
    return await fetch("dev_data.json")
        .then(async (response) => {
            lecturaDatos = await response.text();
        })
        .then(() => {
            devs = JSON.parse(lecturaDatos);
            // console.log(devs);

            createDevTable(devs);
        })
        .catch((err) => console.log(err));
}
// ~ datos en array

// Creacion de la tabla
const table_dev = document.getElementById('devs_info');
const thead_copy = document.getElementById('devs_info_head');

function createDevTable(devsList) {
    table_dev.innerHTML = "";
    table_dev.appendChild(thead_copy);

    devsList.forEach(dev => {
        createDevTr(dev);
    });

}

function createDevTr(dev) {
    const newTr = document.createElement("tr");
    newTr.appendChild(createDevTd(dev.norder, false, false, false, false));
    newTr.appendChild(createDevTd(dev.Nombre, false, false, false, false));
    newTr.appendChild(createDevTd(dev.Apellido, false, false, false, false));
    newTr.appendChild(createDevTd(dev.skills.java, false, false, false, false));
    newTr.appendChild(createDevTd(dev.skills.php, false, false, false, false));
    newTr.appendChild(createDevTd(dev.skills.sql, false, false, false, false));
    newTr.appendChild(createDevTd(dev.sede, false, false, false, false));
    newTr.appendChild(createDevTd(false, true, false, dev.value, false));
    newTr.appendChild(createDevTd(false, false, true, false, dev.norder));

    table_dev.appendChild(newTr);
};

function createDevTd(text, div, input, value_bar, norder) {
    const newTd = document.createElement("td");

    if (div) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("bar");
        newDiv.style.width = value_bar * 5 + "px";
        newTd.appendChild(newDiv);
        return newTd;
    }
    if (input) {
        const newInput = document.createElement("input");
        newInput.type = "checkbox";
        newInput.name = "chk";
        newInput.id = "employee"+norder;
        newTd.appendChild(newInput);
        return newTd;
    }

    newTd.textContent = text;
    return newTd;
}
// ~ creaciones de tabla

// Filtros de tabla
const radio_age = document.getElementsByName("age");
const select_java = document.getElementById('javaLevel');
const select_php = document.getElementById('phpLevel');
const select_sql = document.getElementById('sqlLevel');

radio_age.forEach(element => {
    element.addEventListener("change", researchDevs);
});

select_java.addEventListener("change", researchDevs);
select_php.addEventListener("change", researchDevs);
select_sql.addEventListener("change", researchDevs);

function researchDevs(){
    let devList = devs;
    devList = filterByPL(devList);
    devList = filterByAge(devList);

    createDevTable(devList);
}

function filterByPL(devList) {
    let java = traduccionLevel(select_java.value);
    let php = traduccionLevel(select_php.value);
    let sql = traduccionLevel(select_sql.value);

    return devList.filter(dev => {
        if (java != null && dev.skills.java !== java) {
            return false
        }
        if (php != null && dev.skills.php !== php) {
            return false
        }
        if (sql != null && dev.skills.sql !== sql) {
            return false
        }
        return true;
    });

}

function traduccionLevel(pl){
    switch (pl) {
        case "low":
            return "bajo";
        case "m":
            return "medio";
        case "h":
            return "alto";
        case "e":
            return "experto";
        default:
            return null;
    }
}

function filterByAge(devList) {
    let checkValue = document.querySelector("input[name='age']:checked");
    if (!checkValue) {
        return devList;
    }
    switch (checkValue.value) {
        case "1":
            return devList.filter(dev => dev.age <= 27);
        case "2":
            return devList.filter(dev => dev.age > 27 && dev.age <= 47);
        case "3":
            return devList.filter(dev => dev.age > 47);
        default:
            return devList;
    }
}
// ~ filtros

// Opciones seleccionados
const highlight_dev = document.getElementById('btnHigh');
const delTemp_dev = document.getElementById('btnDelTemp');
const del_dev = document.getElementById('btnDel');

highlight_dev.addEventListener("click", highLightDevs);
delTemp_dev.addEventListener("click", delTempDevs);
del_dev.addEventListener("click", delDevs);

function highLightDevs(){
    Array.from(document.querySelectorAll("input[name=chk]:checked")).forEach(element => {
        // console.log(element.parentElement.parentElement);
        // console.log(element.closest("tr"));

        element.closest("tr").classList.add("highlight");
        });
}

function delTempDevs(){
    Array.from(document.querySelectorAll("input[name=chk]:checked")).forEach(element => {
        table_dev.removeChild(element.closest("tr"));
        });
}

function delDevs(){
    let delDevs = [];
    document.querySelectorAll("input[name=chk]:checked").forEach(element => {
        delDevs.push(element.id.slice(8));
        console.log(element.id.slice(8))
    });

    devs = devs.filter(x=> {
        console.log(x.norder);
        return !delDevs.includes(x.norder.toString());
    });
    researchDevs()
}
// ~ opciones

// mejoras: ocultar filas, no rehacer la tabla para los resalatados, añadir quitar edad



