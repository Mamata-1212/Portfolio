import Reveal from '@/components/Atoms/Reveal';
import TextComponent from '@/components/Atoms/TextComponent';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <TextComponent
          fontSize={32}
          fontWeight={700}
          color="black"
          align="center"
          className=""
        >
          About Me
        </TextComponent>
      </Reveal>

      <Reveal delay={0.2}>
        <TextComponent
          fontSize={18}
          fontWeight={400}
          color="#4B5563"
          align="center"
          className="mx-auto mt-6 max-w-4xl leading-relaxed md:text-xl"
        >
          I started my career designing and building user interfaces that feel
          natural, fluid, and purpose-driven. Over the years, I’ve grown into a
          developer who not only writes code but understands{' '}
          <span className="font-semibold text-blue-600">
            business logic, user behavior, and system architecture
          </span>
          .
        </TextComponent>
      </Reveal>

      <Reveal delay={0.4}>
        <TextComponent
          fontSize={18}
          fontWeight={400}
          color="#4B5563"
          align="center"
          className="mx-auto mt-6 max-w-4xl leading-relaxed md:text-xl"
        >
          What drives me is the challenge of turning complex workflows like
          fintech operations, multi-role dashboards, card management, or
          enterprise reporting into clean and intuitive experiences. I enjoy
          simplifying the complicated and designing frontends that scale
          effortlessly as products grow.
        </TextComponent>
      </Reveal>

      <Reveal delay={0.6}>
        <TextComponent
          fontSize={18}
          fontWeight={400}
          color="gray.7"
          align="center"
          className="mx-auto mt-6 max-w-4xl leading-relaxed md:text-xl"
        >
          I believe in building{' '}
          <span className="font-semibold text-blue-600">
            future-proof UI systems
          </span>{' '}
          code that is modular, maintainable, and easy for teams to extend.
          Whether it&apos;s optimizing performance, improving design
          consistency, or mentoring junior developers, I always focus on
          long-term impact.
        </TextComponent>
      </Reveal>

      <Reveal delay={0.8}>
        <TextComponent
          fontSize={18}
          fontWeight={400}
          color="#4b5563"
          align="center"
          className="mx-auto mt-6 max-w-4xl leading-relaxed md:text-xl"
        >
          I work closely with founders, CTOs, product teams, and designers to
          bridge the gap between product vision and technical execution. For me,
          great frontend development is not just about writing code it’s about
          elevating the entire user experience.
        </TextComponent>
      </Reveal>
    </section>
  );
};

export default About;
