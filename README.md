# codebottle-js
A Node.js library to interact with CodeBottle's API.

Example:
--------

```
var codebottle = require("codebottle");
codebottle.search("example", function(data, error){
  if(error) console.log(error)
  console.log(JSON.stringify(data));
});
codebottle.search("example", function(data, error){
  if(error) console.log(error)
  console.log(JSON.stringify(data));
});
```
