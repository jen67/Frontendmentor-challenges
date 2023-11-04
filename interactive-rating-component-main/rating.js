document.addEventListener('DOMContentLoaded', function () {
    const resultSpan = document.getElementById('result');
    // Parse the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const ratingValue = urlParams.get('rating');

    if (ratingValue) {
        resultSpan.textContent = ratingValue;
    }
});
