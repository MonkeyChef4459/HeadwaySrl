function tog(x){
    var menu = document.getElementById("menu");
    var body = document.getElementById("body");
    var home = document.getElementById("page1");
    var sub = document.getElementById("sx");
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
        body.style.overflow = "hidden";
        home.style.transform = "translateX(-30%)";
        sub.style.display = "none";
        home.style.opacity = "70%";
    }else if(body.style.overflow != "hidden" && schermo<1025){
        home.style.transform = "translateX(-100%)";
        menu.style.opacity = "100%";
        body.style.overflow = "hidden";
    }else if(body.style.overflow === "hidden" && schermo<1025){
        home.style.transform = "translateX(0)";
        menu.style.opacity = "0";
        body.style.overflow = "";
    }
}


