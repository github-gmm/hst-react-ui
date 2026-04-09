import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 300 }}>
      简单表单
      <FieldForm>
        <Fields.Text label="文本" name="text" required />
        <Fields.Text
          label="文本搜索框"
          name="text"
          required
          // loading
          onSearch={() => {}}
        />
        <Fields.Textarea required label="多行文本" name="textarea" />
        <Fields.Radio
          required
          label="单选"
          name="radio"
          item={[
            {
              label: '男',
              value: '1',
              disabled: true,
            },
            {
              label: '女',
              value: '2',
            },
          ]}
        />
        <Fields.Checkbox
          required
          label="多选"
          name="checkbox"
          item={[
            {
              label: '男',
              value: '1',
              disabled: true,
            },
            {
              label: '女',
              value: '2',
            },
          ]}
        />
        <Fields.Digit required label="数字" name="digit" />
        <Fields.Lov
          required
          label="固定枚举"
          name="lov"
          item={[
            {
              label: '男',
              value: '1',
              disabled: true,
            },
            {
              label: '女',
              value: '2',
            },
          ]}
        />
        <Fields.Select
          search
          required
          label="搜索下拉框"
          name="select"
          request={async (keyword: string) => {
            console.log(keyword);
            return [
              {
                label: '男',
                value: '1',
              },
            ];
          }}
        />
        <Fields.UploadImage
          required
          label="上传图片"
          name="image"
          customOnUpload={async () => {
            return [
              {
                name: '图片1图片1图片1图片1图片1图片1图片1图片1',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
            ];
          }}
        ></Fields.UploadImage>
        <Fields.UploadFile
          required
          label="上传文件"
          name="file"
          customOnUpload={async () => {
            return [
              {
                name: '图片1图片1图片1图片1图片1图片1图片1图片1',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              },
            ];
          }}
        ></Fields.UploadFile>
      </FieldForm>
    </div>
  );
};
