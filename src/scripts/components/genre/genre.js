import {GENRES} from "../../utils/constants.js";
import template from "../../utils/dom.js";
import html from "./genre.template.html";
import css from "./genre.style.css";

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
		if (this._data) {
			this.shadowDOM.appendChild(this.createElem());
		}
	}

	createElem() {
		const elem = template(html, css);
		const list = elem.querySelector('.genres');
		const lastPad = list.querySelector('.pad:nth-child(2)');

		this._data.map((genre) => {
			const genreElem = document.createElement('span');
			genreElem.setAttribute('key', genre.id);
			const genreName = document.createElement('h5');
			genreName.innerText = genre.name;
			genreElem.appendChild(genreName);
			list.insertBefore(genreElem, lastPad);
		});

		return elem;
	}
}

customElements.define('genre-list', Genre);