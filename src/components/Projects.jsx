import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DevNotes – MERN Notes App',
    desc: 'Full-stack notes app with auth, tags, and rich text. REST API with JWT and MongoDB.',
    stack: ['React', 'Express', 'MongoDB', 'Node', 'JWT'],
    github: '#',
    live: '#',
  },
  {
    title: 'ShopSwift – E‑commerce',
    desc: 'Product listing, cart, checkout, and admin dashboard. Server-side validation and caching.',
    stack: ['React', 'Express', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'InsightDash – Analytics',
    desc: 'Interactive dashboards with charts, filters, and role-based access control.',
    stack: ['React', 'Node', 'Express', 'MongoDB', 'Chart.js'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-b from-black to-black/95 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">Production-like apps demonstrating full-stack skills end to end.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20" />
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/80">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.github}
                  className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-sm transition hover:bg-white/20"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-sm transition hover:border-white/25 hover:bg-white/5"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
