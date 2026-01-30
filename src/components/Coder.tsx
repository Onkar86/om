import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Database, Cpu, Globe } from 'lucide-react';

const projects = [
    {
        title: "Neural Network Visualizer",
        description: "Interactive 3D visualization of neural network layers using Three.js and React Fiber.",
        tech: ["React", "Three.js", "Python", "TensorFlow"],
        icon: BrainIcon,
        link: "#"
    },
    {
        title: "Crypto Algo-Trader",
        description: "High-frequency trading bot with real-time market analysis and automated execution.",
        tech: ["Node.js", "Rust", "WebSockets", "Redis"],
        icon: ChartIcon,
        link: "#"
    },
    {
        title: "Decentralized Cloud",
        description: "IPFS-based storage solution with encrypted file sharing and blockchain authentication.",
        tech: ["Solidity", "IPFS", "Next.js", "Ethereum"],
        icon: CloudIcon,
        link: "#"
    }
];

// Helper Icons
function BrainIcon(props: any) { return <Cpu {...props} /> }
function ChartIcon(props: any) { return <Terminal {...props} /> }
function CloudIcon(props: any) { return <Database {...props} /> }

const Coder: React.FC = () => {
    return (
        <section className="min-h-screen pt-24 px-6 relative overflow-hidden bg-[#050505]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-4">
                        System Architecture
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        Building scalable digital infrastructures and exploring the frontiers of code.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900 transition-all duration-300 hover:border-primary/30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                                    <project.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 text-xs text-zinc-300 rounded-full border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                                        <Github className="w-4 h-4" />
                                        <span>Code</span>
                                    </a>
                                    <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Contribution Graph Idea (Static for now, but visual) */}
                <div className="mt-20 p-8 glass rounded-2xl border border-white/5">
                    <h3 className="text-lg font-medium text-zinc-400 mb-6 flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        Global Deployment Status
                    </h3>
                    <div className="flex gap-1 overflow-hidden opacity-50">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-12 rounded-sm bg-primary"
                                style={{
                                    opacity: Math.random() * 0.8 + 0.2,
                                    height: Math.random() * 40 + 10 + 'px'
                                }}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Coder;
