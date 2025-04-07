// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navBar.classList.toggle("active");
};

// SCROLL SECTION ACTIVE LINK
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
    }
  });

  // STICKY NAVBAR
  let Header = document.querySelector(".header");
  Header.classList.toggle("sticky", window.scrollY > 100);
};

// Dark Mode Toggle
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

// REMOVE TOGGLE ICON & NAVBAR ON LINK CLICK
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("fa-xmark");
    navBar.classList.remove("active");
  });
});

// SCROLL REVEAL
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .service-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img , span", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content , .info", {
  origin: "right",
});

// TYPED
document.addEventListener("DOMContentLoaded", () => {
  new Typed(".multiple-text", {
    strings: ["Flutter Developer", "ML Developer", "Designer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });
});
