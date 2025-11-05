import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DevJobs – Job Board',
    description:
      'Full-stack job board with filters, authentication, and saved jobs. Built with MERN and Tailwind.',
    stack: ['React', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'TaskForge – Kanban',
    description:
      'Trello-like Kanban board with drag-and-drop, real-time updates, and dark mode.',
    stack: ['React DnD', 'Socket.io', 'Node', 'MongoDB'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'ShopLite – E-commerce',
    description:
      'Headless storefront with product search, cart, checkout flow, and Stripe test payments.',
    stack: ['React', 'Node', 'MongoDB', 'Stripe'],
    github: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-transparent to-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Featured Projects
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          A selection of work demonstrating product thinking, performance, and clean code.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm hover:bg-white/[0.06] transition"
            >
              <h3 className="text-xl font-semibold text-white group-hover:translate-x-0.5 transition-transform">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-white/75">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10"
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
}
