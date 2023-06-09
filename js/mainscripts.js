$(document).ready(function(){
    $(window).scroll(function(){
        if (window.innerWidth > 853){
        if($(window).scrollTop()<1){
            $('#hideafterscrolling1').fadeIn(100)
            $('#hideafterscrolling2').fadeIn(100)
            $('#hideafterscrolling3').fadeIn(100)
            $('#hideafterscrolling4').fadeIn(100)
            $('#hideafterscrolling5').fadeIn(100)
            $('#hideafterscrolling6').fadeIn(100)
            $('#hideafterscrolling7').fadeIn(100)
            $('#hideafterscrolling8').fadeIn(100)
            $('#hideafterscrolling9').fadeIn(100)
        }
        else{
            $('#hideafterscrolling1').fadeOut(1)
            $('#hideafterscrolling2').fadeOut(1)
            $('#hideafterscrolling3').fadeOut(1)
            $('#hideafterscrolling4').fadeOut(1)
            $('#hideafterscrolling5').fadeOut(1)
            $('#hideafterscrolling6').fadeOut(1)
            $('#hideafterscrolling7').fadeOut(1)
            $('#hideafterscrolling8').fadeOut(1)
            $('#hideafterscrolling9').fadeOut(1)
        }
    }
    });
})



$(document).ready(function(){
    $(window).scroll(function(){
        if (window.innerWidth > 853){
        if($(window).scrollTop()>1){
            $('#top').fadeIn(100)
        }else{
            $('#top').fadeOut(10)
        }
    }
    });
})



// makes sure the whole site is loaded
jQuery(window).load(function() {
    // will first fade out the loading animation
    jQuery("#status").delay(5000).fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(2000).fadeOut("slow");
})


$(document).ready(function(){
    $(window).scroll(function(){
        if (window.innerWidth > 853){
        if($(window).scrollTop()>500){
            $('#first_caption').fadeOut(700)
        }
    }
    });
})
$(document).ready(function(){
    $(window).scroll(function(){
        if (window.innerWidth > 853){
        if($(window).scrollTop()>850){
            $('#second_caption').fadeOut(700)
        }
    }
    });
})
$(document).ready(function(){
    $(window).scroll(function(){
        if (window.innerWidth > 853){
        if($(window).scrollTop()>1200){
            $('#third_caption').fadeOut(700)
        }
    }
    });
})