import TextComponent from '@/components/Atoms/TextComponent';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Instant Mudra Technologies Pvt. Ltd.',
    role: 'Software Developer',
    duration: 'Oct 2024 – Aug 2025',
    sections: [
      {
        title: '🔹 Business & Product Impact',
        points: [
          'Developed core features for a large-scale prepaid card ecosystem used by customers, retailers, distributors, and corporate partners.',
          'Built multi-role fintech infrastructure enabling card issuance, KYC workflows, transactions, prefunding, and partner operations.',
          'Improved workflows across departments, reducing manual tasks and improving real-time operational visibility.',
        ],
      },
      {
        title: '🔹 Frontend Architecture & UI Engineering',
        points: [
          'Architected a multi-theme, multi-layout UI framework using Mantine + Tailwind for scalable white-label portals.',
          'Created reusable UI components, layouts, form engines, modals, tables, dropdowns, and notifications.',
          'Implemented config-driven UI architecture enabling rapid feature expansion.',
        ],
      },
      {
        title: '🔹 Fintech Modules Delivered',
        points: [
          'Implemented complete card lifecycle: issuance, activation/deactivation, limits, PIN controls, and transactions.',
          'Developed full KYC/KYB verification system with document uploads, review flows, approvals, and audits.',
          'Engineered commission slabs, payout logic, incentive dashboards, and distributor ledger tracking.',
          'Built inventory system for card batches, assignment, stock movement, and allocation.',
          'Delivered real-time reporting dashboards with filters, pagination, and data export (CSV, PDF).',
        ],
      },
      {
        title: '🔹 Platform-Level Work',
        points: [
          'Implemented RBAC hierarchy: Super Admin → Admin → Distributor → Retailer → Customer.',
          'Built multi-login architecture separating business portals with isolated logic.',
          'Developed staff management, ticketing, logs, audit trails, and service request handling.',
        ],
      },
      {
        title: '🔹 Collaboration & Leadership',
        points: [
          'Worked with founders, backend engineers, QA, and designers to translate complex requirements into polished UI/UX.',
          'Owned critical modules, applying performance optimizations and UX improvements.',
          'Interviewed developers and mentored juniors in frontend best practices.',
        ],
      },
    ],
  },

  {
    company: 'Rejolut Technology Solutions Pvt. Ltd.',
    role: 'Software Developer',
    duration: 'May 2022 – Sep 2024',
    sections: [
      {
        title: '🔹 Frontend Development',
        points: [
          'Developed multiple production-ready applications using React, React Native, and Next.js across fintech, healthcare, AI, and Web3.',
          'Built advanced workflows: authentication, wallet integrations, NFT scanning, AI voice/video generation.',
          'Delivered mobile-first responsive UI with optimized rendering, caching, and smooth API integration.',
        ],
      },
      {
        title: '🔹 UI Engineering & Component Systems',
        points: [
          'Developed custom component libraries, theme engines, animations, and navigation systems.',
          'Created reusable hooks, utility functions, and standardized API layers for team-wide use.',
          'Optimized performance with memoization, lazy loading, image optimization, and pagination.',
        ],
      },
      {
        title: '🔹 Major Projects Delivered',
        points: [
          'TastePass (Wine NFT): Implemented bottle scanning, OCR, NFT minting, estate dashboards, and multilingual flows.',
          'MegaVrse AI: Built panels for voice cloning, text-to-video, 3D generation, and media dashboards.',
          'Healthcare App: Developed appointment flows, prescription modules, and medical record UI.',
        ],
      },
      {
        title: '🔹 Ownership & Growth',
        points: [
          'Started as trainee and grew into a module owner handling UI, API integration, debugging, and deployment.',
          'Handled sprint execution, bug triage, feature releases, and production maintenance.',
          'Participated in client demos, documentation, and end-to-end delivery.',
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <TextComponent
        fontSize={32}
        fontWeight={700}
        color="var(--mantine-color-gray-900)"
        align="center"
        className="mb-20"
      >
        Experience Timeline
      </TextComponent>

      <div className="relative">
        {/* Vertical Center Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`mb-24 flex w-full ${
                isLeft ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Card */}
              <div
                className={`relative w-full rounded-2xl border border-gray-200 bg-white/60 p-8 shadow-xl backdrop-blur-xl md:w-[46%] ${
                  isLeft ? 'mr-auto' : 'ml-auto'
                }`}
              >
                {/* Dot on Timeline */}
                <div
                  className={`absolute top-8 h-5 w-5 rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-purple-600 shadow-md ${
                    isLeft ? '-right-10' : '-left-10'
                  }`}
                ></div>
                <TextComponent
                  fontSize={24}
                  fontWeight={700}
                  color="#1D4ED8"
                  className="mb-1"
                >
                  {exp.role}
                </TextComponent>

                <TextComponent
                  fontSize={16}
                  fontWeight={600}
                  color="#1F2937"
                  className="mb-1"
                >
                  {exp.company}
                </TextComponent>

                <TextComponent
                  fontSize={14}
                  fontWeight={400}
                  color="#6B7280"
                  className="mb-6"
                >
                  {exp.duration}
                </TextComponent>

                {exp.sections.map((sec, idx2) => (
                  <motion.div
                    key={idx2}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx2 * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <TextComponent
                      fontSize={18}
                      fontWeight={600}
                      color="#6b21a8"
                      className="mb-2 text-lg text-purple-700"
                    >
                      {sec.title}
                    </TextComponent>

                    <ul className="ml-5 list-disc space-y-2 text-gray-700">
                      {sec.points.map((p, j) => (
                        <li key={j} className="leading-relaxed">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
