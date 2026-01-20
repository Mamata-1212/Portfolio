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
          What drives me is the challenge of turning complex workflows like{' '}
          <span className="font-semibold text-blue-600">
            fintech operations, multi-role dashboards, card management, or
            enterprise reporting
          </span>{' '}
          into clean and intuitive experiences. Recently, I have expanded this
          mission by integrating{' '}
          <span className="font-semibold text-blue-600">
            GenAI and AI Engineering
          </span>{' '}
          into my workflow, leveraging AI to accelerate development cycles and
          build smarter, more responsive interfaces.
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
            future proof UI systems
          </span>{' '}
          modular, maintainable code that scales effortlessly as products grow.
          Whether I am{' '}
          <span className="font-semibold text-blue-600">
            optimizing performance, improving design consistency, or mentoring
            junior developers,
          </span>{' '}
          my focus is always on creating long-term technical impact.
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
          I work closely with{' '}
          <span className="font-semibold text-blue-600">
            Founders and CTOs,
          </span>{' '}
          I bridge the gap between product vision and technical execution. For
          me, great frontend development is more than just writing code; it is
          about{' '}
          <span className="font-semibold text-blue-600">
            elevating the user experience through precision and innovation.
          </span>{' '}
        </TextComponent>
      </Reveal>
    </section>
  );
};

export default About;
