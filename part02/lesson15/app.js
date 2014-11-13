var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', {
    name:String,
    friends:[String],
    age:Number
});

var kitty = new Cat({ name:'wakaka', friends:['tom', 'jerry'] });
kitty.age = 3;

kitty.save(function(err){
    if(err){
        console.log(err);
    }
    console.log("miao~~~");
});
