import { motion } from 'framer-motion';

const Tag = ({ label }: { label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.15 }}
      transition={{ duration: 0.3 }}
      className="
        cursor-pointer rounded-full border border-gray-300 
        bg-white/40 px-5 
        py-2 font-medium 
        text-gray-700 shadow-sm backdrop-blur-md
      "
    >
      {label}
    </motion.div>
  );
};

export default Tag;
