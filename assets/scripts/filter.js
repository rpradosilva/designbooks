function loadFilter() {
  const loadContent = document.querySelectorAll(".aside__menu-list a");
  loadContent[0].click();
}
loadFilter();

function expandFilter() {
  const navList = document.querySelector(".aside__menu-list");
  navList.classList.toggle("open");
}
expandFilter();
