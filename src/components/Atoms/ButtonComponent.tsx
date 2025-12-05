import { motion } from 'framer-motion';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  href?: string;
  download?: boolean;
};

const baseStyles =
  'px-7 py-3 rounded-xl font-semibold transition-all duration-300 inline-block';

const variants = {
  primary: 'bg-blue-600 text-white hover:scale-110',
  outline:
    'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110',
};

const Button = ({
  children,
  variant = 'primary',
  className = '',
  href,
  download,
}: ButtonProps) => {
  const Comp = href ? 'a' : 'button';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Comp
        href={href}
        download={download}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Comp>
    </motion.div>
  );
};

export default Button;
