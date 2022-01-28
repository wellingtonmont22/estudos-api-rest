import ProdutosService from '../services/ProdutosService';

class ProdutosController {
  async index(req, res) {
    const produtos = await ProdutosService.index();
    return res.status(200).json(produtos);
  }

  async store(req, res) {
    const { name, description, price } = req.body;

    const { produto, created } = await ProdutosService.store(name, description, price);

    if (created) {
      return res.status(201).json(produto);
    }
    return res.status(200).json(produto);
  }

  async findById(req, res) {
    const { id } = req.params;

    const produto = await ProdutosService.findByPk(id);

    if (!produto) {
      return res.status(404).json({
        message: 'produto não existente.',
      });
    }

    return res.status(200).json(produto);
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;

      const produto = await ProdutosService.update(id, body);

      return res.status(200).json(produto);
    } catch (e) {
      return res.status(404).json({
        message: 'produto não existente.',
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await ProdutosService.delete(id);

      return res.status(200).json({
        message: 'apagado com sucesso',
      });
    } catch (e) {
      return res.status(404).json({
        message: 'produto não existente.',
      });
    }
  }
}

export default new ProdutosController();
