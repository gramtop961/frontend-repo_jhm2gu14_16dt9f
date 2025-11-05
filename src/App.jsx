import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          MERN Portfolio
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm text-white/80 transition hover:text-white">About</a>
          <a href="#projects" className="text-sm text-white/80 transition hover:text-white">Projects</a>
          <a href="#skills" className="text-sm text-white/80 transition hover:text-white">Skills</a>
          <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </nav>
      {open && (
        <div className="mx-auto max-w-7xl px-6 pb-3 md:hidden">
          <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-black/80 p-3 text-white">
            <a href="#about" className="rounded-md px-2 py-2 text-sm hover:bg-white/10" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" className="rounded-md px-2 py-2 text-sm hover:bg-white/10" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" className="rounded-md px-2 py-2 text-sm hover:bg-white/10" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" className="rounded-md px-2 py-2 text-sm hover:bg-white/10" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
