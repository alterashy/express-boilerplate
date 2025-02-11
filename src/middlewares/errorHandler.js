const logger = require('../utils/logger');

const errorHandler = (err, req, res, _next) => {
  logger.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
