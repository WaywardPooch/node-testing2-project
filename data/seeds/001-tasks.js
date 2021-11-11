const tasks = [
  {
    task_name: "take out the trash",
    task_completed: true
  },
  {
    task_name: "scaffold build week project",
  },
  {
    task_name: "ensure PC software is stable",
    task_description: "double check that you can run all Lambda School's required software"
  }
]

const seed = knex => {
  return knex("tasks")
    .truncate()
    .then(() => {
      return knex("tasks").insert(tasks)
    })
}

module.exports = { seed, tasks }
