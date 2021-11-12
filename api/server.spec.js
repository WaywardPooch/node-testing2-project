const request = require("supertest")

const server = require("./server")
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
  it("responds with status 200 when ID is valid", async () => {
    const expected = 200
    const res = await request(server).get("/api/tasks/1")
    const actual = res.status
    expect(actual).toBe(expected)
  })
  it("responds with status 404 when ID is invalid", async () => {
    const expected = 404
    const res = await request(server).get("/api/tasks/7")
    const actual = res.status
    expect(actual).toBe(expected)
  })
})

describe("[POST] /api/tasks", () => {
  let newTask
  beforeEach(() => {
    newTask = { task_name: "find the key" }
  })

  it("responds with status 201 when request is successful", async () => {
    const expected = 201
    const res = await request(server).post("/api/tasks").send(newTask)
    const actual = res.status
    expect(actual).toBe(expected)
  })
  it("responds with status 400 when task_name is missing", async () => {
    const expected = 400
    const badPayload = { task_completed: false }
    const res = await request(server).post("/api/tasks").send(badPayload)
    const actual = res.status
    expect(actual).toBe(expected)
  })
  it("can add valid task to database", async () => {
    const expected = {
      task_id: 4,
      task_name: "find the key",
      task_description: null,
      task_completed: false
    }
    await request(server).post("/api/tasks").send(newTask)
    const res = await request(server).get("/api/tasks/4")
    const actual = res.body
    expect(actual).toEqual(expected)
  })
  it("returns the newly added task when successful", async () => {
    const expected = {
      task_id: 4,
      task_name: "find the key",
      task_description: null,
      task_completed: false
    }
    const res = await request(server).post("/api/tasks").send(newTask)
    const actual = res.body
    expect(actual).toEqual(expected)
  })
})
