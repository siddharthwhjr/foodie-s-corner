username = localStorage.getItem("username");
item = "";
function pizza_section(){
    item = "pizza";
    localStorage.setItem("pizza", item);
    window.location = "pizza_section.html";
}

function burger_section(){
    item = "burger";
    localStorage.setItem("burger", item);
    window.location = "burger_section.html";
}

function sandwich_section(){
    item = "sandwich";
    localStorage.setItem("sandwich", item);
    window.location = "sandwich_section.html";
}

