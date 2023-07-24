import express from 'express';
import { reviewController } from '../controllers/review.js';

export const reviewRouter = express.Router();

reviewRouter.post('/reviews', reviewController.create);
reviewRouter.get('/reviews', reviewController.getAll);