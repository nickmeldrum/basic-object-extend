var should = require('chai').should(),
    extend = require('../lib/object-extend');

describe('#extend', function() {
    it('adds a property to the object', function() {
        var original = {};

        extend.call(original, { "newProp": "oh hai" });

        original.newProp.should.equal('oh hai');
    });
});

