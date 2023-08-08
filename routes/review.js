import express from 'express';
import { reviewController } from '../controllers/review.js';
import { catchError } from '../utils/catchError.js';

export const reviewRouter = express.Router();

reviewRouter.post('/reviews', catchError(reviewController.create));
reviewRouter.get('/reviews', catchError(reviewController.getAll));