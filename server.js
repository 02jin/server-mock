const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('8080 서버')
});

app.get('/pet', function(req, res){
    res.send('pet toy shopping')
});

app.get('/beauty', function(req, res){
    res.send('beauty instrument shopping')
});