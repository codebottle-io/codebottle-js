const fetch = require('@v0id/fetch');
const { inspect: { custom } } = require('util');

const { DOMAIN, HEADERS } = require('./constants');
const reflectors = ['toString', 'valueOf', 'inspect', custom, Symbol.toPrimitive];

const traps = {
  get(path, name) {
    if (reflectors.includes(name)) return () => path.join('/');

    if (name in fetch) {
      return (query = {}) =>
        new fetch(name.toUpperCase(), path.join('/'), { query, headers: HEADERS })
          .then(res => res.body);
    }

    return new Proxy([...path, name], traps);
  },

  apply(path, _, args) {
    return new Proxy([...path, ...args], traps);
  },
};

module.exports = new Proxy([DOMAIN], traps);
