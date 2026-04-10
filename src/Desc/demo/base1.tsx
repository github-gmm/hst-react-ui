import { Desc, DescForm } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 400, border: '1px solid #eee', padding: 10 }}>
      <DescForm labelWidth={150}>
        <Desc.TextView
          label="文本(自动换行)"
          value="普通文本展示普通文本展示普通文本展示普通文本展示普通"
          copyable
        />
        <Desc.TextView
          label="文本(自动换行)"
          value="This link is currently disabled and cannot be opened. Please contact your administrator or try again later if you believe you should have access to this resource."
          copyable
        />
        <Desc.TextView
          label="文本(自动换行)"
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png."
          copyable
          wrap
        />
        <Desc.TextareaView
          label="单行文本"
          value="单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本"
          maxLines={1}
          copyable
        />
        <Desc.TextareaView
          label="单行文本(英文)"
          value="This link is currently disabled and cannot be opened. Please contact your administrator or try again later if you believe you should have access to this resource."
          maxLines={1}
          copyable
        />
        <Desc.TextareaView
          label="单行文本(链接)"
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          maxLines={1}
          copyable
          wrap
        />
        <Desc.TextareaView
          label="多行文本"
          value="单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本"
          maxLines={2}
          copyable
        />
        <Desc.TextareaView
          label="多行文本(英文)"
          value="This link is currently disabled and cannot be opened. Please contact your administrator or try again later if you believe you should have access to this resource."
          maxLines={2}
          copyable
        />
        <Desc.TextareaView
          label="多行文本(链接)"
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          maxLines={2}
          copyable
          wrap
        />
      </DescForm>
    </div>
  );
};
