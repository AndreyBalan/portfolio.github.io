// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
	targets: '.ml11 .line',
	scaleY: [0,1],
	opacity: [0.5,1],
	easing: "easeOutExpo",
	duration: 700
})
.add({
	targets: '.ml11 .line',
	translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
	easing: "easeOutExpo",
	duration: 700,
	delay: 100
}).add({
	targets: '.ml11 .letter',
	opacity: [0,1],
	easing: "easeOutExpo",
	duration: 600,
	offset: '-=775',
	delay: (el, i) => 34 * (i+1)
}).add({
	targets: '.ml11',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
});

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
	targets: '.ml6 .letter',
	translateY: ["1.1em", 0],
	translateZ: 0,
	duration: 750,
	delay: (el, i) => 50 * i
}).add({
	targets: '.ml6',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // Wrap every letter in a span
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });