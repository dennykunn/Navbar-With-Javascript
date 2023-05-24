const btn = document.querySelector("#btn");
const navItems = document.querySelector(".nav-items");
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");


btn.onclick = () => {
    navItems.classList.toggle("open");
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
}