import { Flex } from 'antd';
import { HstButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Flex vertical gap="small" style={{ width: '100%' }}>
      <HstButton block>block button</HstButton>
      <HstButton variant="outlined" block>
        block button
      </HstButton>
      <HstButton variant="filled" block>
        block button
      </HstButton>
    </Flex>
  );
};
