import { ProColumns } from '@ant-design/pro-components';
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
      <NavigationBar items={[{ title: '一级菜单' }, { title: '二级菜单' }]} />
      <TableList
        showSearch={false}
        options={false}
        columns={columns}
        dataSource={[{}, {}]}
      />
    </PageContainer>
  );
};
