import express from 'express';
import * as ProjectsController from '@controllers/private/projectsController';

export const projectsRouter = express.Router();

projectsRouter.post('/projects', ProjectsController.create);
