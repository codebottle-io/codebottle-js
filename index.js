var fetch = require('isomorphic-fetch');
var queryString = require("querystring");
var helpers = require('./helpers.js');

const apiUrl = "https://codebottle.io/api/v1";

function joinObj(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

function search(keywords, cb, opts) {
    return fetch(apiUrl + "/search.php?" + queryString.stringify(joinObj({
        keywords: keywords
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.results);
}

function get(id, cb, opts) {
    return fetch(apiUrl + "/get.php?" + queryString.stringify(joinObj({
        id: id
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.data);
}

function browse(limit, cb, opts) {
    return fetch(apiUrl + "/browse.php?" + queryString.stringify(joinObj({
        limit: limit
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.results);
}

function verifySecure(token, cb, opts) {
    fetch(apiUrl + "/verifysecure.php?" + queryString.stringify(joinObj({
        secure_token: token
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.username);
}

function getProfile(username, cb, opts) {
    fetch(apiUrl + "/getprofile.php?" + queryString.stringify(joinObj({
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
