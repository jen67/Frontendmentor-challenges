(function () {

"use strict";
  const faqAccordion = document.querySelectorAll(".accordion-header h2");
  const faqAccordionIcon = document.querySelectorAll(".accordion-header img");
    const faqAccordionContent = document.querySelectorAll(".accordion-body");

    faqAccordion.forEach((item, index) => {
      item.addEventListener("click", () => {
        faqAccordionContent[index].classList.toggle("collapsing");
        faqAccordionIcon[index].classList.toggle("collapsing-img");
      });
    });
    
})();

