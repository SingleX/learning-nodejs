var Q = require('q');
var defer = Q.defer();
/**
 *  * 通过defer获得promise
 *   * @private
 *    */
function getInputPromise() {
        return defer.promise;

}

/**
 *  * 当inputPromise状态由未完成变成fulfil时，调用function(fulfiled)
 *   * 当inputPromise状态由未完成变成rejected时，调用function(rejected)
 *    * 将then返回的promise赋给outputPromise
 *     * function(fulfiled) 和 function(rejected) 通过返回字符串将outputPromise的状态由
 *      * 未完成改变为fulfiled
 *       * @private
 *        */
var outputPromise = getInputPromise().then(function(fulfiled){
        return 'fulfiled';

},function(rejected){
        return 'rejected';

});

/**
 *  * 当outputPromise状态由未完成变成fulfil时，调用function(fulfiled)，控制台打印'fulfiled: fulfiled'。
 *   * 当outputPromise状态由未完成变成rejected, 调用function(rejected), 控制台打印'fulfiled: rejected'。
 *    */
outputPromise.then(function(fulfiled){
        console.log('fulfiled: ' + fulfiled);

},function(rejected){
        console.log('rejected: ' + rejected);

});

/**
 *  * 将inputPromise的状态由未完成变成rejected
 *   */
defer.reject(); //输出 fulfiled: rejected

/**
 *  * 将inputPromise的状态由未完成变成fulfiled
 *   */
//defer.resolve(); //输出 fulfiled: fulfiled
