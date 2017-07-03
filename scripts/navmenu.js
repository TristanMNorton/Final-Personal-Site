$( document ).ready(function() {

    $(this).scrollTop(0);
    //Storing current viewport width on load
    var globalWidth = $(window).width();
    
    //Determines if menu button is need based on current viewport width
    if (globalWidth >= 720) {
            $("#menubtn").hide();
        }
    
    //If viewport is dynamically/manually changed after document load
    $(window).resize(function() {

        var newWidth = $(window).width();
        var navIsOpen = $("#headerTitle").height();
        
        if (newWidth >= 720) {
            $("#menubtn").hide();
            $("#headerTitle").height(178);
        } else if (newWidth <= 720 && navIsOpen === 325) {
            $("#menubtn").show();
            $("#headerTitle").height(325);
        } else {
            $("#menubtn").show();
            $("#headerTitle").height(65);
        }
        
    });
    
    //Menu visibility functionality
    $("#menubtn").click(function() {
        
        var curHeaderHeight = $("#headerTitle").height();
        var currentWidth = $(window).width();
        
        if (currentWidth <= 720) {
            $("#headerTitle").stop(true,false).animate({height: '325px'}, 250, function(){});  
        }
        if (curHeaderHeight > 70) {
            $("#headerTitle").stop(true,false).animate({height: '65px'}, 250, function(){});  
        }
        
    });
    
});