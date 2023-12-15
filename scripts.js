"use strict";

function asyncRequest(xhr, body) {
	return new Promise(function(resolve, reject) {
		xhr.onload = function() {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function() {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		if (body)
			xhr.send(body);
		else
			xhr.send();
	});
}

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
		text: "Cesta, která nás v mnohém otestovala.",
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

	function onFormSubmit(event) {
		event.preventDefault();
		event.submitter.disabled = true;

		const form = event.currentTarget;
		const formData = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open('POST', form.action, true);

		function asyncdone() {
			event.submitter.disabled = false;
		}
		asyncRequest(xhr, formData).then(asyncdone, asyncdone);
	}

	const formSection = document.getElementById('form');
	const form = formSection.children[1];

	function refreshFormFields() {
		const willAttend = form.elements.willAttend.value === 'true';
		const wantAccomodation = form.elements.wantAccomodation.value === 'true';

		form.elements.contactEmail.disabled = !willAttend;
		form.elements.contactPhone.disabled = !willAttend;
		form.elements.numAdults.disabled    = !willAttend;
		form.elements.numChildren.disabled  = !willAttend;
		form.elements.extra.disabled        = !willAttend;
		for (const radioButton of form.elements.wantAccomodation)
			radioButton.disabled = !willAttend;

		form.elements.accomodationFrom.disabled = !willAttend || !wantAccomodation;
		form.elements.numNights.disabled        = !willAttend || !wantAccomodation;
	}

	for (const radioButton of form.elements.willAttend)
		radioButton.addEventListener('change', refreshFormFields);

	for (const radioButton of form.elements.wantAccomodation)
		radioButton.addEventListener('change', refreshFormFields);

	refreshFormFields();
	form.addEventListener('submit', onFormSubmit);
}

window.addEventListener('load', onDocumentLoad);
