import { Prisma } from '@prisma/client';

export const buildPrismaErrors = (errors: Prisma.PrismaClientKnownRequestError[]) => {
  const errorArray = errors.map(
    (error: Prisma.PrismaClientKnownRequestError) => (
      {
        status: 500,
        title: 'Prisma error',
        detail: error.message,
        source: { pointer: '/data/attributes/prisma' },
      }
    ),
  );
  return { errors: errorArray };
};
