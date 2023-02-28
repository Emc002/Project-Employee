const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `must provide Name`],
    trim: true,
    maxlength: [55, 'name cannot be more than 55 characters'],
  },
  email: {
    type: String,
    required: [true, `must provide email`],
    unique: true,
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: 'Please Input Email Correctly'
    },
  },
  phone: {
    type: Number,
    required: [true, `must provide phone`],
    unique: true,
    validate:
    {
      validator: function (v) {
        return /^(\d{1,13}|\d{0})$/.test(v);
      },
      message: `Your Phone Number must have at most 13 digits!`
    },
  },
  address: {
    type: String,
    required: [true, `must provide adress`],
    maxlength: [255, 'name cannot be more than 255 characters'],
  },
  gender: {
    type: String,
    required: [true, `must provide Gender`],
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not Supported',
    }
  },
  age: {
    type: Number,
    required: [true, `must provide Age`]
  },
  position: {
    type: String,
    required: [true, `must provide Position`],
    enum: {
      values: ['BackEnd', 'FrontEnd', 'Product Owner'],
      message: '{VALUE} is not exist on the list',
    }
  }
})

module.exports = mongoose.model('Employee', EmployeeSchema)