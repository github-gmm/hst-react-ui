import { ProFormRadio, ProFormTextArea } from '@ant-design/pro-components';
import { Space } from 'antd';
import { HstButton, HstPopup, IHstPopupRef } from 'hst-react-ui';
import React, { useRef } from 'react';

export default () => {
  const popupRef = useRef<IHstPopupRef>(null);

  return (
    <Space>
      <HstPopup
        title="操作"
        content="是否需要禁用该记录？"
        footer={
          <Space>
            <HstButton
              onClick={() => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(true);
                    popupRef.current?.onClose();
                  }, 3000);
                });
              }}
            >
              确定
            </HstButton>
          </Space>
        }
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
        footer={
          <Space>
            <HstButton
              onClick={() => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(true);
                    popupRef.current?.onClose();
                  }, 3000);
                });
              }}
            >
              审批
            </HstButton>
          </Space>
        }
      >
        <HstButton>审核框</HstButton>
      </HstPopup>
    </Space>
  );
};
