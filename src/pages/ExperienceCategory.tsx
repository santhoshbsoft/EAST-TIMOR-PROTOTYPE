import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, Users, ShieldCheck, ChevronRight, Search, MapPin, ChevronDown } from 'lucide-react';
import { categories, activities as allActivities } from '../data/experiences';

const ExperienceCategory = () => {
    const { catId } = useParams<{ catId: string }>();
    const category = categories.find(c => c.id === catId) || categories.find(c => c.id === 'marine')!;
    const [searchQuery, setSearchQuery] = useState('');
    const [activeMunicipality, setActiveMunicipality] = useState('all');

    const categoryActivities = allActivities.filter(a => a.category === category.id);
    const municipalities = ['all', ...Array.from(new Set(categoryActivities.map(act => act.municipality)))].sort();

    const filteredActivities = categoryActivities.filter(act => {
        const matchesSearch = act.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            act.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMunicipality = activeMunicipality === 'all' || act.municipality === activeMunicipality;

        return matchesSearch && matchesMunicipality;
    });

    return (
        <div className="bg-ocean-deep text-sand-beige min-h-screen">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center px-6">
                <div className="absolute inset-0 z-0">
                    <img src={category.image} className="w-full h-full object-cover" alt={category.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/40 to-transparent"></div>
                </div>
                <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
                    <Link to="/experiences" className="flex items-center space-x-2 text-sunset-coral font-bold uppercase text-xs mb-6 px-4 py-2 glass w-fit rounded-full hover:-translate-x-2 transition-transform">
                        <ArrowLeft size={16} />
                        <span>All Experiences</span>
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold"
                    >
                        {category.title}
                    </motion.h1>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Filter Bar */}
                    <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 glass-dark p-6 rounded-3xl border border-white/5">
                        <div className="relative">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-beige/40" />
                            <input
                                type="text"
                                placeholder="Search in this category..."
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
                    </div>

                    <div className="flex justify-between items-center mb-12">
                        <p className="text-sm text-sand-beige/50 font-bold">
                            Showing <span className="text-sand-beige">{filteredActivities.length}</span> results
                            {(activeMunicipality !== 'all' || searchQuery) && (
                                <span className="ml-2">
                                    with filters
                                    <button
                                        onClick={() => {
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredActivities.map((act: any, idx: number) => (
                            <motion.div
                                key={act.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-dark rounded-[40px] p-10 border border-white/5 group hover:border-sunset-coral/30 transition-all relative block"
                            >
                                <Link to={`/experience/${act.id}`} className="absolute inset-0 z-10 block" aria-label={`View details for ${act.name}`} />
                                <div className="flex justify-between items-start mb-8 relative z-0">
                                    <div className="flex items-center space-x-2 text-sunset-coral">
                                        <Star size={16} fill="currentColor" />
                                        <span className="font-bold">{act.rating}</span>
                                    </div>
                                    <div className="px-4 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-tropical-mint border border-white/10 relative z-20">
                                        {act.difficulty}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-serif font-bold mb-6 relative z-0">{act.name}</h3>

                                <div className="grid grid-cols-3 gap-4 mb-10 relative z-0">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] opacity-40 uppercase font-bold mb-1">Duration</span>
                                        <div className="flex items-center space-x-2">
                                            <Clock size={14} className="opacity-50" />
                                            <span className="font-bold">{act.duration}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] opacity-40 uppercase font-bold mb-1">Participants</span>
                                        <div className="flex items-center space-x-2">
                                            <Users size={14} className="opacity-50" />
                                            <span className="font-bold">2-8</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[10px] opacity-40 uppercase font-bold mb-1">Starts From</span>
                                        <span className="text-xl font-bold text-sunset-coral">{act.price}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10 relative z-0">
                                    <div className="flex items-center space-x-3 opacity-70 text-sm">
                                        <ShieldCheck size={16} className="text-tropical-mint" />
                                        <span>Certified Eco-Operator Included</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 relative z-20">
                                    <Link to={`/experience/${act.id}`} className="flex-grow py-4 bg-white/10 hover:bg-sunset-coral text-white font-bold rounded-2xl transition-all duration-300 transform active:scale-95 text-center block pointer-events-auto inline-block">
                                        Book Now
                                    </Link>
                                    <Link to={`/experience/${act.id}`} className="w-14 h-14 glass flex items-center justify-center rounded-2xl hover:bg-white/5 pointer-events-auto block flex-shrink-0">
                                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Filter Section */}
            <section className="py-24 px-6 bg-black/20">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6">Need a custom itinerary?</h2>
                    <p className="opacity-70 mb-10 max-w-xl mx-auto">Our AI Travel Assistant can help you build the perfect {category.title.toLowerCase()} adventure based on your skill level and Migrate calendar.</p>
                    <button className="btn-outline">Chat with Assistant</button>
                </div>
            </section>
        </div>
    );
};

export default ExperienceCategory;
