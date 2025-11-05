import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'JavaScript (Intermediate)',
    org: 'HackerRank',
    year: '2024',
    link: '#',
  },
  {
    title: 'React Developer',
    org: 'Meta / Coursera',
    year: '2024',
    link: '#',
  },
  {
    title: 'MongoDB for Developers',
    org: 'MongoDB University',
    year: '2023',
    link: '#',
  },
];

const Certifications = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-emerald-400" />
          <h1 className="text-3xl font-bold md:text-4xl">Certifications</h1>
        </div>
        <p className="mt-2 text-white/70">A snapshot of credentials that back my MERN skills.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-white/70">{c.org}</p>
              <p className="mt-2 text-xs text-white/50">Issued {c.year}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
