var link = document.querySelector(".button-footer");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
});

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

