import { Drawer, DrawerProps } from 'antd';
import React, { memo, useCallback } from 'react';
import './index.less';

interface IHstDrawerProps extends DrawerProps {
  className?: string;
  children?: React.ReactNode;
  onClosed?: () => Promise<void> | void;
}

const HstDrawer: React.FC<IHstDrawerProps> = (props) => {
  const { children = null, className, footer, onClosed, ...rest } = props;

  const handleCancel = useCallback(() => {
    onClosed?.();
  }, [onClosed]);

  return (
    <Drawer
      className={`hst-popup-content${className ? `${className}` : ''}`}
      open={true}
      maskClosable={false}
      onClose={handleCancel}
      extra={footer}
      {...rest}
    >
      {children}
    </Drawer>
  );
};

export default memo(HstDrawer);
