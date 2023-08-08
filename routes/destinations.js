import express from 'express';
import { destinationController } from '../controllers/destinations.js';
import { catchError } from '../utils/catchError.js';

export const destinationsRouter = express.Router();

destinationsRouter.get('/destinations', catchError(destinationController.getAll));
destinationsRouter.post('/destinations', catchError(destinationController.create));