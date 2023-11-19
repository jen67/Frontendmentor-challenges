(function () {
  ("use strict");

  const openMenu = document.querySelector(".menu-open-icon");
  const closeMenu = document.querySelector(".menu-close-icon");
  const navBar = document.querySelector("nav");
  const dropDownContainers = document.querySelectorAll("header nav ul li a");
  const dropDowns = document.querySelectorAll("header nav ul li ul");
  const dropdownArrows = document.querySelectorAll(".changeImg"); 
  

 

//   // Handles the dropdowns
// dropDownContainers.forEach((dropDownContainer, index) => {
//   // Function to close all dropdowns and open the selected one
//   const toggleDropdown = () => {
//     dropDowns.forEach((dropdown, i) => {
//       if (i !== index) { 
//         dropdown.classList.add("drop"); 
//         dropdownArrows[i].src = "./images/icon-arrow-down.svg";
//       }
//     });

//     dropDowns[index].classList.toggle("drop");

//     if (dropDowns[index].classList.contains("drop")) {
//       dropdownArrows[index].src = "./images/icon-arrow-down.svg";
//     } else {
//       dropdownArrows[index].src = "./images/icon-arrow-up.svg";
//     }
//   };

//   // Toggle on mouse enter
//   dropDownContainer.addEventListener("mouseenter", toggleDropdown);

//   // Toggle on focus
//   dropDownContainer.addEventListener("focus", toggleDropdown);

//   // Toggle on mouse leave
//   dropDownContainer.addEventListener("mouseleave", () => {
//     if (!dropDownContainer.matches(":focus")) {
//       toggleDropdown();  
//     }
//   });

//   // Toggle on blur
//   dropDownContainer.addEventListener("blur", () => {
//     if (!dropDownContainer.matches(":hover")) {
//       toggleDropdown();
//     }
//   });

    
//     // dropDownContainer.addEventListener("mouseenter", () => {
//     //   // Toggle the 'drop' class on mouse enter
//     //   dropDowns[index].classList.toggle("drop");

//     //   // Change the dropdown arrow image on mouse enter
//     //   if (dropDowns[index].classList.contains("drop")) {
//     //     dropdownArrows[index].src = "./images/icon-arrow-down.svg";
//     //   } else {
//     //     dropdownArrows[index].src = "./images/icon-arrow-up.svg";
//     //   }
//     // });

//     // dropDownContainer.addEventListener("mouseleave", () => {
//     //   // Toggle the 'drop' class on mouse leave
//     //   dropDowns[index].classList.toggle("drop");

//     //   // Change the dropdown arrow image back to the original on mouse leave
//     //   if (dropDowns[index].classList.contains("drop")) {
//     //     dropdownArrows[index].src = "./images/icon-arrow-down.svg";
//     //   } else {
//     //     dropdownArrows[index].src = "./images/icon-arrow-up.svg";
//     //   }
//     });


  // Handles the handburger menus and the navbar
  openMenu.addEventListener("click", () => {
    navBar.style.display = "block";
  });

  closeMenu.addEventListener("click", () => {
    navBar.style.display = "none";
  });
})(); 
