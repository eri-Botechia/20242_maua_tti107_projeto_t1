import express from 'express';
import { Router } from 'express';
import * as  apiController from './../controllers/apiController';
const router = express.Router();


router.get('/', apiController.getSlash);

export default router;