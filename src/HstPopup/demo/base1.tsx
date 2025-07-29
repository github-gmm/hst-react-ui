import { ProFormText } from '@ant-design/pro-components';
import { Space } from 'antd';
import { HstButton, HstPopup, IHstPopupRef } from 'hst-react-ui';
import React, { useRef } from 'react';

export default () => {
  const popupRef = useRef<IHstPopupRef>(null);

  return (
    <Space>
      <HstPopup
        ref={popupRef}
        type="drawer"
        title="操作"
        content={
          <>
            <ProFormText name="name" label="名称" />
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
              保存
            </HstButton>
          </Space>
        }
      >
        <HstButton>编辑框</HstButton>
      </HstPopup>
    </Space>
  );
};
