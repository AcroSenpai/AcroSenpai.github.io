$(document).ready(function() {
    var Casas;
    $.ajax({
        type: 'GET',
        url: 'https://wizard-world-api.herokuapp.com/Houses',
        dataType: 'json',
        success: function(data) {
            Casas = data;
            console.log(Casas);
        }
    });

    var Magos;
    $.ajax({
        type: 'GET',
        url: 'https://wizard-world-api.herokuapp.com/Wizards',
        dataType: 'json',
        success: function(data) {
            Magos = data;
        }
    });


    var Hechizos;
    $.ajax({
        type: 'GET',
        url: 'https://wizard-world-api.herokuapp.com/Spells',
        dataType: 'json',
        success: function(data) {
            Hechizos = data;
        }
    });

    var Elixir
    $.ajax({
        type: 'GET',
        url: 'https://wizard-world-api.herokuapp.com/Elixirs',
        dataType: 'json',
        success: function(data) {
            Elixir = data;
        }
    });


    var Ingredientes
    $.ajax({
        type: 'GET',
        url: 'https://wizard-world-api.herokuapp.com/Ingredients',
        dataType: 'json',
        success: function(data) {
            Ingredientes = data;
        }
    });

    console.log(Casas);
    console.log(Magos);
    console.log(Hechizos);
    console.log(Elixir);
    console.log(Ingredientes);

});