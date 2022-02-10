import UsersService from '../services/UsersService';

class UsersController {
  async index(req, res) {
    const users = await UsersService.index();

    return res.status(200).json(users);
  }

  async store(req, res) {
    try {
      const { body } = req;

      const user = await UsersService.store(body);

      return res.json(user);
    } catch ({ errors }) {
      return res.status(400).json({
        errors: errors.map((erro) => erro.message),
      });
    }
  }
}

export default new UsersController();
