const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests',()=>{
    suite('Basic Assertions',()=>{
        // #1
        test('#isNull, #isNotNull',(){
            assert.isNull(null, 'This is an optional error description: null is null')
            assert.isNotNull(1,'1 is not null');
        });
        
    })
})