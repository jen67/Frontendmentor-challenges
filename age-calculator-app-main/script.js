const button = document.querySelector(".btn");
const input = document.querySelectorAll("input");
const birthDay = document.querySelector("#day");
const birthMonth = document.querySelector("#month");
const birthYear = document.querySelector("#year");
const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");
const erroTextYear = document.querySelector(".error-text-year");
const erroTextMonth = document.querySelector(".error-text-month");
const erroTextDay = document.querySelector(".error-text-day");

function checkAge() {
    const day = parseInt(birthDay.value, 10);
    const month = parseInt(birthMonth.value, 10);
    const year = parseInt(birthYear.value, 10);

    const currentDate = new Date()
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > currentDate) {
        erroTextYear.innerContent = "Must be in the past";
        erroTextMonth.innerContent = "Must be a valid month";
        erroTextDay.innerContent = "Must be a valid day";
    }
    
};

button.addEventListener("click", checkAge);


