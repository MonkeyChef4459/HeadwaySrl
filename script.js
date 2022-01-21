    var menu = document.getElementById("menu");
    var body = document.getElementById("body");
    var home = document.getElementById("page1");
    var sub = document.getElementById("sx");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");
    var page5 = document.getElementById("page5");
    var schermo = window.screen.width;
    var uno = document.getElementById("on");
    var due = document.getElementById("tw");
    var tre = document.getElementById("tr");
    var quattro = document.getElementById("fo");

function tog(x){
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

function open1(){
    if(uno.style.height != "100%"){
        page2.style.display = "block";
        uno.style.height = "100%";
        uno.style.width = "100%";
        uno.style.margin = "0";
        due.style.display = tre.style.display = quattro.style.display = "none";
        document.getElementById("back").style.display = "block";
        uno.style.cursor = "auto";
    }
}

function open2(){
    if(due.style.height != "100%"){
        page2.style.display = "block";
        due.style.height = "100%";
        due.style.width = "100%";
        due.style.margin = "0";
        uno.style.display = tre.style.display = quattro.style.display = "none";
        document.getElementById("back").style.display = "block";
        due.style.cursor = "auto";
    }
}

function open3(){
    if(tre.style.height != "100%"){
        page2.style.display = "block";
        tre.style.height = "100%";
        tre.style.width = "100%";
        tre.style.margin = "0";
        uno.style.display = due.style.display = quattro.style.display = "none";
        document.getElementById("back").style.display = "block";
        tre.style.cursor = "auto";
    }
}

function open4(){
    if(due.style.height != "100%"){
        page2.style.display = "block";
        quattro.style.height = "100%";
        quattro.style.width = "100%";
        quattro.style.margin = "0";
        uno.style.display = tre.style.display = due.style.display = "none";
        document.getElementById("back").style.display = "block";
        quattro.style.cursor = "auto";
    }
}

function chiudi(){
    document.getElementById("back").style.display = "none";
    page2.style.display = "flex";
    uno.style.display = due.style.display = tre.style.display = quattro.style.display = "block";
    uno.style.height = due.style.height = tre.style.height = quattro.style.height = "78%";
    uno.style.margin = due.style.margin = tre.style.margin = quattro.style.margin = "4% 2% auto 2%";
    uno.style.cursor = due.style.cursor = tre.style.cursor = quattro.style.cursor = "pointer";
}



