import Sequelize, { Model } from 'sequelize';
import { hash } from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome deve conter entre 3 e 255 caracteres',
          },
          notEmpty: {
            msg: 'O campo nome não pode está vazio.',
          },
        },
      },
      nasc: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          msg: 'Email já é utilizado',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      admin: {
        type: Sequelize.BOOLEAN,
      },
      hash_password: Sequelize.STRING,
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'password deve conter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      user.hash_password = await hash(user.password, 8);
    });
    return this;
  }
}
