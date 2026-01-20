import TextComponent from '@/components/Atoms/TextComponent';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '3+ Years',
    label: 'Building Scalable Web & Mobile Applications',
  },
  {
    value: 'Fintech Expert',
    label: 'Card Systems, KYC, Transactions, Reporting',
  },
  {
    value: 'AI-Enhanced',
    label: 'Certified AI Engineer leveraging GenAI for SDLC speed',
  },
  {
    value: 'Enterprise UI',
    label: 'Multi-Tenant & Multi-Role Architecture Delivered',
  },
  {
    value: 'Performance Boost',
    label: 'Reduced Load & Improved UX Across Key Modules',
  },
  {
    value: 'Reusable Systems',
    label: 'Built Multi-Theme + Multi-Layout UI Frameworks',
  },
  {
    value: 'Leadership',
    label: 'Collaborated with Founders/CTOs & Mentored Talent',
  },
];

const Achievements = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <TextComponent
        fontSize={36}
        fontWeight={700}
        color="#000"
        align="center"
        className="mb-12"
      >
        Achievements
      </TextComponent>

      <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-3">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.12 }}
            className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur-md"
          >
            <TextComponent
              fontSize={28}
              fontWeight={700}
              color="#2563eb"
              align="center"
              className="text-center"
            >
              {item.value}
            </TextComponent>

            <TextComponent
              fontSize={16}
              fontWeight={500}
              color="#4b5563"
              align="center"
              className="mt-2 text-center"
            >
              {item.label}
            </TextComponent>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
