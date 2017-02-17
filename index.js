const fetch = require('isomorphic-fetch');
const queryString = require("querystring");
const helpers = require('./helpers.js');

const apiUrl = "https://codebottle.io/api/v1";

function search(keywords, cb, opts) {
    return fetch(apiUrl + "/search.php?" + queryString.stringify(Object.assign({
        keywords: keywords
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.results);
}

function get(id, cb, opts) {
    return fetch(apiUrl + "/get.php?" + queryString.stringify(Object.assign({
        id: id
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.data);
}

function browse(limit, cb, opts) {
    return fetch(apiUrl + "/browse.php?" + queryString.stringify(Object.assign({
        limit: limit
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.results);
}

function verifySecure(token, cb, opts) {
    fetch(apiUrl + "/verifysecure.php?" + queryString.stringify(Object.assign({
        secure_token: token
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.username);
}

function getProfile(username, cb, opts) {
    fetch(apiUrl + "/getprofile.php?" + queryString.stringify(Object.assign({
        username: username
    }, opts)))
        .then(helpers.handleResponse)
        .then(json => json.profile);
}

module.exports = {
    search,
    get,
    browse,
    verifySecure,
    getProfile
};
