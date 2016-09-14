# codebottle-js [![Build Status](https://travis-ci.org/codebottle-io/codebottle-js.svg?branch=master)](https://travis-ci.org/codebottle-io/codebottle-js)

A Node.js library to interact with CodeBottle's API.

[![npmjs repository](https://nodei.co/npm/codebottle.png?downloads=true&stars=true)](https://www.npmjs.com/package/codebottle)
Example:
--------

```javascript
var codebottle = require("codebottle");

codebottle.search("example", function(data, error){
  if(error) console.log(error)
  console.log(JSON.stringify(data)); //Array with snippets
});

codebottle.get("get", function(data, error){
  if(error) console.log(error)
  console.log(JSON.stringify(data)); //Object with snippets propertys
});

codebottle.browse(2, function(data, error){
  if(error) console.log(error)
  console.log(JSON.stringify(data)); //Array with snippets
});

codebottle.verifySecure("secure-token-goes-here", function(data, error){
  if(error) console.log(error)
  console.log(data); // Username
});
```
Installing
----------
```npm install codebottle```
