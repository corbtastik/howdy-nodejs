const express = require('express')
const port = process.env.PORT || 9090
const crypto = require('crypto-js')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.text({ type: 'text/plain' }))

app.get('/howdy', function(req, res) {
    res.send('Howdy Nodejs!')
})

app.post('/echo', function(req, res) {
    var body = req.body;
    console.log(body);
    res.send(body);
})

app.post('/crypto/aes/encrypt/:key', function(req, res) {
    var _key = req.params.key
    if(!_key) {
        _key = "howdy"
    }

    var encrypted = crypto.AES.encrypt(req.body, _key)
    console.log("encrypted=" + encrypted)

    res.set('Content-Type', 'text/plain');
    res.send(encrypted.toString())
})

app.post('/crypto/aes/decrypt/:key', function(req, res) {
    var _key = req.params.key
    if(!_key) {
        _key = "howdy"
    }
    var decrypted = crypto.AES.decrypt(req.body, _key);
    var result = decrypted.toString(crypto.enc.Utf8)

    res.set('Content-Type', 'text/plain');
    res.send(result)

})

app.listen(port, function() {
    console.log('Nodejs app listening on port: ' + port)
})
