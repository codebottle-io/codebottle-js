const bottle = require('./api');

module.exports = {
  bottle,
  version: require('../package.json').version,

  fetch(key) {
    return bottle.snippets(key).get();
  },

  search({ query, language }) {
    return bottle().snippets().get({ language, keywords: query });
  },

  language(key) {
    return bottle().languages(key).get();
  },

  category(key) {
    return bottle().categories(key).get();
  },


  get latest() {
    return bottle().snippets().get();
  },

  get languages() {
    return bottle().languages().get();
  },

  get categories() {
    return bottle().categories().get();
  },
};
