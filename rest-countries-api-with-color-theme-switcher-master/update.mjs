import fetch from "node-fetch";
import { writeFile } from "fs";
import cron from "node-cron";

// Function to fetch data from API and write to file
function updateData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) {
          console.error("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
        }
      });
    })
    .catch((error) => console.error("Error fetching data", error));
}

// Schedule task to run every 6 days
cron.schedule("0 0 */6 * *", updateData);

// Run the function once at startup
updateData();
