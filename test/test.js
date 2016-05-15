var assert = require('assert');

describe('Array Test', function() {
    describe('indexOf() Method', function() {
        it('returns -1 if no value', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});