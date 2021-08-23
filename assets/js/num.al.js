//Variables globales
var NumAnt1 = 0;
var NumAnt2 = 0;

var NumAnt3 = 0;
var NumAnt4 = 0;

$('#FormAleatorio').bind("submit", function() {

    event.preventDefault();

    var caras = parseInt($('#MaxInput').val());
    var SinRepetir = $('#SinRepetir').prop('checked');

    //Dado default 6 caras
    if (isNaN(caras)) {

        //Sin repetir
        if (SinRepetir === true) {
            var dado1 = getNumRand(1, 7);
            var dado2 = getNumRand(1, 7);

            //Si sale un número repetido
            if (NumAnt1 === dado1 || NumAnt2 === dado2) {
                while (NumAnt1 === dado1) {
                    var dado1 = getNumRand(1, 7);
                }
                while (NumAnt2 === dado2) {
                    var dado2 = getNumRand(1, 7);
                }

                $('#ImgDado1').attr("src", "../assets/img/" + dado1 + ".png");
                $('#ImgDado2').attr("src", "../assets/img/" + dado2 + ".png");

                var SumaDDados = dado1 + dado2;
                $('#SumaDados').html(SumaDDados);

                NumAnt1 = dado1;
                NumAnt2 = dado2;
            }

            //Si no sale un número repetido
            else {
                $('#ImgDado1').attr("src", "../assets/img/" + dado1 + ".png");
                $('#ImgDado2').attr("src", "../assets/img/" + dado2 + ".png");

                var SumaDDados = dado1 + dado2;
                $('#SumaDados').html(SumaDDados);
                NumAnt1 = dado1;
                NumAnt2 = dado2;
            }

        }

        //Con repetidos
        else {
            var dado1 = getNumRand(1, 7);
            var dado2 = getNumRand(1, 7);

            $('#ImgDado1').attr("src", "../assets/img/" + dado1 + ".png");
            $('#ImgDado2').attr("src", "../assets/img/" + dado2 + ".png");

            var SumaDDados = dado1 + dado2;
            $('#SumaDados').html(SumaDDados);
        }
    }

    //Elección de cantidad de Caras
    else {

        var dado1 = getNumRand(1, caras + 1);
        var dado2 = getNumRand(1, caras + 1);

        //Sin repetir
        if (SinRepetir === true) {

            //Si sale un número repetido
            if (NumAnt3 === dado1 || NumAnt4 === dado2) {
                while (NumAnt3 === dado1) {
                    var dado1 = getNumRand(1, caras + 1);
                }
                while (NumAnt4 === dado2) {
                    var dado2 = getNumRand(1, caras + 1);
                }

                $('#NumGen').html(dado1);
                $('#NumGen2').html(dado2);

                var SumaDDados = dado1 + dado2;
                $('#SumaDados').html(SumaDDados);
                NumAnt3 = dado1;
                NumAnt4 = dado2;
            }

            //Si no sale un número repetido
            else {
                $('#NumGen').html(dado1);
                $('#NumGen2').html(dado2);

                var SumaDDados = dado1 + dado2;
                $('#SumaDados').html(SumaDDados);
                NumAnt3 = dado1;
                NumAnt4 = dado2;
            }

        }

        //Con repetidos
        else {
            $('#NumGen').html(dado1);
            $('#NumGen2').html(dado2);

            var SumaDDados = dado1 + dado2;
            $('#SumaDados').html(SumaDDados);
        }
    }
});