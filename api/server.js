const express = require("express")
const tasksRouter = require("./tasks/tasks-router")

const server = express()

server.use(express.json())
server.use("/api/tasks", tasksRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message || "Oh d-d-d-dear!"
  })
})

module.exports = server
