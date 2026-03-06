import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, Mountain, Landmark, Utensils, ArrowRight } from 'lucide-react';
import { categories } from '../../data/experiences';
import { useLanguage } from '../../context/LanguageContext';

const ExploreModules = () => {
    const { t } = useLanguage();

    // Filter out 'all' and 'popular' for the modules
    const displayCategories = categories.filter(cat => cat.id !== 'all' && cat.id !== 'popular');

    return (
        <section className="py-24 px-6 bg-ocean-deep overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sunset-coral/10 text-sunset-coral text-xs font-bold uppercase tracking-wider mb-6 border border-sunset-coral/20"
                    >
                        <span>Experience Timor-Leste</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title text-4xl md:text-6xl mb-6"
                    >
                        Explore by Category
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-sand-beige/60 text-lg max-w-2xl leading-relaxed"
                    >
                        From the depths of the ocean to the heights of majestic mountains, discover the diverse adventures waiting for you.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[450px] rounded-[32px] overflow-hidden glass-dark border border-white/5 hover:border-sunset-coral/30 transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-sunset-coral group-hover:text-white transition-all duration-300">
                                    <cat.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-sunset-coral transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="text-sm text-sand-beige/70 mb-8 line-clamp-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {cat.id === 'marine' ? 'Dive into world-class reefs and witness spectacular marine life migration.' :
                                        cat.id === 'land' ? 'Trek through ancient rainforests and conquer sacred mountain peaks.' :
                                            cat.id === 'heritage' ? 'Connect with centuries-old traditions and artisan craftsmanship.' :
                                                'Savor the unique flavors of island-grown coffee and local delicacies.'}
                                </p>

                                <Link
                                    to={`/experiences/${cat.id}`}
                                    className="inline-flex items-center space-x-2 text-sunset-coral font-bold text-sm uppercase tracking-wider group/link"
                                >
                                    <span>Discover more</span>
                                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-sunset-coral w-0 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreModules;
