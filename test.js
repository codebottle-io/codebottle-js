var codebottle = require("./index.js");

codebottle.search("example", function(data, error){
  if(error) throw error
  console.log(JSON.stringify(data)); //Array with snippets
});

codebottle.get("9eb3e48c", function(data, error){
  if(error) throw error
  console.log(JSON.stringify(data)); //Object with snippets propertys
});

codebottle.browse(2, function(data, error){
  if(error) throw error
  console.log(JSON.stringify(data)); //Array with snippets
});

codebottle.verifySecure("secure-token-goes-here", function(data, error){
  if(error) console.log(error) // Its expected, just check for no sytax errors
  console.log(data); // Username
});

codebottle.getProfile("iovoid", function(data, error){
  if(error) throw error
  console.log(JSON.stringify(data)); //Object with profile propertys
});
