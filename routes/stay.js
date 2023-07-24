import express from 'express';
import { stayController } from '../controllers/stay.js';

export const stayRouter = express.Router();

stayRouter.get('/stays', stayController.getAll);
stayRouter.get('/stays/:stayId', stayController.getOne);
stayRouter.post('/stays', stayController.create);