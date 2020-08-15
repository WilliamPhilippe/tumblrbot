/* eslint-disable no-console */
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { errors } from 'celebrate';

import AppError from '@shared/erros/AppError';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

app.listen(3333, () => {
  console.log('🎈 Server started on port: [3333]');
});
