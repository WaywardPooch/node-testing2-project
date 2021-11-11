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

router.get("/:id",
  async (req, res, next) => {
    try {
      const { id } = req.params
      const task = await Task.getById(id)
      res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
