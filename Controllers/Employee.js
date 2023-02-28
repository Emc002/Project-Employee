const Employee = require('../Models/Employee')
const asyncWrapper = require('../Middleware/async')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../Errors')
const { default: mongoose } = require('mongoose');

const employeePack = {
  getAllEmployee: asyncWrapper(async (req, res) => {
    const employee = await Employee.find({})
    if (!employee) {
      throw new NotFoundError(`No Employee Data`, 404)
    }
    res.status(StatusCodes.OK).json({ message: "Get All Success", employee })
  }),

  getOneEmployee: asyncWrapper(async (req, res) => {
    const ID = req.params.id
    const employee = await Employee.findOne({ _id: ID })
    if (employee == null) {
      throw new NotFoundError(`No Employee with ID : ${ID}`, 404)
    }
    res.status(StatusCodes.OK).json({ message: "Get One Success", employee })
  }),

  createEmployee: asyncWrapper(async (req, res) => {    
    const employee = await Employee.create(req.body)
    res.status(StatusCodes.CREATED).json({ message: "Create Success", employee })
  }),

  updateEmployee: asyncWrapper(async (req, res) => {
    const ID = req.params.id
    const employee = await Employee.findOneAndUpdate({ _id: ID }, req.body, {
      new: true,
      runValidators: true
    })
    if (!employee) {
      throw new NotFoundError(`No Employee with ID : ${ID}`, 404)
    }
    res.status(StatusCodes.OK).json({ message: "Update Success", employee })
  }),

  deleteEmployee: asyncWrapper(async (req, res) => {
    const ID = req.params.id;
    const employee = await Employee.findOneAndDelete({ _id: ID })
    if (!employee) {
      throw new NotFoundError(`No Employee with ID : ${ID}`, 404)
    }
    res.status(StatusCodes.OK).json({ message: "Delete Success" })
  })
}

module.exports = employeePack;