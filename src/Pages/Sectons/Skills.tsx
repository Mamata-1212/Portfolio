import TextComponent from '@/components/Atoms/TextComponent';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'React Native',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Redux',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'SCSS',
  'Mantine',
  'Material UI',
  'Firebase',
  'REST APIs',
  'i18n',
  'SuperTokens',
  'Monorepo Architecture',
  'Figma',
  'Creatie.ai',
];

const SkillFloating = () => {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <TextComponent
        fontSize={36}
        fontWeight={700}
        color="#000000"
        align="center"
      >
        Tech Stack
      </TextComponent>

      <TextComponent
        fontSize={16}
        fontWeight={400}
        color="#4b5563"
        align="center"
        className="mx-auto mt-4 max-w-2xl"
      >
        Technologies and tools I use to build scalable, high-performance web and
        mobile applications.
      </TextComponent>

      <div className="mt-14 flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: 1,
              ease: 'easeInOut',
              delay: index * 0.12,
            }}
            className="
              cursor-default rounded-xl
              border
              border-gray-200 bg-white/40
              px-6
              py-3
              text-sm
              font-semibold shadow-lg
              backdrop-blur-lg
              transition-all
              hover:shadow-2xl
              md:text-base
            "
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillFloating;
