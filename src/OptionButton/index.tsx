import './index.less';

// import { useModel } from '@umijs/max';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
// import { isDev } from 'config/constants/buildInfo';
import { useMemo } from 'react';

import React from 'react';
import themeBtn from './themeBtn';

interface IOptionButtonProps
  extends Omit<ButtonProps, 'type' | 'color' | 'primary'> {
  /** 按钮颜色（文字和边框颜色） main: 主要、success: 成功、error: 错误、info: 信息、waring: 警告 */
  type?: 'main' | 'success' | 'error' | 'info' | 'waring';
  /** 常规 */
  primary?: boolean;
  /** 子元素 */
  children?: React.ReactNode;
  /** 权限码 */
  premCode?: string;
}

/** 按钮组件 */
export const OptionButton = (props: IOptionButtonProps) => {
  const {
    // premCode,
    type = 'default',
    primary = !props.type,
    children,
    style,
    className,
    ...restProps
  } = props;
  // const { existCode } = useModel('permission');

  const buttonStyle = useMemo(
    () => ({
      '--option-btn-color': themeBtn[`${type}Color`]?.font_color,
      '--option-btn-bg-color': themeBtn[`${type}Color`]?.bg_color,
      '--option-btn-bd-color': themeBtn[`${type}Color`]?.bd_color,
      '--option-btn-color-dark': themeBtn[`${type}Color_dark`]?.font_color,
      '--option-btn-bg-color-dark': themeBtn[`${type}Color_dark`]?.bg_color,
      '--option-btn-bd-color-dark': themeBtn[`${type}Color_dark`]?.bd_color,
      ...style,
    }),
    [type, style],
  );

  // const open = false;

  // if (premCode && !existCode(premCode) && !isDev(APP_ENV) && open) return null;

  return (
    <Button
      {...restProps}
      className={
        primary
          ? `option-primary-button ${className || ''}`
          : `option-button ${className || ''}`
      }
      style={buttonStyle as React.CSSProperties}
    >
      {children}
    </Button>
  );
};

export default OptionButton;
