import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6oQk5O8WzJzF1R1b/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Fresh MERN Developer • Open to Opportunities
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Building delightful web experiences with React, Node, and MongoDB
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            I craft responsive, accessible UIs and scalable APIs. I love turning ideas into
            polished products with smooth animations and great performance.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Explore Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/60 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://your-portfolio-demo.example.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/60 transition"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
