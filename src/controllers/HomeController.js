import Produto from '../models/Produto';

class HomeController {
  async index(req, res) {
    const Produtos = await Produto.findAll();
    return res.status(200).json(Produtos);
  }
}

export default new HomeController();
