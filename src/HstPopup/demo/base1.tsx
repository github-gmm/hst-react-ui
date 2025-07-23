import { Space } from 'antd';
import type { IHstPopupRef } from 'hst-react-ui';
import { HstButton, HstPopup } from 'hst-react-ui';
import React, { useRef } from 'react';

export default () => {
  const popupRef = useRef<IHstPopupRef>(null);

  return (
    <Space>
      <HstPopup
        ref={popupRef}
        type="drawer"
        title="操作"
        content={<>222</>}
        footer={
          <Space>
            <HstButton
              variant="outlined"
              color="default"
              onClick={() => {
                popupRef.current?.onClose();
              }}
            >
              关闭
            </HstButton>
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
