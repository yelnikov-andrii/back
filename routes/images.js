import express from 'express';
import { imagesController } from '../controllers/images.js';

export const imagesRouter = express.Router();

imagesRouter.get('/images', imagesController.getAll);
imagesRouter.post('/images', imagesController.create);