import { Button } from 'antd';
import { FieldForm } from 'hst-react-ui';
import React from 'react';
import UploadFile from '../Upload/UploadFile';
import UploadImage from '../Upload/UploadImage';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm>
        <UploadImage
          // max={10}
          label="上传图片"
          name="image"
          required
          customOnUpload={async () => {
            return [
              {
                name: '自定义图片',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
            ];
          }}
        ></UploadImage>
        <UploadFile
          label="上传文件"
          name="file"
          required
          templateNode={<Button type="primary">文件模板</Button>}
          customOnUpload={async () => {
            return [
              {
                name: '自定义图片自定义图片自定义图片自定义图片',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
            ];
          }}
        ></UploadFile>
      </FieldForm>
    </div>
  );
};
