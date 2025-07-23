import { Space } from 'antd';
import { HstButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space wrap>
      <HstButton variant="dashed">dashed button</HstButton>
      <HstButton variant="dashed" color="green">
        dashed button
      </HstButton>
      <HstButton variant="dashed" color="red">
        dashed button
      </HstButton>
      <HstButton variant="dashed" color="orange">
        dashed button
      </HstButton>
      <HstButton variant="dashed" color="default">
        dashed button
      </HstButton>
    </Space>
  );
};
