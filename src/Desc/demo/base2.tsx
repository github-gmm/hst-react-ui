import { Desc, DescForm } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 400, border: '1px solid #eee', padding: 10 }}>
      <DescForm labelWidth={150}>
        <Desc.TextView label="文件">
          <Desc.FileView
            fileList={[
              {
                name: '图片1',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
                name: '图片222222222图片222222222图片222222222',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
            ]}
          />
        </Desc.TextView>
        <Desc.TextView label="图片">
          <Desc.ImageView
            showDelete
            fileList={[
              {
                name: '图片1',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
              {
                name: '图片222222222图片222222222图片222222222图片222222222',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
            ]}
          />
        </Desc.TextView>
      </DescForm>
    </div>
  );
};
