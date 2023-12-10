const form = document.querySelector("form");
const email = document.querySelector("#email");
const error = document.querySelector("#error-text"); 
const input = document.querySelector("input");

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    if (input.value === "" || input.value !== RegExp) {
        error.innerHTML = "Please provide a valid email"; 
     }

});
    
