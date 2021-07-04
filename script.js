function prodDropdown() {
    var x = document.getElementById('prod').classList.toggle('show');
};

function comDropdown() {
    var x = document.getElementById('com').classList.toggle('show');
};

function conDropdown() {
    var x = document.getElementById('con').classList.toggle('show');
};


function menu() {
    let hamburger = document.querySelector(".hamburg");
    let attribute = hamburger.getAttribute("src");
    let navigationPanel = document.querySelector(".nav");

        if(attribute == "images/icon-hamburger.svg"){
            hamburger.setAttribute("src","images/icon-close.svg")
            navigationPanel.style.display = "grid"
        }else{
            hamburger.setAttribute("src", "images/icon-hamburger.svg")
            navigationPanel.style.display = "none";
        };
};
