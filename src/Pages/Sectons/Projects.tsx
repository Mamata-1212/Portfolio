import Reveal from '@/components/Atoms/Reveal';
import TextComponent from '@/components/Atoms/TextComponent';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Dev Design – AI-Driven UI Engineering Lab',
    problem:
      'Developers often struggle to maintain a consistent "Visual Axis" and vertical alignment in complex UI systems, especially when scaling components for a global, multi-language audience.',
    solution:
      'Architected a high-end component library and "Command Center" featuring a modular Peacock Green theme. Engineered custom layout logic to ensure perfect text alignment in inputs, built a synchronized i18n system for 4 languages, and implemented advanced Vite/Rollup chunking strategies to optimize production bundle sizes.',
    impact:
      'Reduced initial load times by splitting large vendor libraries and created a blueprint for high-performance, accessible, and theme-driven enterprise platforms.',
    additional:
      'Implemented Linux-compatible build scripts (shx) for cross-platform CI/CD, integrated Framer Motion for micro-interactions, and optimized Mantine internal layout logic using custom Tailwind overrides.',
    tech: 'React, TypeScript, Mantine, Tailwind CSS, Framer Motion, i18n, Vite',
    links: [
      { label: 'Live', url: 'https://devdesign12.netlify.app/' },
      { label: 'YouTube', url: 'YOUR_YOUTUBE_LINK_HERE' },
      { label: 'GitHub', url: 'YOUR_GITHUB_LINK_HERE' },
    ],
  },
  {
    title: 'Prepaid Card Platform',
    problem:
      'Users, admins, distributors, and corporate partners needed a unified and secure platform to manage prepaid cards, KYC, transactions, funding, and operational workflows across multiple roles.',
    solution:
      'Led development of a full-scale multi-role platform with complete card lifecycle management (issuance, activation, PIN controls, limits), advanced KYC/KYB verification, transaction history with filters, prefunding workflows, ledger views, and real-time balance sync. Built reusable UI systems and dashboards supporting customers, retailers, distributors, and partners.',
    impact:
      'Significantly reduced manual operations across departments, improved onboarding speed, and created a scalable fintech infrastructure serving thousands of active users with fast performance and high reliability.',
    additional:
      'Designed multi-theme + multi-layout architecture, built reusable components for tables/forms/filters, implemented RBAC, ticketing, logs, inventory tracking, commission system, and reporting dashboards.',
    tech: 'React Native, React, TypeScript, Redux, Tailwind, Mantine, i18n',
  },

  {
    title: 'Enterprise Multi-Tenant Portal',
    problem:
      'Retailers, distributors, partners, and corporate teams needed a customizable enterprise portal to manage commissions, reports, inventory, financial data, and user hierarchies.',
    solution:
      'Architected a large-scale multi-tenant portal supporting multiple layouts, themes, and brand identities. Built modules for commission slabs, payouts, KYB/KYC flows, user roles, inventory movement, ticketing, prefunding, and complex reporting. Implemented RBAC and config-driven UI for maximum scalability.',
    impact:
      'Standardized the product UI/UX across all business units, reduced onboarding time for new partners, and enabled white-label portal deployment with minimal customization.',
    additional:
      'Created reusable dashboards, multi-role login flows, unified navigation, extensive filtering, exporting (CSV/PDF), and seamless data visualization.',
    tech: 'React, TS, Tailwind, Mantine, MUI, Redux',
  },

  {
    title: 'TastePass – Wine Scanning & NFT Ownership',
    problem:
      'Wine estates and users needed a modern way to authenticate wine bottles, track provenance, and verify ownership through NFT-linked metadata.',
    solution:
      'Developed cross-platform mobile apps enabling wine scanning through OCR, QR, and label detection. Built complete NFT minting workflows, estate dashboards, multilingual UI, authentication, and detailed asset management screens.',
    impact:
      'Streamlined bottle verification for estates, reduced manual checks, and introduced digital ownership using Web3 technology across multiple regions and user types.',
    additional:
      'Implemented scanning SDKs, multilingual support (i18n), secure API integration, and highly responsive UI optimized for low-end devices.',
    tech: 'React Native, React, TypeScript, Tailwind, i18n',
    links: [{ label: 'Doc', url: 'https://rejolut.com/design/tastepass/' }],
  },

  {
    title: 'MegaVrse – AI Media Platform',
    problem:
      'Users required an intuitive UI to interact with heavy AI workflows like text-to-video, voice cloning, text-to-voice, and 3D model generation.',
    solution:
      'Developed responsive, modular interfaces for AI generation pipelines including media previews, task queues, history, cloning panels, prompt builders, and multi-step workflows. Integrated SuperTokens for secure auth and built reusable UI components for fast interactions.',
    impact:
      'Improved efficiency of media creation workflows, enhanced user stability for long-running tasks, and enabled seamless multi-format AI content generation.',
    additional:
      'Optimized rendering, integrated load states, handled large media results, and built scalable folder-based monorepo UI architecture.',
    tech: 'React, TypeScript, Tailwind, MonoRepo, SuperTokens',
  },
  {
    title: 'MO – Project Management Platform',
    problem:
      'Purchasers and providers needed a platform to manage projects, milestones, funds, penalties, and workflows.',
    solution:
      'Built a project creation system, milestone tracking, fund management engine, penalty workflows, and detailed sub-milestone features.',
    impact:
      'Streamlined collaboration, improved transparency, and enabled real-time project monitoring.',
    tech: 'React, Tailwind CSS',
    links: [{ label: 'Web', url: 'https://app.the-mo.net/signin' }],
  },
  {
    title: '5WF – Wildlife Conservation Platform',
    problem:
      'Users needed a reliable portal for species info, donations, and KYC. Admins needed tools for species management.',
    solution:
      'Created a complete user portal with species listing, donation flow, KYC verification, and admin management panels.',
    impact:
      'Improved donor engagement and transparency through structured species and donation tracking.',
    tech: 'React, SASS',
    links: [{ label: 'Web', url: 'https://5wf.org/' }],
  },
  {
    title: 'MyKaizen – Cross-Platform Medical App',
    problem:
      'Patients and doctors needed a unified mobile app for secure consultations, prescriptions, and appointments.',
    solution:
      'Developed a cross-platform app with appointment scheduling, prescription wallet, video consultations, biometric login, and emergency SOS.',
    impact:
      'Improved patient experience and strengthened secure access through biometrics and encrypted workflows.',
    tech: 'React Native, TypeScript, Biometrics, Android, iOS',
    links: [{ label: 'Link', url: 'https://mykaizen.io/' }],
  },
  {
    title: 'NEAR NFT Marketplace',
    problem:
      'Users needed a marketplace to mint, list, auction, and manage NFTs using NEAR wallet.',
    solution:
      'Developed a fast Next.js marketplace with NFT minting, auctions, wallet integration, and responsive Web3 UI.',
    impact:
      'Delivered a smooth NFT trading experience with secure wallet integration and real-time bidding flows.',
    tech: 'Next.js, Web3.js, NEAR Wallet, Tailwind CSS',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <TextComponent
          fontSize={32}
          fontWeight={700}
          color="black"
          align="center"
          className="font-bold transition-all hover:text-blue-600"
        >
          Projects
        </TextComponent>
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal delay={index * 0.12} key={project.title}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="
    flex 
    h-full flex-col 
    rounded-2xl 
    border 
    bg-white/70 
    p-8 
    shadow-lg 
    backdrop-blur-xl
  "
            >
              <TextComponent
                fontSize={22}
                fontWeight={700}
                color="blue"
                className="
    bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
    transition-all hover:from-blue-700
    hover:to-purple-700
  "
              >
                {project.title}
              </TextComponent>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links &&
                  project.links?.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
              <div className="mt-4">
                <TextComponent fontSize={18} fontWeight={600} color="#1f2937">
                  Problem
                </TextComponent>

                <TextComponent
                  fontSize={16}
                  fontWeight={400}
                  color="#4b5563"
                  className="mt-1"
                >
                  {project.problem}
                </TextComponent>
              </div>

              <div className="mt-4">
                <TextComponent fontSize={18} fontWeight={600} color="#1f2937">
                  Solution
                </TextComponent>

                <TextComponent
                  fontSize={16}
                  fontWeight={400}
                  color="#4b5563"
                  className="mt-1"
                >
                  {project.solution}
                </TextComponent>
              </div>

              <div className="mt-4">
                <TextComponent fontSize={18} fontWeight={600} color="#1f2937">
                  Impact
                </TextComponent>

                <TextComponent
                  fontSize={16}
                  fontWeight={400}
                  color="#4b5563"
                  className="mt-1"
                >
                  {project.impact}
                </TextComponent>
              </div>

              <div className="mt-4">
                <TextComponent fontSize={18} fontWeight={600} color="#1f2937">
                  Additional
                </TextComponent>

                <TextComponent
                  fontSize={16}
                  fontWeight={400}
                  color="#4b5563"
                  className="mt-1"
                >
                  {project.additional}
                </TextComponent>
              </div>

              <TextComponent
                fontSize={14}
                fontWeight={500}
                color="#9333ea"
                className="mt-6"
              >
                Tech: {project.tech}
              </TextComponent>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
