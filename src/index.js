const axios = require('axios');
const helpers = require('./helpers');

const headers = {
	'Accept': 'application/vnd.codebottle.v1+json'
};

module.exports = {
	search: (keywords, language) => {
		return axios.get(helpers.apiUrl('/snippets'), {
			params: {
				keywords,
				language,
			},
			headers
		}).then(response => ({
			...response.data.data,
			_status: response.status,
		}));
	},

	get: id => {
		return axios.get(helpers.apiUrl(`/snippets/${id}`), {
			headers
		}).then(response => ({
			...response.data.data,
			_status: response.status,
		}));
	},

	getLatest: () => {
		return axios.get(helpers.apiUrl('/snippets/new'), {
			headers
		}).then(response => ({
			...response.data.data,
			_status: response.status,
		}));
	},

	getCategories: () => {
		return axios.get(helpers.apiUrl('/categories'), {
			headers
		}).then(response => ({
			...response.data.data,
			_status: response.status,
		}));
	},

	getCategory: id => {
		return axios.get(helpers.apiUrl(`/categories/${id}`), {
			headers
		}).then(response => ({
			...response.data.data,
			_status: response.status,
		}));
	},

	getLanguages: () => {
		return axios.get(helpers.apiUrl('/languages'), {
			headers
		}).then(response => ({
			...response.data.data,
			_status: response.status,
		}));
	},

	getLanguage: id => {
		return axios.get(helpers.apiUrl(`/languages/${id}`), {
			headers
		}).then(response => ({
			...response.data.data,
			_status: response.status,
		}));
	},
};
