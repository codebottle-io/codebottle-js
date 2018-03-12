const axios = require('axios');
const helpers = require('./helpers');

axios.defaults.headers.common['Accept'] = 'application/vnd.codebottle.v1+json';

module.exports = {
	search: (keywords, language) => {
		return axios.get(helpers.apiUrl('/snippets'), {
			params: {
				keywords,
				language,
			}
		}).then(response => ({
			...response.data,
			_status: response.status,
		}));
	},

	get: id => {
		return axios.get(helpers.apiUrl(`/snippets/${id}`))
			.then(response => ({
				...response.data,
				_status: response.status,
			}));
	},

	getLatest: () => {
		return axios.get(helpers.apiUrl('/snippets/new'))
			.then(response => ({
				...response.data,
				_status: response.status,
			}));
	},

	getCategories: () => {
		return axios.get(helpers.apiUrl('/categories'))
			.then(response => ({
				...response.data,
				_status: response.status,
			}));
	},

	getCategory: id => {
		return axios.get(helpers.apiUrl(`/categories/${id}`))
			.then(response => ({
				...response.data,
				_status: response.status,
			}));
	},

	getLanguages: () => {
		return axios.get(helpers.apiUrl('/languages'))
			.then(response => ({
				...response.data,
				_status: response.status,
			}));
	},

	getLanguage: id => {
		return axios.get(helpers.apiUrl(`/languages/${id}`))
			.then(response => ({
				...response.data,
				_status: response.status,
			}));
	},
};
