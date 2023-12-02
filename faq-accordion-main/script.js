let faqAccordion = document.querySelectorAll(".accordion-header h2");

faqAccordion.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        faqAccordion.style.backgroundColor = "#f5f695";
    });

});
