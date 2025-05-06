import Bio from '@/Components/sections/Bio';
import Skills from '@/Components/sections/Skills';
import Experience from '@/Components/sections/Experience';
import Projects from '@/Components/sections/Projects';
import Contact from '@/Components/sections/Contact';

export default function Home() {
  return (
    <>
      <Bio />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}