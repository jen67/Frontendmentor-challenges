document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector("#toggle-switch");
  const prices = document.querySelectorAll(".amount");

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        prices.forEach((price) => (price.textContent = "message"));
        prices[0].textContent = "19.99";
        prices[1].textContent = "24.99";
        prices[2].textContent = "39.99";
    } else {
      prices.forEach(
        (price) => (price.textContent = "message")
        
        );
        prices[0].textContent = "199.99";
        prices[1].textContent = "249.99";
        prices[2].textContent = "399.99";
    }
  });
});
