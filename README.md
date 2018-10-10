# codebottle-js [![Snippets Stats](https://codebottle.io/embed/search-badge?keywords=codebottle-js&language=6)](https://codebottle.io/?q=codebottle-js)

A Node.js library to interact with CodeBottle's API.

[![npmjs repository](https://nodei.co/npm/codebottle.png?downloads=true&stars=true)](https://www.npmjs.com/package/codebottle)

Installing
----------

```
npm i codebottle
```

Quick start
--------
> The library works as you expect it to.

```JavaScript
const codebottle = require('codebottle');
codebottle.latest.then(console.log);
```

Documentation
--------

- All functions return **Promises.** This means you can `await` things.

#### Available functions

```JavaScript
codebottle.search({ query, language });      // Search snippets, language (id) is optional
codebottle.fetch(id);                         // Get snippet by ID
codebottle.category(id);                 // Gets category by ID
codebottle.language(id);                 // Get language by ID

// All of these still return Promise
codebottle.latest;                     // Gets latest snippets
codebottle.languages;                  // Gets all languages
codebottle.categories;                 // Gets all categories
```

#### Response

The response is simply the API response itself. See [CodeBottle's documentation](https://codebottle.io/api/docs/getting-started) to get an idea what different requests return.

#### Catching failures

Since what you get is a promise, all there to it is to use `.catch`:

```JavaScript
codebottle.latest.then(console.log)
    .catch(error => console.error('duh fix your internet'));
```

>Errors are thrown when the API returns a non-200 status code. (such as bad parameters)
