function start(){
    console.log('RequestHandler "start" was called');
    // 模拟阻塞操作
    function sleep(milliSeconds){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
    return "hellp start...";
}

function upload(){
    console.log('RequestHandler "upload" was called');
    return "hellp upload...";
}

exports.start = start;
exports.upload = upload;
