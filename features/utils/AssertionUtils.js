const assert = require('cucumber-assert');
const assertOk =require('assert').strict;

class AssertionUtils {

    /**
     * Verify the expected value found to be Ok Or True
     * @param {*} expected 
     */
    verifyAssertTrue(expected){
        assertOk.ok(expected,'The expected value is found to be false');
    }

    /**
     * Verify The actual value is equal to expected value
     * @param {*} expected 
     * @param {*} actual 
     */
    verifyAssertEqual(expected,actual){
        assert.equal(expected,actual,'The expected value doesnt match with actual value');
    }

    /**
     * Verify the expected value should be different from actual value
     * @param {*} expected 
     * @param {*} actual 
     */
    verifyAssertNotEqual(expected,actual){
         assert.notEqual(expected,actual,'The provided values match each other');
    }

}
module.exports = new AssertionUtils();