export function usePaginationConfig() {
  const paginationProps = {
    defaultPageSize: 20,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: [10, 20, 50, 100, 200, 500],
  };

  return {
    paginationProps,
  };
}
