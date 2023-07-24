import express from 'express';
import { amenityController } from '../controllers/amenity.js';

export const amenityRouter = express.Router();

amenityRouter.get('/amenities', amenityController.getAll);
amenityRouter.post('/amenities', amenityController.create);