import * as lib from "../utils/libs.js";

class MovieService {

	async getTrending(onSuccess) {
		try {
			const response = await fetch(lib.requestURL(`/trending/movie/day`, null), lib.requestHeader());
			const responseJson = await response.json();

			if (!response.ok) {
				this.handleError();
				return;
			}

			let data = responseJson.results;
			let movies = lib.filterMovies(data);
			onSuccess(movies);
		} catch (error) {
			console.log(error);
			this.handleError();
		}
	}

	async discover(params, onSuccess) {
		try {
			const response = await fetch(lib.requestURL('/discover/movie', params), lib.requestHeader());
			const responseJson = await response.json();

			if (!response.ok) {
				this.handleError();
				return;
			}

			let movies = responseJson.results;
			movies = lib.filterMovies(movies);
			onSuccess(movies);
		} catch (error) {
			console.log(error);
			this.handleError();
		}
	}

	async getIndonesianMovies(onSuccess) {
		const params = [{
				key: 'region',
				val: 'ID'
			},
			{
				key: 'with_original_language',
				val: 'id'
			},
			{
				key: 'sort_by',
				val: 'popularity.desc'
			},
			{
				key: 'page',
				val: 1
			}
		];
		this.discover(params, onSuccess);
	}

	async getShowing(onSuccess) {
		const params = [{
				key: 'primary_release_date.gte',
				val: lib.formatDate(lib.oneMonthBefore())
			},
			{
				key: 'primary_release_date.lte',
				val: lib.formatDate(lib.now())
			},
			{
				key: 'sort_by',
				val: 'popularity.desc'
			},
			{
				key: 'page',
				val: 1
			},
		];
		this.discover(params, onSuccess);
	}

	async getUpcomingMovies(onSuccess) {
		const params = [{
				key: 'primary_release_date.gte',
				val: lib.formatDate(lib.now())
			},
			{
				key: 'sort_by',
				val: 'popularity.desc'
			},
			{
				key: 'page',
				val: 1
			},
		];
		this.discover(params, onSuccess);
	}

	async getMoviesByGenre(genre_id, onSuccess) {
		const params = [{
				key: 'with_genres',
				val: genre_id
			},
			{
				key: 'sort_by',
				val: 'popularity.desc'
			},
			{
				key: 'page',
				val: 1
			},
		];
		this.discover(params, onSuccess);
	}

	// async search(keyword, onSuccess) {
	// 	try {
	// 		const params = [{
	// 				key: 'query',
	// 				val: keyword
	// 			},
	// 			{
	// 				key: 'page',
	// 				val: 1
	// 			},
	// 		];

	// 		const response = await fetch(lib.requestURL('/search/multi', params), lib.requestHeader());
	// 		const responseJson = await response.json();

	// 		if (!response.ok) {
	// 			this.handleError();
	// 			return;
	// 		}

	// 		let results = lib.filterSearchResults(responseJson.results);
	// 		onSuccess(results);

	// 	} catch (error) {
	// 		console.log(error);
	// 		this.handleError();
	// 	}
	// }

	handleError() {
		console.log('Oops, something went wrong. Please try again.');
	}
}

export default MovieService;