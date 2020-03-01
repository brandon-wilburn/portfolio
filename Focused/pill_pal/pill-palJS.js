var woodText = document.getElementById("texture_wood");
var metalText = document.getElementById("texture_metal");
var siliconeText = document.getElementById("silicone");

var wood = document.getElementsByClassName("brushed-wood")[0];
wood.addEventListener("click", function(){
    woodText.classList.add("active");
    metalText.classList.remove("active");
    siliconeText.classList.remove("active");
}, false);

var metal = document.getElementsByClassName("brushed-metal")[0];
metal.addEventListener("click", function(){
    woodText.classList.remove("active");
    metalText.classList.add("active");
    siliconeText.classList.remove("active");
}, false);

var silicone = document.getElementsByClassName("silicone")[0];
silicone.addEventListener("click", function(){
    woodText.classList.remove("active");
    metalText.classList.remove("active");
    siliconeText.classList.add("active");
}, false);