import React from 'react';
import { Menu } from 'lucide-react';

const links = [
  { href: '#/', label: 'Home' },
  { href: '#/about', label: 'About' },
  { href: '#/projects', label: 'Projects' },
  { href: '#/skills', label: 'Skills' },
  { href: '#/certifications', label: 'Certifications' },
  { href: '#/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          MERN Portfolio
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </nav>
      {open && (
        <div className="mx-auto max-w-7xl px-6 pb-3 md:hidden">
          <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-black/80 p-3 text-white">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-md px-2 py-2 text-sm hover:bg-white/10">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
