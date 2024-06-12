import * as CustomersRepository from '@services/domain/repositories/customers.repository';
import { Customer, Prisma } from '@prisma/client';
import { buildServiceErrors } from '@services/domain/shared/errors/serviceErrors';
import { buildPrismaErrors } from '@services/domain/shared/errors/prismaErrors';

export async function delete_(customerId: string) : Promise<Customer| Error> {
  try {
    const customers = await CustomersRepository.delete_(customerId) as Customer;
    return customers;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw buildPrismaErrors([error] as Prisma.PrismaClientKnownRequestError[]);
    }
    throw buildServiceErrors([error] as Error[]);
  }
}
