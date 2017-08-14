$(document).ready(function(){
    $("#github").hover(function(){
        $("#socMediaText").text("Github");
        $("#github").mouseleave(function() {
            $("#socMediaText").text("");
        });
    });
    $("#linkedin").hover(function(){
        $("#socMediaText").text("LinkedIn");
        $("#linkedin").mouseleave(function() {
            $("#socMediaText").text("");
        });
    });  
});