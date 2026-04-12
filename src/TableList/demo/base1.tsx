import { ProColumns } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { NavigationBar, PageContainer, TableList } from 'hst-react-ui';
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
  ];
  return (
    <PageContainer height="500px">
      <NavigationBar
        items={[{ title: '一级菜单' }, { title: '二级菜单' }]}
        extra={
          <Space>
            <Button type="primary">一级按钮</Button>
            <Button>二级按钮</Button>
          </Space>
        }
      />
      <TableList
        columns={columns}
        dataSource={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
      />
    </PageContainer>
  );
};
