const db = require("./../../data/db-config")

const getAll = async () => {
  const tasks = await db("tasks")
  return tasks
}

const getById = async (id) => {
  const task = await db("tasks")
    .where({ task_id: id })
    .first()
  return task
}

module.exports = {
  getAll,
  getById
}
