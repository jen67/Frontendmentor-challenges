const bgButton = document.querySelector("large-button");



    fetch('./data.json')
        .then(response => response.json())
        .then(data => console.log(data));

