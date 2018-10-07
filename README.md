# Install
`npm i codebottle`

`yarn add codebottle`

# Usage
All requests return [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Request is never sent until you call one of HTTP methods

```js
import bottle from 'codebottle';

// somewhere in async function
const { data } = await bottle.snippets('f063cc6e0b').get();

console.log(data.title);
```

You can pass query data to HTTP method call
```js
bottle.snippets('new').post({ my: 'awesome query' }).then(...);
```

You will only need HTTP methods `.get` and `.post` but you can use any other that [snekfetch](https://snekfetch.js.org/?api=snekfetch) supports
```js
bottle.snippets().get({ foo: 'bar' }).then(...);
bottle.snippets().post({ foo: 'bar' }).then(...);

// API doesn't support it but you are still able to do this
bottle.snippets().search({ foo: 'bar' }).then(...);
```

# API URL constructing
To make working api url you just need to follow codebottle.io API endpoints docs
```js
// Current supported functions: snippets,languages,categories

// GET /snippets
bottle.snippets() // .get()

// GET /snippets/1
bottle.snippets(1) // .get()
bottle.snippets('1') // .get()

// GET /languages/1
bottle.languages(1) // .get()


// If there are any unsupported functions

// GET /users/1
bottle.users[1] // .get()

// GET /users/devcat
bottle.users.devcat // .get()
bottle.users['devcat'] // .get()
```
