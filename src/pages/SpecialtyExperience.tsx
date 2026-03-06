import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Clock, MapPin, Search, ChevronDown } from 'lucide-react';
import { activities } from '../data/experiences';

// Config for the special category pages requested by user
const specialtyConfig: Record<string, { title: string, subcategory: string, bannerColor: string, mapPins: boolean }> = {
    'diving': {
        title: 'Find a diving centre',
        subcategory: 'Diving',
        bannerColor: '#D31045',
        mapPins: true,
    },
    'arts-crafts': {
        title: 'Discover Arts & Crafts',
        subcategory: 'Arts & Crafts',
        bannerColor: '#E65100', // Deep Orange
        mapPins: true,
    },
    'coffee': {
        title: 'Explore Coffee Experiences',
        subcategory: 'Coffee',
        bannerColor: '#5D4037', // Brown
        mapPins: true,
    }
};

const muniCoords: Record<string, { x: string, y: string }> = {
    'Atauro': { x: '44%', y: '10%' },
    'Dili': { x: '44%', y: '32%' },
    'Liquica': { x: '31%', y: '35%' },
    'Baucau': { x: '62%', y: '32%' },
    'Lautem': { x: '82%', y: '30%' },
    'Viqueque': { x: '67%', y: '52%' },
    'Manatuto': { x: '50%', y: '35%' },
    'Aileu': { x: '44%', y: '45%' },
    'Ainaro': { x: '35%', y: '65%' },
    'Manufahi': { x: '45%', y: '68%' },
    'Ermera': { x: '30%', y: '50%' },
    'Bobonaro': { x: '18%', y: '55%' },
    'Cova Lima': { x: '22%', y: '68%' },
    'Oecusse': { x: '5%', y: '50%' },
};

