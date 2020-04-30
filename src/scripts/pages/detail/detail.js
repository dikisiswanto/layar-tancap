import image from 'Assets/image.svg';
import star from 'Assets/star.svg';
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
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = '';
		this.loadDetail()
	}

	loadDetail() {
		const elem = template(html, css);
		service.getMovie(this._movieId, (movie) => {
			if (movie.id) {
				elem.querySelector('p.story').innerText = (movie.overview !== null) ? movie.overview : '-';
				elem.querySelector('.title-section h2').innerText = movie.title;
				const posterELem = elem.querySelector('.poster');
				const posterImgItem = document.createElement('img');
				if (movie.poster === null) {
					posterELem.classList.remove('poster');
					posterImgItem.src = image;
				} else {
					posterELem.classList.remove('default-image');
					posterImgItem.src = movie.poster;
				}
				posterImgItem.addEventListener('load', () => {
					// posterELem.classList.remove('shimmer');
					// posterElem.appendChild(posterImgItem);
				});
				const attributes = ['director', 'release', 'shortGenre', 'duration', 'budget', 'revenue'];
				attributes.map((attr) => {
					elem.querySelector(`[data-name=${attr}] span:nth-child(2)`).innerText = eval(`movie.${attr}`);
				});
			} else {
				elem.querySelector('.not-found').innerText = 'Nothing found...';
				(elem.querySelector('main')).parentNode.removeChild(elem.querySelector('main'));
			}
			this.shadowDOM.appendChild(elem);
		})
	}

}

customElements.define('detail-page', Detail);