import express from 'express';
import { amenityRouter } from './amenity.js';
import { destinationsRouter } from './destinations.js';
import { imagesRouter } from './images.js';
import { reviewRouter } from './review.js';
import { stayRouter } from './stay.js';

export const router = express.Router();

router.use(amenityRouter);
router.use(destinationsRouter);
router.use(imagesRouter);
router.use(reviewRouter);
router.use(stayRouter);