const Task = require("./tasks-model")
const db = require("./../../data/db-config")
const { tasks } = require("./../../data/seeds/001-tasks")

it("is using the 'testing' environment", () => {
  expect(process.env.NODE_ENV).toBe("testing")
})

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe("Task Model", () => {
  describe("getAll()", () => {
    let data
    beforeEach(async () => {
      data = await Task.getAll()
    })

    it("resolves to an array of the expected length", async () => {
      expect(data).toHaveLength(3)
    })
    it("resolves to a match of the seed data", async () => {
      expect(data).toMatchObject(tasks)
    })
  })

  describe("getById()", () => {
    it("returns a valid task object", async () => {
      const expected = {
        task_id: 1,
        task_name: "take out the trash",
        task_description: null,
        task_completed: true
      }
      const actual = await Task.getById(1)
      expect(actual).toEqual(expected)
    })
  })
})
