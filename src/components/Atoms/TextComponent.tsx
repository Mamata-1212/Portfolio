import React from 'react';
import { Text } from '@mantine/core';
import { CustomTextProps } from '@/Common/interface';

const TextComponent: React.FC<CustomTextProps> = ({
  fontSize,
  fontWeight,
  color,
  align,
  truncate = false,
  lineClamp,
  className,
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <div className={className}>
      <Text
        style={{ fontSize: fontSize }}
        fw={fontWeight}
        c={color}
        truncate={truncate}
        lineClamp={lineClamp}
        onClick={onClick}
        ta={align}
        {...props}
      >
        {children}
      </Text>
    </div>
  );
};

export default TextComponent;
