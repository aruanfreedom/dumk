$(document).ready(function() {

    /*Map script Start*/
    var map = {
        city: $(".mouse-select")
    }

    map.city.mouseover(function() {
            $(this).find(".popap").css("display", "block"); //Visible
        })
        .mouseout(function() {
            $(this).find(".popap").css("display", "none"); //Unvisible
        });
    /*Map script End*/

    /*Table menu menu sorting*/
    var sorting = function() {
        $(".sort-click").on("click", function() {
            var
                arrow_src = $(this).find("img").attr("src"),
                arrow_top = arrow_src.replace("bottom", "top"),

                replace = $(this).find("img").attr("src", arrow_top);
            src = arrow_src.indexOf("top");

            if (src === 16) { //Проверка есть ли слово "top"
                arrow_bottom = arrow_src.replace("top", "bottom"); //Если есть меняем рисунок
                replace = $(this).find("img").attr("src", arrow_bottom);
            }

            $(this).find(".sorting").toggle();

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

    /*EDit button*/

    var editButton = function() {
        var input = $("input"),
            inputSection = $(".edit-input input"),
            isTrue = true,
            password = $(".password"),
            edit = $(".edit-profile").html();
        editSection = $(".edit-section").html();


        $(".edit-profile").on("click", function() {
            if (isTrue === true) {
                $(this).html("Сохранить");
                input.removeAttr("disabled");
                input.css({
                    "border-width": "1px",
                    "padding": "10px"
                });
                password.attr("type", "text");
                isTrue = false;
            } else {
                $(this).html(edit);
                input.attr("disabled", "disabled");
                input.css({
                    "border-width": "0px",
                    "padding": "0px"
                });
                password.attr("type", "password");
                isTrue = true;
            }
        });

        $(".edit-section").on("click", function() {
            var section = $(this).parents(".section");
            oneEdit = section.find(".edit-input input");

            if (isTrue === true) {
                $(this).html("Сохранить");
                oneEdit.removeAttr("disabled");
                oneEdit.css({
                    "border-width": "1px",
                    "padding": "10px"
                });
                password.attr("type", "text");

                isTrue = false;
            } else {
                $(this).html(editSection);
                oneEdit.attr("disabled", "disabled");
                oneEdit.css({
                    "border-width": "0px",
                    "padding": "0px"
                });
                password.attr("type", "password");
                isTrue = true;
            }
        });

    };

    editButton();

    var saveScroll = function() {
        var scrollBtn = $(".edit-profile"),
        bg = scrollBtn.parent();
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 300) {
                bg.addClass("scroll-btn");
            } else {
                bg.removeClass("scroll-btn");
            }
        });
    }

    saveScroll();

    /*End edit button*/

});
