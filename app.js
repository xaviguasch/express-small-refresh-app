const http = require('http')

const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('in the middleware')
  next() // Allows the request to continue to the next
  // middleware in line
})
app.use((req, res, next) => {
  console.log('in ANOTHER middleware')
})

const server = http.createServer(app)

server.listen(3000)
