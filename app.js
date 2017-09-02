const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World from node js!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})