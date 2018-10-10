import bottle from '../';
import Simulor from 'simulor';

const tests = new Simulor;
const BASE = (str = '') => `https://api.codebottle.io${str}`;

tests.add('constructing api url', t => {
  const api = bottle.bottle;

  t.equal(api.toString(), BASE());
  t.equal(api.snippets().toString(), BASE('/snippets'));
  t.equal(api.snippets(1).toString(), BASE('/snippets/1'));
  t.equal(api.snippets().new.toString(), BASE('/snippets/new'));
  t.equal(api.snippets('new').toString(), BASE('/snippets/new'));
  t.equal(api.snippets(1, '2', 3).toString(), BASE('/snippets/1/2/3'));
});

tests.add('bottle.fetch', async t => {
  const { id2 } = await bottle.get('f063cc6e0b');
  const { id, code, title, username } = await bottle.fetch('f063cc6e0b');

  t.equal(id, id2);
  t.equal(code, '1');
  t.equal(id, 'f063cc6e0b');
  t.equal(username, 'devcat');
  t.equal(title, 'test snippet');
});

tests.add('bottle.search', async t => {
  const data = await bottle.search({ query: 'snippet' });

  t.is.not.empty(data);
  t.is.string(data[0].id);
  t.is.string(data[0].code);
  t.is.number(data[0].views);
});

tests.add('bottle.latest', async t => {
  const data = await bottle.latest;

  t.is.not.empty(data);
  t.is.string(data[0].id);
  t.is.string(data[0].code);
  t.is.number(data[0].views);
});

tests.run();
