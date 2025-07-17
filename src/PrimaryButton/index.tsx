import React, { memo, useState } from "react";
import { Button, ButtonProps } from "antd";

type IPrimaryButtonProps = Omit<ButtonProps, 'type'>

const PrimaryButton: React.FC<IPrimaryButtonProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { children, ...rest } = props

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Button {...rest} type='primary' onClick={handleClick} loading={loading}>
      {children}
    </Button>
  );
};

export default memo(PrimaryButton);
