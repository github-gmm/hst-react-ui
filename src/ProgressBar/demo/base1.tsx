import { Space } from 'antd';
import { ProgressBar } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <div style={{ width: 300 }}>
        <ProgressBar percent={0} />
        <ProgressBar percent={50} />
        <ProgressBar percent={100} />
      </div>
    </Space>
  );
};
