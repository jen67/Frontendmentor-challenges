// get the circle toggles
const firstButton = document.querySelector(".step1 .circle");
const secondButton = document.querySelector(".step2 .circle");
const thirdButton = document.querySelector(".step3 .circle");
const fourthButton = document.querySelector(".step4 .circle");

// get the pages
const personalInfo = document.querySelector("form");
const selectPlan = document.querySelector(".select-plan");
const addOns = document.querySelector(".add-ons");
const finishingUp = document.querySelector(".finishing-up");

// get the mobile buttons
const transpBtn = document.querySelector(".transp-btn");
const coloredBtn = document.querySelector(".colored-btn");

const toggle = document.querySelector(".toggle-container span");





toggle.addEventListener('click', () => {
    toggle.classList.toggle('toggle')
});

firstButton.addEventListener("click", () => {
  personalInfo.style.display = "block";
  selectPlan.style.display = "none";
  addOns.style.display = "none";
  finishingUp.style.display = "none";
  transpBtn.textContent = " ";
});

secondButton.addEventListener("click", () => {
  selectPlan.style.display = "block";
  personalInfo.style.display = "none";
  addOns.style.display = "none";
  finishingUp.style.display = "none";
  transpBtn.textContent = "Go Back";
});

thirdButton.addEventListener("click", () => {
  personalInfo.style.display = "none";
  selectPlan.style.display = "none";
  finishingUp.style.display = "none";
  addOns.style.display = "block";
});

fourthButton.addEventListener("click", () => {
  personalInfo.style.display = "none";
  selectPlan.style.display = "none";
  addOns.style.display = "none";
  finishingUp.style.display = "block";
});






