
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script

        

    });




    $(function(){
        $("#navbar").load("nav.html");
    });

    var iconClick = document.querySelector(".last");
    iconClick.addEventListener('click', function(){
      document.getElementById("ellipse").classList.toggle("animate");
    })

    var iconClick = document.querySelector(".middle");
    iconClick.addEventListener('click', function(){
      document.getElementById("circ").classList.toggle("animate");
    })
    var iconClick = document.querySelector(".rectangle");
    iconClick.addEventListener('click', function(){
      document.getElementById("rect").classList.toggle("animate");
    })

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

