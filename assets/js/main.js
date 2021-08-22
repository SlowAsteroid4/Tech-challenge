$('#returnBtn').click(function() {
    location.href = "../index.html";
});

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode;
    return ((key >= 48 && key <= 57) || (key == 8));
}

function getNumRand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}