import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, Users, ShieldCheck, ChevronRight } from 'lucide-react';

const categoriesData: Record<string, any> = {
    marine: {
        title: 'Marine & Water',
        image: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=1200',
        activities: [
            { id: 'whale-watching', name: 'Whale Watching Expedition', rating: 4.9, depth: 'Surface', price: '$85', duration: '4h', difficulty: 'Easy' },
            { id: 'atauro-dive', name: 'Atauro Deep Wall Dive', rating: 5.0, depth: '30m', price: '$120', duration: '6h', difficulty: 'Advanced' }
        ]
    },
    land: {
        title: 'Land Adventure',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1200',
        activities: [
            { id: 'ramelau-trek', name: 'Mt. Ramelau Summit', rating: 4.8, price: '$60', duration: '8h', difficulty: 'Strenuous' }
        ]
    },
    heritage: {
        title: 'Heritage & Culture',
        image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1200',
        activities: [
            { id: 'sacred-house', name: 'Uma Lulik Ritual Tour', rating: 4.7, price: '$45', duration: '3h', difficulty: 'Moderate' }
        ]
    }
};

const ExperienceCategory = () => {
    const { catId } = useParams<{ catId: string }>();
    const category = categoriesData[catId || 'marine'] || categoriesData.marine;

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {category.activities.map((act: any, idx: number) => (
                            <motion.div
                                key={act.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-dark rounded-[40px] p-10 border border-white/5 group hover:border-sunset-coral/30 transition-all"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center space-x-2 text-sunset-coral">
                                        <Star size={16} fill="currentColor" />
                                        <span className="font-bold">{act.rating}</span>
                                    </div>
                                    <div className="px-4 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-tropical-mint border border-white/10">
                                        {act.difficulty}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-serif font-bold mb-6">{act.name}</h3>

                                <div className="grid grid-cols-3 gap-4 mb-10">
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

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center space-x-3 opacity-70 text-sm">
                                        <ShieldCheck size={16} className="text-tropical-mint" />
                                        <span>Certified Eco-Operator Included</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-grow py-4 bg-white/10 hover:bg-sunset-coral text-white font-bold rounded-2xl transition-all duration-300 transform active:scale-95">
                                        Book Now
                                    </button>
                                    <button className="w-14 h-14 glass flex items-center justify-center rounded-2xl group-hover:bg-white/5">
                                        <ChevronRight size={24} />
                                    </button>
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
