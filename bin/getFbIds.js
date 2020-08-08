#!/usr/bin/env node
const getFacebookIds = require('../index');

const usernames = process.argv.slice((process.argv[0] === 'get-fb-ids')? 1: 2);

const NOT_FOUND_MSG = (username) => `\`${username}\` not found`;

getFacebookIds(usernames, (ids) => {
    ids.forEach((id, i) => console.log(id || NOT_FOUND_MSG(usernames[i])));
});
