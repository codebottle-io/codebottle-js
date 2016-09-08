var codebottle = require("./index.js");
codebottle.search("example", function(data, error){
  if(error) throw error
  console.log(JSON.stringify(data)); //Array with snippets
});
codebottle.get("get", function(data, error){
  if(error) throw error
  console.log(JSON.stringify(data)); //Object with snippets propertys
});
codebottle.browse(2, function(data, error){
  if(error) throw error
  console.log(JSON.stringify(data)); //Array with snippets
});
codebottle.verifySecure("secure-token-goes-here", function(data, error){
  if(error) throw error
  console.log(data); // Username
});
