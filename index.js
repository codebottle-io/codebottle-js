var fetch = require('isomorphic-fetch');
var querystring = require("querystring");
var helpers = require('./helpers.js');

var apiUrl = "https://codebottle.io/api/v1";

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
    return fetch(apiUrl + "/search.php" + objToQuery(joinObj({
        keywords: keywords
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.results);
}

function get(id, cb, opts) {
    return fetch(apiUrl + "/get.php" + objToQuery(joinObj({
        id: id
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.data);
}

function browse(limit, cb, opts) {
    return fetch(apiUrl + "/browse.php" + objToQuery(joinObj({
        limit: limit
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.results);
}

function verifySecure(token, cb, opts) {
    fetch(apiUrl + "/verifysecure.php" + objToQuery(joinObj({
        secure_token: token
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.username);
}

function getProfile(username, cb, opts) {
    fetch(apiUrl + "/getprofile.php" + objToQuery(joinObj({
        username: username
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.profile);
}

module.exports = {
    search: search,
    get: get,
    browse: browse,
    verifySecure: verifySecure,
    getProfile: getProfile
};
