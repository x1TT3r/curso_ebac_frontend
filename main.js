$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const addNovaTarefa = $('#adicionar-nova-tarefa').val();
        const addListaDeTarefa = $('<li>' + addNovaTarefa + '</li>');
        $(addListaDeTarefa).click(function() {
            $(this).css('text-decoration-line', 'line-through');
        })
        $(addListaDeTarefa).appendTo('ul');
        $('#adicionar-nova-tarefa').val('');
        })
        })
