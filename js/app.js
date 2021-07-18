const headerContainer = document.querySelector("#header");

const handleScroll = (e) => {
  e.preventDefault();
  headerContainer.classList.toggle("sticky", window.scrollY > 0);
};
window.addEventListener("scroll", handleScroll);
