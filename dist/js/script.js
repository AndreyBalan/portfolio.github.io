// loader
window.onload = function () {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
    }, 500);
};

// lang switch
const lang_switch = document.querySelector(".lang_switch");

lang_switch.onclick = () => lang_switch.classList.toggle("changed");

//hamburger

const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    closeOverlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});
closeOverlay.addEventListener("click", () => {
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
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

// scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
