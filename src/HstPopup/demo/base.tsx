import { ProFormRadio, ProFormTextArea } from '@ant-design/pro-components';
import { Space } from 'antd';
import { HstButton, HstPopup } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <HstPopup
        title="操作"
        content="是否需要禁用该记录？"
        onSave={() => {
          return true;
        }}
      >
        <HstButton>二次确认框</HstButton>
      </HstPopup>

      <HstPopup
        title="操作"
        content={
          <>
            <ProFormRadio.Group
              name="audit"
              options={[
                { label: '通过', value: 'pass' },
                { label: '不通过', value: 'fail' },
              ]}
            />
            <ProFormTextArea name="audit_reason" />
          </>
        }
        onSave={() => {
          return false;
        }}
      >
        <HstButton>审核框</HstButton>
      </HstPopup>
    </Space>
  );
};
