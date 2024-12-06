import express from 'express';
import { Router } from 'express';
import * as  collectionsController from '../../controllers/api/collectionsController';

const router = express.Router();


router.get('/', collectionsController.getAll);
router.get('/:id', collectionsController.getItem);
router.post('/', collectionsController.postItem);
router.put('/:id', collectionsController.putItem);
router.delete('/:id', collectionsController.deleteItem);


export default router;