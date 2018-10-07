import bottle from '../';
import Simulor from 'simulor';

const tests = new Simulor;

const BASE = (str = '') => `https://api.codebottle.io${str}`;

tests.add('constructing api url', t => {
  t.equal(bottle.toString(), BASE());
  t.equal(bottle.snippets().toString(), BASE('/snippets'));
  t.equal(bottle.snippets(1).toString(), BASE('/snippets/1'));
  t.equal(bottle.snippets('new').toString(), BASE('/snippets/new'));

  // Crazy proxy stuff
  t.equal(bottle.snippets().new.toString(), BASE('/snippets/new'));

  // If API ever adds new endpoints and they aren't yet supported on this library
  t.equal(bottle.newendpoint[1].toString(), BASE('/newendpoint/1'));
  t.equal(bottle.newendpoint.new.toString(), BASE('/newendpoint/new'));
});

tests.add('Fetching snippet \'f063cc6e0b\'', async t => {
  const { id, code, title, username } = await bottle.snippets('f063cc6e0b').get();

  t.equal(code, '1');
  t.equal(id, 'f063cc6e0b');
  t.equal(username, 'devcat');
  t.equal(title, 'test snippet');
});

tests.run();