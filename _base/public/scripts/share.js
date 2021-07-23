const modal = document.querySelector(".modal");
let closeModal = document.querySelector(".modal__content-close");

const shareButton = document.querySelector(".aside__sharelink-mobile i");
const shareLink = "http://bit.ly/designlivros";

function copyToClipboard(url) {
  var fakeElement = document.createElement("textarea");
  document.body.appendChild(fakeElement);
  fakeElement.value = url;
  fakeElement.select();
  document.execCommand("copy");
  document.body.removeChild(fakeElement);
  modal.style.display = "flex";
  shareButton.style.display = "none";
}

shareButton.addEventListener("click", function () {
  copyToClipboard(shareLink);
});

closeModal.onclick = function () {
  modal.style.display = "none";
  shareButton.style.display = "flex";
};
