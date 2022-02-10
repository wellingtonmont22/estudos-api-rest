import UsersService from '../services/UsersService';

class UsersController {
  async index(req, res) {
    try {
      const users = await UsersService.index();

      return res.status(200).json(users);
    } catch (e) {
      return res.json(null);
    }
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

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await UsersService.show(id);

      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;

      if (!id) {
        return res.status(404).json({
          errors: ['ID não foi enviado.'],
        });
      }
      console.log(body);
      if (JSON.stringify(body) === '{}') {
        return res.status(404).json({
          errors: ['Existe algum campo que não foi preenchido.'],
        });
      }

      const user = await UsersService.update(id, body);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existente.'],
        });
      }
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((erro) => erro.message) : e,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não existente'],
        });
      }

      const user = await UsersService.delete(id);

      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new UsersController();
