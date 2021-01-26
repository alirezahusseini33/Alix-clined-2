const navMenu = document.querySelector(".nav-menu");
const humbergerMenu = document.querySelector(".humberger-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLists = document.querySelectorAll("li");
const nav = document.querySelector("nav");
const humbergerLine = document.querySelectorAll(".lines");
// event letseners
humbergerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    humbergerMenu.classList.toggle("animate");
});

// closing mobile-nav when clicking the links
navLists.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.add("close");
        humbergerMenu.classList.toggle("animate");
        setTimeout(() => {
            navMenu.classList.remove("close");
            navMenu.classList.remove("open");
        }, 100);
    });
});

// navbar background color
window.onscroll = function() {
    let top = window.scrollY;
    if (top >= 5) {
        nav.classList.add("nav-bg");
        // humbergerLine.forEach((line) => {
        //     line.classList.add("line-light");
        // });
    } else {
        nav.classList.remove("nav-bg");
        // humbergerLine.forEach((line) => {
        //     line.classList.remove("line-light");
        // });
    }
};

// mouse hover effect on portfolio section
const leftSide = document.querySelector(".design");
const rightSide = document.querySelector(".frond-end");

leftSide.addEventListener("mouseover", () => {
    rightSide.style.zIndex = "-1";
    setTimeout((e) => {
        rightSide.style.zIndex = "1";
    }, 3000);
});