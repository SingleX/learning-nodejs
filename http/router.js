function route(handle, pathname){
    console.log("About to route request : " + pathname);

    if(typeof handle[pathname] === 'function') {
        handle[pathname]();
    }else{
        console.log("No route handler found for " + pathname);
    }
}

exports.route = route;
