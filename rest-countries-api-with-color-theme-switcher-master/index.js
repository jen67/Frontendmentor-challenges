(function () {
  "use strict";
  // DOM Elements
  const darktheme = document.getElementById("dark-toggle");
  const navbarImg = document.querySelector("header nav img");
  const filterImg = document.querySelector("#filter-chevron");
  const filterchevron = document.querySelector(".filter-search img");
  const filterDropdown = document.querySelector("#filter");
  const filterTarget = document.querySelector("#filter-target");
  const filterDrodOtions = document.querySelectorAll(".filter-options ul li");
  const searchDiv = document.querySelector(".search");
  const searchInput = document.getElementById("search-countries");
  const container = document.querySelector(".countries");
  const detailsContainer = document.querySelector(".country-details");

  // Functions
  function createSkeletonLoader() {
    const skeletonLoader = document.createElement("div");
    skeletonLoader.classList.add("country-card", "skeleton");
    skeletonLoader.innerHTML = `
    <div class="skeleton-flag"></div>
    <div class="country-info">
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
  `;
    return skeletonLoader;
  }

  // Update displayCountries function
  function displayCountries(country) {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");
    countryCard.innerHTML = `
  <img src="${country.flags.png}" alt="flag" />
  <div class="country-info">
    <h2>${country.name.common}</h2>
    <p><span>Population:</span> ${country.population}</p>
    <p><span>Region:</span> ${country.region}</p>
    <p><span>Capital:</span> ${country.capital}</p>
  </div>
`;
    countryCard.addEventListener("click", () => {
      container.style.display = "none";
      searchDiv.style.display = "none";
      displayDetails(country);
    });
    container.appendChild(countryCard);
  }

  function displayDetails(country) {
    let currencies = country.currencies
      ? Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", ")
      : "";
    let languages = country.languages
      ? Object.values(country.languages).join(", ")
      : "";
    let borderCountries = country.borders
      ? country.borders.map((border) => `<button>${border}</button>`).join("")
      : "";
    let capital = country.capital || "";
    let region = country.region || "";
    let population = country.population || "";

    detailsContainer.innerHTML = `
    <div class="btn-container">
        <button id="back-button"><img src="./images/arrow-back-outline.svg" alt="arrow">Back</button>
    </div>
    <div class="country-details-container">
        <div class="country-flag">
            <img src="${country.flags.png}" alt="flag">
        </div>
        <div class="flex-items">
            <div class="flex-items2">
                <div class="details">
                    <h2>${country.name.common}</h2>
                    <p> <span>Population: </span> ${population} </p>
                    <p><span>Region: </span> ${region}</p>
                    <p><span>Capital: </span> ${capital}</p>
                </div>
                <div class="domains">
                    <p><span>Currencies: </span> ${currencies}</p>
                    <p><span>Languages: </span> ${languages}</p>
                </div>
            </div>
            <div class="border">
                <h3>Border Countries:</h3>
                <div class="botton-container">
                    ${borderCountries}
                </div>
            </div>
        </div>
    </div>
  `;

    detailsContainer.style.display =
      detailsContainer.getAttribute("data-display");

    const backButton = document.querySelector("#back-button");
    backButton.addEventListener("click", () => {
      detailsContainer.style.display = "none";
      container.style.display = container.getAttribute("data-display");
      searchDiv.style.display = searchDiv.getAttribute("data-display");
    });
  }

  // Event Listeners

  filterImg.addEventListener("click", () => {
    filterDropdown.classList.toggle("show");
    filterchevron.classList.toggle("rotate");
  });

  darktheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      navbarImg.src = "./images/moon.svg";
      localStorage.setItem("darkMode", "true");
    } else {
      navbarImg.src = "./images/moon-outline.svg";
      localStorage.setItem("darkMode", "false");
    }
  });

  // Initial setup
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    navbarImg.src = "./images/moon.svg";
  } else {
    navbarImg.src = "./images/moon-outline.svg";
  }

  for (let i = 0; i < 12; i++) {
    container.appendChild(createSkeletonLoader());
  }

  // Fetch data
  setTimeout(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.log(
          "API fetch failed, falling back to local JSON file:",
          error
        );
        return fetch("./data.json").then((response) => response.json());
      })
      .then((data) => {
        document
          .querySelectorAll(".skeleton")
          .forEach((loader) => loader.remove());
        data.forEach(displayCountries);

        filterDrodOtions.forEach((option) => {
          option.addEventListener("click", () => {
            filterTarget.innerHTML = option.innerHTML;
            container.innerHTML = "";
            const filteredData = data.filter(
              (country) =>
                country.region.toLowerCase() === option.innerHTML.toLowerCase()
            );
            filteredData.forEach(displayCountries);
          });
        });

        searchInput.addEventListener("input", (evt) => {
          const searchValue = evt.target.value.toLowerCase();
          container.innerHTML = "";
          const filteredData = data.filter((country) =>
            country.name.common.toLowerCase().includes(searchValue)
          );
          filteredData.forEach(displayCountries);
        });
      })
      .catch((error) => console.error("Fetch Error:", error));
  }, 2000);
})();
