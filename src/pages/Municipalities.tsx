import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { municipalitiesData } from '../data/municipalities';
import { useLanguage } from '../context/LanguageContext';

const Municipalities = () => {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMunicipalities = municipalitiesData.filter(m =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.region.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-ocean-deep pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-title mb-6"
                    >
                        {t('municipalities.title')}
                    </motion.h1>

                    <div className="flex flex-col md:row gap-6">
                        <div className="relative flex-grow">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" />
                            <input
                                type="text"
                                placeholder="Search 13 municipalities by name or region..."
                                className="w-full glass-dark py-4 pl-16 pr-6 rounded-2xl focus:outline-none focus:border-sunset-coral border border-white/5"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {/* <button className="glass-dark px-8 py-4 rounded-2xl border border-white/5 flex items-center space-x-3 hover:bg-white/5 transition-colors">
                            <Filter size={20} />
                            <span>Filters</span>
                        </button> */}
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMunicipalities.map((muni, idx) => (
                        <motion.div
                            key={muni.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-dark rounded-[32px] overflow-hidden group border border-white/5"
                        >
                            <Link to={`/municipalities/${muni.id}`}>
                                <div className="h-48 overflow-hidden relative">
                                    <img src={muni.image} alt={muni.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep to-transparent"></div>
                                </div>
                            </Link>
                            <div className="p-8">
                                <div className="flex items-center space-x-2 text-tropical-mint mb-2">
                                    <MapPin size={14} />
                                    <span className="text-xs font-bold uppercase tracking-widest">{muni.region}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4">{muni.name}</h3>
                                <p className="opacity-60 text-sm mb-8 leading-relaxed line-clamp-2">
                                    {muni.description}
                                </p>
                                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                                    <span className="text-xs opacity-40">{muni.highlights[0]} & More</span>
                                    <Link to={`/municipalities/${muni.id}`} className="text-sunset-coral font-bold flex items-center group/btn">
                                        <span>Discover</span>
                                        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Municipalities;
