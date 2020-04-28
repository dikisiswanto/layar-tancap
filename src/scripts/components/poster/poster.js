import image from "../../../images/icon/image.svg";
import style from "./poster.style.css";

class Poster extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		});
		this._grid = '';
	}


	set posterItem(poster) {
		this._poster = poster;
		this.render();
	}

	set posterGrid(grid) {
		this._grid = grid;
		this.render();
	}

	render() {
		this.shadowDOM.appendChild(this.createStyle());
		this.shadowDOM.appendChild(this.createElem());
	}

	createElem() {
		const posterContainer = document.createElement('div');
		posterContainer.className = 'poster ' + this._grid;
		const posterElem = document.createElement('div');
		posterElem.className = this._poster.poster === null ? 'default-poster' : 'image';
		posterElem.classList.add('shimmer');
		posterContainer.appendChild(posterElem);
		const posterImgElem = document.createElement('img');
		posterImgElem.src = this._poster.poster === null ? image : this._poster.poster;
		posterImgElem.addEventListener('load', () => {
			posterElem.classList.remove('shimmer');
			posterElem.appendChild(posterImgElem);
		});
		return posterContainer;
	}

	createStyle() {
		const styleSheet = document.createElement('style');
		styleSheet.innerText = style;
		return styleSheet;
	}
}

customElements.define('poster-item', Poster)