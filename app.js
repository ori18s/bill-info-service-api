const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const c = require('ansi-colors');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  console.log(c.yellow('* dotenv activated'));
  require('dotenv').config();
}
const {name, version} = require('./package.json');

const indexRouter = require('./routes/index');
const billRouter = require('./routes/bill');

const app = express();

app.set('port', process.env.APP_PORT || 8080);

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.disable('x-powered-by');

app.use('/', indexRouter);
app.use('/api/bill', billRouter);

const swaggerDefinition = {
  swagger: '2.0',
  info: {
    title: name || 'Swagger UI',
    version: version || '1.0.0',
    description: 'Api documentation with swagger-ui and jsdoc.'
  },
  basePath: '/api',
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  security: [{jwt: []}]
};

const swaggerJsdocOptions = {
  swaggerDefinition,
  apis: ['routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerJsdocOptions);

app.use('/api', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: res.locals.message,
    error: res.locals.error,
  });
});

app.listen(app.get('port'), () => {
  console.log(c.red(`[${NODE_ENV}] Listening on port ${app.get('port')}`));
});

module.exports = app;
