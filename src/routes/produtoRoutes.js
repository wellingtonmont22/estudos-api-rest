import { Router } from 'express';
import produtosController from '../controllers/ProdutosController';

const router = new Router();

router.get('/', produtosController.index);
router.post('/', produtosController.store);
router.get('/:id', produtosController.findById);
router.put('/:id', produtosController.update);
router.delete('/:id', produtosController.delete);

export default router;
