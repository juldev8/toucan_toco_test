import { RequestHandler } from 'express';
import { Customer } from '@prisma/client';
import * as CustomersCreatorService from '@services/domain/customers/creator.service';
import * as CustomersFetcherService from '@services/domain/customers/fetcher.service';
import * as CustomersDeleterService from '@services/domain/customers/deleter.service';
import * as CustomersUpdaterService from '@services/domain/customers/updater.service';
import { sendSuccessResponse } from '@services/domain/shared/success/successResponse';
import { buidJsonApiResponse, buidJsonApiResponses, buidJsonApiResponseWithoutData } from '@services/domain/shared/success/buildJsonApiResponses';
import { sendErrorsResponse } from '@services/domain/shared/errors/errorsResponse';
import { buildNotFoundErrors } from '@services/domain/shared/errors/notFoundErrors';

export const create: RequestHandler = async (request, response) => {
  try {
    const { body: payload } = request;
    const createdCustomer = await CustomersCreatorService.create(payload) as Customer;
    const result = buidJsonApiResponse<Customer>('customer', createdCustomer);
    return sendSuccessResponse(response, result, 201);
  } catch (error) {
    return sendErrorsResponse(response, error as Error);
  }
};

export const delete_: RequestHandler = async (request, response) => {
  try {
    const { id: customerId } = request.params;
    const customer = await CustomersDeleterService.delete_(customerId);

    if (!customer) {
      throw buildNotFoundErrors([{
        status: 404, type: 'NOT_FOUND error', message: 'customer not found', source: 'customerId',
      }]);
    }
    const result = buidJsonApiResponseWithoutData('customer');
    return sendSuccessResponse(response, result, 204);
  } catch (error) {
    return sendErrorsResponse(response, error as Error);
  }
};

export const index: RequestHandler = async (_, response) => {
  try {
    const customers = await CustomersFetcherService.index() as Customer[];
    const result = buidJsonApiResponses<Customer>('customer', customers);
    return sendSuccessResponse(response, result, 200);
  } catch (error) {
    return sendErrorsResponse(response, error as Error);
  }
};

export const show: RequestHandler = async (request, response) => {
  try {
    const { id: customerId } = request.params;
    const customer = await CustomersFetcherService.show(customerId);

    if (!customer) {
      throw buildNotFoundErrors([{
        status: 404, type: 'NOT_FOUND error', message: 'customer not found', source: 'customerId',
      }]);
    }
    const result = buidJsonApiResponse<Customer>('customer', customer as Customer);
    return sendSuccessResponse(response, result, 200);
  } catch (error) {
    return sendErrorsResponse(response, error as Error);
  }
};

export const update: RequestHandler = async (request, response) => {
  try {
    const { params: { id: customerId }, body: payload } = request;

    const customer = await CustomersUpdaterService.update(customerId, payload);

    if (!customer) {
      throw buildNotFoundErrors([{
        status: 404, type: 'NOT_FOUND error', message: 'customer not found', source: 'customerId',
      }]);
    }
    const result = buidJsonApiResponse<Customer>('customer', customer as Customer);
    return sendSuccessResponse(response, result, 200);
  } catch (error) {
    return sendErrorsResponse(response, error as Error);
  }
};
