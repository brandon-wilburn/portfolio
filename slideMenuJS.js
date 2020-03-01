let ham = document.getElementById("hamburger_icon");
var menu = document.getElementsByClassName("slide_menu")[0];
ham.addEventListener("click", function(){
    menu.style.display = "flex";
});

var closemenu = document.getElementById("close_slide_menu");
closemenu.addEventListener("click", function() {
    menu.style.display = "none";
});