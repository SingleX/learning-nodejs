// 测试驱动
//

var main = require('../main');
var should = require('should');

describe('test/main.test.js', function(){
    // test case 
    it('should equal 0 when n === 0', function(){
        main.fibonacci(0).should.equal(0);
    });
    // test case 
    it('should equal 1 when n === 1', function(){
        main.fibonacci(1).should.equal(1);
    });
    // test case 
    it('should equal 55 when n === 10', function(){
        main.fibonacci(10).should.equal(55);
    });
    // test case 
    it('should throw when n > 10', function(){
        (function(){
            main.fibonacci(11);
        }).should.throw('n should <= 10');
    });
    // test case 
    it('should throw when n < 0', function(){
        (function(){
            main.fibonacci(-1);
        }).should.throw('n should >= 0');
    });
    // test case 
    it('should throw when n isnt a Number', function(){
       (function(){
           main.fibonacci('xxxx');
       }).should.throw('n should be a Number');
});

});
