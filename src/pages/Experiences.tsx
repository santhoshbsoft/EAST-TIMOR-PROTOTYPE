import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Mountain, Landmark, Utensils, MapPin, Star, Clock, Users, Filter, X, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Activity {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    rating: number;
    price: string;
    duration: string;
    difficulty: string;
    image: string;
    description: string;
}

const categories = [
    {
        id: 'all',
        title: 'All Experiences',
        icon: Star,
        color: '#F5E6C8',
        subcategories: []
    },
    {
        id: 'marine',
        title: 'Marine & Water Activities',
        icon: Waves,
        color: '#0F6E6E',
        subcategories: ['Whale and Dolphin Watching', 'Diving', 'Snorkelling', 'Fishing', 'Beaches']
    },
    {
        id: 'land',
        title: 'Land Adventures',
        icon: Mountain,
        color: '#1F3D2B',
        subcategories: ['Hiking & Walking', 'Mountain Biking', 'Birding', 'Exploring', 'Volunteering']
    },
    {
        id: 'heritage',
        title: 'Heritage & Culture',
        icon: Landmark,
        color: '#FF6B4A',
        subcategories: ['Arts & Crafts', 'Local Markets', 'Events & Festivals']
    },
    {
        id: 'food',
        title: 'Food and Drink',
        icon: Utensils,
        color: '#FFAB91',
        subcategories: ['Eating & Drinking', 'Coffee']
    },
    {
        id: 'popular',
        title: 'Popular Locations',
        icon: MapPin,
        color: '#26A69A',
        subcategories: ['All Popular Place Details']
    },
];

