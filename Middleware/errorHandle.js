const errorHandleMiddleware = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const errors = {};
    for (let field in err.errors) {
      errors[field] = err.errors[field].message;
    }
    const message = err.name
    return res.status(400).json({ errors, message });
  }

  else if (err.statusCode === 404) {
    const message = err.message
    return res.status(err.statusCode).json({ message });
  }

  else if (err.name === 'CastError') {
    const message = 'Invalid ID';
    return res.status(400).json({ message });
  }

  else if (err.code === 11000) {
    let message = Object.keys(err.keyValue)[0];
    message += " Already Exist"
    return res.status(400).json({ message });
  }

  else if (err.name === 'MongoNotConnectedError') {
    const message = 'Server Not Connected';
    return res.status(500).json({ message });
  }
  return res.status(500).json({ message: 'Something went wrong, please try again' });
};


module.exports = errorHandleMiddleware;
