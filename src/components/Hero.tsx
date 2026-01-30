import React from 'react';
import { motion } from 'framer-motion';
import heroPortrait from '../assets/hero-portrait.png';
import Scene3D from './Scene3D';
import ParticleSystem from './ParticleSystem';
import FloatingGeometry from './FloatingGeometry';
import DynamicLighting from './DynamicLighting';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 w-full h-full">
        <Scene3D cameraPosition={[0, 0, 10]}>
          <DynamicLighting />
          <ParticleSystem />
          <FloatingGeometry />
        </Scene3D>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              OM
              <span className="text-primary animate-pulse">.</span>
            </h1>
            <div className="absolute -top-10 -right-20 opacity-50 text-xs font-mono border border-white/10 p-2 rounded hidden md:block backdrop-blur-sm bg-white/5">
              div.human &#123;<br />
              &nbsp;&nbsp;role: "Creator";<br />
              &#125;
            </div>
          </div>

          <div className="space-y-4 text-xl md:text-2xl font-light text-zinc-400 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-gradient-to-r from-primary to-transparent"></span>
              <span className="text-white font-medium">Developer</span>
              <span className="text-zinc-600">Building Digital Experiences</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-gradient-to-r from-secondary to-transparent"></span>
              <span className="text-white font-medium">Designer</span>
              <span className="text-zinc-600">Crafting Visual Stories</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-gradient-to-r from-orange-500 to-transparent"></span>
              <span className="text-white font-medium">Innovator</span>
              <span className="text-zinc-600">Pushing Boundaries</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-105">
              Explore Work
            </button>
            <button className="px-8 py-3 glass rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
            {/* Multi-layer glowing background that matches 3D scene */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-3xl -rotate-6 blur-[80px] animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/30 to-pink-500/30 rounded-3xl rotate-6 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Particle attraction effect */}
            <div className="absolute -inset-8 opacity-40">
              <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Main image frame */}
            <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.3)] border border-white/30 backdrop-blur-xl">
              <img
                src={heroPortrait}
                alt="Onkar Mahamuni"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient overlay that blends with background */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

              {/* Scanning light effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-full h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent -top-32 animate-scan" />
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg animate-pulse" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-secondary rounded-tr-lg animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-orange-500 rounded-bl-lg animate-pulse" style={{ animationDelay: '0.6s' }} />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-500 rounded-br-lg animate-pulse" style={{ animationDelay: '0.9s' }} />
            </div>

            {/* Floating particles around image */}
            <div className="absolute -inset-4 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 glass-card p-5 rounded-2xl animate-float border border-primary/50 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            >
              <div className="text-xs text-primary font-semibold mb-1">Experience</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5+ Years</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-10 -right-8 glass-card p-4 rounded-2xl border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm font-bold text-green-400">Open to Work</span>
              </div>
            </motion.div>

            {/* Info badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full border border-white/20 shadow-lg"
            >
              <p className="text-xs text-zinc-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Integrated with 3D Scene
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;