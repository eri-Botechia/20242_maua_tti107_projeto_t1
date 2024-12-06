import express from 'express';
import { Router } from 'express';
import * as  pagesController from '../../controllers/pages/pagesController';
const router = express.Router();


router.get('/', pagesController.getIndex);

router.get('/create', pagesController.createItem);
export default router;