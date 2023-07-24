import express from 'express';
import { destinationController } from '../controllers/destinations.js';

export const destinationsRouter = express.Router();

destinationsRouter.get('/destinations', destinationController.getAll);
destinationsRouter.post('/destinations', destinationController.create);