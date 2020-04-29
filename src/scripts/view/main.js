import '../components/loader/loader.js';
import '../components/genre/genre.js';
import '../components/title-bar/title-bar.js';
import '../components/gallery/gallery.js';
import '../components/poster/poster.js';
import MovieService from "../services/movie-service.js";

const main = () => {
	const genresElem = document.querySelector('#genres');
	const trendingMoviesElem = document.querySelector('#trending-movies');
	const indonesianMoviesElem = document.querySelector('#indonesian-movies');
	const nowPlayingMoviesElem = document.querySelector('#now-playing');
	const upcomingMoviesElem = document.querySelector('#upcoming-movies');

	const service = new MovieService();

	const feed = () => {
		loadNowPlaying();
		loadTrendingMovies();
		loadIndonesianMovies();
		loadUpcomingMovies();
	}

	const loadGenres = () => {
		renderResult(null, genresElem);
	}

	const loadTrendingMovies = () => {
		renderResult(null, trendingMoviesElem);
		service.getTrending((movies) => {
			renderResult(movies, trendingMoviesElem);
		})
	}

	const loadIndonesianMovies = () => {
		renderResult(null, indonesianMoviesElem);
		service.getIndonesianMovies((movies) => {
			renderResult(movies, indonesianMoviesElem);
		})
	}

	const loadNowPlaying = () => {
		renderResult(null, nowPlayingMoviesElem);
		service.getShowing((movies) => {
			renderResult(movies, nowPlayingMoviesElem);
		})
	}

	const loadUpcomingMovies = () => {
		renderResult(null, upcomingMoviesElem);
		service.getUpcomingMovies((movies) => {
			renderResult(movies, upcomingMoviesElem);
		})
	}

	const renderResult = (data, elem) => {
		if (data !== null) {
			elem.galleryData = data;
		}
		elem.previousSibling.title = elem.previousSibling.getAttribute('title');
	}

	loadGenres();
	feed();
}

export default main;