import './TableList.less';

import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { ReactNode } from 'react';
import React, { useMemo } from 'react';

import { usePaginationConfig } from './config/PaginationConfig';
import { useSearchConfig } from './config/SearchConfig';
import useElementWidth from './hooks/useElementWidth';

const VA_TABLE_CLS = 'table-list';

export interface ICrateTableColumns<T> extends Omit<ProColumns<T>, 'search'> {
  search?: ProColumns<T>['search'] | true;
}

export interface IVaTableProps<
  T extends Record<string, any>,
  U extends Record<string, any> = Record<string, any>,
> extends Omit<ProTableProps<T, U>, 'title' | 'columns'> {
  title?: ReactNode | string;
  extra?: ReactNode;
  showSearch?: boolean;
  columns?: ProColumns<T>[];
}

export function TableList<
  T extends Record<string, any>,
  U extends Record<string, any> = Record<string, any>,
>(props: IVaTableProps<T, U>) {
  const {
    title,
    extra = <></>,
    columns,
    className,
    rowClassName,
    options,
    showSearch = true,
    style,
    ...restProps
  } = props;
  const { ref: tableRef, width: pageWidth } = useElementWidth();
  const { paginationProps } = usePaginationConfig();
  const { searchProps, createTableColumns } = useSearchConfig({ pageWidth });

  // 合并行样式类名
  const mergedRowClassName = (record: T, index: number, indent: number) => {
    const baseClass =
      index % 2 === 1 ? `${VA_TABLE_CLS}-row-stripe` : `${VA_TABLE_CLS}-row-stripe-other`;
    if (typeof rowClassName === 'function') {
      return `${baseClass} ${rowClassName(record, index, indent) || ''}`.trim();
    }
    return `${baseClass} ${rowClassName || ''}`.trim();
  };

  const cssVariables = useMemo(() => {
    return {
      '--va-table-page-width': pageWidth > 0 ? `${pageWidth}px` : '100%',
      ...style,
    } as React.CSSProperties;
  }, [style, pageWidth]);

  const innerColumns = createTableColumns<T>((columns ?? []) as ICrateTableColumns<T>[]);

  return (
    <div className={VA_TABLE_CLS} style={cssVariables} ref={tableRef}>
      <ProTable<T, U>
        bordered
        className={`${VA_TABLE_CLS}-inner ${className || ''}`}
        rowClassName={mergedRowClassName}
        defaultSize="small"
        dateFormatter="string"
        scroll={{ x: 'max-content' }}
        headerTitle={title}
        columns={innerColumns}
        pagination={paginationProps}
        search={showSearch ? (searchProps as any) : false}
        form={{ colon: false }}
        toolBarRender={
          options === false
            ? false
            : () => [
                <div key="toolbar-right" className={`${VA_TABLE_CLS}-toolbar`}>
                  {extra}
                </div>,
              ]
        }
        {...restProps}
      />
    </div>
  );
}

export default TableList;
