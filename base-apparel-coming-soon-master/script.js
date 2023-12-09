(function () {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const error = document.querySelector("#error-text");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEmail()) {
      error.innerHTML = "";
      input.classList.remove("errorImg");
      alert("Your form has been submitted successfully"); 
      input.value = ""; 
    } else {
      error.innerHTML = "Please provide a valid email";
      input.classList.add("errorImg");  
      input.classList.add("active");
    }
  });

  function validateEmail() {
    const email = input.value.trim(); 
    if (email === "") {
      // Check if the input is empty
      return false;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
})();
