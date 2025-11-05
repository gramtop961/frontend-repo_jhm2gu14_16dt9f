import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
            <p className="mt-4 text-white/80">
              I’m a MERN Stack developer passionate about building end-to-end products. My strengths include clean
              component architecture, RESTful APIs, and bringing designs to life with performance in mind.
            </p>
            <p className="mt-3 text-white/70">
              I’ve worked on projects like dashboards, e-commerce flows, and real-time features. I enjoy collaborating
              with designers, writing clear documentation, and shipping value quickly.
            </p>
            <div className="mt-6 inline-flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/5"
              >
                See my work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-emerald-400">10+</p>
              <p className="mt-1 text-sm text-white/70">Projects completed</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-emerald-400">6+</p>
              <p className="mt-1 text-sm text-white/70">Months hands-on</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-emerald-400">100%</p>
              <p className="mt-1 text-sm text-white/70">Frontend + Backend</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-emerald-400">0</p>
              <p className="mt-1 text-sm text-white/70">Legacy baggage</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
