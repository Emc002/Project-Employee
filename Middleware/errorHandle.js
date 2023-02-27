const {CustomAPIError} = require('../Errors/customError')
const errorHandleMiddleware = (err,req,res,next) => {
  if( err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({messages : err.message})
  }
  return res.status(500).json({messages:'Something went Wrong, please try again'})
}

module.exports = errorHandleMiddleware;