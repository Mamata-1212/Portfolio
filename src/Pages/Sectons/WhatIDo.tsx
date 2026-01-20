import TextComponent from '@/components/Atoms/TextComponent';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaLaptopCode,
  FaMobileAlt,
  FaUserShield,
} from 'react-icons/fa';
import { MdDashboardCustomize } from 'react-icons/md';

const items = [
  {
    icon: <MdDashboardCustomize size={40} className="text-blue-600" />,
    title: 'Enterprise Frontend Development',
    desc: 'I design and build scalable frontend systems for multi-role portals, dashboards, and business-critical fintech applications used by customers, partners, admins, and distributors.',
  },
  {
    icon: <FaBrain size={40} className="text-emerald-600" />,
    title: 'AI Engineering & GenAI Integration',
    desc: 'Certified AI Engineer leveraging GenAI to accelerate the SDLC, automate UI component generation, and integrate LLM-driven features into modern web applications.',
  },
  {
    icon: <FaLaptopCode size={40} className="text-purple-600" />,
    title: 'UI Architecture & System Design',
    desc: 'Experienced in architecting multi-tenant dashboards, multi-theme & multi-layout UI systems, reusable component libraries, and optimized workflows aligned with business requirements.',
  },
  {
    icon: <FaMobileAlt size={40} className="text-cyan-600" />,
    title: 'Cross-Platform React Development',
    desc: 'Building high-performance React & React Native applications with real-time updates, card management, KYC workflows, and modern mobile-first experiences.',
  },
  {
    icon: <FaUserShield size={40} className="text-amber-600" />,
    title: 'Fintech Workflow Implementation',
    desc: 'Specialized in implementing card issuance, prefunding, activation, transactions, commissions, inventory flows, RBAC systems, and secure authentication across multi-step operations.',
  },
];

const WhatIDo = () => {
  return (
    <section id="WhatIDo" className="mx-auto max-w-7xl px-6 py-24">
      <TextComponent
        fontSize={36}
        fontWeight={700}
        color="#000000"
        align="center"
      >
        What I Do
      </TextComponent>
      <TextComponent
        fontSize={16}
        fontWeight={400}
        color="#4b5563"
        align="center"
        className="mx-auto mt-4 max-w-3xl"
      >
        I build enterprise grade frontend systems with scalable architecture,
        seamless UX, and business-focused engineering especially for fintech and
        multi-tenant platforms.
      </TextComponent>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.07, y: -5 }}
            className="cursor-pointer rounded-2xl border border-gray-200 bg-white/70 p-6 text-center shadow-sm backdrop-blur-md"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <TextComponent
              fontSize={20}
              fontWeight={700}
              color="#000000"
              align="center"
            >
              {item.title}
            </TextComponent>
            <TextComponent
              fontSize={16}
              fontWeight={400}
              color="#4b5563"
              align="center"
              className="mt-3"
            >
              {item.desc}
            </TextComponent>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
