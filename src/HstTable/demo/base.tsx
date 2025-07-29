import { ProColumns } from '@ant-design/pro-components';
import { HstTable } from 'hst-react-ui';
import React from 'react';

export default () => {
  const columns: ProColumns<any>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      ellipsis: true,
      search: false,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      search: false,
      render: (_) => {
        return <span>{_}</span>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      ellipsis: true,
      search: false,
    },
    {
      title: 'Labels',
      dataIndex: 'labels',
      ellipsis: true,
      search: false,
    },
  ];

  const dataSource = [
    {
      id: 1,
      title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
      status: 'open',
      labels: ['bug'],
    },
    {
      id: 2,
      title: '2.3.1版本如何在业务页面修改头部状态',
      status: 'closed',
      labels: ['question'],
    },
  ];

  return (
    <div>
      <HstTable columns={columns} dataSource={dataSource} hiddenPage />
    </div>
  );
};
