const axios = require('axios');
const helpers = require('./helpers');

const headers = {
  Accept: 'application/vnd.codebottle.v1+json',
};

module.exports = {
  search: (keywords, language) => axios.get(helpers.apiUrl('/snippets'), {
    headers, params: { keywords, language },
  })
    .then(response => [...response.data])
    .catch(e => { throw e; }),

  get: id => axios.get(helpers.apiUrl(`/snippets/${id}`), { headers })
    .then(response => ({ ...response.data }))
    .catch(e => { throw e; }),

  getLatest: () => axios.get(helpers.apiUrl('/snippets/new'), { headers })
    .then(response => [...response.data])
    .catch(e => { throw e; }),

  getCategories: () => axios.get(helpers.apiUrl('/categories'), { headers })
    .then(response => [...response.data])
    .catch(e => { throw e; }),

  getCategory: id => axios.get(helpers.apiUrl(`/categories/${id}`), { headers })
    .then(response => ({ ...response.data }))
    .catch(e => { throw e; }),

  getLanguages: () => axios.get(helpers.apiUrl('/languages'), { headers })
    .then(response => [...response.data])
    .catch(e => { throw e; }),

  getLanguage: id => axios.get(helpers.apiUrl(`/languages/${id}`), { headers })
    .then(response => ({ ...response.data }))
    .catch(e => { throw e; }),
};
