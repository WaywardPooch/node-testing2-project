const router = require("express").Router()
const Task = require("./tasks-model")

router.get("/",
  async (req, res, next) => {
    try {
      const tasks = await Task.getAll()
      res.status(200).json(tasks)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
