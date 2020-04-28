import moment from "moment";
import * as constant from "./constants.js";

export function requestHeader() {
	return {
		method: 'GET',
		headers: {
			'Accept': 'application/json'
		}
	}
}

export function requestURL(endpoint, params) {
	if (params === null) {
		params = [];
	}

	params.push({
		key: 'api_key',
		val: constant.TMDB_API_KEY
	});

	params.push({
		key: 'include_adult',
		val: false
	});

	params.push({
		key: 'include_video',
		val: false
	});

	let paramArr = [];
	for (let param of params) {
		const paramStr = param.key + '=' + param.val;
		paramArr.push(paramStr);
	}

	return constant.BASE_URL + endpoint + '?' + paramArr.join('&');
}

export function getPosterURL(path) {
	return (path === null) ? null : constant.POSTER_URL + path; 
}

export function getProfileURL(path) {
	return (path === null) ? null : constant.PROFILE_URL + path; 
}

export function getYear(date) {
	if (date === '' || date === null) {
		return null;
	}
	return moment(date).year();
}

export function filterMovies(rawData) {
	let filteredData = [];
	for (let data of rawData) {
		const fd = {
			mediaType: 'movie',
			id: data.id,
			title: data.title,
			poster: getPosterURL(data.poster_path),
			rate: data.vote_average,
			releaseYear: getYear(data.release_date)
		}
		filteredData.push(fd);
	}
	return filteredData;
}

export function filterPersons(rawData) {
	let filteredData = [];
	for (let data of rawData) {
			
			if (data.profile_path === null) {
					continue;
			}

			let fd = {
					mediaType: 'person',
					id: data.id,
					name: data.name,
					poster: getProfileURL(data.profile_path),
			}
			filteredData.push(fd);
	}
	return filteredData;
}