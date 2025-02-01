const ccaaContainer = document.getElementById('ccaaContainer');
const ccaaList = document.getElementById('ccaaList');
const btnCcaa = document.getElementById('btnCcaa');

const provinciasList = document.getElementById('provinciasList');


btnCcaa.addEventListener("click", createListCCAA);

function createListCCAA(){
    ccaaList.innerHTML="";
    provinciasList.innerHTML="";

    const newList = document.createElement("ol");
    newList.classList.add("listado");

    ccaaListado.forEach(ccaa =>{
        newList.appendChild(createLiCCAA(ccaa));
    })

    ccaaList.appendChild(newList);
    ccaaContainer.style.visibility = "visible";
}

function createLiCCAA(ccaa){
    const newElementList = document.createElement("li");
    const newP = document.createElement("span");
    newP.classList.add("provincia");
    newP.textContent=ccaa[0];
    newP.addEventListener("click", () => createListProvincias(ccaa));
    newElementList.appendChild(newP);
    return newElementList;
}

async function createListProvincias(ccaa){
    provinciasList.innerHTML="";

    if (ccaa[2]==""){
        const new_p = document.createElement("p");
        new_p.textContent = "No hay datos para esta CCAA."
        provinciasList.appendChild(new_p);
        return;
    }

    leeFicheroCSV(ccaa[2], false);

    const newList = document.createElement("ol");
    // newList.classList.add("listado");

    provinciasListado.forEach(provincia =>{
        newList.appendChild(createLiPro(provincia));
    })

    provinciasList.appendChild(newList);
}

function createLiPro(pro){
    const newElementList = document.createElement("li");
    const newP = document.createElement("span");
    newP.classList.add("provincia");
    newP.textContent=pro[0];
    newElementList.appendChild(newP);
    return newElementList;
}