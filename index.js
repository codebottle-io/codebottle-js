var request = require('request');
var querystring = require("querystring");

var apiUrl = "https://codebottle.io/api/v1";

function getApiCall(url, cb) {
    request(apiUrl + url, function(error, response, body) {
        if (!error) {
            var result = JSON.parse(body);
            if (result.status != 200) cb({}, new Error(result.error))
            cb(result);
        } else console.log(error)
    });
}

function objToQuery(params) {
    return "?" + querystring.stringify(params);
}
function joinObj(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}
function search(keywords, cb, opts) {
    getApiCall("/search.php" + objToQuery(joinObj({
        keywords: keywords
    }, opts)), function(obj, e) {
        cb(obj.results, e)
    });
}

function get(id, cb, opts) {
    getApiCall("/get.php" + objToQuery(joinObj({
        id: id
    }, opts)), function(obj, e) {
        cb(obj.data, e)
    });
}

function browse(limit, cb, opts) {
    getApiCall("/browse.php" + objToQuery(joinObj({
        limit: limit
    }, opts)), function(obj, e) {
        cb(obj.results, e)
    });
}

function verifySecure(token, cb, opts) {
    getApiCall("/verifysecure.php" + objToQuery(joinObj({
        secure_token: token
    }, opts)), function(obj, e) {
        cb(obj.username, e)
    });
}

function getProfile(username, cb, opts) {
    getApiCall("/getprofile.php" + objToQuery(joinObj({
        username: username
    }, opts)), function(obj, e) {
        cb(obj.profile, e)
    });
}

module.exports = {
    search: search,
    get: get,
    browse: browse,
    verifySecure: verifySecure,
    getProfile: getProfile
};
