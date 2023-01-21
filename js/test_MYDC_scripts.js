$(document).ready(function () {
    $(window).scroll(function () {
        if (window.innerWidth > 853) {
            if ($(window).scrollTop() > 450) {
                $('#top_text_container').show()
                $('#container_top').show()
            }
            else {
                $('#top_text_container').hide()
                $('#container_top').hide()
            }
        }
    });
})

$(document).ready(function () {
    $(window).scroll(function () {
        if (window.innerWidth > 853) {
            if ($(window).scrollTop() > 850) {
                $('#middle_text_container').show()
                $('#container_middle_object').show()
            }
            else {
                $('#middle_text_container').hide()
                $('#container_middle_object').hide()
            }
        }
    });
})

$(document).ready(function () {
    $(window).scroll(function () {
        if (window.innerWidth > 853) {
            if ($(window).scrollTop() > 1250) {
                $('#bottom_text_container').show()
                $('#container_bottom_object').show()
            }
            else {
                $('#bottom_text_container').hide()
                $('#container_bottom_object').hide()
            }
        }
    });
})
