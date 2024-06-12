import { Request } from 'express';

export const create = async (request: Request) => {
  const { body: payload } = request;

  console.log(payload, '--> payload');
};
