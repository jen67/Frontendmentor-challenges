(function () {
  ("use strict");

  const openMenu = document.querySelector(".menu-open-icon");
  const closeMenu = document.querySelector(".menu-close-icon");
  const navBar = document.querySelector("nav");

  // Handles the handburger menus and the navbar
  openMenu.addEventListener("click", () => {
    navBar.style.display = "block";
  });

  closeMenu.addEventListener("click", () => {
    navBar.style.display = "none";
  });
})(); 
