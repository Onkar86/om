import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const duration = 2000; // 2 seconds
        const interval = 50;
        const increment = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(onLoadingComplete, 500);
                    }, 300);
                    return 100;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
                >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" />
                        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] animate-pulse animation-delay-1000" />
                        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-[130px] animate-pulse animation-delay-2000" />
                    </div>

                    {/* Loading content */}
                    <div className="relative z-10 text-center">
                        {/* Logo/Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-7xl font-bold mb-8 text-white drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                        >
                            OM
                            <span className="text-primary">.</span>
                        </motion.h1>

                        {/* Loading bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-80 mx-auto"
                        >
                            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-orange-500"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                                {/* Glow effect */}
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-orange-500 blur-md opacity-50"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>

                            {/* Progress percentage */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4 text-sm text-zinc-400 font-mono"
                            >
                                {Math.round(progress)}% loaded
                            </motion.p>
                        </motion.div>

                        {/* Loading text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-6 text-zinc-500 text-sm"
                        >
                            Preparing 3D experience...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
