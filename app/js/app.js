$(document).ready(function(){

    /*Map script Start*/
    var map = {
    	city : $(".mouse-select")
    }

    map.city.mouseover( function(){
    	$( this ).find(".popap").css( "display", "block"); //Visible
    }) 
    .mouseout( function(){
    	$( this ).find(".popap").css( "display", "none"); //Unvisible
    });
    /*Map script End*/

    /*Table menu menu sorting*/
    var sorting = function() {
        $(".sort-click").on("click", function () {
            var 
                arrow_src = $( this ).find("img").attr("src"),
                arrow_top = arrow_src.replace("bottom", "top"),
            
                replace = $( this ).find("img").attr("src", arrow_top);
                src = arrow_src.indexOf("top");

                if( src === 16) { //Проверка есть ли слово "top"
                    arrow_bottom = arrow_src.replace("top", "bottom"); //Если есть меняем рисунок
                    replace = $( this ).find("img").attr("src", arrow_bottom);
                }

                $( this ).find(".sorting").toggle();
                
        });
    };
    sorting();
    //Checkbox select one
    function foo() {
        $('input[type="checkbox"]').on('change', function() {
            $(this).siblings('input[type="checkbox"]').not(this).prop('checked', false);
        });
    };
    foo();
    //End Checkbox

    /*End Table menu menu sorting*/

});