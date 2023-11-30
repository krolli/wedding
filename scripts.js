"use strict";

const photos = {
	innsbruck: {
		title: "Innsbruck",
		text: "One of our trips",
	},
	oscadnica: {
		title: "Oscadnica",
		text: "Some more text",
	},
	rysy: {
		title: "Rysy",
		text: "Some more text",
	},
	corgitrek: {
		title: "Corgi Trek",
		text: "Some more text",
	},
};

function onDocumentLoad(event) {
	const mediaQuery = window.matchMedia('screen');
	if (!mediaQuery.matches)
		return;

	const lightbox = document.getElementById('lightbox');

	function onGalleryPhotoClick(event) {
		event.stopPropagation();
		event.preventDefault();

		const photoId = event.target.attributes['data-photo'].value;
		const photo = photos[photoId];

		lightbox.classList.add("visible");
		lightbox.innerHTML = `
			<picture>
				<img src="media/${photoId}-full.jpg">
			</picture>
			<div>
				<h3>${photo.title}</h3>
				<p>${photo.text}</p>
			</div>
		`;
	}

	function onLightboxClick(event) {
		event.stopPropagation();
		event.preventDefault();

		lightbox.classList.remove("visible");
	}

	lightbox.addEventListener('click', onLightboxClick);

	const galleries = document.getElementsByClassName('gallery');
	for (const gallery of galleries) {
		for (const photo of gallery.children) {
			photo.addEventListener('click', onGalleryPhotoClick);
		}
	}
}

window.addEventListener('load', onDocumentLoad);
