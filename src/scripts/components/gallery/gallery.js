import 'Components/loader/loader';
import 'Components/poster/poster';
import template from 'Utils/dom';
import html from 'Components/gallery/gallery.template.html';
import css from 'Components/gallery/gallery.style.css';

class Gallery extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		});
	}

	connectedCallback() {
		this._data = null;
		this.render();
	}

	set grid(grid) {
		this._grid = grid;
	}

	set gallery(data) {
		this._data = data
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = '';
		if (this._data) {
			this.shadowDOM.appendChild(this.createElem());
		} else {
			this.shadowDOM.appendChild(this.createLoader())
		}
	}

	createLoader() {
		const loaderElem = document.createElement('loader-item');
		return loaderElem;
	}

	createElem() {
		const elem = template(html, css);
		const list = elem.querySelector('.gallery');
		const pad = list.querySelector('.pad');

		if (this._grid) {
			list.className = 'movies';
			pad.parentNode.removeChild(pad);
		} else {
			list.className = 'gallery';
		}

		const lastPad = list.querySelector('.pad:nth-child(2)');
		const notFoundElem = list.querySelector('.not-found');
		if(this._data.length){
			this._data.map((poster) => {
				const posterElem = document.createElement('poster-item');
				posterElem.grid = this._grid ? true : false;
				posterElem.poster = poster;
				if (lastPad) {
					list.insertBefore(posterElem, lastPad);
				} else {
					list.appendChild(posterElem);
				}
			});
		} else {
			const notFoundText = document.createElement('p');
			notFoundText.innerText = 'Nothing found...';
			notFoundElem.appendChild(notFoundText);
		}

		return elem;
	}
}

customElements.define('gallery-list', Gallery);