import Button from '@/components/Atoms/ButtonComponent';
import TextComponent from '@/components/Atoms/TextComponent';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden text-center"
    >
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-200 via-white to-purple-200 opacity-40" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="z-10 text-5xl font-extrabold leading-tight md:text-7xl"
      >
        <TextComponent
          fontSize={48}
          fontWeight={800}
          color="transparent"
          className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
        >
          Frontend Engineer
        </TextComponent>
        <TextComponent
          fontSize={48}
          fontWeight={800}
          color="#000000"
          className="z-10 text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Crafting Scalable Digital Experiences
        </TextComponent>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10 mt-6 max-w-4xl text-lg leading-relaxed text-gray-700 md:text-xl"
      >
        <TextComponent
          fontSize={18}
          fontWeight={400}
          color="#444"
          align="center"
          className="mx-auto max-w-4xl leading-relaxed text-gray-700"
        >
          I am a{' '}
          <span className="font-semibold text-blue-600">
            Frontend Developer
          </span>{' '}
          with 3+ years of experience building high-performance, scalable web
          and mobile applications across Fintech, Web3, and SaaS platforms. I
          specialize in{' '}
          <span className="font-semibold text-blue-600">
            React, React Native, Next.js, TypeScript, UI architecture,
            multi-theme systems, performance optimization, and enterprise-grade
            frontend engineering.
          </span>
        </TextComponent>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="z-10 mt-8 flex space-x-4"
      >
        <Button href="#projects" variant="primary">
          View Projects
        </Button>

        <Button
          href="/src/assets/Mamata_Gawand_Resume.pdf"
          download
          variant="outline"
        >
          Resume
        </Button>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-12 top-28 rounded-xl border bg-white/70 p-2 shadow-lg backdrop-blur-md"
      >
        React ⚛️
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-24 left-12 rounded-xl border bg-white/70 p-2 shadow-lg backdrop-blur-md"
      >
        TypeScript 🌀
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 left-3/4 rounded-xl border bg-white/70 p-2 shadow-lg backdrop-blur-md"
      >
        React Native ⚛️
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-24 top-72 rounded-xl border bg-white/70 p-2 shadow-lg backdrop-blur-md"
      >
        Tailwind CSS⚡
      </motion.div>
    </section>
  );
};

export default Hero;
