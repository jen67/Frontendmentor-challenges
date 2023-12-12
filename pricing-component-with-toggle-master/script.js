document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector("#toggle-switch");
  const prices = document.querySelectorAll(".price");

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      prices.forEach((price) => (price.textContent = "New price when checked"));
    } else {
      prices.forEach(
        (price) => (price.textContent = "Original price when not checked")
      );
    }
  });
});
