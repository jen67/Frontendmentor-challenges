(function () {
  const hoverTexts = document.querySelectorAll(".card-body-item h2");
  const rotateImgs = document.querySelectorAll(".card-body-item img");
  const hiddenTexts = document.querySelectorAll(".card-body-item p");

  hoverTexts.forEach((text, index) => {
    text.addEventListener("click", () => {
      rotateImgs[index].classList.toggle("rotated");
      hiddenTexts[index].classList.toggle("visible");
      hoverTexts[index].classList.toggle("clicked");
    });
  });
})();
 