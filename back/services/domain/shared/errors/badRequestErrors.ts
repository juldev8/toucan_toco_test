export const buildBadRequestErrors = (errors: any) => {
  const errorArray = errors.details.map(
    (error: any) => (
      {
        status: 400,
        title: `${error.context.label} ${error.type}`,
        detail: error.message,
        source: { pointer: `/data/attributes/${error.path[0]}` },
      }
    ),
  );
  return { errors: errorArray };
};
