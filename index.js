//ANIMACIONES

window.sr = ScrollReveal();

sr.reveal('.imgArrow', {
    duration: 2000,
    origin: 'top',
    distance: '300px',
    reset: 'true'
});

sr.reveal('.feature1', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.feature2', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
});

sr.reveal('.sliders', {
    duration: 2000,
    origin: 'top',
    distance: '300px',
    reset: 'true'
});

sr.reveal('.map', {
    duration: 2000,
    origin: 'top',
    distance: '300px',
    reset: 'true'
});

sr.reveal('.revendedor', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    reset: 'true'
});


//CALCULAR TOTAL A PAGAR

const PRECIO = 2999;

let totalAbonar = parseInt(document.getElementById("totalAbonar").innerHTML);
let cantBoca = parseInt(document.getElementById("cantBoca").innerHTML);
let cantRiver = parseInt(document.getElementById("cantRiver").innerHTML);
let cantCasla = parseInt(document.getElementById("cantCasla").innerHTML);
let cantCai = parseInt(document.getElementById("cantCai").innerHTML);
let cantRacing = parseInt(document.getElementById("cantRacing").innerHTML);

function sumaBoca() {
    cantBoca += 1;
    if (cantBoca < 0) {
        cantBoca = 0;
    }
    document.getElementById("cantBoca").innerHTML = cantBoca;
    montoFinal();
}

function restaBoca() {
    cantBoca -= 1;
    if (cantBoca < 0) {
        cantBoca = 0;
    }
    document.getElementById("cantBoca").innerHTML = cantBoca;
    montoFinal();
}

function sumaRiver() {
    cantRiver += 1;
    if (cantRiver < 0) {
        cantRiver = 0;
    }
    document.getElementById("cantRiver").innerHTML = cantRiver;
    montoFinal();
}

function restaRiver() {
    cantRiver -= 1;
    if (cantRiver < 0) {
        cantRiver = 0;
    }
    document.getElementById("cantRiver").innerHTML = cantRiver;
    montoFinal();
}

function sumaSanLorenzo() {
    cantCasla += 1;
    if (cantCasla < 0) {
        cantCasla = 0;
    }
    document.getElementById("cantCasla").innerHTML = cantCasla;
    montoFinal();
}

function restaSanLorenzo() {
    cantCasla -= 1;
    if (cantCasla < 0) {
        cantCasla = 0;
    }
    document.getElementById("cantCasla").innerHTML = cantCasla;
    montoFinal();
}

function sumaIndependiente() {
    cantCai += 1;
    if (cantCai < 0) {
        cantCai = 0;
    }
    document.getElementById("cantCai").innerHTML = cantCai;
    montoFinal();
}

function restaIndependiente() {
    cantCai -= 1;
    if (cantCai < 0) {
        cantCai = 0;
    }
    document.getElementById("cantCai").innerHTML = cantCai;
    montoFinal();
}

function sumaRacing() {
    cantRacing += 1;
    if (cantRacing < 0) {
        cantRacing = 0;
    }
    document.getElementById("cantRacing").innerHTML = cantRacing;
    montoFinal();
}

function restaRacing() {
    cantRacing -= 1;
    if (cantRacing < 0) {
        cantRacing = 0;
    }
    document.getElementById("cantRacing").innerHTML = cantRacing;
    montoFinal();
}

function montoFinal() {
    sumaPedido = cantBoca + cantRiver + cantCasla + cantCai + cantRacing;
    totalAbonar = sumaPedido * PRECIO;

    if (sumaPedido >= 10) {
        totalAbonar = parseInt(totalAbonar * 0.90);
        document.getElementById("totalAbonar").innerHTML = totalAbonar;
        document.getElementById("mostrarDescuento").innerHTML = "10% OFF";
        document.getElementById("mostrarDescuento").style.color = "#6998AB";
    } else {
        document.getElementById("totalAbonar").innerHTML = totalAbonar;
        document.getElementById("mostrarDescuento").innerHTML = "";
    }

}


/*
//DIPLAY OPCIONES FORM

let mostrar = document.getElementById("formEquipo").value;
let sectionOculta = document.getElementById("sectionHide");

function mostrarDivs(mostrar) {

    let estado1 = document.getElementById("sectionHide").style.display = "flex";

    sr.reveal('.sectionHide', {
        duration: 1000,
        origin: 'bottom',
        distance: '200px'
    });

}

//CALCULAR TOTAL A PAGAR

function totalPagar() {
    const precio = 2999;
    let abonar = document.getElementById("totalAbonar");
    let cantidad = document.getElementById("cantidadTermos").value;
    let mostrarPrecio = (cantidad * precio);

    abonar.placeholder = "Total a abonar: $" + mostrarPrecio;
}
*/