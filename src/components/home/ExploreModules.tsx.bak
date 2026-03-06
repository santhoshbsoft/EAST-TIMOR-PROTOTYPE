import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Anchor, Info, ArrowRight } from 'lucide-react';

const ExploreModules = () => {
    return (
        <section className="py-24 bg-ocean-deep">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Diving Module */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-dark rounded-[40px] overflow-hidden group"
                    >
                        <div className="h-64 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=800"
                                alt="Diving"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep to-transparent"></div>
                            <div className="absolute bottom-6 left-8 flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full bg-sunset-coral flex items-center justify-center">
                                    <Waves size={24} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-serif font-bold">World-Class Diving</h3>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-3 glass rounded-2xl">
                                    <p className="text-[10px] uppercase font-bold opacity-50 mb-1">Biodiversity</p>
                                    <p className="text-sm font-bold text-tropical-mint">#1 Global</p>
                                </div>
                                <div className="text-center p-3 glass rounded-2xl">
                                    <p className="text-[10px] uppercase font-bold opacity-50 mb-1">Visibility</p>
                                    <p className="text-sm font-bold text-tropical-mint">30m+</p>
                                </div>
                                <div className="text-center p-3 glass rounded-2xl">
                                    <p className="text-[10px] uppercase font-bold opacity-50 mb-1">Difficulty</p>
                                    <p className="text-sm font-bold text-sunset-coral">All Levels</p>
                                </div>
                            </div>

                            <p className="opacity-70 mb-8 leading-relaxed">
                                Explore the reefs of Atauro Island, officially recognized as the most biodiverse in the world. From shore dives to deep walls, experience marine life in its purest form.
                            </p>

                            <button className="flex items-center space-x-2 text-sunset-coral font-bold hover:translate-x-2 transition-transform">
                                <span>View Dive Sites</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Whale Watching Module */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-dark rounded-[40px] overflow-hidden group"
                    >
                        <div className="h-64 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=800"
                                alt="Whale Watching"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep to-transparent"></div>
                            <div className="absolute bottom-6 left-8 flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full bg-sunset-coral flex items-center justify-center">
                                    <Anchor size={24} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-serif font-bold">Great Migrations</h3>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="glass p-6 rounded-3xl mb-8 border-sunset-coral/20 border">
                                <div className="flex items-center space-x-3 mb-3 text-sunset-coral">
                                    <Info size={18} />
                                    <span className="text-sm font-bold uppercase tracking-wider">Migration Calendar</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm opacity-70">Peak Season:</span>
                                    <span className="font-bold text-white px-3 py-1 bg-sunset-coral/20 rounded-lg">Oct — Dec</span>
                                </div>
                            </div>

                            <p className="opacity-70 mb-8 leading-relaxed">
                                Witness the majestic Blue Whales and Sperm Whales as they migrate through the Ombai-Wetar Strait. One of the few places on Earth where deep-sea giants pass close to shore.
                            </p>

                            <button className="flex items-center space-x-2 text-sunset-coral font-bold hover:translate-x-2 transition-transform">
                                <span>Migration Routes</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExploreModules;
