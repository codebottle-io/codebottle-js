<div align="center">
  <img alt="CodeBottle" src="https://github.com/codebottle-io/codebottle-js/raw/master/assets/bottle.png"></img>

<a href="https://discord.gg/2Sd8Um3"><img src="https://discordapp.com/api/guilds/222487241321086976/embed.png" alt="discord guild"/></a>
<a href="https://www.npmjs.com/codebottle"><img src="https://img.shields.io/npm/v/codebottle.svg?maxAge=3600" alt="version"/></a>
[![Build Status](https://travis-ci.org/codebottle-io/codebottle-js.svg?branch=master)](https://travis-ci.org/codebottle-io/codebottle-js)
<a href="https://www.npmjs.com/codebottle"><img src="https://img.shields.io/npm/dt/codebottle.svg?maxAge=3600" alt="downloads"/></a>
</div>

# Install
`npm i codebottle`

`yarn add codebottle`

# Usage
All requests return [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

For examples see [test/index.mjs](https://github.com/codebottle=io/codebottle-js/blob/master/test/index.mjs)
```js
import bottle from 'bottle';

// ...

const data = await bottle.latest;
const { id, code, title, username } = await bottle.fetch('f063cc6e0b');

// advanced api wrapper (without docs)
// recommended to not use it unless you know how to use it
const data = await bottle.api.snippets('f063cc6e0b').get();
```

All library methods and getters

```js
// Fetch specific snippet by key
bottle.fetch(key)

// Fetch language or category by key
bottle.language(key);
bottle.category(key);

// Find snippets with query and with optional language id
bottle.search({ query, language })

// Fetch latest snippets
codebottle.latest;

// Fetch all languages or categories
codebottle.languages;
codebottle.categories;
```
