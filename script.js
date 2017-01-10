/* global $ */
$(document).ready(function(){
    //Write all your jQuery code here
    $("button").click(function() {
    $("#like").html("You like this project!");
    });
    
$("#home").hover(function(){
   $("#home").css("background-color", "#D3D3D3");
},
    function(){
         $("#home")
    }
);

});
    