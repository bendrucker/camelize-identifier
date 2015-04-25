# camelize-identifier [![Build Status](https://travis-ci.org/bendrucker/camelize-identifier.svg?branch=master)](https://travis-ci.org/bendrucker/camelize-identifier)
Convert a string into a valid JS identifier

## Installing

```sh
$ npm install camelize-identifier
```

## API

##### `camelize(name:String)` -> `identifier:String`

Given a `name`, `camelize` converts it to a camel cased JavaScript identifier. If name has a leading `_`, it will be preserved. If the `name` is a [reserved word](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), begins with an illegal leading character (anything but a letter, `$`, or `_`), contains illegal characters (e.g. `!`), `camelize` will throw. 
