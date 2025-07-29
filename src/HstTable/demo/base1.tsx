import { ProColumns } from '@ant-design/pro-components';
import { HstTable } from 'hst-react-ui';
import React from 'react';

export default () => {
  const columns: ProColumns<any>[] = [
    {
      dataIndex: 'name',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Name-超长字段。。。。。。',
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'name',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Name-超长字段。。。。。。',
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'name',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Name-超长字段。。。。。。',
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'status',
      hideInTable: true,
      fieldProps: {
        placeholder: 'Status',
      },
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
      },
      search: {
        transform: (value) => value,
      },
    },
    {
      dataIndex: 'time',
      hideInTable: true,
      colSize: 2,
      valueType: 'dateRange',
      fieldProps: {
        placeholder: ['startTime', 'endTime'],
      },
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
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
  ];

  const getList = async () => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
            },
            {
              id: 2,
              title: '2.3.1版本如何在业务页面修改头部状态',
            },
            {
              id: 3,
              title: '2.3.1版本如何在业务页面修改头部状态',
            },
            {
              id: 4,
              title: '2.3.1版本如何在业务页面修改头部状态',
            },
            {
              id: 5,
              title: '2.3.1版本如何在业务页面修改头部状态',
            },
          ],
          total: 100,
        });
      }, 3000);
    });
    return res || {};
  };

  return <HstTable columns={columns} request={getList} />;
};
