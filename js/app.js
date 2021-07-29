const headerContainer = document.querySelector("#header");
const btnToggle = document.querySelector("#btnToggle");
const navbarMenu = document.querySelector("#nav");
const menuItems = document.querySelectorAll(".navbar a");
const scrollBtn = document.querySelector("#scrollBtn");
const workContent = document.querySelector("#workContent");

function fetchProjects() {
  fetch("https://portofolio-cms-api.herokuapp.com/api/projects")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // B.2) On creer un developpeur en passant en parametre les donnees Json
      getJsonDatas(data);
    });
}
function getJsonDatas(data) {
  return data;
}

const handelScroll = (e) => {
  e.preventDefault();
  headerContainer.classList.toggle("stick", window.scrollY > 40);
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

// renderElements
const tableElements = [];

const createElements = () => {
  const cardContainer = document.createElement("div");
  const cardImage = document.createElement("div");
  const imageContent = document.createElement("img");

  cardImage.classList.add("card__image");
  cardContainer.classList.add("card");

  return [].push({
    cardContainer,
    cardImage,
    imageContent,
  });
};
const renderElements = (data = []) => {
  createElements.forEach((item) => {
    item.imageContent.src = "toto";
    item.cardImage.appendChild(item.imageContent);
    item.cardContainer.appendChild(item.cardImage);
    workContent.appendChild(item.cardContainer);
  });
};
renderElements();
fetchProjects();
