let cambio = 1;
window.onload = pageLoad;

function pageLoad() {
    let colorear = document.getElementById("colorear");
    let extraer = document.getElementById("extraer");
    colorear.onclick = colorearClick;
}

function colorearClick() {

    if (cambio) {
        document.getElementById("a1").className = "rojo";
        document.getElementById("a2").className = "rojo";
        document.getElementById("a3").className = "rojo";
        document.getElementById("a4").className = "rojo";
        document.getElementById("a5").className = "rojo";

        document.getElementById("r1").className = "azul";
        document.getElementById("r2").className = "azul";
        document.getElementById("r3").className = "azul";
        cambio = 0;
    } else {
        document.getElementById("a1").className = "azul";
        document.getElementById("a2").className = "azul";
        document.getElementById("a3").className = "azul";
        document.getElementById("a4").className = "azul";
        document.getElementById("a5").className = "azul";

        document.getElementById("r1").className = "rojo";
        document.getElementById("r2").className = "rojo";
        document.getElementById("r3").className = "rojo";
        cambio = 1;
    }
}