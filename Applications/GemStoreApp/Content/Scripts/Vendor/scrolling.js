
    $(function () {
        $(window).on("load resize", function () {
            $(".fill-screen").css("height", window.innerHeight);
        });

        //add Bootstrap's Scrollspy

        $('body').scrollspy({
            target: '.navbar',
            offset: 160
        });

        // smooth scrolling
        $('nav a, .down-button a').bind('click', function () {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 120
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        //parallax scrolling
        $(window).stellar();

        //Allowing WOW animation effects
        new WOW().init();

        //Adding nanoGallery 
        // initialize NanoGallery
        $(document).ready(function () {
            $("#nanoGallery3").nanoGallery();
        });
    });
