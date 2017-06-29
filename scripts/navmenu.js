$( document ).ready(function() {
    var globalWidth = $(window).width();

    if (globalWidth >= 720) {
            $("#menubtn").hide();
        }
    
    $(window).resize(function() {
        var newWidth = $(window).width();
        var navIsOpen = $("#headerTitle").height();
        
        if (newWidth >= 720) {
            $("#menubtn").hide();
            $("#headerTitle").height(149);
        } else if (newWidth <= 720 && navIsOpen === 355) {
            $("#menubtn").show();
            $("#headerTitle").height(355);
        } else {
            $("#menubtn").show();
            $("#headerTitle").height(65);
        }
        
        if (newWidth <= 720 && navIsOpen === 355) {
            $("#headerTitle").height(355);
        }

    });
    
    $("#menubtn").click(function() {
        var curHeaderHeight = $("#headerTitle").height();
        var currentWidth = $(window).width();
        if (currentWidth <= 720) {
            $("#headerTitle").stop(true,false).animate({height: '355px'}, 250, function(){});  
        }
        if (curHeaderHeight > 70) {
            $("#headerTitle").stop(true,false).animate({height: '65px'}, 250, function(){});  
        }
        
    });
    
});