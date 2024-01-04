(function () {
  "use strict";

  // Get the elements
  const adviceId = document.querySelector("#adviceId");
  const adviceText = document.querySelector("#adviceText");
  const adviceBtn = document.querySelector("#adviceBtn");
  const apiUrl = "https://api.adviceslip.com/advice";

  // Get advice from API
  function getAdvice() {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          console.error("error");
        }
        return response.json();
      })
      .then((data) => {
        adviceId.textContent = `#${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

   getAdvice();
  adviceBtn.addEventListener("click", getAdvice);
})();
