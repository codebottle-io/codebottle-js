const bottle = require('./api');
const { version } = require('../package.json');

let warning = false;

module.exports = {
  bottle, version,

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

  get(key) {
    if (!warning) {
      this.warning = true;
      process.stderr.write('.get() is deprecated please use .fetch() (2.x removal)\n');
    }
    return this.fetch(key);
  },
};
