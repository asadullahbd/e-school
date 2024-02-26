const menu = document.getElementById("menu-icon");
const close = document.getElementById("close");
const ul = document.querySelector("header nav ul");

menu.addEventListener("click",()=>{
    ul.style.left = "0";
});

close.addEventListener("click",()=>{
    ul.style.left = "-100%";
})