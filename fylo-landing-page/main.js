const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
const getForm = document.querySelectorAll('form');
const inputTag = document.querySelector('input[type="email"]');
const textError = document.querySelectorAll('.erro-text');


window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.style.backgroundColor = " $header-bg";
        header.style.backdropFilter = "blur(50px)"; 
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        header.style.transition = "all 0.5s ease";
        header.style.zIndex = "1000";
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "blur(0px)";
        header.style.boxShadow = "none";
    }
});

getForm.forEach((form) => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (inputTag.value === '') {
            textError.forEach((text) => {
                text.textContent = "Please provide a valid email";  
                text.style.textAlign = "left"; 
                text.style.color = "red";
            });
        }
        else if (inputTag.value !== '') {
            textError.forEach((text) => {
                text.textContent = "Thank you for subscribing";
                text.style.textAlign = "left";
                text.style.color = "green";
            });
        }
        else {
            textError.forEach((text) => {
                text.style.color = "transparent";
            });
        }
    });
});

// btns.forEach((btn) => {
//     btn.addEventListener('click', function (event) {
//         event.preventDefault();
        

//     });
// });


