'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Sun, Calendar, ArrowLeft, ArrowUpRight, Camera } from 'lucide-react';
import { municipalitiesData } from '../data/municipalities';

const MunicipalityDetail = () => {
    const { id } = useParams<{ id: string }>();
    const muni = municipalitiesData.find(m => m.id === id);

    if (!muni) {
        return (
            <div className="min-h-screen bg-ocean-deep pt-32 text-center">
                <h1 className="text-4xl font-serif">Destination Not Found</h1>
                <Link to="/municipalities" className="text-sunset-coral mt-4 inline-block">Back to Listing</Link>
            </div>
        );
    }

    return (
        <div className="bg-ocean-deep text-sand-beige min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-end pb-24 px-6 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={muni.image}
                        alt={muni.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/30 to-black/20"></div>
                </motion.div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <Link to="/municipalities" className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-sunset-coral mb-8 hover:-translate-x-2 transition-transform">
                        <ArrowLeft size={16} />
                        <span>Back to Explorer</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="inline-block glass px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            {muni.region} Municipality
                        </span>
                        <h1 className="font-serif text-7xl md:text-9xl font-bold mb-8 leading-none">
                            {muni.name}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed font-serif italic text-sand-beige/80">
                            "{muni.description}"
                        </p>
                    </motion.div>
                </div>

                {/* Floating Quick Stats */}
                <div className="hidden lg:grid grid-cols-3 gap-1 absolute bottom-12 right-12 glass p-1 rounded-3xl translate-y-12 animate-slide-up">
                    <div className="bg-white/10 p-6 rounded-2xl text-center">
                        <Sun className="mx-auto mb-2 text-sunset-coral" size={24} />
                        <p className="text-xl font-bold">{muni.weather.temp}</p>
                        <p className="text-[10px] opacity-50 uppercase font-bold tracking-tighter">{muni.weather.condition}</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl text-center">
                        <MapPin className="mx-auto mb-2 text-sunset-coral" size={24} />
                        <p className="text-xl font-bold">{muni.pois.length || '8'}</p>
                        <p className="text-[10px] opacity-50 uppercase font-bold tracking-tighter">Points of Interest</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl text-center">
                        <Calendar className="mx-auto mb-2 text-sunset-coral" size={24} />
                        <p className="text-xl font-bold">Best Time</p>
                        <p className="text-[10px] opacity-50 uppercase font-bold tracking-tighter">May — Oct</p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <h2 className="section-title text-4xl mb-12">Heart of the Frontier</h2>
                        <div className="opacity-80 text-lg leading-relaxed space-y-6">
                            <p>{muni.longDescription}</p>
                            <div className="flex flex-wrap gap-4 pt-8">
                                {muni.highlights.map(tag => (
                                    <span key={tag} className="border border-white/20 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="glass-dark p-10 rounded-[40px] border border-white/5">
                            <h3 className="text-2xl font-serif font-bold mb-8">Travel Information</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'How to get there', value: '4-6 hours drive from Dili' },
                                    { label: 'Accommodation', value: 'Eco-lodges and local guest houses' },
                                    { label: 'Mobile Signal', value: 'Limited (Telkomcel/Telemor available)' },
                                    { label: 'Local Guide', value: 'Highly recommended for mountain areas' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                                        <span className="text-xs font-bold uppercase tracking-widest opacity-50">{item.label}</span>
                                        <span className="font-bold">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Points of Interest Grid */}
            {muni.pois.length > 0 && (
                <section className="py-32 px-6 bg-black/10">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="section-title text-center mb-20 text-4xl md:text-5xl">Unmissable Experiences</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {muni.pois.map((poi, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="glass-dark rounded-[48px] overflow-hidden group border border-white/5"
                                >
                                    <div className="h-80 overflow-hidden relative">
                                        <img src={poi.image} alt={poi.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent"></div>
                                        <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center">
                                            <Camera size={20} />
                                        </div>
                                    </div>
                                    <div className="p-12">
                                        <h3 className="text-3xl font-serif font-bold mb-4">{poi.name}</h3>
                                        <p className="opacity-60 leading-relaxed text-lg mb-8">{poi.description}</p>
                                        <button className="text-sunset-coral font-bold flex items-center group/btn">
                                            <span>Explore this site</span>
                                            <ArrowUpRight size={20} className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="section-title text-4xl md:text-5xl mb-12">The Visual Journey</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {muni.gallery.map((img, i) => (
                            <div key={i} className="aspect-square rounded-3xl overflow-hidden glass">
                                <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" alt={`Gallery ${i}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MunicipalityDetail;
