import { DrawerProps, ModalProps } from 'antd';
import React, { forwardRef, memo, useImperativeHandle, useState } from 'react';
import HstDrawer from './HstDrawer';
import HstModal from './HstModal';

interface IHstPopupProps extends DrawerProps {
  type?: 'modal' | 'drawer';
  children?: React.ReactNode;
  content?: React.ReactNode;
  beforeOpen?: () => Promise<boolean> | boolean;
  beforeClose?: () => Promise<boolean> | boolean;
  onSave?: () => Promise<boolean> | boolean;
}

export interface IHstPopupRef {
  onClose: () => void;
  onOpen: () => void;
}

const HstPopup = forwardRef<IHstPopupRef, IHstPopupProps>((props, ref) => {
  const {
    type: modalType = 'modal',
    children = <></>,
    content = <></>,
    footer,
    beforeOpen,
    beforeClose,
    onSave,
    ...rest
  } = props;
  const [open, setOpen] = useState<boolean>(false);

  const isModal = modalType === 'modal';

  const handleOpen = async () => {
    const flag = beforeOpen ? await beforeOpen() : true;
    setOpen(flag);
  };

  const handleCancel = async () => {
    const flag = beforeClose ? await beforeClose() : true;
    setOpen(!flag);
  };

  const handleSave = async () => {
    const flag = onSave ? await onSave() : true;
    return flag;
  };

  useImperativeHandle(ref, () => ({
    onClose: handleCancel,
    onOpen: handleOpen,
  }));

  return (
    <>
      <div onClick={handleOpen}>{children}</div>

      {open &&
        (isModal ? (
          <HstModal
            onClosed={handleCancel}
            onSave={handleSave}
            footer={footer}
            {...(rest as ModalProps)}
          >
            {content}
          </HstModal>
        ) : (
          <HstDrawer
            onClose={handleCancel}
            footer={footer}
            {...(rest as DrawerProps)}
          >
            {content}
          </HstDrawer>
        ))}
    </>
  );
});

export default memo(HstPopup);
