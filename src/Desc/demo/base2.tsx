import { Desc, DescList } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <DescList
      column={2}
      items={[
        {
          label: '文本',
          children: (
            <Desc.TextView
              hideLabel
              value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          ),
          span: 1,
        },
        {
          label: '长文本',
          children: <Desc.TextareaView hideLabel value="111111111" />,
        },
        {
          label: '图片',
          children: (
            <Desc.ImageView
              fileList={[
                {
                  name: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
              ]}
            />
          ),
        },
        {
          label: '文件',
          children: (
            <Desc.FileView
              fileList={[
                {
                  name: '图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片',
                  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
};
