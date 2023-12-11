const form = document.querySelector("form");
const error = document.querySelector("#error-text"); 
const input = document.querySelector("#input");

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

function showError(message) {
    error.textContent = message;
    input.classList.add("error-border");
}

function clearError() {
    error.textContent = "";
    input.classList.remove("error-border");
    input.value = ""; 
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "") {
        showError("Email cannot be empty");
    } else if (!validateEmail(input.value)) {
        showError("Please provide a valid email");
    } else {
        clearError();
    }
});