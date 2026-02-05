"use client";

import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValue, 
  useMotionTemplate 
} from "framer-motion";
import { ArrowRight, Dumbbell, Users, ChevronDown, Instagram, Mail } from "lucide-react";
import { useRef, MouseEvent } from "react";

const LINKS = {
  form: "https://app.youform.com/forms/kswblojh",
  instagram: "https://www.instagram.com/valensgym/",
  tiktok: "https://www.tiktok.com/@valensgym",
  email: "mailto:valensgym@gmail.com",
};

export default function Home() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Global Spotlight
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  // Smooth scroll handler
  const scrollToMission = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="bg-valens-black min-h-screen flex flex-col items-center selection:bg-white selection:text-black relative"
    >
      <div className="bg-noise" />

      {/* GLOBAL SPOTLIGHT */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      {/* THE SPINE */}
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
        <div className="w-[1px] h-full bg-spine-gradient opacity-20" />
      </div>
      
      {/* --- HERO SECTION --- */}
      <section 
        ref={targetRef} 
        className="relative w-full h-screen flex flex-col justify-center items-center px-4 group z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-radial opacity-30 blur-3xl pointer-events-none animate-pulse-slow" />

        <motion.div style={{ opacity, scale }} className="z-10 text-center max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-valens-dim uppercase tracking-[0.4em] text-xs font-medium mb-6 block">
              Schaumburg, IL
            </span>
            <h1 className="text-6xl sm:text-9xl font-bold tracking-tighter text-white mb-8 drop-shadow-2xl">
              VALENS
            </h1>
          </motion.div>

          {/* UPDATED COPY HERE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-lg sm:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Most gyms are <span className="text-white">too crowded</span>, <span className="text-white">too distracting</span>, and not built for <span className="italic text-white">real work</span>. <br className="hidden sm:block" />
            We are building the antidote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            {/* UPDATED BUTTON TEXT */}
            <a
              href={LINKS.form}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
              <span className="flex items-center gap-2 relative z-10">
                Become a Founding Member <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* ADDED SECONDARY LINK */}
            <button 
              onClick={scrollToMission}
              className="text-sm text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
            >
              Why are we doing this?
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 10, 0] }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-12"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section id="mission" className="w-full h-screen flex items-center py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                A Community, <br/> Then A Gym.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We aren't just opening doors and hoping you show up. We are gathering the serious lifters first. 
              </p>
              
              <div className="space-y-6 mt-12">
                <div className="flex items-start gap-5 group">
                  <div className="p-3 border border-white/10 rounded-lg group-hover:border-white/30 transition-colors">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Voice Your Opinion</h3>
                    <p className="text-sm text-gray-500">Tell us exactly what you hate about your current gym.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="p-3 border border-white/10 rounded-lg group-hover:border-white/30 transition-colors">
                    <Dumbbell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Training & Events</h3>
                    <p className="text-sm text-gray-500">Access to personal training at Schaumburg Christian School.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[50vh] md:h-[600px] w-full rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-valens-black via-transparent to-transparent z-10 animate-flicker" />
              
              <img 
                src="/images/valens-training.jpg" 
                alt="Valens Training" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="flex-grow flex flex-col justify-center items-center">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Stop compromising.</h2>
            <a
                href={LINKS.form}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors"
                >
                Join the List <ArrowRight className="w-5 h-5" />
                </a>
            </motion.div>
        </div>

        <footer className="w-full py-12 flex flex-col items-center justify-center gap-8">
            <div className="flex gap-8">
            <a href={LINKS.instagram} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
            </a>
            <a href={LINKS.tiktok} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a href={LINKS.email} className="text-gray-500 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
            </a>
            </div>
            <div className="flex flex-col items-center gap-2">
                <a href={LINKS.email} className="text-valens-dim text-sm hover:text-white transition-colors">valensgym@gmail.com</a>
                <p className="text-valens-dim text-xs opacity-50">© 2026 Valens Gym.</p>
            </div>
        </footer>
      </section>
    </main>
  );
}