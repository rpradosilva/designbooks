window.onscroll = function () {
  fixedMenu();
};

var dropdown = document.querySelector(".aside__menu-mobile");
var fixed = dropdown.offsetTop;

function fixedMenu() {
  if (window.pageYOffset > fixed) {
    dropdown.classList.add("aside__menu-mobile-fixed");
  } else {
    dropdown.classList.remove("aside__menu-mobile-fixed");
  }
}
