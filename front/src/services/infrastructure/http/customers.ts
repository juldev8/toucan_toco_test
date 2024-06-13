import { Deserializer } from "jsonapi-serializer";

export const index = async () => {
  const httpResponse = await fetch(
    // @ts-ignore
    // eslint-disable-next-line no-undef
    `${ENV_BACK_API_URL}/api/public/customers`,
    {
      method: "GET",
    },
  );

  const jsonResponse = await httpResponse.json();

  if (jsonResponse.errors) {
    return jsonResponse;
  }

  const customers = new Deserializer({}).deserialize(jsonResponse);

  return { success: customers };
};
