import * as lib from "../utils/libs.js";

class MovieService {

	async getTrending(media, onSuccess) {
		try {
			const response = await fetch(lib.requestURL(`/trending/${media}/day`, null), lib.requestHeader());
			const responseJson = await response.json();

			if (!response.ok) {
				this.handleError();
				return;
			}

			let data = responseJson.results;
			if (media === 'movie') {
				let movies = lib.filterMovies(data);
				onSuccess(movies);
			} else {
				let persons = lib.filterPersons(data);
				onSuccess(persons);
			}
		} catch (error) {
			console.log(error);
			this.handleError();
		}
	}
	handleError() {
		alert('Oops, something went wrong. Please try again.');
	}
}

export default MovieService;