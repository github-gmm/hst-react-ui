import { Space } from 'antd';
import { SvgIcon } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <SvgIcon name="icon_back" />
      <SvgIcon
        name="icon_back"
        style={{
          color: 'red',
        }}
      />
      <SvgIcon name="icon_back" size={24} />

      <SvgIcon name="icon_waring" />
      <SvgIcon
        name="icon_waring"
        style={{
          color: 'orange',
        }}
      />
      <SvgIcon name="icon_waring" size={24} />
    </Space>
  );
};