const activities: Activity[] = [
    // Marine & Water Activities
    { id: 'whale-watching', name: 'Whale & Dolphin Watching', category: 'marine', subcategory: 'Whale and Dolphin Watching', rating: 4.9, price: '$85', duration: '4h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=600', description: 'Witness majestic blue whales and playful dolphins in the Wetar Strait.' },
    { id: 'atauro-dive', name: 'Atauro Deep Wall Dive', category: 'marine', subcategory: 'Diving', rating: 5.0, price: '$120', duration: '6h', difficulty: 'Advanced', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600', description: 'Explore the world\'s most biodiverse coral walls with certified guides.' },
    { id: 'snorkel-atauro', name: 'Atauro Coral Snorkelling', category: 'marine', subcategory: 'Snorkelling', rating: 4.8, price: '$45', duration: '3h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&q=80&w=600', description: 'Float above pristine coral gardens teeming with tropical fish.' },
    { id: 'traditional-fishing', name: 'Traditional Fishing Village', category: 'marine', subcategory: 'Fishing', rating: 4.6, price: '$55', duration: '5h', difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1545816250-e12bedaf26a6?auto=format&fit=crop&q=80&w=600', description: 'Join local fishermen and learn ancient Timorese fishing techniques.' },
    { id: 'areia-branca', name: 'Areia Branca Beach Day', category: 'marine', subcategory: 'Beaches', rating: 4.7, price: '$30', duration: 'Full Day', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600', description: 'Relax on Dili\'s most famous white sand beach with crystal-clear waters.' },

    // Land Adventures
    { id: 'ramelau-trek', name: 'Mt. Ramelau Summit Trek', category: 'land', subcategory: 'Hiking & Walking', rating: 4.8, price: '$60', duration: '8h', difficulty: 'Strenuous', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=600', description: 'Conquer Timor-Leste\'s highest peak at 2,963m for a sacred sunrise.' },
    { id: 'mountain-bike', name: 'Ermera Coffee Trail Ride', category: 'land', subcategory: 'Mountain Biking', rating: 4.5, price: '$75', duration: '6h', difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&q=80&w=600', description: 'Ride through highland coffee plantations and remote villages.' },
    { id: 'birding-tour', name: 'Nino Konis Santana Birding', category: 'land', subcategory: 'Birding', rating: 4.7, price: '$50', duration: '5h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600', description: 'Spot endemic species including the Timor Green Pigeon in pristine forests.' },
    { id: 'jaco-explore', name: 'Jaco Island Exploration', category: 'land', subcategory: 'Exploring', rating: 4.9, price: '$90', duration: 'Full Day', difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=600', description: 'Discover the sacred uninhabited island at Timor-Leste\'s eastern tip.' },
    { id: 'volunteer-school', name: 'Community School Volunteering', category: 'land', subcategory: 'Volunteering', rating: 4.8, price: '$25', duration: '4h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600', description: 'Contribute to education in remote mountain villages.' },

    // Heritage & Culture
    { id: 'sacred-house', name: 'Uma Lulik Sacred House Tour', category: 'heritage', subcategory: 'Arts & Crafts', rating: 4.7, price: '$45', duration: '3h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=600', description: 'Visit beautifully crafted ancestral sacred houses and learn about tais weaving.' },
    { id: 'tais-market', name: 'Dili Tais Market Walk', category: 'heritage', subcategory: 'Local Markets', rating: 4.6, price: '$20', duration: '2h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=600', description: 'Browse vibrant handwoven textiles and local artisan crafts in Dili.' },
    { id: 'festival-tour', name: 'Cultural Festival Experience', category: 'heritage', subcategory: 'Events & Festivals', rating: 4.9, price: '$35', duration: 'Full Day', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600', description: 'Immerse in traditional dances, ceremonies, and local celebrations.' },

    // Food and Drink
    { id: 'food-tour', name: 'Dili Street Food Safari', category: 'food', subcategory: 'Eating & Drinking', rating: 4.8, price: '$40', duration: '3h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600', description: 'Taste the flavors of Timor through local cuisine and hidden gem eateries.' },
    { id: 'coffee-plantation', name: 'Ermera Coffee Plantation Tour', category: 'food', subcategory: 'Coffee', rating: 4.9, price: '$55', duration: '5h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600', description: 'Discover world-class organic coffee from bean to cup in the highlands.' },

    // Popular Locations
    { id: 'cristo-rei', name: 'Cristo Rei Statue & Beach Walk', category: 'popular', subcategory: 'All Popular Place Details', rating: 4.8, price: 'Free', duration: '2h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=600', description: 'Walk the iconic coastline to the towering Cristo Rei statue overlooking Dili.' },
    { id: 'tasi-tolu', name: 'Tasi Tolu Wetlands', category: 'popular', subcategory: 'All Popular Place Details', rating: 4.5, price: 'Free', duration: '3h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=600', description: 'Explore the three sacred lakes and resistance memorial west of Dili.' },
];

const ExperienceListing = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
    const [showFilters, setShowFilters] = useState(false);

    const currentCategory = categories.find(c => c.id === activeCategory);

    const filteredActivities = activities.filter(act => {
        if (activeCategory === 'all') return true;
        if (activeSubcategory) return act.subcategory === activeSubcategory;
        return act.category === activeCategory;
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
                        Curated <br /> Experiences
                    </motion.h1>
                    <p className="opacity-70 text-lg leading-relaxed">
                        From world-record dives to ancestral rituals, discover the activities that define the spirit of Timor-Leste.
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
                </div>

                {/* Results Count */}
                <div className="flex justify-between items-center mb-8">
                    <p className="text-sm text-sand-beige/50 font-bold">
                        Showing <span className="text-sand-beige">{filteredActivities.length}</span> experiences
                        {activeSubcategory && (
                            <span className="ml-2">
                                in <span className="text-sunset-coral">{activeSubcategory}</span>
                                <button onClick={() => setActiveSubcategory(null)} className="ml-2 text-sand-beige/30 hover:text-sand-beige">
                                    <X size={14} className="inline" />
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
                                className="group rounded-[32px] overflow-hidden glass-dark border border-white/5 hover:border-sunset-coral/20 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={act.image}
                                        alt={act.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-3 py-1 rounded-full glass text-[10px] uppercase font-bold tracking-wider">
                                            {act.subcategory}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold ${act.difficulty === 'Easy' ? 'bg-tropical-mint/20 text-tropical-mint' :
                                            act.difficulty === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                                                act.difficulty === 'Strenuous' ? 'bg-orange-500/20 text-orange-400' :
                                                    'bg-red-500/20 text-red-400'
                                            }`}>
                                            {act.difficulty}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
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
                                        <button className="px-6 py-3 bg-white/5 hover:bg-sunset-coral text-white text-xs font-bold rounded-xl transition-all duration-300 border border-white/10">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Featured Experience */}
                <div className="glass-dark rounded-[40px] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[50%] h-full opacity-30 pointer-events-none">
                        <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000" alt="Dive" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 max-w-lg">
                        <div className="flex items-center space-x-2 text-sunset-coral mb-4">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <span className="text-xs font-bold ml-2">5.0 (Global Recognition)</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold mb-6">Atauro Reef Preservation Tour</h2>
                        <p className="opacity-70 leading-relaxed mb-8 font-serif italic text-lg">
                            "An otherworldly experience through the world's most biodiverse waters, guided by the local protectors of the reef."
                        </p>
                        <button className="btn-primary">Book This Experience</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceListing;
