import express from 'express';
import { Router } from 'express';
import * as  booksController from './../controllers/booksController';
const router = express.Router();


router.get('/', booksController.getSlash);
router.get('/list', booksController.getAll);
router.get('/:id', booksController.getItem);
router.post('/', booksController.postItem);
router.put('/:id', booksController.putItem);
router.delete('/:id', booksController.deleteItem);


export default router;