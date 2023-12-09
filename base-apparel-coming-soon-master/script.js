(function () {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const error = document.querySelector("#error-text");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEmail()) {
      error.innerHTML = "";
      input.classList.remove("errorImg");
    } else {
      error.innerHTML = "Please provide a valid email";
      input.classList.add("errorImg");
    }
  });

  function validateEmail() {
    const email = input.value.trim(); // Trim to remove leading and trailing spaces
    if (email === "") {
      // Check if the input is empty
      return false;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
})();
