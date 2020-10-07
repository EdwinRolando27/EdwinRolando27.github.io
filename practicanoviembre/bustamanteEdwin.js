window.onload = pageLoad;
let cambio = 1;
let c2 = 1;
let c3 = 1;

function pageLoad() {
    let lect = document.getElementById("img1");
    let turismo = document.getElementById("b4")
    let cultura = document.getElementById("b2");

    lect.onclick = lecturaClick;
    turismo.onclick = turismoClick;
    cultura.onclick = cultuClick;
}

function lecturaClick() {
    if (cambio) {
        document.getElementById("f1").textContent = "Lectura completada";
        cambio = 0
    } else {
        document.getElementById("f1").textContent = "Lectura 3minutos";
        cambio = 1
    }


}

function turismoClick() {

}

function cultuClick() {
    let fecha = new Date;

    if (c2) {
        document.getElementById("fecha").textContent = fecha;
        c2 = 0
    } else {
        document.getElementById("fecha").textContent = ""
        c2 = 1
    }
}