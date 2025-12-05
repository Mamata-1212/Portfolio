import About from '../Sectons/About';
import Achievements from '../Sectons/Achievements';
import Experience from '../Sectons/Experience';
import Hero from '../Sectons/Hero';
import Navbar from '../Sectons/Navbar';
import Projects from '../Sectons/Projects';
import Skills from '../Sectons/Skills';
import WhatIDo from '../Sectons/WhatIDo';

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Achievements />
      <Skills />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default Dashboard;
