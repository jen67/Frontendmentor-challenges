const openMenu = document.querySelector(".menu-open-icon");  
const closeMenu = document.querySelector(".menu-close-icon");
const navBar = document.querySelector("nav");
// const dropDownContainer = document.querySelectorAll(".dropdown-container");
// const dropDown = document.querySelectorAll(".dropdown");

// dropDownContainer.forEach((item) => {
//     item.addEventListener("mouseover", () => {
//         item.style.display = "block";  
//      });
// });

openMenu.addEventListener("click", () => { 
    navBar.style.display = "block"; 
    closeMenu.style.display = "block";
    openMenu.style.display = "none"; 
    
});

closeMenu.addEventListener("click", () => {
    navBar.style.display = "none";
    openMenu.style.display = "block"; 
    closeMenu.style.display = "none";  
   
});