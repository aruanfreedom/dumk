$(document).ready(function(){
    var map = {
    	kz 	   : $(".map"),
    	popap  : $(".popap"),
    	astana : $("#astana img")
    }

    map.astana.mouseover( function(){
    	map.popap.css( "display", "block");
    })
    .mouseout( function(){
    	map.popap.css( "display", "none");
    });

});