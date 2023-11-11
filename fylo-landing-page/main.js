const header = document.querySelector('header');
const getForms = document.querySelectorAll('form');


window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.style.backgroundColor = "$bg-color"; 
        header.style.backdropFilter = "blur(50px)";
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        // header.style.transition = "all 0.5s ease";
        header.style.zIndex = "1000";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "blur(0px)";
        header.style.boxShadow = "none";
    }
});

getForms.forEach((form, index) => {
    const inputTag = form.querySelector('input[type="email"]');
    const textBox = form.querySelector('input');
    const textError = form.querySelector('.erro-text');
    const btns = form.querySelector('button');


    form.addEventListener('submit', function (event) {
        if (inputTag.value === '') {
            textError.textContent = "Please provide a valid email";
            textError.style.textAlign = "left";
            textBox.style.border = "2px solid #E4859F";

            if (index === 1) {
                textError.style.color = "white";
            } else {
                textError.style.color = "#E4859F";
            }

            event.preventDefault();
        } else if (inputTag.value !== '') {
            textError.textContent = "Submitted, please check your email"; 
            textError.style.textAlign = "left";
            textError.style.color = "pink";
            textBox.style.border = "2px solid pink";

            if (index === 1) {
                textError.style.color = "white";
            } else {
                textError.style.color = "#E4859F";
            }

            event.preventDefault();
            btns.addEventListener('click', function () {
                textError.style.color = "transparent";
                textBox.value = "";
            }); 
        } else {
            textError.style.color = "transparent";
            textBox.textContent = "";
            
        }
    });
});
 