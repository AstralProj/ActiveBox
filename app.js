$(function () {
    // Fixed-Header
    let header = $("#header");
    let intro = $("#intro");
    let introH;

    scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        introH = $(intro).innerHeight();
        scrollPos = $(this).scrollTop();


        if (scrollPos > introH) {
            $(header).addClass("fixed");

        } else {
            $(header).removeClass("fixed");
        }




    });


    /* Smooth-Scroll*/


    $("[data-scroll]").click(function (e) {
        e.preventDefault();


        let elementId = $(this).data("scroll")
        let elementOffset = $(elementId).offset().top;

        $(nav).removeClass("show");

        console.log(elementOffset)

        $("html,body").animate({
            scrollTop: elementOffset - 60
        }, 700);


    });




    /* Nav Toggle */

    $("#navToggle").click(function (e) {
        e.preventDefault();
        $(nav).toggleClass("show");


    });


    /* Reviews */
    $(".reviews-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


});




