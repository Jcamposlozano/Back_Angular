import { Router } from 'express';
import {getUsers, getUserbyId, creatUser, deleteUser, updateUSer} from '../controllers/index.controller'


const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', creatUser);
router.put('/users/:id', updateUSer);
router.delete('/users/:id', deleteUser);

export default router;