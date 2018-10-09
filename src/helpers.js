const apiBase = 'https://api.codebottle.io/';

module.exports = {
  apiUrl: url => apiBase + (url.indexOf('/') === 0 ? url.substr(1) : url),
};
