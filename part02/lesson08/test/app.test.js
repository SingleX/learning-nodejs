var app = require('../app');
var supertest = require('supertest');

// use supertest API!!
var request = supertest(app);

var should = require('should');

describe('test/app.test.js', function(){
    it('should return 55 when n=10', function(done){
        request.get('/fib')
        .query({n:10})
        .end(function(err, res){
            res.text.should.equal('55');
//            should.not.exist(err);
            done(err);
        });
    });
});

//下面写测试代码就行了

it('xxxxxx', function(done){
    testFibonacci();
});
