import Sequelize, { Model } from 'sequelize';

export default class Produto extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      price: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
