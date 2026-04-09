import { Desc, DescForm } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 400, border: '1px solid #eee', padding: 10 }}>
      <DescForm labelWidth={150}>
        <Desc.TextView
          label="文本"
          value="普通文本展示普通文本展示普通文本展示普通文本展示普通"
          copyable
        />
        <Desc.TextView
          label="文本(英文)"
          value="This link is currently disabled and cannot be opened. Please contact your administrator or try again later if you believe you should have access to this resource."
          copyable
        />
        <Desc.TextView
          label="文本(链接)"
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png."
          wrap
          copyable
        />
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
          wrap
          copyable
        />
        <Desc.TextareaView
          label="单行文本(链接)"
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          maxLines={1}
          wrap
          copyable
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
          wrap
          copyable
        />
        <Desc.TextareaView
          label="多行文本(链接)"
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          maxLines={2}
          wrap
          copyable
        />
        <Desc.LinkView
          label="超链接"
          value="超链接超链接超链接超链接超链接超链接超链接"
          linkUrl="www.baidu.com"
          copyable
        />
        <Desc.LinkView
          label="路由"
          value="超链接超链接超链接超链接超链接超链接超链接"
          route
          linkUrl="components/table-list"
          copyable
        />
        <Desc.BadgeView label="徽标" value="启用" success />
        <Desc.BadgeView label="徽标" value="禁用" />
        <Desc.LabelView label="标签" value={['启用', '禁用']} />
        <Desc.DigitView label="数字" value="1111111.00" />
        <Desc.DigitView
          label="大数字(千分位)"
          value="12345678987654321.12345"
          formatter="thousand"
        />
        <Desc.DigitView
          label="数字(小数位)"
          value="1111111"
          formatter="thousand"
          precision={2}
        />
        <Desc.DigitView label="数字(百分比)" value="10" formatter="percent" />
        <Desc.DigitView label="非数字" value="a" />
        <Desc.DateView label="2026-03-31" value="2026-03-31" />
        <Desc.DateView label="2026-03" value="2026-03" />
        <Desc.DateView label="2026-03" value="2026-03" />
        <Desc.DateView
          label="2026-03-31T14:15:16+05:00"
          value="2026-03-31T14:15:16+05:00"
        />
        <Desc.DateView
          label="2026-03-31T14:15:16+08:00"
          value="2026-03-31T14:15:16+08:00"
        />
        <Desc.DateView
          label="2026-03-31T14:15:16+08:00"
          value="2026-03-31T14:15:16+08:00"
          dataType="YYYY-MM-DD HH:mm:ss"
          options={{
            utc: 5,
          }}
        />
      </DescForm>
    </div>
  );
};
