import { Response } from 'express';

export const sendErrorsResponse = (response: Response, errorMessage: object) => {
  response.set('Content-Type', 'application/vnd.apijson');
  const { errors }:any = errorMessage;
  const codeStatus = (errors?.length > 0 && errors[0]?.status) ? errors[0].status : 500;
  return response.status(codeStatus).json(errorMessage);
};
