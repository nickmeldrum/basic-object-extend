var should = require('chai').should(),
    extend = require('../lib/object-extend');

describe('#extend', function() {
    it('adds a property to the object', function() {
        var original = {};

        extend.call(original, { "newProp": "oh hai" });

        original.newProp.should.equal('oh hai');
    });

    it('maintains a property that was already on the object', function() {
        var original = { "oldProp": "hello world" };

        extend.call(original, { "newProp": "oh hai" });

        original.oldProp.should.equal('hello world');
        original.newProp.should.equal('oh hai');
    });

    it('replaces a property on an object', function() {
        var original = { "prop": "hello world" };

        extend.call(original, { "prop": "oh hai" });

        original.prop.should.equal('oh hai');
    });
});

