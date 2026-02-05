"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Dumbbell, Users, ChevronDown, Instagram } from "lucide-react";
import { useRef } from "react";

// Social Links & Form
const LINKS = {
  form: "https://app.youform.com/forms/kswblojh",
  instagram: "https://www.instagram.com/valensgym/",
  tiktok: "https://www.tiktok.com/@valensgym",
  email: "mailto:valensgym@gmail.com",
};

export default function Home() {
  const targetRef = useRef(null);

  // This tracks the scroll progress of the Hero section specifically
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <main className="bg-valens-black min-h-screen flex flex-col items-center overflow-hidden selection:bg-white selection:text-black">

      {/* --- HERO SECTION --- */}
      {/* FIX: Added ref={targetRef} here so Framer Motion knows what to track */}
      <section
        ref={targetRef}
        className="relative w-full h-screen flex flex-col justify-center items-center px-4"
      >

        {/* Ambient Glow Effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-radial opacity-40 blur-3xl pointer-events-none animate-pulse-slow" />

        <motion.div
          style={{ opacity, scale }}
          className="z-10 text-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-valens-dim uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 block">
              Est. 2026 • Schaumburg, IL
            </span>
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
              VALENS
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Most gyms are <span className="text-white font-normal">too crowded</span>, <span className="text-white font-normal">too distracting</span>, and not built for <span className="italic text-white">real work</span>.
            <br className="hidden sm:block" />
            We are building the antidote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* PRIMARY CTA */}
            <a
              href={LINKS.form}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
              <span className="flex items-center gap-2">
                Help Us Build It <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="#mission"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium underline-offset-4 hover:underline"
            >
              Why are we doing this?
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 opacity-50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section id="mission" className="w-full py-32 px-4 relative z-20 bg-valens-dark">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">A Community, Then A Gym.</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                We aren't just opening doors and hoping you show up. We are gathering the serious lifters first.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Right now, we are running focused <strong>Personal Training</strong> programs at Schaumburg Christian School and building our founding member list.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-valens-card rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Voice Your Opinion</h3>
                    <p className="text-sm text-gray-500">Tell us exactly what you hate about your current gym so we don't make those mistakes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-valens-card rounded-lg">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Training & Events</h3>
                    <p className="text-sm text-gray-500">Access to personal training and community lifts before the facility opens.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full bg-valens-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src="/valens-training.jpg"
                alt="Valens Training Aesthetic"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-white text-xl font-bold">The Standard.</p>
                <p className="text-gray-400 text-sm">No distractions. Just progress.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="w-full py-24 bg-black flex flex-col items-center justify-center text-center px-4 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop compromising on your training.</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join the founding list. Tell us what you need. Get a free consultation on your training goals.
          </p>
          <a
            href={LINKS.form}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-200 transition-colors"
          >
            Join Valens <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full py-8 border-t border-white/5 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6">
          <a href={LINKS.instagram} target="_blank" className="p-3 bg-valens-card rounded-full hover:bg-white hover:text-black transition-all">
            <Instagram className="w-5 h-5" />
          </a>
          <a href={LINKS.tiktok} target="_blank" className="p-3 bg-valens-card rounded-full hover:bg-white hover:text-black transition-all">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
          </a>
        </div>
        <p className="text-valens-dim text-sm">© 2026 Valens Gym. All rights reserved.</p>
      </footer>
    </main>
  );
}