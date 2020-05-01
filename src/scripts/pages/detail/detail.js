import image from 'Assets/image.svg';
import star from 'Assets/star.svg';
import putDecimal from 'Utils/libs';
import MovieService from 'Services/movie-service';
import template from 'Utils/dom';
import html from 'Pages/detail/detail.template.html';
import css from 'Pages/detail/detail.style.css';
import 'Components/title-bar/title-bar';
import 'Components/footer/footer';

const service = new MovieService();
export default class Detail extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		});
	}

	connectedCallback() {
		this._movieId = (location.pathname).split('/')[2];
		this._data = null;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = '';
		if (this._data === null) {
			this.shadowDOM.appendChild(this.createLoader());
			this.loadDetail();
		} else {
			this.shadowDOM.appendChild(this.createElem());
		}
	}

	createLoader() {
		const loader = document.createElement('loader-item');
		return loader;
	}

	createElem() {
		const elem = template(html, css);
		elem.querySelector('p.story').innerText = (this._data.overview !== null) ? this._data.overview : '-';
		elem.querySelector('.title-section h2').innerText = this._data.title;
		const posterImgElem = elem.querySelector('.poster');
		const posterImgItem = document.createElement('img');
		if (this._data.poster === null) {
			posterImgElem.classList.remove('poster');
			posterImgItem.src = image;
		} else {
			posterImgElem.classList.remove('default-image');
			posterImgItem.src = this._data.poster;
		}

		posterImgItem.addEventListener('load', () => {
			posterImgElem.classList.remove('shimmer');
			posterImgElem.appendChild(posterImgItem);
		});
		const attributes = ['director', 'release', 'shortGenre', 'duration', 'budget', 'revenue'];
		attributes.map((attr) => {
			elem.querySelector(`[data-name=${attr}] span:nth-child(2)`).innerText = eval(`this._data.${attr}`);
		});
		const rating = elem.querySelector('.rating');
		const starElem = document.createElement('img');
		const ratingVal = elem.querySelector('.rate');
		starElem.src = star;
		rating.insertBefore(starElem, ratingVal);
		ratingVal.innerText = (this._data.rate === 0) ? '-' : putDecimal(this._data.rate);
		elem.querySelector('.reviews').innerText = this._data.vote;
		elem.querySelector('[data-name=productions]').innerText = this._data.productions;
		return elem;
	}

	loadDetail() {
		service.getMovie(this._movieId, (movie) => {
			if (movie) {
				this._data = movie;
				this.render();
			}
		})
	}

}

customElements.define('detail-page', Detail);