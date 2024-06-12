import { PrismaClient, Customer, Prisma } from '@prisma/client';

const prismaClient = new PrismaClient();

export const create = async (payload : Customer):
Promise<Customer| Prisma.PrismaClientKnownRequestError[]> => {
  try {
    const customer = await prismaClient.customer.create({
      data: {
        ...payload,
      },
    });
    return customer;
  } catch (error) {
    throw error;
  }
};

export const delete_ = async (customerId: string):
Promise<Customer | null | Prisma.PrismaClientKnownRequestError[]> => {
  try {
    const isCustomer = await prismaClient.customer.findUnique({
      where: { id: customerId },
    });
    if (!isCustomer) {
      return null;
    }
    const customers = await prismaClient.customer.delete({
      where: { id: customerId },
    });
    return customers;
  } catch (error) {
    throw error;
  }
};

export const selectCustomers = async ():
Promise<Customer[]| Prisma.PrismaClientKnownRequestError[]> => {
  try {
    const customers = await prismaClient.customer.findMany();
    return customers;
  } catch (error) {
    throw error;
  }
};

export const selectCustomer = async (customerId: string):
Promise<Customer | null | Prisma.PrismaClientKnownRequestError[]> => {
  try {
    const customers = await prismaClient.customer.findUnique({
      where: { id: customerId },
    });
    return customers;
  } catch (error) {
    throw error;
  }
};

export const update = async (customerId: string, payload: Customer) :
Promise<Customer| null | Prisma.PrismaClientKnownRequestError[]> => {
  try {
    const isCustomer = await prismaClient.customer.findUnique({
      where: { id: customerId },
    });
    if (!isCustomer) {
      return null;
    }
    const customer = await prismaClient.customer.update({
      where: {
        id: customerId,
      },
      data: payload,
    });
    return customer;
  } catch (error) {
    throw error;
  }
};
