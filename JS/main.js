// Handle display and hidden for header on scroll
let lastScroll = 0;
const navbar = document.querySelector("nav");
const aboutSection = document.getElementById("About");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;
  if (currentScroll < aboutSection.offsetTop) {
    // remove scrolled when reach the top of body
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }
  lastScroll = currentScroll;
});