const headerContainer = document.querySelector("#header");

const handleScroll = (e) => {
  e.preventDefault();
  headerContainer.classList.toggle("sticky", window.scrollY > 440);
  headerContainer.classList.toggle("bevhor");
};
window.addEventListener("scroll", handleScroll);
