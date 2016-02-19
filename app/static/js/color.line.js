 $(document).ready(function() {

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
                // if( Math.random() < 1/++rand){
                //     result = key;
                // }
                colorBg = colorLine[key];
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