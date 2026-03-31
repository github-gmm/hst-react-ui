import { ProColumns } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';

import { ICrateTableColumns } from '../../TableList';

type IProps = {
  pageWidth: number;
};
export function useSearchConfig(props: IProps) {
  const { pageWidth } = props;
  const [labelSpan, setLabelSpan] = useState(4);

  useEffect(() => {
    if (pageWidth === 0) return;

    const spanConfig = [
      { max: 300, labelSpan: 24 },
      { max: 600, labelSpan: 12 },
      { max: 900, labelSpan: 8 },
      { max: 1200, labelSpan: 6 },
      { max: 1700, labelSpan: 4 },
      { max: 2300, labelSpan: 3 },
      { max: 3600, labelSpan: 2 },
      { max: 5000, labelSpan: 1 },
      { max: Infinity, labelSpan: 1 },
    ];

    const config = spanConfig.find((item) => pageWidth <= item.max);

    if (config) {
      setLabelSpan(config.labelSpan);
    }
  }, [pageWidth]);

  const searchProps = {
    labelWidth: 'auto',
    span: labelSpan,
    defaultCollapsed: false,
    collapseRender: () => false,
  };

  const createTableColumns = <T>(
    columns: ICrateTableColumns<T>[],
    options?: ICrateTableColumns<T>,
  ): ProColumns<T>[] => {
    return columns.map((c) => {
      const { search = false, ...others } = c;
      return {
        search:
          search === true
            ? {
                transform: (value) => ({
                  [c.dataIndex?.toString() as string]: value,
                }),
              }
            : search,
        ellipsis: true,
        width: c?.width || 80,
        ...options,
        ...others,
      };
    }) as ProColumns<T>[];
  };

  return {
    searchProps,
    createTableColumns,
  };
}
