// Alejandro García Sánchez

// variables de datos
// {"idplayer":"F1","name":"Tabbi","surname":"Rivelin","played":41,"victory":20,"points":2000}
const ranking = JSON.parse(ranking_female);
// {"day":6,"idplayer1":"F4","name1":"Jerrilyn","surname1":"Hyder","idplayer2":"F31","name2":"Claribel","surname2":"Komorowski","set1":null,"set2":"1-6"}
const matches = JSON.parse(matches_female);


// variables globales
const div_lienzo = document.getElementById('lienzo');
const select_data = document.getElementById('selectinfo');
const raio_pointmode = document.getElementById('pointmode');
const raio_winmode = document.getElementById('winmode');
const raio_alphamode = document.getElementById('alphamode');
const buttons_list = document.getElementsByClassName("btnpage");
const input_playername = document.getElementById('playername');


// Funciones para recoger los datos
ranking.forEach(player => {
    player.percentaje = Math.trunc((player.victory / player.played) * 100);
});

const firtsQuarterMatches = matches.toSpliced(25);
const secondQuarterMatches = matches.toSpliced(50).splice(25);
const thirdQuarterMatches = matches.toSpliced(75).splice(50);
const fourthQuarterMatches = matches.toSpliced(100).splice(75);

// Funciones para escribir resultados
function createDateView(list, type) {
    div_lienzo.innerHTML = "";
    const div_background = document.createElement("div");
    div_background.classList.add("fondoRanking");
    div_lienzo.appendChild(div_background);

    if (type === "ranking") {
        list.forEach(player => {
            div_background.appendChild(createPlayerView(player, "points"));
        });
    }
    if (type === "rankingPercentaje") {
        list.forEach(player => {
            div_background.appendChild(createPlayerView(player, "percentaje"));
        });
    }
    if (type === "matches") {
        list.forEach(match => {
            div_background.appendChild(createMatchView(match));
        });
    }

    div_lienzo.appendChild(div_background);
}

function createPlayerView(player, stat) {
    const div_player = document.createElement("div");
    div_player.classList.add("player");

    div_player.appendChild(createNameDiv(player.name, player.surname));

    const div_plyerStat = document.createElement("div");
    div_plyerStat.classList.add("playerStat");
    if (stat === "points") {
        div_plyerStat.style.width = player.points * 0.14 + "px";
        div_plyerStat.textContent = player.points;
    }
    if (stat === "percentaje") {
        div_plyerStat.style.width = player.percentaje * 6 + "px";
        div_plyerStat.textContent = player.percentaje;
    }

    div_player.appendChild(div_plyerStat);

    return div_player;
}

function createMatchView(match) {
    const div_match = document.createElement("div");
    div_match.classList.add("player");

    const div_day = document.createElement("div");
    div_day.classList.add("matchStat");
    div_day.textContent = match.day;
    div_match.appendChild(div_day);

    div_match.appendChild(createNameDiv(match.name1, match.surname1));

    const div_sets = document.createElement("div");
    div_sets.classList.add("matchStat");
    if (match.set1 == null || match.set2 == null)
        div_sets.textContent = "Aplazado";
    else
        div_sets.textContent = match.set1 + " " + match.set2;
    div_match.appendChild(div_sets);

    div_match.appendChild(createNameDiv(match.name2, match.surname2));

    return div_match;
}

function createNameDiv(name, surname) {
    const div_playerName = document.createElement("div");
    div_playerName.classList.add("playerName");

    div_playerName.textContent = name + " " + surname;
    return div_playerName;
}

// Funciones de tratamiento de las listas
function sortDataRank() {
    let checkValue = document.querySelector("input[name='viewmode']:checked");
    if (!checkValue)
        createDateView(ranking, "ranking");

    let sort_rank = ranking.slice();
    switch (checkValue.value) {
        case "pts":
            sort_rank.sort(function (a, b) { return b.points - a.points });
            createDateView(sort_rank, "ranking");
            return;

        case "win":
            sort_rank.sort(function (a, b) { return b.percentaje - a.percentaje; });
            createDateView(sort_rank, "rankingPercentaje");
            return;

        case "name":
            sort_rank.sort(function (a, b) {
                if (a.surname < b.surname)
                    return -1;
                if (a.surname > b.surname)
                    return 1;
                return 0;
            });
            createDateView(sort_rank, "ranking");
            return;
        default:
            createDateView(ranking, "ranking");
    }
}

// Funciones activadas por eventos
select_data.addEventListener("change", selectData);

function selectData() {
    let option_data = select_data.value;
    disabledRadios();
    disableButtons();

    if (option_data === "rank") {
        createDateView(ranking, "ranking");
        enableRadios();

    }
    if (option_data == "matches") {
        createDateView(matches, "matches");
        enableButtons();
    }
}

function showMatchPage(num) {
    switch (num) {
        case "1":
            createDateView(firtsQuarterMatches, "matches")
            break;
        case "2":
            createDateView(secondQuarterMatches, "matches")
            break;
        case "3":
            createDateView(thirdQuarterMatches, "matches")
            break;
        case "4":
            createDateView(fourthQuarterMatches, "matches")
            break;
        default:
            break;
    }

}

function filterByName(){
    let search_matches = matches.slice();
    let search = input_playername.value;

    let searchList = search_matches.filter(match => {
        if(match.name1.toLowerCase().includes(search.toLowerCase()))
            return true;
        if(match.name2.toLowerCase().includes(search.toLowerCase()))
            return true;
        if(match.surname1.toLowerCase().includes(search.toLowerCase()))
            return true;
        if(match.surname2.toLowerCase().includes(search.toLowerCase()))
            return true;
        return false;
    });

    createDateView(searchList, "matches");
}

// Activacion y desactivación de eventos
function disabledRadios() {
    raio_pointmode.removeEventListener("change", sortDataRank);
    raio_winmode.removeEventListener("change", sortDataRank);
    raio_alphamode.removeEventListener("change", sortDataRank);
    raio_pointmode.disabled = true;
    raio_winmode.disabled = true;
    raio_alphamode.disabled = true;
    raio_pointmode.checked = false;
    raio_winmode.checked = false;
    raio_alphamode.checked = false;
}

function enableRadios() {
    raio_pointmode.addEventListener("change", sortDataRank);
    raio_winmode.addEventListener("change", sortDataRank);
    raio_alphamode.addEventListener("change", sortDataRank);
    raio_pointmode.disabled = false;
    raio_winmode.disabled = false;
    raio_alphamode.disabled = false;

}

function disableButtons() {
    for (let button of buttons_list) {
        button.classList.add("inputdisabled")
        button.removeEventListener("click", () => showMatchPage(button.textContent.at(-1)));
    }
    input_playername.classList.add("inputdisabled")
    input_playername.removeEventListener("keyup", filterByName)

    input_playername.value = "";
    input_playername.setAttribute("disabled", "");
}

function enableButtons() {
    for (let button of buttons_list) {
        button.classList.remove("inputdisabled");
        button.addEventListener("click", () => showMatchPage(button.textContent.at(-1)));
    }
    input_playername.classList.remove("inputdisabled")
    input_playername.addEventListener("keyup", filterByName)
    input_playername.removeAttribute("disabled", "");
    
}


// Funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    createDateView(ranking, "ranking");
    // createDateView(matches, "matches");
    selectData();

});
