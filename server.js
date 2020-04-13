const express = require('express')
const app   = express()
const http  = require('http').createServer(app)
const port  = 3000

app.use('/assets', express.static('assets'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function() {
    console.log('listening on *:' + port)
})