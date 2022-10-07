<<<<<<< HEAD
$(document).ready(function() {
$('form').on('submit', function(e) {
    e.preventDefault();
    const addNovaTarefa = $('#adicionar-nova-tarefa').val();
    const addListaDeTarefa = $('<li>' + addNovaTarefa + '</li>');
    $(addListaDeTarefa).click(function() {
        if ($(this).css('text-decoration-line') == 'none')
        $(this).css('text-decoration-line', 'line-through');
        else
        $(this).css('text-decoration-line', 'none');
    })
    $(addListaDeTarefa).appendTo('ul');
    $('#adicionar-nova-tarefa').val('');
    })
    })
=======
$(document).ready(function() {
$('form').on('submit', function(e) {
    e.preventDefault();
    const addNovaTarefa = $('#adicionar-nova-tarefa').val();
    const addListaDeTarefa = $('<li>' + addNovaTarefa + '</li>');
    $(addNovaTarefa).appendTo($(addListaDeTarefa));
    $(addListaDeTarefa).appendTo('ul');
    $('#adicionar-nova-tarefa').val('');
    $("li").click(function() {
        if ($(this).css('text-decoration-line') == 'none')
        $(this).css('text-decoration-line', 'line-through');
        else
        $(this).css('text-decoration-line', 'none');
    })
    })
    })
>>>>>>> 7133e6cbea6ece689b42b201d608fe0b9b03757b
