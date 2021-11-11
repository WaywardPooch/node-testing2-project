const router = require("express").Router()
const Task = require("./tasks-model")
const { validateTaskId } = require("./tasks-middleware")

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
  validateTaskId,
  async (req, res, next) => {
    try {
      const { id } = req.params
      const task = req.custom_task
      res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
