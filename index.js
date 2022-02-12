import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import produtoRoutes from './src/routes/produtoRoutes';
import usersRoutes from './src/routes/userRoutes';

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
    this.app.use('/users', usersRoutes);
  }
}

export default new App().app;