const SpecialtyExperience = () => {
    const { id } = useParams<{ id: string }>();
    const config = id && specialtyConfig[id] ? specialtyConfig[id] : null;

    const [searchQuery, setSearchQuery] = useState('');
    const [activeMunicipality, setActiveMunicipality] = useState('all');

    if (!config) {
        return (
            <div className="min-h-screen bg-ocean-deep flex items-center justify-center text-sand-beige">
                <div className="text-center">
                    <h2 className="text-3xl font-serif font-bold mb-4">Page Not Found</h2>
                    <Link to="/experiences" className="btn-outline">Back to Experiences</Link>
                </div>
            </div>
        );
    }

    const categoryActivities = activities.filter(act => act.subcategory === config.subcategory);
    const municipalities = ['all', ...Array.from(new Set(categoryActivities.map(act => act.municipality)))].sort();

    const filteredActivities = categoryActivities.filter(act => {
        const matchesSearch = act.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            act.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMunicipality = activeMunicipality === 'all' || act.municipality === activeMunicipality;

        return matchesSearch && matchesMunicipality;
    });

    return (
        <div className="bg-ocean-deep text-sand-beige min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                <Link to="/experiences" className="flex items-center space-x-2 text-sunset-coral font-bold uppercase text-xs mb-8 px-4 py-2 glass w-fit rounded-full hover:-translate-x-2 transition-transform">
                    <ArrowLeft size={16} />
                    <span>Back to Experiences</span>
                </Link>

                <div className="mb-12">
                    <div className="p-6 text-center text-white font-bold md:text-3xl text-2xl uppercase tracking-wider rounded-t-[32px] border-b-4 border-white/20"
                        style={{ backgroundColor: config.bannerColor, backgroundImage: 'url("https://www.timorleste.tl/wp-content/themes/timorleste/assets/images/pattern.svg")', backgroundSize: '100px', backgroundRepeat: 'repeat-x', backgroundPosition: 'top' }}>
                        <span className="relative z-10 px-4" style={{ backgroundColor: config.bannerColor }}>
                            {config.title}
                        </span>
                    </div>

                    <div className="glass-dark p-8 rounded-b-[32px] border border-white/5 border-t-0 shadow-2xl relative">
                        <div className={`grid grid-cols-1 ${config.mapPins ? 'lg:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
                            {/* Left: Filters */}
                            <div className={`${config.mapPins ? 'lg:col-span-1' : 'md:col-span-2 flex space-x-8'} space-y-6 md:space-y-0`}>
                                <div className={`space-y-3 ${config.mapPins ? '' : 'flex-1'}`}>
                                    <label className="text-sm font-bold text-sand-beige/90 block">Search businesses</label>
                                    <div className="relative">
                                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-beige/50" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sand-beige focus:outline-none focus:border-sunset-coral/50"
                                            placeholder="Search by name..."
                                        />
                                    </div>
                                </div>

                                <div className={`space-y-3 ${config.mapPins ? '' : 'flex-1'}`}>
                                    <label className="text-sm font-bold text-sand-beige/90 block">Municipality</label>
                                    <div className="relative">
                                        <select
                                            value={activeMunicipality}
                                            onChange={(e) => setActiveMunicipality(e.target.value)}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-sunset-coral/50 appearance-none cursor-pointer"
                                        >
                                            <option value="all" className="bg-ocean-deep text-white">All Municipalities</option>
                                            {municipalities.filter(m => m !== 'all').map(m => (
                                                <option key={m} value={m} className="bg-ocean-deep text-white">{m}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Interactive Map (Only for Diving) */}
                            {config.mapPins && (
                                <div className="lg:col-span-2 relative glass-dark rounded-2xl h-64 md:h-80 overflow-hidden border border-white/10 bg-[#001820]">
                                    {/* Ocean Backdrop */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />

                                    <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full opacity-30 p-4">
                                        <path
                                            d="M100,200 L120,180 L180,165 L250,140 L350,130 L450,135 L550,130 L650,145 L750,180 L760,210 L740,240 L650,260 L550,250 L450,265 L350,275 L250,270 L150,240 L110,220 Z"
                                            fill="rgba(245, 230, 200, 0.1)"
                                            stroke="#F5E6C8"
                                            strokeWidth="1"
                                        />
                                        {/* Atauro Island */}
                                        <path
                                            d="M340,30 Q350,20 370,30 Q380,45 365,60 Q345,70 335,55 Q330,40 340,30"
                                            fill="rgba(245, 230, 200, 0.1)"
                                            stroke="#F5E6C8"
                                            strokeWidth="1"
                                        />
                                    </svg>

                                    <div className="absolute inset-0 z-10">
                                        {municipalities.filter(m => m !== 'all' && muniCoords[m]).map(muni => (
                                            <motion.div
                                                key={muni}
                                                whileHover={{ scale: 1.1 }}
                                                className="absolute cursor-pointer group"
                                                style={{ left: muniCoords[muni].x, top: muniCoords[muni].y }}
                                                onClick={() => setActiveMunicipality(muni)}
                                            >
                                                <div className="flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                                                    <MapPin
                                                        size={muni === 'Dili' || muni === 'Atauro' ? 40 : 32}
                                                        className={`drop-shadow-lg transition-colors ${activeMunicipality === muni ? 'text-sunset-coral' : 'text-white'}`}
                                                        fill="currentColor"
                                                    />
                                                    <span className="text-[10px] font-bold mt-1 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">{muni}</span>
                                                </div>
                                                {activeMunicipality === muni && (
                                                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -inset-4 bg-sunset-coral/20 rounded-full animate-pulse -z-10" />
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Map Control Tip */}
                                    <div className="absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-widest text-white/40 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                                        Click pins to filter
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Results Count */}
                        <div className="mt-8 mb-4 border-b border-white/10 pb-4">
                            <p className="text-sm text-sand-beige/50 font-bold">
                                Showing <span className="text-sand-beige">{filteredActivities.length}</span> results
                                {activeMunicipality !== 'all' && <span className="ml-2 px-2 py-0.5 rounded-lg bg-sunset-coral/10 text-sunset-coral text-xs">in {activeMunicipality}</span>}
                            </p>
                        </div>

                        {/* Results Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence>
                                {filteredActivities.map(act => (
                                    <motion.div
                                        key={act.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-sunset-coral/50 transition-all cursor-pointer flex flex-col group relative"
                                    >
                                        <div className="h-48 relative overflow-hidden">
                                            <img src={act.image} alt={act.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center space-x-1">
                                                <Star size={12} className="text-sunset-coral" fill="currentColor" />
                                                <span>{act.rating}</span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <h4 className="font-serif font-bold text-xl mb-3 group-hover:text-sunset-coral transition-colors">{act.name}</h4>
                                            <p className="text-sm opacity-70 mb-4 line-clamp-2">{act.description}</p>

                                            <div className="flex items-center justify-between text-sm mt-auto border-t border-white/10 pt-4">
                                                <div className="flex items-center space-x-1 text-sunset-coral font-bold uppercase tracking-wider text-[10px]">
                                                    <MapPin size={14} />
                                                    <span>{act.municipality}</span>
                                                </div>
                                                <div className="flex items-center space-x-1 opacity-50">
                                                    <Clock size={14} />
                                                    <span>{act.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/experience/${act.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${act.name}`} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredActivities.length === 0 && (
                            <div className="text-center py-20">
                                <Search size={48} className="mx-auto text-sand-beige/20 mb-4" />
                                <p className="text-sand-beige/60 text-lg">No experiences found matching your criteria.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setActiveMunicipality('all'); }}
                                    className="mt-4 text-sunset-coral font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialtyExperience;
