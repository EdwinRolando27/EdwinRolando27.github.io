let cambio = 1;
let cola = document.querySelectorAll('.fa');
let colr = document.querySelectorAll('.fr');
let i;
window.onload = pageLoad;


function pageLoad() {
    let colorear = document.getElementById("colorear");
    let extraer = document.getElementById("extraer");

    colorear.onclick = colorearClick;
    extraer.onclick = extraerClick;

}

function colorearClick() {

    if (cambio) {


        for (i = 0; i < cola.length; i++) {
            cola[i].className = "rojo";
        }
        for (i = 0; i < colr.length; i++) {
            colr[i].className = "azul";
        }

        cambio = 0;

    } else {
        for (i = 0; i < cola.length; i++) {
            cola[i].className = "azul";
        }
        for (i = 0; i < colr.length; i++) {
            colr[i].className = "rojo";
        }
        cambio = 1;
    }
}

function extraerClick() {
    let val = document.getElementById("nacimiento").value;
    if (val == null || val == 0) {
        alert("ingrese fecha")
    } else {
        nacimiento();
        mesletra();
        apellidos();
    }


}

function apellidos() {
    let c = 0;
    let extraer;
    let apellidop = "";
    let apellidom = "";
    let nombres = "";
    let n = document.getElementById("nombre").value;
    let cNombre = new String(n);
    let car;
    for (let i = 0; i < cNombre.length; i++) {
        car = cNombre.charAt(i);
        if (car == ' ') {
            c++;
        }
    }
    if (c < 1) {

        alert("ingrese al menos un Apellido y un Nombre");
    } else {
        if (c <= 3) {
            extraer = cNombre.split(' ');
            if (c == 1) {
                apellidop = extraer[0];
                nombres = extraer[1];
            }
            if (c == 2) {
                apellidop = extraer[0];
                apellidom = extraer[1];
                nombres = extraer[2];
            }
            if (c == 3) {
                apellidop = extraer[0];
                apellidom = extraer[1];
                nombres = extraer[2] + " " + extraer[3];
            }
        } else {
            alert("Ingrese solo 2 apellidos y 2 nombres");
        }
        let longitud = new String(apellidop + apellidom);
        document.getElementById("lApellido").value = longitud.length;
        document.getElementById("aPaterno").value = apellidop;
        document.getElementById("aMaterno").value = apellidom;
        document.getElementById("sNombre").value = nombres;
    }

}

function mesletra() {
    let fecha = document.getElementById("nacimiento").value;
    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let fm = new Date(fecha);
    let nm = fm.getMonth();
    document.getElementById("mes").value = "El mes de nacimiento es: " + meses[nm];


}

function nacimiento() {
    let fecha = document.getElementById("nacimiento").value;
    let fnacimiento = new Date(fecha);
    let factual = new Date();
    let naño = fnacimiento.getFullYear();
    let nmes = fnacimiento.getMonth();
    let ndia = fnacimiento.getDate();
    let aaño = factual.getFullYear();
    let ames = factual.getMonth() - fnacimiento.getMonth();
    let adia = factual.getDate();
    let edad = factual.getFullYear() - fnacimiento.getFullYear();
    if (ames < 0 || ames === 0 && adia < ndia) {
        edad--;
    }

    document.getElementById("edad").value = edad + " años";
}