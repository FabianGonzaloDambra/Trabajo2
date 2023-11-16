const quienesSomos = document.querySelector("#quienes_somos");
const contactanos = document.querySelector("#contactanos");
const sdlcButton = document.querySelector("#sdlc");
const sdlcList = document.querySelector("#sdlcList");


function showAndHideContactanos() {
    if (contactanos.style.display === "" || contactanos.style.display === "none") {
        contactanos.style.display = "block";
        sdlcList.style.display = "none";
    } else {
        contactanos.style.display = "none";
    }
}

quienesSomos.onclick = showAndHideContactanos;


function showAndHideSDLC() {
    if (sdlcList.style.display === "" || sdlcList.style.display === "none") {
        sdlcList.style.display = "block";
        contactanos.style.display = "none";
    } else {
        sdlcList.style.display = "none";
    }
}

sdlcButton.onclick = showAndHideSDLC;

const equipo = document.querySelector("#equipo");
const integrantes = document.querySelector("#integrantes");


function showIntegrantes() {
    integrantes.style.display = "block";
}

function hideIntegrantes() {
integrantes.style.display = "none";
}

equipo.onmouseover = showIntegrantes;
equipo.onmouseout = hideIntegrantes;