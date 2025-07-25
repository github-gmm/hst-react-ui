import { ProTable, ProTableProps } from '@ant-design/pro-components';
import React, { memo } from 'react';

interface IHstTableProps<T = Record<string, any>, U = Record<string, any>>
  extends ProTableProps<T, U> {
  tableKey?: string;
}

const HstTable: React.FC<IHstTableProps> = (props) => {
  const { tableKey = 'id', ...rest } = props;

  return (
    <ProTable
      rowKey={tableKey}
      options={{
        reload: false, // 刷新
        setting: false, // 设置
        density: false, // 密度
      }}
      pagination={{ showQuickJumper: true }}
      {...rest}
    />
  );
};

export default memo(HstTable);
