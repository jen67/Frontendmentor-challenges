const button = document.querySelector(".btn");
const birthDay = document.querySelector("#day");
const birthMonth = document.querySelector("#month");
const birthYear = document.querySelector("#year");
const years = document.querySelector(".years span");
const months = document.querySelector(".months span");
const days = document.querySelector(".days span");
const erroTextYear = document.querySelector(".error-text-year");
const erroTextMonth = document.querySelector(".error-text-month");
const erroTextDay = document.querySelector(".error-text-day");
const labels = document.querySelectorAll("label[for]");
const errorBorders = document.querySelectorAll("input");

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

    errorBorders.forEach((error) => {
      error.style.borderColor = "var(--Light-red)";
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

    errorBorders.forEach((error) => {
      error.style.borderColor = "var(--Light-red)";
    });
  }

  const ageInMilliseconds = currentDate - birthDate;
  const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  const ageInMonths = Math.floor(ageInDays / 30.44); // Average month length
  const ageInYears = Math.floor(ageInDays / 365);

  // Display the calculated age
  years.textContent = ` ${ageInYears}`;
  months.textContent = ` ${ageInMonths}`;
  days.textContent = ` ${ageInDays}`;
}

button.addEventListener("click", checkAge);
