const headerContainer = document.querySelector("#header");
const btnToggle = document.querySelector("#btnToggle");
const navbarMenu = document.querySelector("#nav");
const menuItems = document.querySelectorAll(".navbar a");
const scrollBtn = document.querySelector("#scrollBtn");

const handelScroll = (e) => {
  e.preventDefault();
  headerContainer.classList.toggle("sticky", window.scrollY > 440);
  headerContainer.classList.toggle("bevhor");
};
window.addEventListener("scroll", handelScroll);

// onToggle
const handelToggle = (e) => {
  e.preventDefault();
  btnToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
};
btnToggle.addEventListener("click", handelToggle);

// removeActiveClass
const removeActiveClass = (e) => {
  //e.preventDefault();
  btnToggle.classList.remove("active");
  navbarMenu.classList.remove("active");
};

menuItems.forEach((item) => {
  item.addEventListener("click", removeActiveClass);
});
const handelToUpScroll = () => {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
};

window.addEventListener("scroll", handelToUpScroll);

const scrollUp = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
scrollBtn.addEventListener("click", scrollUp);

// The Reveal website for elements on scroll

const revealWebSiteElements = () => {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 50;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.toggle("active");
    }
  }
};
window.addEventListener("scroll", revealWebSiteElements);
