// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when a link is clicked

const navigationLinks = document.querySelectorAll("#nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const sections = document.querySelectorAll("section");

sections.forEach(function (section) {

    section.classList.add("reveal");

});


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {

    observer.observe(section);

});


// =========================================
// CURRENT YEAR
// =========================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}