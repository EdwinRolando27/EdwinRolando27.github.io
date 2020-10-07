window.onload = pageLoad;
let cambio = 1;
let c2 = 1;
let c3 = 1;

function pageLoad() {
    let lect = document.getElementById("img1");
    let lect2 = document.getElementById("img2");
    let lect3 = document.getElementById("img3");
    let lect4 = document.getElementById("img4");
    let turismo = document.getElementById("b4")
    let cultura = document.getElementById("b2");

    lect.onclick = lecturaClick;
    lect2.onclick = lecturaClick;
    lect3.onclick = lecturaClick;
    lect4.onclick = lecturaClick;
    turismo.onclick = turismoClick;
    cultura.onclick = cultuClick;
}

function lecturaClick() {
    if (cambio) {
        document.getElementById("f1").textContent = "Lectura completada";
        document.getElementById("f3").textContent = "Lectura completada";
        cambio = 0
    } else {
        document.getElementById("f1").textContent = "Lectura 3minutos";
        document.getElementById("f3").textContent = "Lectura 3minutos";
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