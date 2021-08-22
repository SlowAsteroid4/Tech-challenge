$('#FormAleatorio').bind("submit", function() {
    event.preventDefault();

    var NumMin = parseInt($('#MinInput').val());
    var NumMax = parteInt($('#MaxInput').val());

    if (isNaN(NumMin) || isNaN(NumMax)) {
        console.log("No es un número");
    } else {
        console.log(NumMin);
        console.log(NumMax);
    }
});