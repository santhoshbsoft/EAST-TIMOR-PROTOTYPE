import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, X, Mail, Phone, ExternalLink, ShieldCheck, Search, MapPin, ChevronDown } from 'lucide-react';


import { Link } from 'react-router-dom';
import { categories, activities, agents, Agent } from '../data/experiences';
import { useLanguage } from '../context/LanguageContext';

const ExperienceListing = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeMunicipality, setActiveMunicipality] = useState('all');

    const currentCategory = categories.find(c => c.id === activeCategory);

    const municipalities = ['all', ...Array.from(new Set(activities.map(act => act.municipality)))].sort();

    const filteredActivities = activities.filter(act => {
        const matchesCategory = activeCategory === 'all' || act.category === activeCategory;
        const matchesSubcategory = !activeSubcategory || act.subcategory === activeSubcategory;
        const matchesSearch = act.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            act.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMunicipality = activeMunicipality === 'all' || act.municipality === activeMunicipality;

        return matchesCategory && matchesSubcategory && matchesSearch && matchesMunicipality;
    });

    return (
        <div className="bg-ocean-deep pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-title text-4xl md:text-6xl mb-6"
                    >
                        {t('experiences.title')}
                    </motion.h1>
                    <p className="opacity-70 text-lg leading-relaxed">
                        {t('experiences.subtitle')}
                    </p>
                </header>

                {/* Category Tabs */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setActiveSubcategory(null);
                                }}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === cat.id
                                    ? 'bg-sunset-coral text-white border-sunset-coral shadow-lg shadow-sunset-coral/20'
                                    : 'bg-white/5 text-sand-beige/70 border-white/10 hover:bg-white/10 hover:text-sand-beige'
                                    }`}
                            >
                                <cat.icon size={16} />
                                <span>{cat.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Subcategory Filter Chips */}
                    <AnimatePresence>
                        {currentCategory && currentCategory.subcategories.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-wrap justify-center gap-2 py-4 px-8 glass-dark rounded-2xl border border-white/5">
                                    <button
                                        onClick={() => setActiveSubcategory(null)}
                                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${!activeSubcategory
                                            ? 'bg-white/20 text-white'
                                            : 'bg-transparent text-sand-beige/50 hover:text-sand-beige hover:bg-white/5'
                                            }`}
                                    >
                                        All {currentCategory.title}
                                    </button>
                                    {currentCategory.subcategories.map(sub => (
                                        <button
                                            key={sub}
                                            onClick={() => setActiveSubcategory(sub)}
                                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeSubcategory === sub
                                                ? 'bg-sunset-coral/20 text-sunset-coral border border-sunset-coral/30'
                                                : 'bg-transparent text-sand-beige/50 hover:text-sand-beige hover:bg-white/5'
                                                }`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* New Search & Municipality Filter Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 glass-dark p-6 rounded-3xl border border-white/5"
                    >
                        <div className="relative">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-beige/40" />
                            <input
                                type="text"
                                placeholder={t('experiences.searchPlaceholder') || 'Search experiences...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sand-beige focus:outline-none focus:border-sunset-coral/50 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-beige/40" />
                            <select
                                value={activeMunicipality}
                                onChange={(e) => setActiveMunicipality(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-10 text-sand-beige focus:outline-none focus:border-sunset-coral/50 appearance-none cursor-pointer"
                            >
                                <option value="all" className="bg-ocean-deep">All Municipalities</option>
                                {municipalities.filter(m => m !== 'all').map(m => (
                                    <option key={m} value={m} className="bg-ocean-deep">{m}</option>
                                ))}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-sand-beige/40 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>

                {/* Results Count */}
                <div className="flex justify-between items-center mb-8">
                    <p className="text-sm text-sand-beige/50 font-bold">
                        {t('experiences.showing')} <span className="text-sand-beige">{filteredActivities.length}</span> {t('experiences.results')}
                        {(activeSubcategory || activeMunicipality !== 'all' || searchQuery) && (
                            <span className="ml-2">
                                with filters
                                <button
                                    onClick={() => {
                                        setActiveSubcategory(null);
                                        setActiveMunicipality('all');
                                        setSearchQuery('');
                                    }}
                                    className="ml-2 text-sunset-coral hover:underline text-xs"
                                >
                                    Clear all
                                </button>
                            </span>
                        )}
                    </p>
                </div>

                {/* Activities Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    <AnimatePresence mode="popLayout">
                        {filteredActivities.map((act, idx) => (
                            <motion.div
                                key={act.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group rounded-[32px] overflow-hidden glass-dark border border-white/5 hover:border-sunset-coral/20 transition-all duration-300 block relative"
                            >
                                <Link to={`/experience/${act.id}`} className="absolute inset-0 z-10 block" aria-label={`View details for ${act.name}`} />
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={act.image}
                                        alt={act.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
                                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                                        <span className="px-3 py-1 rounded-full glass text-[10px] uppercase font-bold tracking-wider relative z-20">
                                            {act.subcategory}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold relative z-20 ${act.difficulty === 'Easy' ? 'bg-tropical-mint/20 text-tropical-mint' :
                                            act.difficulty === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                                                act.difficulty === 'Strenuous' ? 'bg-orange-500/20 text-orange-400' :
                                                    'bg-red-500/20 text-red-400'
                                            }`}>
                                            {act.difficulty}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative z-0">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-1 text-sunset-coral">
                                            <Star size={14} fill="currentColor" />
                                            <span className="text-sm font-bold">{act.rating}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-sand-beige/40 text-xs">
                                            <Clock size={12} />
                                            <span>{act.duration}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-serif font-bold mb-2 text-sand-beige group-hover:text-sunset-coral transition-colors">{act.name}</h3>
                                    <p className="text-xs text-sand-beige/50 mb-6 line-clamp-2 leading-relaxed">{act.description}</p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] opacity-40 uppercase font-bold block">From</span>
                                            <span className="text-xl font-bold text-sunset-coral">{act.price}</span>
                                        </div>
                                        <Link to={`/experience/${act.id}`} className="px-6 py-3 bg-white/5 hover:bg-sunset-coral text-white text-xs font-bold rounded-xl transition-all duration-300 border border-white/10 relative z-20 inline-block pointer-events-auto">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Tour Operators & Agents Section */}
                <div id="agents" className="mt-32">
                    <header className="mb-16 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-tropical-mint/10 text-tropical-mint text-xs font-bold uppercase tracking-wider mb-6 border border-tropical-mint/20">
                            <ShieldCheck size={14} />
                            <span>{t('experiences.certifiedPartners')}</span>
                        </div>
                        <h2 className="section-title text-3xl md:text-5xl mb-6">{t('experiences.agentsTitle')}</h2>
                        <p className="opacity-70 text-lg leading-relaxed">
                            {t('experiences.agentsSubtitle')}
                        </p>
                    </header>

                    <div className="space-y-16">
                        {(['Full Service', 'Land & Adventure', 'Water & Dive'] as const).map((cat) => {
                            const filteredAgents = agents.filter(a => a.category === cat);
                            if (filteredAgents.length === 0) return null;

                            return (
                                <div key={cat}>
                                    <h3 className="text-xl font-bold text-sand-beige mb-8 border-l-4 border-sunset-coral pl-4">
                                        {cat === 'Full Service' ? t('experiences.fullService') :
                                            cat === 'Land & Adventure' ? t('experiences.landAdventure') :
                                                t('experiences.waterDive')}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredAgents.map((agent: Agent) => (
                                            <div
                                                key={agent.id}
                                                className="glass-dark p-8 rounded-[32px] border border-white/5 hover:border-sunset-coral/20 transition-all duration-300 group"
                                            >
                                                <h4 className="text-lg font-bold text-sand-beige mb-4 group-hover:text-sunset-coral transition-colors">
                                                    {agent.name}
                                                </h4>
                                                <p className="text-sm text-sand-beige/60 mb-6 min-h-[3rem]">
                                                    <span className="text-[10px] uppercase font-bold text-sunset-coral block mb-1">{t('experiences.servicesHead')}</span>
                                                    {agent.services}
                                                </p>

                                                <div className="space-y-4 pt-6 border-t border-white/5">
                                                    {agent.email && (
                                                        <a
                                                            href={agent.email.startsWith('http') ? agent.email : `mailto:${agent.email}`}
                                                            target={agent.email.startsWith('http') ? "_blank" : undefined}
                                                            rel={agent.email.startsWith('http') ? "noopener noreferrer" : undefined}
                                                            className="flex items-center space-x-3 text-xs text-sand-beige/40 hover:text-sand-beige transition-colors"
                                                        >
                                                            <Mail size={14} className="text-sunset-coral" />
                                                            <span className="truncate">{agent.email.startsWith('http') ? 'Contact Us Online' : agent.email}</span>
                                                        </a>
                                                    )}
                                                    {agent.phone && (
                                                        <a
                                                            href={`tel:${agent.phone.split('/')[0].trim()}`}
                                                            className="flex items-center space-x-3 text-xs text-sand-beige/40 hover:text-sand-beige transition-colors"
                                                        >
                                                            <Phone size={14} className="text-sunset-coral" />
                                                            <span>{agent.phone}</span>
                                                        </a>
                                                    )}
                                                    {agent.website && (
                                                        <a
                                                            href={agent.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-3 text-xs text-sand-beige/40 hover:text-sand-beige transition-colors"
                                                        >
                                                            <ExternalLink size={14} className="text-sunset-coral" />
                                                            <span>{agent.websiteLabel || agent.website.replace('http://', '').replace('https://', '').replace('www.', '')}</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceListing;
