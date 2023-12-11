const form = document.querySelector("form");
const email = document.querySelector("#email");
const error = document.querySelector("#error-text"); 
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (input.value === "") {
        error.innerHTML = "Email cannot be empty";
        input.classList.add("error-border");
        elif (regex.test(input.value) === false) {
            error.innerHTML = "Please provide a valid email";
            input.classList.add("error-border");
        }
  }
});
    
