const form = document.querySelector("form");
const error = document.querySelector("#error-text"); 
const input = document.querySelector("#input");
const modal = document.getElementById("thankYouModal");
const closeModalBtn = modal.querySelector(".close");

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

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}

closeModalBtn.addEventListener("click", hideModal); 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "") {
        showError("Whoops! It looks like you forgot to add your email");
    } else if (!validateEmail(input.value)) {
        showError("Please provide a valid email");
    } else {
        clearError();
        showModal();
    }
});