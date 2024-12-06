import express from 'express';
import { Router } from 'express';
import * as  collectionsController from '../../controllers/pages/collectionsController';
import * as authController from '../../controllers/auth/authController';

const router = express.Router();


router.get('/sign-in', authController.getSignIn);
router.get('/sign-up', authController.getSignUp);
router.get('/recovery',  authController.getRecovery)


export default router;