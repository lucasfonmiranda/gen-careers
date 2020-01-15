import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.mongo();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('dev'));
  }

  routes() {
    this.server.use(routes);
  }

  mongo() {
    mongoose.connect('mongodb://localhost:27017/gentest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new App().server;
