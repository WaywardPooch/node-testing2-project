const db = require("./../../data/db-config")

const getAll = async () => {
  const tasks = await db("tasks")
  return tasks.map(task => {
    return {
      ...task,
      task_completed: Boolean(task.task_completed)
    }
  })
}

const getById = async (id) => {
  const task = await db("tasks")
    .where({ task_id: id })
    .first()
  if (task) {
    return {
      ...task,
      task_completed: Boolean(task.task_completed)
    }
  } else {
    return null
  }
}

module.exports = {
  getAll,
  getById
}
