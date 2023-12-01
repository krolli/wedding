"use strict";

const photos = {
	innsbruck: {
		title: "Innsbruck",
		text: "Naše první společná dovolená.",
	},
	oscadnica: {
		title: "Oščadnica",
		text: "Zimní nádhera na snowboardech.",
	},
	rysy: {
		title: "Rysy",
		text: "Cesta, která nás v mnohem otestovala.",
	},
	corgitrek: {
		title: "Corgi Trek",
		text: "Závod s naším krátkonohým parťákem.",
	},
};

function onDocumentLoad(event) {
	const mediaQuery = window.matchMedia('screen');
	if (!mediaQuery.matches)
		return;

	const body = document.body;
	const lightbox = document.getElementById('lightbox');

	function onGalleryPhotoClick(event) {
		event.stopPropagation();
		event.preventDefault();

		const photoId = event.target.attributes['data-photo'].value;
		const photo = photos[photoId];

		body.classList.add("modal-background");
		lightbox.classList.add("visible");
		lightbox.innerHTML = `
			<picture>
				<img src="media/${photoId}-full.jpg">
			</picture>
			<h3>${photo.title}</h3>
			<p>${photo.text}</p>
		`;
	}

	function onLightboxClick(event) {
		event.stopPropagation();
		event.preventDefault();

		lightbox.classList.remove("visible");
		body.classList.remove("modal-background");
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
