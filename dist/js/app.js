document.addEventListener('DOMContentLoaded', () => {
	
	body.addEventListener('mousemove', e => {
		
		clientX = e.pageX
		clientY = e.pageY

		request = requestAnimationFrame(updateMe)

		mouseCoords.e

	})

	
	const cursor = document.getElementById('cursor'),
		follower = document.getElementById('aura'),
		links = document.getElementById('a')

	
	mouse = 0, mouseY = 0, posX = 0, posY = 0

	function mouseCoords(e) {

		mouseX = e.pageX
		mouseY = e.pageY

	}

	gsap.to({}, .01, {
		
		repeat: -1,

		onRepeat: () => {

			posX += (mouseX - posX) / 5 
			posY += (mouseY - posY) / 5 

			gsap.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY
				}
			})

			gsap.set(follower, {
				css: {
					left: posX - 23,
					top: posY - 23
				}
			})

		}
	})

});