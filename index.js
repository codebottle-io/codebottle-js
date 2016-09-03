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

function search(keywords, cb) {
    getApiCall("/search.php" + objToQuery({
        keywords: keywords
    }), function(obj, e) {
        cb(obj.results, e)
    });
}

function get(id, cb) {
    getApiCall("/get.php" + objToQuery({
        id: id
    }), function(obj, e) {
        cb(obj.data, e)
    });
}

function browse(limit, cb) {
    getApiCall("/browse.php" + objToQuery({
        limit: limit
    }), function(obj, e) {
        cb(obj.results, e)
    });
}

function verifySecure(token, cb) {
    getApiCall("/verifysecure.php" + objToQuery({
        secure_token: token
    }), function(obj, e) {
        cb(obj.username, e)
    });
}

module.exports = {
    search: search,
    get: get,
    browse: browse,
    verifySecure: verifySecure
};
