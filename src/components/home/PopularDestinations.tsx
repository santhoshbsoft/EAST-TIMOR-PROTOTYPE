import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowUpRight, Heart } from 'lucide-react';

const destinations = [
    {
        id: 1,
        name: 'Dili',
        slug: 'dili',
        municipality: 'Capital District',
        rating: 4.8,
        description: 'A vibrant blend of Portuguese history, modern culture, and stunning sunsets.',
        image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=800',
        tags: ['History', 'Culture', 'Dining']
    },
    {
        id: 2,
        name: 'Atauro Island',
        slug: 'atauro',
        municipality: 'Dili',
        rating: 5.0,
        description: 'The world\'s most biodiverse coral reefs, perfect for diving and eco-escapes.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
        tags: ['Diving', 'Eco-Tourism', 'Reef']
    },
    {
        id: 3,
        name: 'Baucau',
        slug: 'baucau',
        municipality: 'Baucau',
        rating: 4.7,
        description: 'Colonial charm meets limestone plateaus and pristine white sand beaches.',
        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
        tags: ['Coastal', 'Colonial', 'Scenic']
    },
    {
        id: 4,
        name: 'Lospalos',
        slug: 'lautem',
        municipality: 'Lautém',
        rating: 4.6,
        description: 'Gateway to the Jaco Island nature reserve and lush tropical rainforests.',
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=800',
        tags: ['Nature', 'Wildlife', 'Forest']
    }
];

const PopularDestinations = () => {
    return (
        <section className="py-24 bg-ocean-deep overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">

                    {/* Left Side: Cinematic Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 relative h-[600px] lg:h-full min-h-[800px] rounded-[40px] overflow-hidden group shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&q=80&w=1200"
                            alt="Timor-Leste Landscapes"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-12 left-12 right-12 z-10">
                            <h3 className="text-4xl font-serif font-bold text-sand-beige mb-4 leading-tight">
                                Journey to the <span className="text-sunset-coral">Untouched</span>
                            </h3>
                            <p className="text-sand-beige/70 text-lg leading-relaxed mb-8">
                                Experience the raw beauty and ancient spirit of our most cherished landscapes.
                            </p>
                            <div className="w-16 h-1 w-24 bg-sunset-coral rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Right Side: Header and Destinations Grid */}
                    <div className="lg:col-span-7">
                        <div className="mb-16">
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-sunset-coral font-bold tracking-widest text-sm uppercase mb-4 block"
                            >
                                Start Your Adventure
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="section-title text-4xl md:text-6xl mb-8"
                            >
                                Popular <br />Destinations
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-sand-beige/60 text-lg mb-12 max-w-xl"
                            >
                                From the vibrant streets of Dili to the sacred peaks of Ramelau, discover the heartbeat of Timor-Leste.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {destinations.map((dest, index) => (
                                <motion.div
                                    key={dest.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative h-[450px] rounded-[32px] overflow-hidden glass-dark border-white/5 shadow-xl hover:shadow-sunset-coral/10 transition-shadow"
                                >
                                    {/* Image Background */}
                                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/20 to-transparent"></div>
                                    </div>

                                    {/* Tag and Favourite */}
                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                                        <span className="px-3 py-1 rounded-full glass text-[10px] uppercase font-bold tracking-wider">
                                            {dest.municipality}
                                        </span>
                                        <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-sunset-coral transition-colors">
                                            <Heart size={18} />
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                        <div className="flex items-center space-x-2 mb-2 text-sunset-coral">
                                            <Star size={16} fill="currentColor" />
                                            <span className="text-sm font-bold">{dest.rating}</span>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold mb-3">{dest.name}</h3>
                                        <p className="text-xs opacity-70 mb-6 line-clamp-2 leading-relaxed">
                                            {dest.description}
                                        </p>
                                        <Link to={`/municipalities/${dest.slug}`} className="block w-full py-3 bg-white/5 hover:bg-sunset-coral text-white text-xs font-bold rounded-xl transition-all duration-300 border border-white/10 text-center no-underline">
                                            Explore {dest.name}
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-16 text-center lg:text-left"
                        >
                            <Link to="/municipalities" className="btn-outline group flex items-center space-x-3 mx-auto lg:mx-0 no-underline">
                                <span>View All Destinations</span>
                                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
