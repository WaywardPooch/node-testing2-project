const yup = require("yup")

const taskSchema = yup.object().shape({
  task_id: yup
    .mixed()
    .oneOf([undefined], "task payloads cannot include an id"),
  task_name: yup
    .string()
    .trim()
    .required("task_name is required")
    .max(64, "task_name must be less than 64 characters long"),
  task_description: yup
    .string()
    .trim()
    .max(128, "task_description must be less than 128 characters long"),
  task_completed: yup
    .boolean()
})

module.exports = taskSchema
