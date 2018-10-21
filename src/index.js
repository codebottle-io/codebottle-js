const api = require('./api');

let warning = false;

module.exports = {
  api,

  fetch(key) {
    return api.snippets(key).get();
  },

  search({ query, language }) {
    return api().snippets().get({ language, keywords: query });
  },

  language(key) {
    return api().languages(key).get();
  },

  category(key) {
    return api().categories(key).get();
  },


  get latest() {
    return api().snippets().get();
  },

  get languages() {
    return api().languages().get();
  },

  get categories() {
    return api().categories().get();
  },

  get(key) {
    if (!warning) {
      this.warning = true;
      process.stderr.write('.get() is deprecated please use .fetch() (2.x removal)\n');
    }
    return this.fetch(key);
  },
};
