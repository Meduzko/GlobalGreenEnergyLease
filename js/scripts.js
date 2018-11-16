$(document).ready(function() {


    // c-finance
    // ------------------------------------------------------------
    if (($(window).width() >= 768) && ($(window).width() <= 1024)) {
        $('.c-finance').owlCarousel({
            responsive: {
                768: {
                    items: 2,
                    dots: true,
                    loop: true,
                    center: true
                }
            }
        });
    } else {
        $('.c-finance').owlCarousel('destroy');
    }

    $(window).on('resize', function() {
        if (($(window).width() >= 768) && ($(window).width() <= 1024)) {
            $('.c-finance').owlCarousel({
                responsive: {
                    768: {
                        items: 2,
                        dots: true,
                        loop: true,
                        center: true
                    }
                }
            });
        } else {
            $('.c-finance').owlCarousel('destroy');
        }
    });




}); // end ready


function goOffices() {
    window.location = "http://globalgreenbuildings.com/segment.html?Offices";
}
 
function goRetail () {
    window.location = "http://globalgreenbuildings.com/segment.html?Retail";

}
function goHospitality () {
    window.location = "http://globalgreenbuildings.com/segment.html?Hospitality";

}
function goIndustry () {
    window.location = "http://globalgreenbuildings.com/segment.html?Industry";

}
function goRenewables () {
    window.location = "http://globalgreenbuildings.com/segment.html?Renewables";

}
function goOther () {
    window.location = "http://globalgreenbuildings.com/segment.html?Other";

}
