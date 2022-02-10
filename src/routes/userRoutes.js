import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const router = new Router();

router.get('/', UsersController.index);
router.post('/', UsersController.store);
router.get('/:id', UsersController.show);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

export default router;
