import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-black/95 to-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Let’s build something great
          </motion.h2>
          <p className="mt-3 text-white/70">
            I’m actively looking for full-time opportunities and internships. Reach out and I’ll get back quickly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 font-medium text-white transition hover:border-white/25 hover:bg-white/5"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-white/50">
          Built with React, Tailwind, and a playful interactive hero.
        </p>
      </div>
    </section>
  );
};

export default Contact;
