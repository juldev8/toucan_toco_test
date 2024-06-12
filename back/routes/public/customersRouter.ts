import express from 'express';
import * as CustomersController from '@controllers/public/customersController';
import {
  customersCreatorValidator,
  customersFetcherValidator,
  customersDeleterValidator,
  customersUpdaterValidator,
} from '@services/domain/validators/customersValidator';

export const customersRouter = express.Router();

customersRouter.get('/customers', CustomersController.index);
customersRouter.get('/customers/:id', customersFetcherValidator, CustomersController.show);
customersRouter.post('/customers', customersCreatorValidator, CustomersController.create);
customersRouter.delete('/customers/:id', customersDeleterValidator, CustomersController.delete_);
customersRouter.put('/customers/:id', customersUpdaterValidator, CustomersController.update);
