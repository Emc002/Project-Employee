const Employee = require('../Models/Employee')
const asyncWrapper = require('../Middleware/async')
const { createCustomError } = require('../Errors/customError')

const employeePack = {
  getAllEmployee: asyncWrapper(async (req, res) => {
    const employee = await Employee.find({})
    if (!employee) {
      return res.status(404).json({ messages: `No Employee Data` })
    }
    res.status(200).json({ employee })
  }),

  getOneEmployee: asyncWrapper(async (req, res) => {
    const ID = req.params.id
    const employee = await Employee.findOne({ _id: ID })
    if (!employee) {
      return res.status(404).json({ messages: `No Employee with ID : ${ID}` })
    }
    res.json({ employee })
  }),

  createEmployee: asyncWrapper(async (req, res) => {
    const employee = await Employee.create(req.body)
    res.status(201).json({ employee })
  }),

  updateEmployee: asyncWrapper(async (req, res) => {
    const ID = req.params.id
    const employee = await Employee.findOneAndUpdate({ _id: ID }, req.body, {
      new: true,
      runValidators: true
    })
    if (!employee) {
      return next(createCustomError(`No Employee with ID : ${ID}`, 404))
    }
    res.status(200).json({ employee })
  }),

  deleteEmployee: asyncWrapper(async (req, res) => {
    const ID = req.params.id;
    const employee = await Employee.findOneAndDelete({ _id: ID })
    if (!employee) {
      return next(createCustomError(`No Employee with ID : ${ID}`, 404))
    }
    res.json({ employee })
  })
}

module.exports = employeePack;