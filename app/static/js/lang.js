$(document).ready(function() {

    $('a').on('click', function(e) {
        // e.preventDefault();

        var target = $(this).attr("href"),
            form = $("#form"),
            img = form.find("img"), 
            kazLogoReplace, 
            h1 = form.find("h1"),
            button = form.find("button"),
            answer_pass = form.find(".answer-pass"),
            remember = form.find("#remember-label"),
            top = $(".top"), bottom = $(".bottom"), flag;

        if (target === "#kaz") {
            kazLogoReplace = img.attr("src").replace("rus-img", "kaz-img");
            img.attr("src", kazLogoReplace);
            h1.html("Жүйеге кіру үшін өз ақпараттыңызды енгізіңіз:");
            button.html("Кіру");
            answer_pass.html("Парольді ұмыттыңыз ба?");
            remember.html("Мені есте сақтау");

            kazFlag = top.find("img").attr("src");
            kazReplace = kazFlag.replace("rus", "kz");
            top.find("img").attr("src", kazReplace);

            top.find("a").attr("href", "#kaz");
            bottom.find("a").attr("href", "#rus");

            console.log(kazReplace)

            rusFlag = bottom.find("img").attr("src");
            rusReplace = rusFlag.replace("kz", "rus");
            bottom.find("img").attr("src", rusReplace);
            
        } else if (target === "#rus") {
            kazLogoReplace = img.attr("src").replace("kaz-img", "rus-img");
            img.attr("src", kazLogoReplace);
            h1.html("Введите данные для входа в систему:");
            button.html("Войти");
            answer_pass.html("Забыли пароль?");
            remember.html("Запомнить меня");

            kazFlag = top.find("img").attr("src");
            kazReplace = kazFlag.replace("kz", "rus");
            top.find("img").attr("src", kazReplace);

            top.find("a").attr("href", "#rus");
            bottom.find("a").attr("href", "#kaz");

            rusFlag = bottom.find("img").attr("src");
            rusReplace = rusFlag.replace("rus", "kz");
            bottom.find("img").attr("src", rusReplace);
        }

    });

});
