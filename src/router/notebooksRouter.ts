import express from 'express';
import { Router } from 'express';
import * as  notebooksController from '../controllers/notebooksController';
const router = express.Router();


router.get('/', notebooksController.getNotebooks);
router.get('/list', notebooksController.getAll);
router.get('/:id', notebooksController.getItem);
router.post('/', notebooksController.postItem);
router.put('/:id', notebooksController.putItem);
router.delete('/:id', notebooksController.deleteItem);


export default router;