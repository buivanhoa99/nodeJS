var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// parse application/x-www-form-urlencoded
app.use(urlencodedParser)
var jsonParser = bodyParser.json()
// parse application/json
app.use(bodyParser.json())
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})

app.get('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})
app.listen(8000);