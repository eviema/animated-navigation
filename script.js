const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function animateNav(_from, _to) {
  overlay.classList.replace(`overlay-slide-${_from}`, `overlay-slide-${_to}`);
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${_from}-${i + 1}`, `slide-${_to}-${i + 1}`);
  });
}

function toggleNav() {
  menuBars.classList.toggle("change"); // Open/close menu bars
  overlay.classList.toggle("overlay-active"); // Show/hide nav
  if (overlay.classList.contains("overlay-active")) {
    animateNav("out", "in"); // Animate in
  } else {
    animateNav("in", "out"); // Animate out
  }
}

menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
