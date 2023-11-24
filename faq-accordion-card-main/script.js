(function () { 
    const hoverTexts = document.querySelectorAll(".card-body-item h2");
    const rotateImgs = document.querySelectorAll(".card-body-item img");
    const hiddenTexts = document.querySelectorAll(".card-body-item p"); 


     hoverTexts.forEach((text, index) => {
       text.addEventListener("click", () => {
         rotateImgs[index].style.transform = "rotate(180deg)";
         hiddenTexts[index].style.display = "block";
       });
     }); 
})(); 