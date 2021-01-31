const navMenu = document.querySelector(".nav-menu");
const humbergerMenu = document.querySelector(".humberger-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLists = document.querySelectorAll("li");
const nav = document.querySelector("nav");
const humbergerLine = document.querySelectorAll(".lines");
const contactBtn = document.querySelector(".contact-btn-fixed");
const skillBtn = document.querySelector(".what-i-can");
const hiddenSkills = document.querySelectorAll("#hidden-skills");
const hoverSkill = document.querySelector("#hover-skill");
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
// animating fixed contact btn on screen when scrolling
window.onscroll = function() {
    let topTow = window.scrollY;
    if (topTow >= 100) {
        nav.classList.add("nav-bg");
        contactBtn.classList.add("carry");
        skillBtn.classList.add("carry-2");
    } else {
        nav.classList.remove("nav-bg");
        contactBtn.classList.remove("carry");
        skillBtn.classList.remove("carry-2");
    }
};

// reveal skills on hovering
hoverSkill.addEventListener("onmouseover", () => {
    hiddenSkills.style.opacity = "1";
});