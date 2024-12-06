import express from 'express';
import { Router } from 'express';
import * as  tasksController from './../../controllers/api/tasksController';

const router = express.Router();


router.get('/', tasksController.getIndex);
router.get('/:id', tasksController.getItem);
router.post('/', tasksController.postItem);
router.put('/:id', tasksController.putItem);
router.delete('/:id', tasksController.deleteItem);


export default router;