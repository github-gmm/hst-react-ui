import { Space } from 'antd';
import { SvgIcon } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <SvgIcon name="BackIcon" />
      <SvgIcon name="BackIcon" size={40} />
      <SvgIcon
        name="BackIcon"
        style={{
          color: 'red',
        }}
      />
    </Space>
  );
};
