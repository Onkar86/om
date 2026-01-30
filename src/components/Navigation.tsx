import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Brain, User } from 'lucide-react';

interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: 'hero', icon: User, label: 'Profile' },
        { id: 'coder', icon: Code2, label: 'Coder' },
        { id: 'editor', icon: PenTool, label: 'Editor' },
        { id: 'thinker', icon: Brain, label: 'Thinker' },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="glass px-2 py-2 rounded-full flex items-center gap-2 shadow-2xl ring-1 ring-white/10">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group ${activeSection === item.id
                            ? 'text-black font-semibold'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <item.icon className={`w-5 h-5 ${activeSection === item.id ? 'text-black' : ''}`} />
                            <span className={`text-sm ${activeSection === item.id ? 'block' : 'hidden group-hover:block'}`}>
                                {item.label}
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Navigation;
