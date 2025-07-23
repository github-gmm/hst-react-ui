import { useDebounceFn } from 'ahooks';
import { Button, ButtonProps } from 'antd';
import React, { memo, useState } from 'react';

interface IHstButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'solid' | 'outlined' | 'dashed' | 'filled' | 'link';
}

const HstButton: React.FC<IHstButtonProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    onClick,
    variant = 'solid',
    color = 'primary',
    size = 'middle',
    children,
    ...rest
  } = props;

  const { run: handleClick } = useDebounceFn(
    async (e: React.MouseEvent<HTMLElement>) => {
      setLoading(true);
      try {
        await onClick?.(e);
      } finally {
        setLoading(false);
      }
    },
    {
      wait: 300,
    },
  );

  const padding = ['link'].includes(variant) ? '0' : undefined;

  const fontSize = ['small'].includes(size) ? '12px' : undefined;

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      loading={loading}
      onClick={handleClick}
      style={{
        padding,
        fontSize: fontSize,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default memo(HstButton);
