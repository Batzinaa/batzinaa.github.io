let blurEffect = document.getElementById("blurEffect");
let sidebar = document.getElementById("sidebar");
let menuBurger = document.getElementById("menuBurger");
let logo = document.getElementById("logo");

menuBurger.onclick = ()=>{
    blurEffect.style.display = "block"
    sidebar.style.right = "0"
    sidebar.style.display = "block"
};

blurEffect.onclick = ()=>{
    blurEffect.style.display = "none"
    sidebar.style.right = "-100%"
};


function closeSidebar(){
    blurEffect.style.display = "none"
    sidebar.style.right = "-100%"
}