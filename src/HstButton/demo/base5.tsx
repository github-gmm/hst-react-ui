import { Space } from 'antd';
import { HstButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space wrap>
      <HstButton variant="filled">filled button</HstButton>
      <HstButton variant="filled" color="green">
        filled button
      </HstButton>
      <HstButton variant="filled" color="red">
        filled button
      </HstButton>
      <HstButton variant="filled" color="orange">
        filled button
      </HstButton>
      <HstButton variant="filled" color="default">
        filled button
      </HstButton>
    </Space>
  );
};
