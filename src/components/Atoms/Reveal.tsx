import { RevealProps } from '@/Common/interface';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
