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

  // Reset error messages and styles
  function resetError() {
    erroTextDay.textContent = "";
    erroTextMonth.textContent = "";
    erroTextYear.textContent = "";
    labels.forEach((label) => {
      label.style.color ="var(--Smokey-grey)";
    });
    errorBorders.forEach((error) => {
      error.style.borderColor = "var(--Light-grey)";
    });
  }

  resetError();

  let hasError = false;

  function update() {
    labels.forEach((label) => {
      label.style.color = "var(--Light-red)";
    });
    years.textContent = "--";
    months.textContent = "--";
    days.textContent = "--";
  }

  // Check if the entered date is valid
  if (isNaN(day) || day < 1 || day > 31) {
    erroTextDay.textContent = "Invalid day";
    document.querySelector("label[for='day']").style.color = "var(--Light-red)";
    birthDay.style.borderColor = "var(--Light-red)";
    birthMonth.style.borderColor = "var(--Light-red)";
    birthYear.style.borderColor = "var(--Light-red)";
    hasError = true;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    erroTextMonth.textContent = "Invalid month.";
    document.querySelector("label[for='month']").style.color =
      "var(--Light-red)";
    birthMonth.style.borderColor = "var(--Light-red)";
    birthDay.style.borderColor = "var(--Light-red)";
    birthYear.style.borderColor = "var(--Light-red)";
    hasError = true;
  }

  if (isNaN(year) || year < 1 || year > currentDate.getFullYear()) {
    erroTextYear.textContent = "Invalid year.";
    document.querySelector("label[for='year']").style.color =
      "var(--Light-red)";
    birthYear.style.borderColor = "var(--Light-red)";
    birthDay.style.borderColor = "var(--Light-red)";
    birthMonth.style.borderColor = "var(--Light-red)";
    hasError = true;
  }

  if (hasError) {
    update();
    return;
  }

    // Calculate the age
  if (
    !isNaN(day) &&
    !isNaN(month) &&
    !isNaN(year) &&
    birthDate <= currentDate
  ) {
    let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageInMonths = 0;
    let ageInDays = 0;

    if (currentDate < new Date(currentDate.getFullYear(), month - 1, day)) {
      ageInYears--;
      ageInMonths = currentDate.getMonth() + 1;
      ageInDays = currentDate.getDate();
    } else {
      if (currentDate.getMonth() + 1 === month) {
        ageInMonths = 0;
        ageInDays = currentDate.getDate() - day;
      } else {
        ageInMonths = currentDate.getMonth() + 1 - month;
        if (currentDate.getDate() < day) {
          ageInMonths--;
          ageInDays =
            currentDate.getDate() +
            new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              0
            ).getDate() -
            day;
        } else {
          ageInDays = currentDate.getDate() - day;
        }
      }
    }

    // Display the calculated age
    years.textContent = ` ${ageInYears}`;
    months.textContent = ` ${ageInMonths}`;
    days.textContent = ` ${ageInDays}`;
  }
}
button.addEventListener("click", checkAge);
