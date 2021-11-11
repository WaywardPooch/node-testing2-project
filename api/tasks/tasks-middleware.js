const Task = require("./tasks-model")

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

module.exports = { validateTaskId }
