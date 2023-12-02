(function () {
  "use strict";
  const faqAccordion = document.querySelectorAll(".accordion-header h2");
  const faqAccordionIcon = document.querySelectorAll(".accordion-header img");
  const faqAccordionContent = document.querySelectorAll(".accordion-body");

  faqAccordion.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Close all accordions
      faqAccordionContent.forEach((content, contentIndex) => {
        if (contentIndex !== index) {
          content.classList.remove("collapsing");
          faqAccordionIcon[contentIndex].classList.remove("collapsing-img");
        }
      });

      // Toggle the clicked accordion
      faqAccordionContent[index].classList.toggle("collapsing");
      faqAccordionIcon[index].classList.toggle("collapsing-img");
    });
  });
})();
