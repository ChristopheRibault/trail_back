import express from 'express';
import Promise from 'bluebird';

import external from './external.routes';

const routes = [
  ...external,
];

export const createRouter = (app) => {
  const router = express.Router();

  try {
    routes.forEach((r) => {
      router[r.method.toLowerCase()](r.path, (req, res, next) => {
        Promise.each(r.validators, validator => validator(req, res))
          .then(() => r.handler(req, res))

        // render the actual response
          .then(data => {
            if (!res.headersSent) return renderSuccess(res, data);
          })
          .catch(next);
      });
    });
  }
  catch (err) {
    bugsnag.customNotify(err, { severity: 'error' });
  }

  app.use(router);
};
