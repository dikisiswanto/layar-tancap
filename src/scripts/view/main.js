import '../components/gallery/gallery.js';
import '../components/poster/poster.js';
import MovieService from "../services/movie-service.js";

const main = () => {
	const trendingMoviesElem = document.querySelector('#trending-movies');
	const trendingCastElem = document.querySelector('#trending-persons');

	const service = new MovieService();

	const initMovies = () => {
		service.getTrending('movie', (movies) => {
		renderResult(movies, trendingMoviesElem);
	})}

	const initPersons = () => {
		service.getTrending('person', (persons) => {
		renderResult(persons, trendingCastElem);
	})}

	const renderResult = (data, elem) => {
		elem.galleryData = data;
	}

	initMovies();
	initPersons();

}

export default main;