//benchmark可以测试干成同一件事时，不同方法的执行效率

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var int1 = function(str){
    return +str;
};

var int2 = function(str){
    return parseInt(str, 10);
};

var int3 = function(str){
    return Number(str);
};


// benchmark suit

var number = '100';

suite
.add('+       ', function(){
    int1(number);
})
.add('parseInt', function(){
    int2(number);
})
.add('Number  ', function(){
    int3(number);
})
.on('cycle', function(event){
    console.log(String(event.target));
})
.on('complete', function(){
    console.log('Fastest is: ' + this.filter('fastest').pluck('name'));
})
.run({'async':true});

