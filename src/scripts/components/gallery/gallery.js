import "../loader/loader.js";
import "../poster/poster.js";
import template from "../../utils/dom.js";
import html from "./gallery.template.html";
import css from "./gallery.style.css";

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

	set galleryData(data) {
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
		const lastPad = list.querySelector('.pad:nth-child(2)');

		this._data.map((poster) => {
			const posterElem = document.createElement('poster-item');
			posterElem.posterItem = poster;
			list.insertBefore(posterElem, lastPad);
		});

		return elem;
	}
}

customElements.define('gallery-list', Gallery);