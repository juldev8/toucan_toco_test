import * as CustomersHttpService from "../../infrastructure/http/customers";

export const getCustomers = async () => {
  const requestResult = await CustomersHttpService.index();

  if (requestResult.errors) {
    return { failure: requestResult.errors };
  }

  return requestResult.success;
};
