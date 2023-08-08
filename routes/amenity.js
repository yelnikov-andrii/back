import express from 'express';
import { amenityController } from '../controllers/amenity.js';
import { catchError } from '../utils/catchError.js';

export const amenityRouter = express.Router();

amenityRouter.get('/amenities', catchError(amenityController.getAll));
amenityRouter.post('/amenities', catchError(amenityController.create));