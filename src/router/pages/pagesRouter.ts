import express from 'express';
import { Router } from 'express';
import * as  pagesController from '../../controllers/pages/pagesController';
const router = express.Router();


router.get('/', pagesController.getSlash);
router.get('/contact', pagesController.getContact);
router.get('/search', pagesController.getSearch);
router.get('/notebooks', pagesController.getNotebooks);
router.get('/tools', pagesController.getTools);
router.get('/search', pagesController.getSearch);



export default router;