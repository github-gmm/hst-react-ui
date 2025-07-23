import { Space } from 'antd';
import { HstButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space wrap>
      <HstButton>solid button</HstButton>
      <HstButton color="green">solid button</HstButton>
      <HstButton color="red">solid button</HstButton>
      <HstButton color="orange">solid button</HstButton>
      <HstButton color="default">solid button</HstButton>
    </Space>
  );
};
