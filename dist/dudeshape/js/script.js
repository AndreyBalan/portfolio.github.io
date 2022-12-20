"use strict";
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
 	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "flex";
}

//  tabs start

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if( ! currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('active');
			});
	
			tabsItems.forEach(function(item) {
				item.classList.remove('active');
			});
	
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}

	});
}

document.querySelector('.tabs__nav-btn').click();


new WOW().init();

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


// hamburger

const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeElem = document.querySelector('.menu__close')

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});
