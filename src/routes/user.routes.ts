import { Router } from 'express';
import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/user.controller';

const router = Router();

router.post('/', addUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;
