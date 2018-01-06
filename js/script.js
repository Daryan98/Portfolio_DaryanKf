// Scrool to top
$('div#scroll-top').fadeOut(0);

// Send Button in Contact page

// Header section
$(document).ready(function(){
	$('#nav-bars').click(function(){
		$(this).toggleClass('open');
    });

      // navbar for Small Device Nav
      $("header nav#navbar #nav-bars").click(function () {
        if ($("header").height() != 70)
            $("header").animate({
                height: 70,
            }, 10);
        else
            $("header").animate({
                height: screen.height,
            }, 10);
    });

    $(" header nav#navbar li ").click(function () {
        $(" header nav#navbar li ").addClass("active");
        if ($("header").height() != 70)
            $("header").animate({
                height: 70
            }, 10);
            $("header nav#navbar #nav-bars").removeClass('open');
    });

});

$(document).ready(function () {

    // Toggle Fade Profile QUestion
    // $("section.resources h1 i span").fadeOut();
    // $("section.resources h1 i").hover(function(){
    // $("section.resources h1 i span").fadeToggle(300);
    // });
   
    // Scroll when clicking the nav items
    $('header nav#navbar div#nav ul li a').click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 300);
    });

    // Scrool to top

        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 400) {
                $('div#scroll-top').fadeIn();
            } else {
                $('div#scroll-top').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('div#scroll-top').click(function(){
            $('html, body').animate({scrollTop : 0},200);
            return false;
        });
        

  
    // Skills slider  
    $('ul#graph-skills').carouFredSel({
        responsive: true,
        width: '90%',
        circular: true,
        // prev: '#prev',
        // next: '#next',

        scroll: {
            items: 1,
            duration: 400,
            pauseOnHover: true
        },
        auto: false,
        items: {
            visible: {
                min: 1,
                max: 8
            },
        },

    });
    //  Radom section text animate

    // My Picture about me section
    $('section.about-me .row div#my-image img').css({
        "transform": "translateX(0)",
        "opacity": "1",
    });
    // about me section content
    $('section.about-me .row div#about-content').css({
        "transform": "translateX(0)",
        "opacity": "1",
    });
    $(window).scroll(function () {
        // Animate the codeing designing img
        if ($(window).scrollTop() >= 500 && $(window).scrollTop() <= 700 ||$(window).scrollTop() >= 900 ) {
            $('#circle-graph img').css({
                // "display": "block",
                "transform": "translateY(0)",
                "opacity": "1",
            });
        }

        // Animate the skills section li
        if ($(window).scrollTop() >= 1650) {

            $('ul#graph-skills li#html').css({
                "height": "420px",
                "margin-top": "0px",
                //  "opacity": "1",
            });

            $('ul#graph-skills li#css').css({
                "transition-delay": ".1s",
                "height": "400px",
                "margin-top": "20px",
                // "opacity": "1",
            });


            $('ul#graph-skills li#javascript').css({
                "transition-delay": ".2s",
                "height": "275px",
                "margin-top": "145px",
                // "opacity": "1",
            });


            $('ul#graph-skills li#wordpress').css({
                "transition-delay": ".3s",
                "height": "200px",
                "margin-top": "220px",
                // "opacity": "1",
            });

            $('ul#graph-skills li#adobe').css({
                "transition-delay": ".4s",
                "height": "275px",
                "margin-top": "145px",
                // "opacity": "1",
            });
            $('ul#graph-skills li#python').css({
                "transition-delay": ".5s",
                "height": "140px",
                "margin-top": "280px",
                // "opacity": "1",
            });


            $('ul#graph-skills li#php-mysqul').css({
                "transition-delay": ".6s",
                "height": "160px",
                "margin-top": "261px",
                // "opacity": "1",
            });

            $('ul#graph-skills li#git').css({
                "transition-delay": ".7s",
                "height": "140px",
                "margin-top": "280px",
                // "opacity": "1",
            });
        }

        if ($(window).scrollTop() >= 1100) {
            $("section.random #i-do").css({
                "opacity": "1",
                "transform": "translateX(0)",

            })
        }



    });
    // Projetc opverlay
    $("section.project div#pic").mouseenter(function () {
        $(this).children(".about-website").animate({
            opacity: 1
        }, 300);
        
    })
    $("section.project div#pic").mouseleave(function () {
        $(this).children(".about-website").animate({
            opacity: 0
        }, 300);
    })
});

// nav Click Scroll

// Contact page map
function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(55.892251, 12.491735);
    var mapOptions = {
        center: myCenter,
        zoom: 5,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    };


    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);

    // Zoom to 20 when clicking on marker
    google.maps.event.addListener(marker, 'click', function () {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
    });
}