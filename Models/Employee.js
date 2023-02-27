const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name:{
    type: String,
    required:[true, `must provide Name`],
    trim: true,
    maxlength:[55, 'name cannot be more than 55 characters'],
  },
  email:{
    type:String,
    required:[true,`must provide email`],
    unique: true,
    match: /^\S+@\S+\.\S+$/
  },
  phone:{
    type:Number,
    required:[true,`must provide phone`],
    maxlength:[13, 'name cannot be more than 255 characters'],
  },
  address:{
    type:String,
    required:[true, `must provide adress`],
    maxlength:[255, 'name cannot be more than 255 characters'],
  },
  gender:{
    type:String,
    required:[true, `must provide Gender`],
    enum:['male','female']
  },
  age:{
    type:Number,
    required:true
  },
  position:{
    type:String,
    required:[true,`must provide Position`],
    enum:['BackEnd','FrontEnd','Product Owner']
  }
})

module.exports = mongoose.model('Employee', EmployeeSchema)