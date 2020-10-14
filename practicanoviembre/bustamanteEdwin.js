window.onload = pageLoad;
let cambio = 1;
let c2 = 1;
let c3 = 1;
let l2 = 1;
let l3 = 1;
let l4 = 1;


function pageLoad() {
    let lect = document.getElementById("img1");
    let lect2 = document.getElementById("img2");
    let lect3 = document.getElementById("img3");
    let lect4 = document.getElementById("img4");
    let turismo = document.getElementById("b4")
    let cultura = document.getElementById("b2");

    lect.onclick = lecturaClick;
    lect2.onclick = lecturaClick2;
    lect3.onclick = lecturaClic3;
    lect4.onclick = lecturaClic4;
    turismo.onclick = turismoClick;
    cultura.onclick = cultuClick;
}

function lecturaClick2() {
    if (l2) {
        document.getElementById("f2").textContent = "Lectura completada";

        l2 = 0
    } else {
        document.getElementById("f2").textContent = "Lectura 2minutos";

        l2 = 1
    }


}

function lecturaClic3() {
    if (l3) {

        document.getElementById("f3").textContent = "Lectura completada";
        l3 = 0
    } else {

        document.getElementById("f3").textContent = "Lectura 3minutos";
        l3 = 1
    }


}

function lecturaClic4() {
    if (l4) {
        document.getElementById("f4").textContent = "Lectura completada";

        l4 = 0
    } else {
        document.getElementById("f4").textContent = "Lectura 5minutos";

        l4 = 1;
    }


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
    if (c3) {
        document.getElementById("car").className = "mostrar"
        document.getElementById("im").className = "ocultar"
        c3 = 0;
    } else {
        document.getElementById("car").className = "ocultar"
        document.getElementById("im").className = "mostrar"
        c3 = 1;
    }
}

function cultuClick() {
    let fecha = new Date;
    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let f = fecha.getDate() + " de " + (meses[fecha.getMonth()]) + " del " + fecha.getFullYear()
    let h = fecha.getHours() + ":" + fecha.getMinutes();
    if (c2) {
        document.getElementById("fecha").textContent = f + ",la hora actual es: " + h;
        c2 = 0
    } else {
        document.getElementById("fecha").textContent = ""
        c2 = 1
    }
}