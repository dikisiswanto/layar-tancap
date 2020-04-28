import "../poster/poster.js";
import style from "./gallery.style.css";

class Gallery extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		});
	}

	set galleryData(data) {
		this._data = data
		this.render();
	}

	render() {
		this.shadowDOM.appendChild(this.createStyle());
		this.shadowDOM.appendChild(this.createElem());
	}

	createElem() {
		const galleryContainer = document.createElement('div');
		galleryContainer.className = 'gallery';
		galleryContainer.innerHTML = '';
		const padElem = document.createElement('div');
		padElem.className = 'pad';
		galleryContainer.appendChild(padElem);
		this._data.map((poster) => {
			const posterElem = document.createElement('poster-item');
			posterElem.posterItem = poster;
			galleryContainer.appendChild(posterElem);
		});
		galleryContainer.appendChild(padElem);
		return galleryContainer;
	}

	createStyle() {
		const styleSheet = document.createElement('style');
		styleSheet.innerText = style;
		return styleSheet;
	}
}

customElements.define('gallery-list', Gallery);