import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AboutLayoutProps {
    title: string;
    subtitle: string;
    heroImage: string;
    children: React.ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ title, subtitle, heroImage, children }) => {
    return (
        <div className="bg-ocean-deep text-sand-beige min-h-screen">
            {/* Cinematic Sub-Hero */}
            <section className="relative h-[60vh] flex items-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/40 to-black/20"></div>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-sunset-coral font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        Discover Timor-Leste
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-5xl md:text-8xl font-bold mb-6"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl opacity-80 max-w-2xl italic font-serif"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Content Area */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </section>

            {/* Navigation Cards to other about pages */}
            <section className="py-20 px-6 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold mb-10">Explore More Topics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {['History', 'Culture', 'Nature', 'Wildlife'].map((topic) => (
                            <button key={topic} className="glass p-6 rounded-2xl flex flex-col items-start group hover:bg-sunset-coral transition-colors">
                                <span className="text-xs uppercase font-bold opacity-50 mb-2 group-hover:opacity-100">Chapter</span>
                                <span className="text-xl font-bold mb-4">{topic}</span>
                                <ArrowRight className="mt-auto group-hover:translate-x-2 transition-transform" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutLayout;
