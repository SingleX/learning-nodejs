function route(handle, pathname){
    console.log("About to route request : " + pathname);

    if(typeof handle[pathname] === 'function') {
        return handle[pathname]();
    }else{
        console.log("No route handler found for " + pathname);
        return "404 Not Found !";
    }
}

exports.route = route;
