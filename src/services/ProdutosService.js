import Produto from '../models/Produto';

class ProdutosService {
  async index() {
    const produto = await Produto.findAll();

    return produto;
  }

  async store(name, description, price) {
    const [produto, created] = await Produto.findOrCreate({
      where: {
        name, description, price,
      },
      defaults: { name, description, price },
    });
    return { produto, created };
  }

  async findByPk(id) {
    const produto = await Produto.findByPk(id);

    return produto;
  }

  async update(id, body) {
    const produto = await Produto.findByPk(id);

    produto.set(body);

    const novoProduto = await produto.save();

    return novoProduto;
  }

  async delete(id) {
    const produto = await Produto.findByPk(id);

    await produto.destroy({
      where: {
        id,
      },
    });
  }
}

export default new ProdutosService();
