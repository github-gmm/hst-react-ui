import { App, Modal } from 'antd';
import { useState } from 'react';

interface IConfirmPopup {
  title: string;
  content?: string;
  /** 确认方法 */
  confirm?: (callBack: () => void) => void;
}

const usePopup = () => {
  const [visible, setVisible] = useState(false);
  const { modal = null } = App.useApp();

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  /**
   * 确认弹窗
   * @param title 弹窗标题
   * @param content 弹窗内容
   * @param confirm 确认回调
   */
  const confirmPopup = ({ title, content, confirm }: IConfirmPopup) => {
    const modalPop = modal?.confirm ? modal : Modal;
    const close = modalPop?.confirm({
      title,
      content,
      onOk() {
        confirm?.(() => close.destroy());

        if (confirm) return Promise.reject();

        return Promise.resolve();
      },
      onCancel() {
        close.destroy();
      },
    });
  };

  return { visible, modal, open, close, confirmPopup };
};

export default usePopup;
