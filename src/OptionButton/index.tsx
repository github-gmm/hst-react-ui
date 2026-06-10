// import { useModel } from '@umijs/max';
import { Button, type ButtonProps } from 'antd';
import React, { useMemo } from 'react';
import './index.less';
import themeBtn, { type OptionButtonType } from './themeBtn';

type OptionButtonStyle = React.CSSProperties &
  Partial<
    Record<
      | '--option-btn-color'
      | '--option-btn-bg-color'
      | '--option-btn-bd-color'
      | '--option-btn-color-dark'
      | '--option-btn-bg-color-dark'
      | '--option-btn-bd-color-dark',
      string
    >
  >;

interface IOptionButtonProps extends ButtonProps {
  /** 按钮颜色 main: 主要、success: 成功、error: 错误、info: 信息、waring: 警告 */
  optionType?: OptionButtonType;
  /** 权限码 */
  permissionCode?: string | string[];
  /** 隐藏 */
  hide?: boolean;
}

/** 按钮组件 */
export const OptionButton = (props: IOptionButtonProps) => {
  const {
    // permissionCode,
    optionType,
    hide = false,
    children,
    style,
    className,
    ...restProps
  } = props;
  // const { existCode } = useModel('permission');

  const buttonStyle = useMemo<OptionButtonStyle>(() => {
    const theme = optionType ? themeBtn[optionType] : undefined;

    return {
      ...(theme
        ? {
            '--option-btn-color': theme.light.fontColor,
            '--option-btn-bg-color': theme.light.bgColor,
            '--option-btn-bd-color': theme.light.borderColor,
            '--option-btn-color-dark': theme.dark.fontColor,
            '--option-btn-bg-color-dark': theme.dark.bgColor,
            '--option-btn-bd-color-dark': theme.dark.borderColor,
          }
        : {}),
      ...style,
    };
  }, [optionType, style]);

  if (hide) return null;
  // if (permissionCode && !existCode(permissionCode)) return null;

  return (
    <Button
      {...restProps}
      className={[optionType ? 'option-button' : '', className]
        .filter(Boolean)
        .join(' ')}
      style={buttonStyle}
    >
      {children}
    </Button>
  );
};

export default OptionButton;
