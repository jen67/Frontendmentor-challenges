// get the circle toggles and pages
const steps = [
  {
    button: document.querySelector(".step1 .circle"),
    page: document.querySelector("form"),
  },
  {
    button: document.querySelector(".step2 .circle"),
    page: document.querySelector(".select-plan"),
  },
  {
    button: document.querySelector(".step3 .circle"),
    page: document.querySelector(".add-ons"),
  },
  {
    button: document.querySelector(".step4 .circle"),
    page: document.querySelector(".finishing-up"),
  },
];

// get the mobile buttons
let currentStep = 0;

// get the mobile buttons
const transpBtn = document.querySelector(".transp-btn");
const nextBtn = document.querySelector(".colored-btn");
const toggle = document.querySelector(".toggle-container");
const toggleBall = document.querySelector(".toggle-container span");
const thankyou = document.querySelector(".thank-you");
const activeBtn = document.querySelector(".activepg");

const year = document.querySelector(".year");
const month = document.querySelector(".month");

//updating the year and month on toggle
const Bonus = document.querySelectorAll(".yupdate");
const updateA = document.querySelector('.updateA');
const updateB = document.querySelector('.updateB');
const updateC = document.querySelector('.updateC');

activeBtn.classList.add("active");
month.classList.add("active-month");

function updateYear() {
     if (toggleBall.classList.contains("toggle")) {
       updateA.textContent = "$90/yr";
      updateB.textContent = "$120/yr";
      updateC.textContent = "$150/yr";
     } else {
       updateA.textContent = "$9/mo";
       updateB.textContent = "$12/mo";
       updateC.textContent = "$15/mo";
     }
}

function updateBonus() {
   
  if (toggleBall.classList.contains("toggle")) {
    Bonus.forEach((bonusElement) => {
      bonusElement.textContent = "2 Months Free";
    });
  } else {
    Bonus.forEach((bonusElement) => {
      bonusElement.textContent = "";
    });
  }
}

toggle.addEventListener("click", () => {
    toggleBall.classList.toggle("toggle");
    updateBonus();
    updateYear();
  if (toggleBall.classList.contains("toggle")) {
    year.classList.add("active-year");

    month.classList.remove("active-month");
  } else {
    month.classList.add("active-month");
    year.classList.remove("active-year");
  }
});

function showthanks() {
  hideAllPages();
  transpBtn.style.display = "none";
  nextBtn.style.display = "none";
  thankyou.style.display = "block";
}

function hideAllPages() {
  steps.forEach((step) => {
    step.page.style.display = "none";
    thankyou.style.display = "none";
  });
}

function showPage(page, button) {
  hideAllPages();
  page.style.display = "block";
  steps.forEach((step) => {
    step.button.classList.remove("active");
  });
  button.classList.add("active");
  transpBtn.textContent = currentStep === 0 ? "" : "Go Back";
  currentStep === 3
    ? (nextBtn.textContent = "Confirm")
    : (nextBtn.textContent = "Next Step");

  if (currentStep < steps.length) {
    transpBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
}

steps.forEach((step, index) => {
  step.button.addEventListener("click", () => {
    currentStep = index;
    showPage(step.page, step.button);
  });
});

transpBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    hideAllPages();
    showPage(steps[currentStep].page, steps[currentStep].button);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    hideAllPages();
    showPage(steps[currentStep].page, steps[currentStep].button);
  } else if (currentStep === steps.length - 1) {
    showthanks();
  }
});
