const Task = require("./tasks-model")
const taskSchema = require("./../../data/schemas/task-schema")

const validateTaskId = async (req, res, next) => {
  const { id } = req.params
  const task = await Task.getById(id)
  if (task) {
    req.custom_task = task
    next()
  } else {
    next({
      status: 404,
      message: `Task with ID ${id} not found!`
    })
  }
}

const validateTaskPayload = async (req, res, next) => {
  const task = req.body
  try {
    const validatedTask = await taskSchema.validate(task)
    req.custom_task = validatedTask
    next()
  } catch (err) {
    next({
      status: 400,
      message: err.errors[0]
    })
  }
}

module.exports = {
  validateTaskId,
  validateTaskPayload
}
