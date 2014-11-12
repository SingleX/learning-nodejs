var f = function(n){
    if(typeof n !== 'number'){
        throw new Error('n should be a Number');
    }
    if(n < 0){
        throw new Error('n should >= 0');
    }
    if(n > 10){
        throw new Error('n should <= 10');
    }
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    return f(n-1)+f(n-2);
};

if(require.main === module){
    //  终端获取参数n   
    var n = Number(process.argv[2]);
    console.log("f(" + n + ") = ", f(n));
}

exports.fibonacci = f;
