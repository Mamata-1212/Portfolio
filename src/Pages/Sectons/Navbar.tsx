import TextComponent from '@/components/Atoms/TextComponent';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full bg-white/10 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <TextComponent fontSize={24} fontWeight={700} color="#3b82f6">
          Mamata.dev
        </TextComponent>
        <div className="flex space-x-6 font-medium text-gray-700">
          <a href="#home">
            <TextComponent
              fontSize={16}
              fontWeight={500}
              align="left"
              className="cursor-pointer text-gray-500 transition-colors hover:text-blue-500"
            >
              Home
            </TextComponent>
          </a>

          <a href="#about">
            <TextComponent
              fontSize={16}
              fontWeight={500}
              align="left"
              className="cursor-pointer text-gray-500 transition-colors hover:text-blue-500"
            >
              About
            </TextComponent>
          </a>
          <a href="#WhatIDo">
            <TextComponent
              fontSize={16}
              fontWeight={500}
              align="left"
              className="cursor-pointer text-gray-500 transition-colors hover:text-blue-500"
            >
              What I Do
            </TextComponent>
          </a>
          <a href="#skills">
            <TextComponent
              fontSize={16}
              fontWeight={500}
              align="left"
              className="cursor-pointer text-gray-500 transition-colors hover:text-blue-500"
            >
              Skills
            </TextComponent>
          </a>
          <a href="#projects">
            <TextComponent
              fontSize={16}
              fontWeight={500}
              align="left"
              className="cursor-pointer text-gray-500 transition-colors hover:text-blue-500"
            >
              Projects
            </TextComponent>
          </a>
          {/* <a href="#contact" className="hover:text-blue-500">
            Contact
          </a> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
