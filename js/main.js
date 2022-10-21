$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }

        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por Favor, insira seu número de telefone',
            email: 'Por favor, insira um E-mail Válido ',

        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos Incorretos`)
            }
        }
    })
})