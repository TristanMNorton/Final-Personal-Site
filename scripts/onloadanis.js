$(document).ready(function(){
    var globalWidth = $(window).width();
    //Makes header slide in all nice and stuff
    if (globalWidth >= 740) {
        $('#headerTitle').css('display', 'none');
        $('#headerTitle').delay( 800 ).fadeIn(1000);
    }
    
    
});