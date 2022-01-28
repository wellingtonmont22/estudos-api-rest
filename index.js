import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import produtoRoutes from './src/routes/produtoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/produto', produtoRoutes);
  }
}

export default new App().app;
