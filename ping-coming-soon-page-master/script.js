const form = document.querySelector("form");
const email = document.querySelector("#email");
const error = document.querySelector("#error-text"); 
const input = document.querySelector("input");

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    if (input.value === "" || input.value !== match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        error.innerHTML = "Please provide a valid email"; 
     }

});
    
