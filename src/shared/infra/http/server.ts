import express from 'express';
import cors from 'cors';

import { errors } from 'celebrate';

import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use(errors());

// app.use(
//   (error: Error, request: Request, response: Response, _: NextFunction) => {
//     if (error instanceof AppError) {
//       return response.status(error.statusCode).json({
//         status: 'error',
//         message: error.message,
//       });
//     }

//     // eslint-disable-next-line no-console
//     console.log(error);

//     return response.status(500).json({
//       status: 'error',
//       message: 'Internal Server Error',
//     });
//   },
// );

app.listen(3333, () => {
  console.log('🎈 Server started on port: [3333]');
});
