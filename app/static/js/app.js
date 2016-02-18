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
            if (tag === "SPAN") {
                $(this).replaceWith(function() {
                    return "<button type='submit' class='button secondary edit-profile'>Сохранить</button>";
                });
                //$(this).html("Сохранить");
                input.removeAttr("disabled");
                selectYes.attr('disabled', 'disabled');
                (download.hasClass('none')) ? download.removeClass('none'): true;
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
            if (tag === "BUTTON") {
                that.replaceWith(function() {
                    return "<span class='button secondary edit-profile'>Редактировать все</span>";
                });
                input.attr("disabled", "disabled");
                select.attr("disabled", "disabled");
                (download.hasClass('none')) ? download.addClass('none'): true;
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

            if (tag === "SPAN") {
                that.replaceWith(function() {
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
            if (tag === "BUTTON") {
                that.replaceWith(function() {
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

    var selectNo = function() {
        $("select").on("change", function() {
            var
                section = $(this).parents(".section"),
                select = section.find("select option:selected"),
                selectYes = section.find(".select-yes");

            select.each(function() {
                if ($(this).attr('class') === "yes") {
                    selectYes.removeAttr('disabled');
                    selectYes.removeAttr('name');
                    selectYes.css({
                        "border": "1px solid #ccc",
                        "background": "none"
                    });
                } else if ($(this).attr('class') === "no") {
                    selectYes.attr('disabled', 'disabled');
                    selectYes.css({
                        "border": "0px solid #ccc",
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

/*For diagramm lines*/
    var staffFunc = function() {
        var staff = $(".staff"),
            li = staff.children("li"),
            i = 0,
            colors, statusColor,
            elem, count, rand = 0,
            result,
            countArray = [],
            colorLine = {
                blue: "739ed0",
                purple: "554396",
                darkBlue: "547ca9",
                lightGreen: "5fa997",
                green: "75b552",
                darkGreen: "88b44e",
                lightYellow: "bec443",
                yellow: "dcbd37",
                orange: "de8c2e",
                darkOrange: "d15032",
                red: "c73232",
                lightPink: "ce3a69",
                pink: "cb4193",
                darkPink: "934796"
            };

        function objectsColor() {

            li.each(function(i, elem) {
                count = parseInt($(elem).text());
                statusColor = $(this).parents(".status-color");
                countArray.push(count);
            });

            for (key in colorLine) {
                if( Math.random() < 1/++rand){
                    result = key;
                }
                colorBg = colorLine[result];
                colors = statusColor.find(".colors ul");
                colors.append(" <li style='background: #" + colorBg + "; width:" + countArray[i] + "%;'></li>");
                i++;
            }
        }

        objectsColor();

    };

    staffFunc();
/*End diagramm lines*/

});
