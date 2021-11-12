const up = knex => {
  return knex.schema
    .createTable("tasks", table => {
      table.increments("task_id")
      table.string("task_name", 128)
        .unique()
        .notNullable()
      table.string("task_description", 128)
      table.boolean("task_completed")
        .defaultTo(0)
    })
}

const down = knex => {
  return knex.schema
    .dropTableIfExists("tasks")
}

module.exports = { up, down }
