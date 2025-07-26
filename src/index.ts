import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import {createServer} from 'http';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
app.use('/', require('./routes'));

(async() => {
  try {
    const server = createServer(app);
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    }); 
  } catch (error) {
    if(error instanceof Error){
      console.error('Server error: ', error.name);
      console.error(error.stack);
    } else {
      console.error("Unknown Error!");
    }
  }
})();