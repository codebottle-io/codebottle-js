const fetch = require('@v0id/fetch');
const { inspect: { custom } } = require('util');

const CODEBOTTLE = 'https://api.codebottle.io';
const headers = { Accept: 'application/vnd.codebottle+json' };

const functions = ['snippets', 'languages', 'categories'];
const reflectors = ['toString', 'valueOf', 'inspect', custom, Symbol.toPrimitive];

const handler = {
  get: (list, name) => {
    if (reflectors.includes(name)) return () => list.join('/');
    if (functions.includes(name)) {
      for (const r of reflectors) ID[r] = () => `${list.join('/')}/${name}`;
      return ID.bind(null, list, name);
    }
    if (name in fetch) {
      return (query = {}) =>
        new fetch(name.toUpperCase(), list.join('/'), { headers, query }).then(res => res.body);
    }
    return new Proxy(list.concat(name), handler);
  },
};

function ID(list, name, id) {
  list = list.concat(name);
  if (id) list = list.concat(id);
  return new Proxy(list, handler);
}

module.exports = new Proxy([CODEBOTTLE], handler);