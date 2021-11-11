const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" }
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: "./data/tasks.db3"
    }
  },
  testing: {
    ...sharedConfig,
    connection: {
      filename: "./data/test.db3"
    }
  }
}
