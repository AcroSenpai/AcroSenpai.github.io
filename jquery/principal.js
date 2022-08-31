$(document).ready(function() {

    //Calcular altura de la pantalla y restarle altura de la barra
    alturaPantalla = window.screen.height;
    alturaHeader = $("#header").height();
    var alturaComponentes = alturaPantalla - alturaHeader - 5;
    $(".Contenedor").attr("style", "height: " + alturaComponentes + "px");

    //Recalcular la altura de la pantalla por si hay modificaciones
    $(window).resize(function() {
        alturaPantalla = window.screen.height;
        alturaHeader = $("#header").height();
        alturaComponentes = alturaPantalla - alturaHeader - 5;
        $(".Contenedor").attr("style", "height: " + alturaComponentes + "px");
    }).resize()




    //Logica menu movil
    var estado_menu = 0; //0 = escondido ; 1 = mostrado
    $("#Burger").click(function() {
        if (estado_menu == 0) {
            $("#Componentes_header_movil").slideDown();
            $(this).children('img').attr('src', 'images/cruz.png');
            estado_menu = 1;
        } else {
            $("#Componentes_header_movil").slideUp();
            $(this).children('img').attr('src', 'images/menu_burger.png');
            estado_menu = 0;
        }
    });

    $("#Componentes_header_movil div").hover(function() {
            $(this).children('a').addClass("menu_hover");
        },
        function() {
            $(this).children('a').removeClass("menu_hover");
        }
    );


    //Texto animado
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml10 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i
        }).add({
            targets: '.ml10',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 10000000
        });

    $('#slider').nivoSlider({
        effect: 'slideInLeft',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 1000,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: false,
        controlNav: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function() {},
        afterChange: function() {},
        slideshowEnd: function() {},
        lastSlide: function() {},
        afterLoad: function() {}
    });
});

var alturaPantalla = "";
var alturaHeader = "";

function scrollToAnchor(aid) {
    console.log("1: " + aid);
    const destination = $("#" + aid);
    console.log(destination.offset().top);
    var posicion = destination.offset().top - alturaHeader;
    $('html,body').animate({
        scrollTop: posicion
    }, 'slow');
}