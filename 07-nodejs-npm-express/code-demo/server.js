'use strict';

const EXPRESS = require('express');
const PARSER = require('body-parser').urlencoded({extended: true});
// const FS = require('fs');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

let someData = {one: 1, two: 2};

APP.get('/data', function(request, response){
  response.send(someData)
})

APP.post('/new-thing', PARSER, function(request, response){
  console.log(request.body)
  // FS.writeFile('dataFile.txt', JSON.stringify(request.body));
})

APP.get('*', function(request, response){
  response.sendFile('404.html', {root: './public'});
})

APP.listen(PORT, function(){
  console.log(`Express server currently running on port ${PORT}`);
});
