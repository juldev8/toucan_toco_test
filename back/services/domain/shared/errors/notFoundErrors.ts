export const buildNotFoundErrors = (errors: any) => {
  const errorArray = errors.map(
    (error: any) => (
      {
        status: 404,
        title: `${error.type}`,
        detail: error.message,
        source: { pointer: `/data/attributes/${error.source}` },
      }
    ),
  );
  return { errors: errorArray };
};
