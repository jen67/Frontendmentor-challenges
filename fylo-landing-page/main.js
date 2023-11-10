const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.style.backgroundColor = " $header-bg";
        header.style.backdropFilter = "blur(10px)";
        header.style.transition = "all 0.5s ease";
        header.style.zIndex = "1000";
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "blur(0px)";
    }
});

