export const getPagingParams = (params: Record<string, any>) => {
  const { current = 1, pageSize = 20, ...rest } = params;

  return {
    pageNo: current,
    pageSize,
    ...rest,
  };
};
