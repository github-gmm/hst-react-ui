import { Button, ButtonProps } from 'antd';
import React, { useMemo } from 'react';
import './index.less';
import themeBtn from './themeBtn';

// import { useModel } from '@umijs/max';
// import { isDev } from 'config/constants/buildInfo';

interface IOptionButtonProps extends ButtonProps {
  /** 按钮颜色（文字和边框颜色） main: 主要、success: 成功、error: 错误、info: 信息、waring: 警告  */
  optionType?: 'main' | 'success' | 'error' | 'info' | 'waring';
  /** 常规 */
  primary?: boolean;
  /** 子元素 */
  children?: React.ReactNode;
  /** 权限码 */
  premCode?: string;
  style?: React.CSSProperties;
  className?: string;
}

/** 按钮组件 */
export const OptionButton = (props: IOptionButtonProps) => {
  const {
    // premCode,
    optionType,
    primary = !props.optionType,
    children,
    style,
    className,
    ...restProps
  } = props;

  // const { existCode } = useModel('permission');
  // const open = false;
  // if (premCode && !existCode(premCode) && !isDev(APP_ENV) && open) return null;

  const buttonStyle = useMemo(() => {
    const colorMap = optionType
      ? {
          '--option-btn-color': themeBtn[`${optionType}Color`]?.font_color,
          '--option-btn-bg-color': themeBtn[`${optionType}Color`]?.bg_color,
          '--option-btn-bd-color': themeBtn[`${optionType}Color`]?.bd_color,
          '--option-btn-color-dark':
            themeBtn[`${optionType}Color_dark`]?.font_color,
          '--option-btn-bg-color-dark':
            themeBtn[`${optionType}Color_dark`]?.bg_color,
          '--option-btn-bd-color-dark':
            themeBtn[`${optionType}Color_dark`]?.bd_color,
        }
      : {};
    return {
      ...colorMap,
      ...style,
    };
  }, [optionType, style]);
  const isOption = !!optionType;
  const btnClassName = isOption
    ? `option${primary ? '-primary-' : '-'}button`
    : '';

  return (
    <Button
      {...restProps}
      className={[btnClassName, className].join(' ')}
      style={buttonStyle as React.CSSProperties}
    >
      {children}
    </Button>
  );
};

export default OptionButton;
