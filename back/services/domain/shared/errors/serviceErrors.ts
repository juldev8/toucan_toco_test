export const buildServiceErrors = (errors: Error[]) => {
  const errorArray = errors.map(
    (error: Error) => (
      {
        status: 500,
        title: 'Service error',
        detail: error.message,
        source: { pointer: '/data/attributes/prisma' },
      }
    ),
  );
  return { errors: errorArray };
};
