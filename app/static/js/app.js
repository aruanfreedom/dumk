$(document).ready(function() {

    /*Map script Start*/
    var map = {
        city: $(".mouse-select")
    };

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

                replace = $(this).find("img").attr("src", arrow_top),
                src = arrow_src.indexOf("top"),
                sorting = $(this).find(".sorting"),
                img = $(this).find("img, b"),

                hide = sorting.css("display");

                img.on("click", function(){
                    arrow_bottom = arrow_src.replace("top", "bottom"); //Если есть меняем рисунок
                    replace = $(this).find("img").attr("src", arrow_bottom);                   
                    sorting.hide();
                });

                    var ok = $(".ok"),
        sorting2 = $(".sort-click").find(".sorting");
    ok.on("click", function(){
        arrow_bottom = arrow_src.replace("top", "bottom"); //Если есть меняем рисунок
        replace = $(this).find("img").attr("src", arrow_bottom);
        sorting2.hide();
    });
                

            if (src === 16 && hide === "none") { //Проверка есть ли слово "top"
                arrow_bottom = arrow_src.replace("top", "bottom"); //Если есть меняем рисунок
                replace = $(this).find("img").attr("src", arrow_bottom);
            }
            else{
                $(".sorting").hide();
                sorting.show();
            }            

        });
    };




    sorting();
    //Checkbox select one
    // function checkbox() {
    //     $('input[type="checkbox"]').on('change', function() {
    //         $(this).siblings('input[type="checkbox"]').not(this).prop('checked', false);
    //     });
    // };
    // checkbox();
    //End Checkbox

    /*End Table menu menu sorting*/

    /*EDit button*/

    var editButton = function() {
        var input = $("input"),
            inputFile = $("input:file"),
            select = $("select"),
            selectYes = $("input.select-yes"),
            inputSection = $(".edit-input input"),
            isTrue = true,
            password = $(".password"),
            edit = $(".edit-profile, .edit-profile-no-scroll").html(),
            editSection = $(".edit-section").html(),
            download = $(".download-all");

        $(".edit-profile, .edit-profile-no-scroll").on("click", function() {
            var tag = $(this)[0].tagName;
            if(tag === "SPAN"){
                $(this).replaceWith(function(){
                    return "<button type='submit' class='button secondary edit-profile'>Сохранить все</button>";
                });
                //$(this).html("Сохранить");
                input.removeAttr("disabled");
                selectYes.attr('disabled', 'disabled');
                ( download.hasClass('none')) ? download.removeClass('none') : true;
                select.removeAttr("disabled");
                input.css({
                    "border": "1px solid #ccc",
                    "padding-left": "10px"
                });
                select.css({
                    "border": "1px solid #ccc",
                    "padding-left": "10px"
                });
                inputFile.css({
                    "border": "0px solid #ccc",
                    "padding-left": "10px"
                });
                password.attr("type", "text");

                //if( selectOption.attr('class') === "yes"){
                //    selectOption.removeAttr('disabled');
                //    selectOption.css({
                //        "border" : "1px solid #ccc",
                //        "background": "none"
                //    });
                //    console.log("yes");
                //}
                //else if( selectOption.attr('class') === "no" ){
                //    selectOption.attr('disabled', 'disabled');
                //    selectOption.attr('name', name);
                //    selectOption.css({
                //        "border" : "0px solid #ccc",
                //        "background": "#a3a3a3"
                //    });
                //    console.log("no");
                //}


            }
            if(tag === "BUTTON"){
                that.replaceWith(function(){
                    return "<span class='button secondary edit-profile'>Редактировать все</span>";
                });
                input.attr("disabled", "disabled");
                select.attr("disabled", "disabled");
                ( download.hasClass('none')) ? download.addClass('none') : true;
                input.css({
                    "border-width": "0px",
                    "padding": "0px"
                });
                select.css({
                    "border-width": "0px",
                    "padding": "0px"
                });
                inputFile.css({
                    "border-width": "0px",
                    "padding": "0px"
                });
                password.attr("type", "password");
                isTrue = true;
            }
        });

        $(".edit-section").on("click", function() {
            var section = $(this).parents(".section");
                oneEdit = section.find(".edit-input input, select"),
                that = $(this),
                tag = that[0].tagName;

            if(tag === "SPAN"){
                that.replaceWith(function(){
                    return "<button type='submit' class='edit-section'>Сохранить</button>";
                });
                //$(this).html("Сохранить");
                oneEdit.removeAttr("disabled");
                oneEdit.css({
                    "border": "1px solid #ccc",
                    "padding-left": "10px"
                });
                password.attr("type", "text");
            }
            if(tag === "BUTTON"){
                that.replaceWith(function(){
                    return "<span class='edit-section'>Редактировать</span>";
                });
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

    //Select NO

    var selectNo = function(){
        $("select").on("change", function(){
            var
                section = $(this).parents(".section"),
                select = section.find("select option:selected"),
                selectYes = section.find(".select-yes");

            select.each(function() {
                if( $(this).attr('class') === "yes"){
                    selectYes.removeAttr('disabled');
                    selectYes.removeAttr('name');
                    selectYes.css({
                        "border" : "1px solid #ccc",
                        "background": "none"
                    });
                }
                else if( $(this).attr('class') === "no" ){
                    selectYes.attr('disabled', 'disabled');
                    selectYes.css({
                        "border" : "0px solid #ccc",
                        "background": "#a3a3a3"
                    });
                }
            });
        });
    };

    selectNo();

    //End Select NO

    var saveScroll = function() {
        var scrollBtn = $(".edit-profile, .save-profile"),
        bg = scrollBtn.parent();
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 350) {
                bg.addClass("scroll-btn");
            } else {
                bg.removeClass("scroll-btn");
            }
        });
    }

    saveScroll();

    /*End edit button*/

});
