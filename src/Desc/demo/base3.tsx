import { Desc, DescForm } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 400, border: '1px solid #eee', padding: 10 }}>
      <DescForm labelWidth={150}>
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
      </DescForm>
    </div>
  );
};
