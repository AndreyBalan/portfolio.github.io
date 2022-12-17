const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

// slider
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    slidesToShow: 1,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
    mousewheel: {
        invert: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});
