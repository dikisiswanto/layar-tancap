import MovieService from 'Services/movie-service';
import template from 'Utils/dom';
import html from 'Pages/home/home.template.html';
import 'Components/search-bar/search-bar';
import 'Components/genre/genre';
import 'Components/title-bar/title-bar';
import 'Components/gallery/gallery';
import 'Components/footer/footer';

const service = new MovieService();

export default class Home extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		});
	}

	connectedCallback() {
		this.shadowDOM.innerHTML = '';
		this.shadowDOM.appendChild(this.feed());
	}

	feed() {
		const elem = template(html);
		this.loadShowingMovies(elem);
		this.loadTrendingMovies(elem);
		this.loadIndonesianMovies(elem);
		this.loadUpcomingMovies(elem);
		return elem;
	}

	loadTrendingMovies(elem) {
		const trendingElem = elem.querySelector('#trending-movies');
		this.render(trendingElem);
		service.getTrending((movies) => {
			this.render(trendingElem, movies);
		})
	}

	loadUpcomingMovies(elem) {
		const upcomingElem = elem.querySelector('#upcoming-movies');
		this.render(upcomingElem);
		service.getUpcomingMovies((movies) => {
			this.render(upcomingElem, movies);
		})
	}

	loadShowingMovies(elem) {
		const showingElem = elem.querySelector('#now-playing')
		this.render(showingElem);
		service.getShowing((movies) => {
			this.render(showingElem, movies)
		})
	}

	loadIndonesianMovies(elem) {
		const indonesianMoviesElem = elem.querySelector('#indonesian-movies')
		this.render(indonesianMoviesElem);
		service.getIndonesianMovies((movies) => {
			this.render(indonesianMoviesElem, movies)
		})
	}

	render(refElem, data) {
		refElem.gallery = data;
		const titleElem = refElem.previousElementSibling;
		titleElem.title = titleElem.getAttribute('title');
	}

}

customElements.define('home-page', Home);