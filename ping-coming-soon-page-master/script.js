const form = document.querySelector("form");
const email = document.querySelector("#email");
const error = document.querySelector(".error-text");

form.addEventListener(submit, event){
    event.preventDefault();
}