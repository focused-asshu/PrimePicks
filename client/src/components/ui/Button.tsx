import { motion } from 'framer-motion';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export default function Button({ variant = 'primary', children, ...rest }: Props) {
  const cls = variant === 'primary' ? 'btn btn-primary' : 'btn btn-ghost';
  return (
    <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className={cls} {...rest}>
      {children}
    </motion.button>
  );
}
