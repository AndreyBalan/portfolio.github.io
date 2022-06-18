const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

new WOW().init();

// cursor

document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
	t.style.left = n.clientX + "px", 
	t.style.top = n.clientY + "px", 
	e.style.left = n.clientX + "px", 
	e.style.top = n.clientY + "px", 
	i.style.left = n.clientX + "px", 
	i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
	e = document.getElementById("cursor2"),
	i = document.getElementById("cursor3");
function n(t) {
	e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
	e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
	o(r[a])
}
function o(t) {
	t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

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