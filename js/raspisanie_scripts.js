function showHide1(slide1) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(slide1)) { 
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById(slide1); 
        var second = document.getElementById("slide2");
        var third = document.getElementById("slide3");
        //Если css-свойство display не block, то: 
        if (obj.style.display != "block") { 
            obj.style.display = "block";
            second.style.display = "none";
            third.style.display = "none";
        }
    }
}
function showHide2(slide2) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(slide2)) { 
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById(slide2); 
        var first = document.getElementById("slide1");
        var third = document.getElementById("slide3");
        //Если css-свойство display не block, то: 
        if (obj.style.display != "block") { 
            obj.style.display = "block";
            first.style.display = "none";
            third.style.display = "none";
        }
    }
}
function showHide3(slide3) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(slide3)) { 
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById(slide3); 
        var second = document.getElementById("slide2");
        var first = document.getElementById("slide1");
        //Если css-свойство display не block, то: 
        if (obj.style.display != "block") { 
            obj.style.display = "block";
            first.style.display = "none";
            second.style.display = "none";
        }
    }
}