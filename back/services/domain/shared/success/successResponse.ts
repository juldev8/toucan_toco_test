export const sendSuccessResponse = (
  response: any,
  result: any,
  codeStatus:number,
) => response.status(codeStatus).json(result);
