$('#FormAleatorio').bind("submit", function() {
    event.preventDefault();

    var NumMin = parseInt($('#MinInput').val());
    var NumMax = parseInt($('#MaxInput').val());

    if (isNaN(NumMax)) {

        var dado1 = getNumRand(1, 6);
        var dado2 = getNumRand(1, 6);
        $('#ImgDado1').attr("src", "../assets/img/" + dado1 + ".png");
        $('#ImgDado2').attr("src", "../assets/img/" + dado2 + ".png");

        var SumaDDados = dado1 + dado2;
        $('#SumaDados').html(SumaDDados);
    } else {
        var NumGenerado = getNumRand(1, NumMax + 1);
        var NumGenerado2 = getNumRand(1, NumMax + 1);

        $('#NumGen').html(NumGenerado);
        $('#NumGen2').html(NumGenerado2);

        var SumaDDados = NumGenerado + NumGenerado2;
        $('#SumaDados').html(SumaDDados);
    }
});