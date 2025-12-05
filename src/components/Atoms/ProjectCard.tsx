import { motion } from 'framer-motion';

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border border-gray-200 bg-white/60 p-8 shadow-lg backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
