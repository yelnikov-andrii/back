import express from 'express';
import { imagesController } from '../controllers/images.js';
import { catchError } from '../utils/catchError.js';

export const imagesRouter = express.Router();

imagesRouter.get('/images', catchError(imagesController.getAll));
imagesRouter.post('/images', catchError(imagesController.create));