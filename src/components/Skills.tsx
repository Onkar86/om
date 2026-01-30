import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import DynamicLighting from './DynamicLighting';
import SkillsOrbit from './SkillsOrbit';

const Skills: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* 3D Background Scene */}
            <div className="absolute inset-0 w-full h-full">
                <Scene3D cameraPosition={[0, 0, 15]}>
                    <DynamicLighting />
                    <SkillsOrbit />
                </Scene3D>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/30 to-background pointer-events-none" />

            {/* Content Overlay */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                        Tech Stack
                        <span className="text-primary">.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                        Orbiting through a constellation of modern technologies
                    </p>

                    {/* Instructions */}
                    <div className="glass-card p-6 rounded-xl inline-block">
                        <p className="text-sm text-zinc-300">
                            Watch the skills orbit around the center 🌟
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
