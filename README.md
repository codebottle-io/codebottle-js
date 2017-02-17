# codebottle-js [![Build Status](https://travis-ci.org/codebottle-io/codebottle-js.svg?branch=master)](https://travis-ci.org/codebottle-io/codebottle-js)

A Node.js library to interact with CodeBottle's API.

[![npmjs repository](https://nodei.co/npm/codebottle.png?downloads=true&stars=true)](https://www.npmjs.com/package/codebottle)

Installing
----------

```
npm install codebottle
```

Usage
--------

The library is very self-explanatory, really.

Get an instance:

```
const codebottle = require('codebottle');
```

And then you could do stuff like:

```
codebottle.search("awesome stuff to search")
	.then(console.log) // Logs an array of snippets
	.catch(error => {  // Something terrible happened.
		// idk, deal with it.
	});
```

Handling errors
---------

The `error` object thrown to `catch` contains two useful keys, `status` and `error`, here's an example:

```
{
	status: 400,
	error: "No id specified"
}
```


Documentation
---------

This isn't a the documentation that will span many pages and then you go by asking a question in some whatever place about an issue then you get referred to read the docs but then you never find the actual piece of information you need just because the doc is silly and long and/or you can't actually understand what the doc is trying to tell you.

Basically each API action has its own defined method. Let's have an instance first:

```
const codebottle = require('codebottle');
```

In this case, these functions are available:

```
codebottle.search
codebottle.get
codebottle.browse
codebottle.verifySecure
codebottle.getProfile
```

Parameters are self-explanatory, really. All functions take an extra parameter, `opts`, which is additional parameters to pass directly to the API, in the form of an object.


> If you actually think that this doc stinks, just PR a change, put it in a wiki or something, idk