import { TextProps } from "@mantine/core";

export type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}
export type RevealProps = {
  children: React.ReactNode;
  delay?: number;
}

export type CustomTextProps = TextProps & {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  lineClamp?: number;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};
