import express from 'express';
import { projectsRouter } from '@routes/private/projectsRouter';
import { customersRouter } from '@routes/public/customersRouter';

export const mainRouter = express.Router();

const privateRouter = [projectsRouter];
const publicRouter = [customersRouter];

mainRouter.use('/health', (_, res) => { res.send('Im working'); });
mainRouter.use('/private', privateRouter);
mainRouter.use('/public', publicRouter);
