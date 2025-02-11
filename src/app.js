require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./utils/logger');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/', routes);

// Error handling
app.use(errorHandler);

// Server
app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
