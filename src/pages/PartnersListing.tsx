import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { partners } from '../data/partners';

const PartnersListing = () => {
    const [activeType, setActiveType] = useState<'All' | 'Organization' | 'Operator'>('All');

    const filteredPartners = activeType === 'All'
        ? partners
        : partners.filter(p => p.type === activeType);

    return (
        <div className="min-h-screen bg-ocean-deep text-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-sunset-coral font-bold tracking-[0.4em] uppercase mb-6 text-xs bg-sunset-coral/10 inline-block px-4 py-2 rounded-full">United for the Frontier</h4>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 text-sand-beige tracking-tighter">Tourism Partners</h1>
                        <p className="text-xl opacity-70 max-w-3xl mx-auto leading-relaxed italic font-light">
                            Collaborating with local organizations and certified operators to bring you the absolute authenticity of Timor-Leste.
                        </p>
                    </motion.div>
                </header>

                {/* Filter */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex p-2 bg-white/5 rounded-full border border-white/10">
                        {['All', 'Organization', 'Operator'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveType(type as any)}
                                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeType === type ? 'bg-sunset-coral text-white' : 'hover:bg-white/5 opacity-60'
                                    }`}
                            >
                                {type === 'All' ? 'All Partners' : type === 'Organization' ? 'Industry Orgs' : 'Certified Operators'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPartners.map((partner, i) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-dark rounded-[48px] overflow-hidden border border-white/5 hover:border-sunset-coral/30 hover:shadow-2xl hover:shadow-sunset-coral/10 transition-all duration-500 flex flex-col h-full"
                        >
                            <Link to={`/partners/${partner.id}`} className="block relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                        {partner.type === 'Organization' ? <Building2 size={24} className="text-sunset-coral" /> : <ShieldCheck size={24} className="text-sunset-coral" />}
                                    </div>
                                </div>
                            </Link>

                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-sunset-coral transition-colors">
                                    {partner.name}
                                </h3>
                                <p className="text-sm opacity-60 leading-relaxed mb-8 line-clamp-3 italic">
                                    {partner.mission}
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <Link
                                        to={`/partners/${partner.id}`}
                                        className="flex items-center justify-between text-sm font-bold group-hover:text-sunset-coral transition-colors"
                                    >
                                        <span className="uppercase tracking-widest">View Detailed Profile</span>
                                        <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tour Operators Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 bg-white/5 p-12 md:p-16 rounded-[48px] border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sunset-coral/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 relative z-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-serif font-bold text-sand-beige mb-6 italic">Certified Tour Operators</h2>
                            <p className="opacity-60 leading-relaxed italic">
                                Our network of professional local operators is trained in safety, sustainability, and cultural etiquette, ensuring your journey is authentic and respectful.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-sunset-coral font-bold uppercase tracking-widest text-xs">
                            Official Partner Program
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8 relative z-10">
                        {['Bounty Timor Tours', 'Timor Sightseeing Tours', 'Total Timor', 'Manny Tours', 'Island Explorer Holidays', 'Timor Unearthed', 'Eco Discovery Tours', 'Maddog Adventures'].map((op, i) => (
                            <div key={i} className="flex items-center space-x-4 text-white/70 hover:text-white transition-colors cursor-default group">
                                <div className="w-2 h-2 rounded-full bg-sunset-coral group-hover:scale-150 transition-transform"></div>
                                <span className="font-bold text-sm tracking-wide uppercase">{op}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PartnersListing;
