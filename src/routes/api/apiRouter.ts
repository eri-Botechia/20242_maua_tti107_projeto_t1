import express from 'express';
import { Router } from 'express';
import * as  mainController from '../../controllers/api/apiController';
const router = express.Router();


router.get('/', mainController.getMain);

export default router;