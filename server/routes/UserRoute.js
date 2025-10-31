import express from 'express';
import { login, logout, register, verifyUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/login',login);
router.post('/register',register);
router.post('/logout',logout);
router.get('/verify',verifyUser);

export default router;