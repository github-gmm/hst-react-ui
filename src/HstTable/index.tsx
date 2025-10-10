import { ProTable, ProTableProps } from '@ant-design/pro-components';
import { useSetState } from 'ahooks';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import zhHK from 'antd/locale/zh_HK';
import React, { memo, useEffect, useState } from 'react';
import useCalculateTableHeight from './hooks/useCalculateTableHeight';
import './index.less';

interface IHstTableProps<T = any, U = any> extends ProTableProps<T, U> {
  tableKey?: string;
  tableRef?: React.MutableRefObject<any>;
  className?: string;
  hiddenPage?: boolean;
  autoHeight?: boolean;
  lang?: 'cn' | 'us' | 'hk';
}

const HstTable: React.FC<IHstTableProps> = (props) => {
  const {
    className = '',
    tableKey = 'id',
    size = 'small',
    lang = 'cn',
    options = {},
    pagination = undefined,
    hiddenPage = false,
    scroll = {},
    search = {},
    columns = [],
    dataSource = undefined,
    autoHeight = true,
    headerTitle = undefined,
    tableRef,
    ...rest
  } = props;

  const otherProps: any = { ...rest };
  const showSearch = columns.filter((item) => !!item.search).length > 0;

  const [labelSpan, setLabelSpan] = useState(4);
  const [submitSpan, setSubmitSpan] = useState(8);
  const [pageConfig, setPageConfig] = useSetState({
    showQuickJumper: true,
    showSizeChanger: true,
  });

  if (Array.isArray(dataSource)) {
    otherProps['dataSource'] = dataSource;
  }

  const { elementRef, tableWidth, tableHeight, recalculateHeight } =
    useCalculateTableHeight({
      tableDensity: size,
      isTitle: !!headerTitle,
      isPage: !hiddenPage,
    });

  const localeMap = {
    cn: zhCN,
    us: enUS,
    hk: zhHK,
  };

  useEffect(() => {
    if (!tableWidth) return;

    if (tableWidth < 500) {
      setLabelSpan(12);
      setSubmitSpan(12);
    } else if (tableWidth > 1100) {
      setLabelSpan(3);
      setSubmitSpan(3);
    } else {
      setLabelSpan(4);
      setSubmitSpan(8);
    }

    if (tableWidth < 400) {
      setPageConfig({
        showQuickJumper: false,
        showSizeChanger: false,
      });
    } else {
      setPageConfig({
        showQuickJumper: true,
        showSizeChanger: true,
      });
    }
  }, [tableWidth]);

  return (
    <ConfigProvider locale={localeMap[lang] || zhCN}>
      <ProTable
        size={size}
        rowKey={tableKey}
        actionRef={tableRef}
        columns={columns}
        headerTitle={headerTitle}
        className={`hst-table-content${className ? `${className}` : ''}`}
        tableRender={(_, dom) =>
          autoHeight ? (
            <div ref={elementRef} className="hst-table-body">
              {dom}
            </div>
          ) : (
            dom
          )
        }
        scroll={{
          x: 'max-content',
          ...(autoHeight ? { y: tableHeight } : {}),
          ...scroll,
        }}
        pagination={
          !hiddenPage
            ? {
                size: size,
                showQuickJumper: pageConfig.showQuickJumper,
                showSizeChanger: pageConfig.showSizeChanger,
                pageSizeOptions: [20, 50, 100, 200],
                ...pagination,
              }
            : false
        }
        search={
          showSearch
            ? {
                span: labelSpan,
                submitterColSpanProps: {
                  span: submitSpan,
                },
                labelWidth: 'auto',
                defaultCollapsed: false,
                collapseRender: () => false,
                ...(autoHeight ? { onCollapse: recalculateHeight } : {}),
                ...search,
              }
            : false
        }
        options={{
          reload: false,
          setting: false,
          density: false,
          ...options,
        }}
        {...otherProps}
      />
    </ConfigProvider>
  );
};

export default memo(HstTable);
