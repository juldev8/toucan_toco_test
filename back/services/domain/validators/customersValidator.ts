import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { buildBadRequestErrors } from '@services/domain/shared/errors/badRequestErrors';
import { sendErrorsResponse } from '@services/domain/shared/errors/errorsResponse';

const customersCreatorValidatorSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      'any.required': 'name is missing',
    }),
  country: Joi.string()
    .required()
    .messages({
      'any.required': 'country is missing',
    }),
  description: Joi.string()
    .required()
    .messages({
      'any.required': 'description missing',
    }),
  status: Joi.string()
    .required()
    .messages({
      'any.required': 'status is missing',
    }),
  street: Joi.string()
    .required()
    .messages({
      'any.required': 'street is missing',
    }),
  city: Joi.string()
    .required()
    .messages({
      'any.required': 'city is missing',
    }),
  zip: Joi.number()
    .required()
    .messages({
      'any.required': 'zip is missing',
    }),
  siret: Joi.string()
    .required()
    .messages({
      'any.required': 'siret is missing',
    }),
});

const customersFetcherValidatorSchema = Joi.object({
  id: Joi.string()
    .guid()
    .required()
    .messages({
      'any.required': 'customer-id is missing',
    })
    .guid()
    .messages({
      'any.required': 'customer-id should be a uuid',
    }),
});

const customersDeleterValidatorSchema = Joi.object({
  id: Joi.string()
    .guid()
    .required()
    .messages({
      'any.required': 'customer-id is missing',
    }),

});

const customersUpdaterValidatorSchema = Joi.object({
  id: Joi.string()
    .guid()
    .required()
    .messages({
      'any.required': 'customer-id is missing',
    }),
  name: Joi.string()
    .required()
    .messages({
      'any.required': 'name is missing',
    }),
  country: Joi.string()
    .required()
    .messages({
      'any.required': 'country is missing',
    }),
  description: Joi.string()
    .required()
    .messages({
      'any.required': 'description missing',
    }),
  status: Joi.string()
    .required()
    .messages({
      'any.required': 'status is missing',
    }),
  street: Joi.string()
    .required()
    .messages({
      'any.required': 'street is missing',
    }),
  city: Joi.string()
    .required()
    .messages({
      'any.required': 'city is missing',
    }),
  zip: Joi.number()
    .required()
    .messages({
      'any.required': 'zip is missing',
    }),
  siret: Joi.string()
    .required()
    .messages({
      'any.required': 'siret is missing',
    }),
});

export const customersCreatorValidator = async (
  request: Request,
  response : Response,
  next: NextFunction,
) => {
  const { body } = request;

  const { error: errors } = customersCreatorValidatorSchema.validate(
    { ...body },
    { abortEarly: false },
  );
  if (errors) {
    const errorBuilded = buildBadRequestErrors(errors);
    return sendErrorsResponse(response, errorBuilded);
  }
  return next();
};

export const customersFetcherValidator = async (
  request: Request,
  response : Response,
  next: NextFunction,
) => {
  const { params: { id } } = request;

  const { error: errors } = customersFetcherValidatorSchema.validate(
    { id },
    { abortEarly: false },
  );
  if (errors) {
    const errorBuilded = buildBadRequestErrors(errors);
    return sendErrorsResponse(response, errorBuilded);
  }
  return next();
};

export const customersDeleterValidator = async (
  request: Request,
  response : Response,
  next: NextFunction,
) => {
  const { params: { id } } = request;

  const { error: errors } = customersDeleterValidatorSchema.validate(
    { id },
    { abortEarly: false },
  );
  if (errors) {
    const errorBuilded = buildBadRequestErrors(errors);
    return sendErrorsResponse(response, errorBuilded);
  }
  return next();
};

export const customersUpdaterValidator = async (
  request: Request,
  response : Response,
  next: NextFunction,
) => {
  const { params: { id }, body } = request;

  const { error: errors } = customersUpdaterValidatorSchema.validate(
    { ...body, id },
    { abortEarly: false },
  );
  if (errors) {
    const errorBuilded = buildBadRequestErrors(errors);
    return sendErrorsResponse(response, errorBuilded);
  }
  return next();
};
