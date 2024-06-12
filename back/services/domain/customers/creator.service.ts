import { Customer, Prisma } from '@prisma/client';
import * as CustomersRepository from '@services/domain/repositories/customers.repository';
import { buildServiceErrors } from '@services/domain/shared/errors/serviceErrors';
import { buildPrismaErrors } from '@services/domain/shared/errors/prismaErrors';

export async function create(payload : Customer) {
  try {
    const createdCustomer = CustomersRepository.create(payload);
    return createdCustomer;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw buildPrismaErrors([error] as Prisma.PrismaClientKnownRequestError[]);
    }
    throw buildServiceErrors([error] as Error[]);
  }
}
