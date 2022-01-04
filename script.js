function tog(x){
    var menu = document.getElementById("menu");
    var body = document.getElementById("body");
    var home = document.getElementById("page1");
    var sub = document.getElementById("sx");
    var pag = document.getElementById("page1");
    x.classList.toggle("change");
    if(body.style.overflow === "hidden"){
        menu.style.opacity = "0";
        body.style.overflow = "";
        home.style.transform = "translateX(0)";
        sub.style.display = "block";
        pag.style.opacity = "100%";
    }else{
        menu.style.opacity = "100%";
        body.style.overflow = "hidden";
        home.style.transform = "translateX(-30%)";
        sub.style.display = "none";
        pag.style.opacity = "70%";
    }
}

$("#schermata_caricamento").fadeOut(100);
