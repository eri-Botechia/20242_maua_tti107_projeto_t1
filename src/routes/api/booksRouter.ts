import express from 'express';
import { Router } from 'express';
import * as  booksController from '../../controllers/pages/booksController';
const router = express.Router();


router.get('/', booksController.getIndex);
router.get('/:id', booksController.getItem);
router.post('/', booksController.postItem);
router.put('/:id', booksController.putItem);
router.delete('/:id', booksController.deleteItem);


export default router;