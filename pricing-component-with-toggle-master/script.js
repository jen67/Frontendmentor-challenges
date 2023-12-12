(function () {
    
  const toggleSwitch = document.querySelector("#toggle-switch");
  const priceElements = document.querySelectorAll(".amount");

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      priceElements[0].innerText = "19.99";
      priceElements[1].innerText = "24.99";
      priceElements[2].innerText = "39.99";
    } else {
      priceElements[0].innerText = "199.99";
      priceElements[1].innerText = "249.99";
      priceElements[2].innerText = "399.99";
    }
  });
});
