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
codebottle.getLatest().then(console.log);
```

Documentation
--------

- All functions return **Promises.** This means you can `await` things.
- All responses have `_status` field, which is the HTTP status. This does **NOT** include errors

#### Available functions

```JavaScript
codebottle.search(keywords, language);      // Search snippets, language (id) is optional
codebottle.getLatest();                     // Gets latest snippets
codebottle.get(id);                         // Get snippet by ID
codebottle.getCategories();                 // Gets all categories
codebottle.getCategory(id);                 // Gets category by ID
codebottle.getLanguages();                  // Gets all languages
codebottle.getLanguage(id);                 // Get language by ID
```

#### Response

The response is simply the API response itself, but the `_status` field added to it. See [CodeBottle's documentation](https://codebottle.io/api/docs/getting-started) to get an idea what different requests return.

#### Catching failures

Since what you get is a promise, all there to it is to use `.catch`:

```JavaScript
codebottle.getLatest().then(console.log)
    .catch(error => console.error('duh fix your internet'));
```

>Errors are thrown when the API returns a non-200 status code. (such as bad parameters)
