import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const router = new Router();

router.get('/', UsersController.index);
router.post('/store', UsersController.store);

export default router;
