import { NavigationBar, PageContainer, TabList } from 'hst-react-ui';
import React from 'react';
import CompContainer from '../CompContainer';

export default () => {
  return (
    <PageContainer height="300px">
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
      <CompContainer>空白页面</CompContainer>
    </PageContainer>
  );
};
