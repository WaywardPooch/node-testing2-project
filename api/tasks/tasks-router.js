const router = require("express").Router()
const Task = require("./tasks-model")
const {
  validateTaskId,
  validateTaskPayload
} = require("./tasks-middleware")

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
      const task = req.custom_task
      res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }
)

router.post("/",
  validateTaskPayload,
  async (req, res, next) => {
    try {
      const task = req.custom_task
      const newTask = await Task.add(task)
      res.status(201).json(newTask)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
