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
            $(".sorting").hide();
            $(this).find(".sorting").show();
        });

        $(".sort-click").mouseenter(function() {
            $(this).find(".sorting").show();
        });

        $(".sort-click").mouseleave(function() {
            $(".sorting").hide();
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

    // Searching

    var search = function() {
        $(".search").keyup(function() {
            var word = $(this).val().toLowerCase(),
                res, searchIndex,
                aText = $(this).parents(".tree-search").find(".tree-list li a");

            aText.each(function(i, elem) {
                res = $(this).html().toLowerCase();
                searchIndex = res.indexOf(word);
                if (searchIndex === -1) {
                    $(this).parent("li").hide();
                } else {
                    $(this).parent("li").show();
                }
            });

        });
    };

    search();

    // End Searching

});
