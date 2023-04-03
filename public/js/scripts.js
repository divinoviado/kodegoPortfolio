const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

// let menu = document.querySelector("menu");
// let navlist = document.querySelector('.navlist');

// menu.onclick = () => {
//     menu.classList.toggle('bx-menu');
//     navlist.classList.toggle('open');
// };

// window.onscroll = () => {
//     menu.classList.remove('bx-menu');
//     navlist.classList.remove('open');
// }


let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
    }
    else{
        sideNav.style.right = "-250px";
    }
}
