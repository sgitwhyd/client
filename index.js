// This function will show the image in the lightbox
var zoomImg = function () {
	// Create evil image clone
	var clone = this.cloneNode();
	clone.classList.remove('zoomD');

	document.getElementById('nav').classList.remove('sticky-top');

	// Put evil clone into lightbox
	var lb = document.getElementById('lb-img');
	lb.innerHTML = '';
	lb.appendChild(clone);

	// Show lightbox
	lb = document.getElementById('lb-back');
	lb.classList.add('show');
};

window.addEventListener('load', function () {
	// Attach on click events to all .zoomD images
	var images = document.getElementsByClassName('zoomD');
	if (images.length > 0) {
		for (var img of images) {
			img.addEventListener('click', zoomImg);
		}
	}

	// Click event to hide the lightbox
	document.getElementById('lb-back').addEventListener('click', function () {
		this.classList.remove('show');
		document.getElementById('nav').classList.add('sticky-top');
	});
});

// new TypeIt('#title', {
// 	strings: "I'm Putri Kartika, UI/UX designer <br> Jakarta Based",
// 	speed: 75,
// 	loop: true,
// }).go();

new TypeIt('#title-1', {
	speed: 60,
	loop: true,
	cursor: false,
	deleteSpeed: 60,
})
	.type(' UI Designer')
	.pause(400)
	.options({ speed: 200 })
	.delete(11)
	.options({ speed: 60 })
	.pause(300)
	.type(' UX Designer')
	.pause(400)
	.options({ speed: 200 })
	.delete(11)
	.options({ speed: 60 })
	.pause(300)
	.type(' UI/UX Designer')
	.go();
