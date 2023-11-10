const header = document.querySelector('header');
const getForms = document.querySelectorAll('form');
const textErrors = document.querySelectorAll('.erro-text');
const btns = document.querySelectorAll('button');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.style.backgroundColor = "$header-bg";
        header.style.backdropFilter = "blur(50px)";
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        header.style.transition = "all 0.5s ease";
        header.style.zIndex = "1000";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "blur(0px)";
        header.style.boxShadow = "none";
    }
});

getForms.forEach((form) => {
    const inputTag = form.querySelector('input[type="email"]');
    const textBox = form.querySelector('input');
    const textError = form.querySelector('.erro-text');

    form.addEventListener('submit', function (event) {
        if (inputTag.value === '') {
            textError.textContent = "Please provide a valid email";
            textError.style.textAlign = "left";
            textError.style.color = "#E4859F";
            textBox.style.border = "2px solid #E4859F";
            event.preventDefault();
        } else if (inputTag.value !== '') {
            textError.textContent = "Plase check your email";
            textError.style.textAlign = "left";
            textError.style.color = "pink";
            textBox.style.border = "2px solid pink";
        } else {
            textError.style.color = "transparent";
        }
    });
});

btns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
        ;
        

    });
});


