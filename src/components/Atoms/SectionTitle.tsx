import { motion } from 'framer-motion';

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center text-4xl font-bold"
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
