$(document).ready(function () {

    $('#wrapper .tabs').click(function () {
        if ($(this).attr('class') != $('#wrapper').attr('class')) {
            $('#wrapper').attr('class', $(this).attr('class'));
        }
        return false;
    });
});