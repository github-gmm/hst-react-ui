import { SortOrder } from 'antd/es/table/interface';

export const getSortingParams = (sort: Record<string, SortOrder>) => {
  const [sortField] = Object.entries(sort ?? {});
  const [orderBy, order] = sortField ?? [];

  if (!orderBy) {
    return {};
  }
  return {
    orderBy,
    order: order === 'ascend' ? 'asc' : 'desc',
  };
};
