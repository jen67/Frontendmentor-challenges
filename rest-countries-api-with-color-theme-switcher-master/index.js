const darktheme = document.getElementById("dark-toggle");
const navbarImg = document.querySelector("header nav img");

darktheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        navbarImg.src = "./images/moon.svg";
    } else {
        navbarImg.src = "./images/moon-outline.svg";
    }
    
  
});
