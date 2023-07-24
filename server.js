const express = require("express")
const server = express()
const boredRouter = require('./api/boredRouter')

server.use(express.json())
server.use('/bored', boredRouter)

module.exports = server