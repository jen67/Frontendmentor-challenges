(function () {
  "use strict";

  const openMenu = document.querySelector(".menu-open-icon");
  const closeMenu = document.querySelector(".menu-close-icon");
  const navBar = document.querySelector("nav");
  const dropDownContainers = document.querySelectorAll("header nav ul li a");
  const dropDowns = document.querySelectorAll("header nav ul li ul");
  const dropdownArrows = document.querySelectorAll(".rotate");

  // Handles the dropdowns
  dropDownContainers.forEach((dropDownContainer, index) => {
    dropDownContainer.addEventListener("click", () => {
      dropDowns[index].classList.toggle("drop");

      // handles the dropdown arrows
      if (dropDowns[index].classList.contains("drop")) {
        dropdownArrows[index].src = "/images/icon-arrow-down.svg";
      } else {
        dropdownArrows[index].src = "/images/icon-arrow-up.svg";
      }
    });
  });

  // Handles the handburger menus and the navbar
  openMenu.addEventListener("click", () => {
    navBar.style.display = "block";
  });

  closeMenu.addEventListener("click", () => {
    navBar.style.display = "none";
  });
})(); 
