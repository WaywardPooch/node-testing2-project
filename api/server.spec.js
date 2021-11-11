const request = require("supertest")

const server = require()
const db = require("./../data/db-config")

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

describe("[GET] /api/tasks", () => {
  it("responds with status 200", async () => {
    const expected = 200
    const res = await request(server).get("/api/tasks")
    const actual = res.status
    expect(actual).toBe(expected)
  })
})

describe("[GET] /api/tasks/:id", () => {
  it("responds with status 200", async () => {
    const expected = 200
    const res = await request(server).get("/api/tasks/1")
    const actual = res.status
    expect(actual).toBe(expected)
  })
})
