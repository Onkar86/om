import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const thoughts = [
    {
        date: "Jan 30, 2026",
        title: "The Agentic Future of Code",
        excerpt: "How AI agents are not replacing coders, but evolving them into architects of intelligence.",
        tags: ["AI", "Philosophy"]
    },
    {
        date: "Jan 15, 2026",
        title: "Minimalism in Digital Chaos",
        excerpt: "Why reducing noise in UI design leads to clearer thought processes for the end-user.",
        tags: ["Design", "Minimalism"]
    },
    {
        date: "Dec 28, 2025",
        title: "The Infinite Canvas",
        excerpt: "Rethinking the browser window not as a page, but as a portal to spatial computing.",
        tags: ["Web3", "Spatial"]
    }
];

const Thinker: React.FC = () => {
    return (
        <section className="min-h-screen pt-24 px-6 bg-[#030303]">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-block p-4 rounded-full bg-white/5 mb-6">
                        <Quote className="w-8 h-8 text-zinc-500" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
                        Fragments of Thought
                    </h2>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
                </motion.div>

                <div className="space-y-12">
                    {thoughts.map((thought, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-b border-white/5 pb-12 hover:border-white/20 transition-colors cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row gap-4 md:items-baseline justify-between mb-4">
                                <h3 className="text-3xl font-medium text-zinc-200 group-hover:text-white transition-colors">
                                    {thought.title}
                                </h3>
                                <span className="text-sm font-mono text-zinc-600">{thought.date}</span>
                            </div>

                            <p className="text-zinc-500 text-lg mb-6 max-w-2xl group-hover:text-zinc-400 transition-colors">
                                {thought.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex gap-3">
                                    {thought.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-zinc-600 border border-zinc-800 px-2 py-1 rounded hover:border-zinc-600 transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors text-sm font-medium">
                                    Read Thought <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="px-8 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
                        Load Archive
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Thinker;
