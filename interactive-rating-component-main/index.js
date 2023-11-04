document.addEventListener('DOMContentLoaded', function () {
    const ratings = document.querySelectorAll('.rating-numbers a');
    const submitBtn = document.querySelector('#submit-btn');

    let selectedRating = null;

    ratings.forEach(rating => {
        rating.addEventListener('click', () => {
            // Store the selected rating when a link is clicked
            selectedRating = rating.textContent;
        });
    });

    submitBtn.addEventListener('click', () => {
        // Check if a rating has been selected
        if (selectedRating) {
            // Pass the selected rating as a query parameter
            window.location.href = `thankyou.html?rating=${selectedRating}`;
        } else {
            // Handle the case where no rating is selected
            alert("Please select a rating before submitting.");
        }
    });
});
