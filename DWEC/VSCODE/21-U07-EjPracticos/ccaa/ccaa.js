const ccaaContainer = document.getElementById('ccaaContainer');
const ccaaList = document.getElementById('ccaaList');
const btnCcaa = document.getElementById('btnCcaa');

const provinciasList = document.getElementById('provinciasList');


btnCcaa.addEventListener("click", createListCCAA);

function createListCCAA(){
    ccaaList.removeChild;

    const newList = document.createElement("ol");
    newList.classList.add("listado");

    ccaaListado.forEach(ccaa =>{
        newList.appendChild(createLi(ccaa));
    })

    ccaaList.appendChild(newList);
    ccaaContainer.style.visibility = "visible";
}

function createLi(ccaa){
    const newElementList = document.createElement("li");
    const newP = document.createElement("span");
    newP.classList.add("provincia");
    newP.textContent=ccaa[0];
    newP.va
    newP.addEventListener("click", createListProvincias);
    newElementList.appendChild(newP);
    return newElementList;
}

async function createListProvincias(){
    ccaaListado

    leeFicheroCSV(url, inicio)

    const newList = document.createElement("ol");
    newList.classList.add("listado");

    ccaaListado.forEach(ccaa =>{
        newList.appendChild(createLi(ccaa));
    })

    provinciasList.appendChild(newList);
}