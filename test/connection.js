const mongoose = require('mongoose');

//ES6 promises
mongoose.Promise = global.Promise;

//Connect to the db before tests run
before(function(done){
    // Connect to mongoDb
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });
    mongoose.connection.once('open', function(){
        console.log('Connection has been made. now make fireworks');
        done();
    }).on('error', function(error){
        console.log('Connection error', error);
    });
}) 

// Drop the characters collection before each test
beforeEach(function(done){
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})