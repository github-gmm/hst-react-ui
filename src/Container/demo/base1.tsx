import {
  H1,
  H2,
  H3,
  H4,
  H5,
  NavigationBar,
  PageContainer,
  TabList,
} from 'hst-react-ui';
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
      <CompContainer>
        <H1>这是一个标题</H1>
        <H2>这是一个标题</H2>
        <H3>这是一个标题</H3>
        <H4>这是一个标题</H4>
        <H5>这是一个标题</H5>
      </CompContainer>
    </PageContainer>
  );
};
