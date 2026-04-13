import {
  CompContainer,
  Desc,
  DescList,
  NavigationBar,
  PageContainer,
} from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <PageContainer height="500px">
      <NavigationBar
        items={[
          { title: '一级菜单' },
          {
            title: '二级菜单',
            onClick: () => {
              console.log('跳转');
            },
          },
          { title: '三级菜单' },
        ]}
      />
      <CompContainer>
        <DescList
          column={2}
          items={[
            {
              label: '文本',
              children: '11111',
            },
            {
              label: '长文本',
              children: (
                <Desc.FileView
                  fileList={[
                    {
                      name: '图片1',
                      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                  ]}
                />
              ),
            },
            {
              label: '文本',
              children: '11111',
            },
            {
              label: '长文本',
              children: '2222',
            },
            {
              label: '文本',
              children: '11111',
            },
            {
              label: '长文本',
              children: '2222',
            },
            {
              label: '文本',
              children: '11111',
            },
            {
              label: '长文本',
              children: '2222',
            },
            {
              label: '文本',
              children: '11111',
            },
            {
              label: '长文本',
              children: '2222',
            },
          ]}
        />
      </CompContainer>
    </PageContainer>
  );
};
