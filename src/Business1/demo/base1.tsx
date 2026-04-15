import { ProColumns } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import {
  NavigationBar,
  OptionButton,
  PageContainer,
  TableList,
  TabList,
} from 'hst-react-ui';
import React from 'react';

export default () => {
  const columns: ProColumns<any>[] = [
    {
      title: '文本',
      dataIndex: 'name',
      search: true,
    },
    {
      title: '数字',
      dataIndex: 'digit',
      search: true,
    },
    {
      title: '固定枚举',
      dataIndex: 'lov',
      search: true,
    },
    {
      title: '不固定枚举',
      dataIndex: 'select',
      search: true,
    },
    {
      title: '日期',
      dataIndex: 'date',
      search: true,
    },
    {
      title: '日期范围',
      dataIndex: 'dateRange',
      search: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      fixed: 'right',
      render: () => (
        <Space>
          <OptionButton optionType="main" size="small">
            详情页
          </OptionButton>

          <OptionButton optionType="info" size="small">
            编辑页
          </OptionButton>

          <OptionButton optionType="waring" size="small">
            禁用
          </OptionButton>

          <OptionButton optionType="error" size="small">
            删除
          </OptionButton>
        </Space>
      ),
    },
  ];
  return (
    <PageContainer height="800px">
      <NavigationBar items={[{ title: '一级菜单' }, { title: '二级菜单' }]} />
      <TabList
        tabStyle="card"
        items={[
          {
            label: '标签1',
            value: '1',
          },
          {
            label: '标签2',
            value: '2',
          },
        ]}
      />
      <TableList
        columns={columns}
        dataSource={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
        title={
          <TabList
            tabStyle="line"
            items={[
              {
                label: '处理中',
                value: '1',
              },
              {
                label: '已结束',
                value: '2',
              },
            ]}
          />
        }
        extra={
          <Space>
            <Button type="primary">新增页</Button>
            <Button type="primary">导入</Button>
            <Button type="primary">导出</Button>
          </Space>
        }
      />
    </PageContainer>
  );
};
