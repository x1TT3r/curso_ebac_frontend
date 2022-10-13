$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00.000-000');

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
            },
            cpf: {
                required: true,
            },
            endereço: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por Favor, insira seu número de telefone',
            email: 'Por favor, insira um E-mail Válido ',
            cpf: 'Por favor, insira o número do seu CPF',
            endereço:'Por favor, insira seu Endereço',
            cep: 'Por favor, insira o CEP da sua rua',


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