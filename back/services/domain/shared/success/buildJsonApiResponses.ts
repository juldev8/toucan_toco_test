interface Data <T>{
    type: string,
    id?: string | number,
    attributes: T,
    relationships?: object,
  }

export interface singleResultType <T>{
    meta?: object,
    data?: Data<T>,
    included?: Data<T>[],
  }
export interface manyResultType <T> {
    meta?: object,
    data?: Data<T>[],
  }

export function buidJsonApiResponse<T>(type: string, data: T): singleResultType<T> {
  return {
    data: {
      type,
      attributes: { ...data },
    },
  };
}

export function buidJsonApiResponseWithoutData(type: string) {
  return {
    data: {
      type,
    },
  };
}

export function buidJsonApiResponses<T>(
  type: string,
  dataArray: Array<T>,
  meta?: object,
): manyResultType<T> {
  const results: manyResultType<T> = {};
  if (meta) {
    results.meta = { ...meta };
  }
  results.data = dataArray.map((data): Data<T> => ({
    type,
    attributes: {
      ...data,
    },
  }));
  return results;
}
