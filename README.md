# Scrape-Facebook-Id
This module is for finding facebook id by username
## Preface

Since the API of Facebook removed support for look up of id by username, it became quite inconvenient when our app requires that functionality. So I have created this simple interface for doing that.

## Install

### Local

```
> npm i --save scrape-facebook-id
```

### Global (useful for command line interface)

```
> npm i -g scrape-facebook-id
```

## Command line interface

`get-fb-ids` could be called to retrieve an id given username.

For example:

```
> get-fb-ids jithin.antony.official
100045240849357
```

Multiple ids could be fetch at once:

```
> get-fb-ids jithin.antony.official someotheruser invaliduser
100045240849357
1234567
`invaliduser` not found
```

## Using the API

The module exports a function that takes in a `username` and `callback`.

```javascript
let getFBIds = require('scrape-facebook-id');

getFBIds('jithin.antony.official', function(ids) {
  // If user is not found, id would be `false`
  console.log(id[0]);
});
```

Multiple ids:

```javascript
let getFBIds = require('scrape-facebook-id');

getFacebookIds('jithin.antony.official someotheruser invaliduser', function(ids) {
  // If user is not found, id would be `false`
  console.log(ids);
});
```

The result of the above script would be `[100045240849357, 1234567, false]`.


## License
This project is licensed under the MIT license, Copyright (c) 2021 Jithin Antony. For more information see LICENSE.md.
