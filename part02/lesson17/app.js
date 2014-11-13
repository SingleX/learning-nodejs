var fs = require('fs');

fs.readFile('test.txt', 'utf-8', function(err, data){
    console.log(data);
});

console.log('=============================');

var Q = require('q');
var defer = Q.defer();

function getInitPromise(){
    return defer.promise;
}

getInitPromise().then(function(success){
    console.log(success);
}, function(error){
    console.log(error);
}, function(progress){
    console.log(progress);
});

defer.notify('in progress');
defer.resolve('resolve');
defer.reject('reject');
