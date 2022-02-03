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

sr.reveal('.map', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});

sr.reveal('.social-container', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});


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