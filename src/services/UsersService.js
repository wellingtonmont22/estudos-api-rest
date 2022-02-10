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
}

export default new UsersService();
