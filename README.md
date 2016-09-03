# codebottle-js
A Node.js library to interact with CodeBottle's API.

Example:
--------

```
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
