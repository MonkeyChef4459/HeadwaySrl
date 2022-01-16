function tog(x){
    var menu = document.getElementById("menu");
    var body = document.getElementById("body");
    var home = document.getElementById("page1");
    var sub = document.getElementById("sx");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");
    var page5 = document.getElementById("page5");
    var schermo = window.screen.width;
    x.classList.toggle("change");
    if(body.style.overflow === "hidden" && schermo>1025){
        menu.style.opacity = "0";
        body.style.overflow = "";
        home.style.transform = "translateX(0)";
        sub.style.display = "block";
        home.style.opacity = "100%";
    }else if(body.style.overflow != "hidden" && schermo>1025){
        menu.style.opacity = "100%";
        menu.style.display = "block";
        body.style.overflow = "hidden";
        home.style.transform = "translateX(-30%)";
        sub.style.display = "none";
        home.style.opacity = "70%";
    }else if(body.style.overflow != "hidden" && schermo<1025){
        home.style.transform = "translateX(-100%)";
        menu.style.opacity = "100%";
        menu.style.display = "block";
        body.style.overflow = "hidden";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
    }else if(body.style.overflow === "hidden" && schermo<1025){
        home.style.transform = "translateX(0)";
        menu.style.opacity = "0";
        body.style.overflow = "";
        page2.style.display = "block";
        page3.style.display = "block";
        page4.style.display = "block";
        page5.style.display = "block";
    }
}




