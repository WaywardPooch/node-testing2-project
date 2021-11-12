const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const tasksRouter = require("./tasks/tasks-router")

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use((req, res, next) => {
  const now = new Date()
  const date = now.toDateString()
  const time = now.toTimeString()
  console.log(`
    --------------------
    METHOD: ${req.method}
    PATH:   ${req.originalUrl}
    DATE:   ${date}
    TIME:   ${time}
    --------------------
  `)
  next()
})

server.use("/api/tasks", tasksRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message || "Oh d-d-d-dear!"
  })
})

module.exports = server
