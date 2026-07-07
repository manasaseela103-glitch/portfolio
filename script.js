// ===============================
// Typing Effect
// ===============================

const text = [
    "B.Tech CSE Student",
    "Python Developer",
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentText = text[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    "section, .edu-card, .skill-card, .certificate-card, .achievement-card, .soft-card"
);

revealElements.forEach(el => {
    el.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }

    });

}

revealOnScroll();


// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} S. Manasa | All Rights Reserved`;
}
