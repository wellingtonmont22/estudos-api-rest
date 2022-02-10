import User from '../models/User';

class UsersService {
  async index() {
    const users = await User.findAll();

    return users;
  }

  async store({
    name, nasc, email, admin, password,
  }) {
    const user = await User.create({
      name,
      nasc,
      email,
      admin,
      password,
    });

    return user;
  }

  async show(id) {
    const user = await User.findByPk(id);

    return user;
  }

  async update(id, body) {
    const user = await User.findByPk(id);

    if (!user) {
      return {
        errors: ['Id não pertence a nenhum usuário.'],
      };
    }

    const novoUser = await user.update(body);

    return novoUser;
  }

  async delete(id) {
    const user = await User.findByPk(id);

    if (!user) {
      return {
        errors: ['Usuário não existente.'],
      };
    }

    await user.destroy();

    return user;
  }
}

export default new UsersService();
