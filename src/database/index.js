import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Produto from '../models/Produto';
import User from '../models/User';

const models = [Produto, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
