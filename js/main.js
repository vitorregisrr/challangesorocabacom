(function () {
    'use-strict'
    ////! INIT LIBS !///
    $('.lazy').lazyload();
    new WOW().init();

    ////! Start SKILLS SLIDER !////
    const skillsSlider = $(".skills__slider .owl-carousel");

    skillsSlider
        .children()
        .each(function (index) {
            $(this).attr("data-position", index)
        });

    skillsSlider.owlCarousel({
        loop: false,
        items: 3,
        mouseDrag: true,
        center: true,
        nav: true,
        navText: ['', ''],
        slideBy: "page",
        dragEndSpeed: 700,
        smartSpeed: 1e3,
        startPosition: 1,
        responsive: {
            0: {
                items: 1
            },

            800: {
                items: 2,
                margin: 50
            },

            1000: {
                items: 3,
                margin: 40
            }
        }
    });
    $(document).on("click", ".skills-slider .owl-item>div", function () {
        skillsSlider.trigger("to.owl.carousel", $(this).data("position"))
    }),
    skillsSlider.trigger("refresh.owl.carousel");

    ////! END SKILLS SLIDER !////
})()