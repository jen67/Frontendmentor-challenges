const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");
const adviceBtn = document.querySelector("#adviceBtn");
const apiUrl = "https://api.adviceslip.com/advice";


function getAdvice() {

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          console.error("error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        adviceId.textContent = `#${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });

}

adviceBtn.addEventListener("click", getAdvice); 


