$(document).ready(function() {
$('form').on('submit', function(e) {
    e.preventDefault();
    const addNovaTarefa = $('#adicionar-nova-tarefa').val();
    const addListaDeTarefa = $('<li>' + addNovaTarefa + '<i class="checked"></i></li>');
    $(addNovaTarefa).appendTo($(addListaDeTarefa));
    $(addListaDeTarefa).appendTo('ul');
    $('#adicionar-nova-tarefa').val('');
    $('ul').on('click', function() {
        if ($('ul').css('text-decoration-line') == 'none')
            $('ul').css('text-decoration-line', 'line-through');
        else
            $('ul').css('text-decoration-line', 'none');
        })
    })
    })
