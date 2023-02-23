import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { loginRouter } from './routers/login-router.js';

export function start(port = 3000) {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  app.use('/login', loginRouter());

  app.listen(port, () => {
    console.log('Server listening on port', port)
  })
}