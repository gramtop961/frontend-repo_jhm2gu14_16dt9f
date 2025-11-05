import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Flames.Blue — Crafted with React & Tailwind</p>
        <div className="text-white/50 text-xs">Built with a sprinkle of 3D and motion ✦</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <DecorativeBento />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

// A small creative flourish: a lightweight bento section highlighting strengths.
function DecorativeBento() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Performance First</h3>
            <p className="mt-2 text-sm text-white/70">Ship fast UIs with code-splitting, image optimization, and accessible semantics.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 p-6">
            <h3 className="text-lg font-semibold">Delightful Motion</h3>
            <p className="mt-2 text-sm text-white/70">Micro-interactions that feel alive without sacrificing performance.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">MERN Mindset</h3>
            <p className="mt-2 text-sm text-white/70">End-to-end product thinking—from MongoDB schemas to polished React UIs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
