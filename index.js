var getFacebookId = require('./lib/getFacebookId');

var isString = (s) => typeof s === 'string' || s instanceof String;

function getFacebookIds(usernames, cb) {
    /* usernames: Array
     * cb : Function */
    var counter = 0;
    var ids = {}; // username => id

    usernames.forEach((username) => getFacebookId(username, (id) => {
        ids[username] = id;
        if(++counter >= usernames.length) cb(usernames.map((u) => ids[u]));
    }));
}

module.exports = function(usernames, cb) {
    if(isString(usernames)) usernames = usernames.split(/[ ,]/);

    if(Array.isArray(usernames)) getFacebookIds(usernames, cb);
    else throw "Given username is not a String or an Array.";
}
