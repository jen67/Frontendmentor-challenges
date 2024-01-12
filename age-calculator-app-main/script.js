const button = document.querySelector(".btn");
const birthDay = document.querySelector("#day");
const birthMonth = document.querySelector("#month");
const birthYear = document.querySelector("#year");
const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");
const erroTextYear = document.querySelector(".error-text-year");
const erroTextMonth = document.querySelector(".error-text-month");
const erroTextDay = document.querySelector(".error-text-day");
const labels = document.querySelectorAll("label[for]");

function checkAge() {
  const day = parseInt(birthDay.value, 10);
  const month = parseInt(birthMonth.value, 10);
  const year = parseInt(birthYear.value, 10);

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  if (isNaN(birthDate.getTime())) {
    // Check if the entered date is valid
    erroTextDay.textContent = "Invalid day.";
    erroTextMonth.textContent = "Invalid month.";
    erroTextYear.textContent = "Invalid year.";

    labels.forEach((label) => {
      label.style.color = "var(--Light-red)";
    });
    return;
  }

  if (birthDate > currentDate) {
    erroTextDay.textContent = "Must be a valid day";
    erroTextMonth.textContent = "Must be a valid month";
    erroTextYear.textContent = "Must be in the past";
    labels.forEach((label) => {
      label.style.color = "var(--Light-red)";
    });
  }
}

button.addEventListener("click", checkAge);
