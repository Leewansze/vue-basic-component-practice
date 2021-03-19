var express = require('express')
var app = express()
var api = require('./route')

// 允许跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

var cors = require('cors')
app.use(cors())
app.use('/api', api)
var server = app.listen(8085, function () {
  var host = 'localhost'
  var port = server.address().port
  console.log('Server has running at http://%s:%s', host, port)
})
