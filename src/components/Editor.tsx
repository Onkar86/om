import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Film, Aperture } from 'lucide-react';

const portfolioItems = [
    { type: 'video', title: "Cinematic Travel Reel", color: "from-purple-500 to-pink-500" },
    { type: 'photo', title: "Urban Photography", color: "from-blue-500 to-cyan-500" },
    { type: 'video', title: "Product Commercial", color: "from-amber-500 to-orange-500" },
    { type: 'photo', title: "Portrait Series", color: "from-emerald-500 to-teal-500" },
];

const Editor: React.FC = () => {
    return (
        <section className="min-h-screen pt-24 pb-12 px-6 bg-[#0a0a0a]">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-end justify-between mb-16"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-serif text-white mb-2">
                            Visual Stories
                        </h2>
                        <p className="text-zinc-500 font-light text-xl">
                            Capturing moments, crafting narratives.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button className="p-2 bg-white/5 rounded-full text-white hover:bg-white/10"><Aperture /></button>
                        <button className="p-2 bg-white/5 rounded-full text-white hover:bg-white/10"><Film /></button>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer"
                        >
                            {/* Placeholder Gradient BG */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-wider">
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                                </div>
                            </div>

                            {/* Play/View Button */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                                {item.type === 'video' ? <Play className="fill-white text-white ml-1" /> : <ImageIcon className="text-white" />}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Editor;
