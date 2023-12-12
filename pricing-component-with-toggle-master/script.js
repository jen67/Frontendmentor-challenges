const toggleButton = document.querySelector(".switch-toggle");
const price = document.querySelectorAll(".price");


toggleButton.addEventListener("change", () => { 
    if (toggleButton.checked) {
        price[0].innerHTML = "$199.99";
        price[1].innerHTML = "$249.99";
        price[2].innerHTML = "$399.99";
    } else {
        price[0].innerHTML = "$19.99";
        price[1].innerHTML = "$24.99";
        price[2].innerHTML = "$39.99";
    }
});