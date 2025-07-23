import { Space } from 'antd';
import { HstButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space wrap>
      <HstButton variant="outlined">outlined button</HstButton>
      <HstButton variant="outlined" color="green">
        outlined button
      </HstButton>
      <HstButton variant="outlined" color="red">
        outlined button
      </HstButton>
      <HstButton variant="outlined" color="orange">
        outlined button
      </HstButton>
      <HstButton variant="outlined" color="default">
        outlined button
      </HstButton>
    </Space>
  );
};
