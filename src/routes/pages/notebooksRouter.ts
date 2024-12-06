import express from 'express';
import { Router } from 'express';
import * as  notebooksController from './../../controllers/pages/notebooksController';

const router = express.Router();


router.get('/', notebooksController.getIndex);
router.get('/:id', notebooksController.getItem);
router.post('/', notebooksController.postItem);
router.put('/:id', notebooksController.putItem);
router.delete('/:id', notebooksController.deleteItem);


export default router;