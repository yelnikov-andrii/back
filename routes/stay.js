import express from 'express';
import { stayController } from '../controllers/stay.js';
import { catchError } from '../utils/catchError.js';

export const stayRouter = express.Router();

stayRouter.get('/stays', catchError(stayController.getAll));
stayRouter.get('/stays/:stayId', catchError(stayController.getOne));
stayRouter.post('/stays', catchError(stayController.create));