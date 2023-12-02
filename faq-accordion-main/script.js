const accordionH = document.querySelectorAll('.accordion-header h2');
const accordionBody = document.querySelectorAll('.accordion-body');
const plusImg = document.querySelectorAll(".accordion-header img");

accordionH.forEach((item, index) => {
    item.addEventListener('click', () => {
        plusImg[index].classList.toggle('rotate');
        item.nextElementSibling.classList.toggle('active');
    })
}); 