import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Layout, Wrench } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">{children}</span>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>
        <p className="mt-2 text-white/70">Technologies and tools I use to ship reliable products.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Database</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>MongoDB</Badge>
              <Badge>Mongoose</Badge>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Backend</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>REST</Badge>
              <Badge>JWT</Badge>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2">
              <Layout className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Frontend</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>React Router</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Framer Motion</Badge>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Tools</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>Git</Badge>
              <Badge>GitHub</Badge>
              <Badge>Vite</Badge>
              <Badge>Postman</Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
