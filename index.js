let getFacebookId = require('./lib/getFbId');

const isString = (s) => typeof s === 'string' || s instanceof String;

function getFacebookIds(usernames, cb) {
    /* usernames: Array
     * cb : Function */
    let counter = 0;
    let ids = {}; // username => id

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
