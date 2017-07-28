$(document).ready(function(){
    
    $("#aboutLink").click(function() {
        $('html, body').animate({
            scrollTop: $("#bioSkillTestWrapper").offset().top
        }, 500);
    });
    $("#portfolioLink").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 500);
    });
    $("#contactLink").click(function() {
        $('html, body').animate({
            scrollTop: $("#formWrapper").offset().top
        }, 500);
    });

});
