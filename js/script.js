$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
// Slider carousel 
$('.owl-carousel').owlCarousel({
    autoplay : true,
    loop: true,
    margin: 20,
    slideSpeed : 300,
    paginationSpeed : 400,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// Mobile Nav
function opennav() {
    document.getElementById("sidenav").style.width = "250px";
  }
  
  function closenav() {
    document.getElementById("sidenav").style.width = "0";
  }

