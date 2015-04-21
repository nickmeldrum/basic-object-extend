Basic-Object-Extend
===================

A very small and simplistic function for extending a JS object. There are lots out there, but this one is possibly unique in that it's typical usage is to call it using call/ apply or bind as it operates on the 'this' object. This may or may not be a good thing, but you now have a choice whether to use this package or one that doesn't do this!

## Installation
  
    npm install basic-object-extend

## Usage

    var extend = require('basic-object-extend');
    var originalObject = {};

    extend.call(originalObject, {"newProp": "oh hai there"});
    console.log(originalObject.newProp);

## Tests

    npm test

