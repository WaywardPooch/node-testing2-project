const { PORT } = require("./config")
const server = require("./api/server")

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`)
})
