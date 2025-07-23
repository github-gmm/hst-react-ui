import { SyncOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { HstButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space wrap>
      <HstButton icon={<SyncOutlined />} color="default" disabled>
        disabled button
      </HstButton>

      <HstButton icon={<SyncOutlined />} variant="dashed" disabled>
        disabled button
      </HstButton>

      <HstButton icon={<SyncOutlined />} variant="link" disabled>
        disabled button
      </HstButton>
    </Space>
  );
};
