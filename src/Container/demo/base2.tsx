import { Button, Space } from 'antd';
import { CompContainer, NavigationBar, PageContainer } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <PageContainer height="300px">
      <NavigationBar
        items={[
          { title: '一级菜单' },
          {
            title: '二级菜单',
            onClick: () => {
              window.open('www.baidu.com', '_blank');
            },
          },
          { title: '三级菜单' },
        ]}
      />
      <NavigationBar
        title="标题"
        extra={
          <Space>
            <Button type="primary">一级按钮</Button>
            <Button>二级按钮</Button>
          </Space>
        }
      />
      <CompContainer>空白页面</CompContainer>
    </PageContainer>
  );
};
