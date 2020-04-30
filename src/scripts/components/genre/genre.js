import {GENRES} from 'Utils/constants';
import template from 'Utils/dom';
import html from 'Components/genre/genre.template.html';
import css from 'Components/genre/genre.style.css';

class Genre extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		});
	}

	connectedCallback() {
		this._data = GENRES;
		this.render();
	}

	render() {
		this.shadowDOM.appendChild(this.createElem());
	}

	createElem() {
		const elem = template(html, css);
		const list = elem.querySelector('.genres');
		const lastPad = list.querySelector('.pad:nth-child(2)');

		this._data.map((genre) => {
			const genreElem = document.createElement('a');
			genreElem.setAttribute('href', `/movie/genre/${genre.id}`);
			const genreName = document.createElement('h5');
			genreName.innerText = genre.name;
			genreElem.appendChild(genreName);
			list.insertBefore(genreElem, lastPad);
		});

		return elem;
	}
}

customElements.define('genre-list', Genre);