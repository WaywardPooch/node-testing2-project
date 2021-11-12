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

router.delete("/:id",
  validateTaskId,
  async (req, res, next) => {
    try {
      const { id } = req.params
      const deletedTask = req.custom_task
      await Task.removeById(id)
      res.status(200).json({
        message: `Task ${id} deleted, succesfully!`,
        deletedTask
      })
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
