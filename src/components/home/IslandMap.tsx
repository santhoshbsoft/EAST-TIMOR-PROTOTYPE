import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Users, Mountain, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const municipalities = [
    { id: 'dili', name: 'Dili', x: '44%', y: '32%', population: '277,279', highlight: 'Capital city, Cristo Rei statue', icon: 'city' },
    { id: 'atauro', name: 'Atauro', x: '44%', y: '10%', population: '9,274', highlight: 'World-class diving & coral reefs', icon: 'waves' },
    { id: 'baucau', name: 'Baucau', x: '62%', y: '32%', population: '123,203', highlight: 'Colonial architecture & beaches', icon: 'mountain' },
    { id: 'lautem', name: 'Lautém', x: '82%', y: '30%', population: '65,440', highlight: 'Jaco Island & ancient forts', icon: 'waves' },
    { id: 'viqueque', name: 'Viqueque', x: '67%', y: '52%', population: '76,033', highlight: 'Sacred mountains & traditions', icon: 'mountain' },
    { id: 'manatuto', name: 'Manatuto', x: '50%', y: '35%', population: '45,541', highlight: 'Salt pans & fishing villages', icon: 'waves' },
    { id: 'aileu', name: 'Aileu', x: '44%', y: '45%', population: '48,836', highlight: 'Highland coffee plantations', icon: 'mountain' },
    { id: 'ainaro', name: 'Ainaro', x: '35%', y: '65%', population: '63,136', highlight: 'Mt. Ramelau – highest peak', icon: 'mountain' },
    { id: 'manufahi', name: 'Manufahi', x: '45%', y: '68%', population: '52,188', highlight: 'Waterfalls & resistance history', icon: 'mountain' },
    { id: 'liquica', name: 'Liquiçá', x: '31%', y: '35%', population: '71,927', highlight: 'Portuguese-era fort & beaches', icon: 'waves' },
    { id: 'ermera', name: 'Ermera', x: '30%', y: '50%', population: '125,702', highlight: 'Premium coffee heartland', icon: 'mountain' },
    { id: 'bobonaro', name: 'Bobonaro', x: '18%', y: '55%', population: '97,762', highlight: 'Border town & hot springs', icon: 'mountain' },
    { id: 'covalima', name: 'Cova Lima', x: '22%', y: '68%', population: '65,301', highlight: 'Suai beaches & wetlands', icon: 'waves' },
    { id: 'oecusse', name: 'Oecusse', x: '5%', y: '50%', population: '72,135', highlight: 'Historic enclave & Lifau monument', icon: 'city' },
];

const iconMap: Record<string, React.ReactNode> = {
    city: <Users size={12} />,
    mountain: <Mountain size={12} />,
    waves: <Waves size={12} />,
};

const IslandMap = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);

    const activeMuni = municipalities.find(m => m.id === (selected || hovered));

    return (
        <section className="py-32 bg-gradient-to-b from-ocean-deep via-ocean-deep to-[#002830] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sunset-coral font-bold tracking-widest text-sm uppercase mb-4 block"
                    >
                        Digital Discovery
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-title"
                    >
                        Interactive Frontier
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sand-beige/60 text-lg max-w-2xl mx-auto"
                    >
                        Hover over any municipality to discover its unique character. Click to explore further.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Map Area */}
                    <div className="lg:col-span-2">
                        <div className="relative glass-dark rounded-[40px] p-6 md:p-12 aspect-[16/10] overflow-hidden border border-white/5 shadow-2xl">
                            {/* Background Map Shape - simplified Timor-Leste outline */}
                            {/* Background Map Shape - Detailed Timor-Leste outline */}
                            <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full opacity-20 p-8 filter drop-shadow-[0_0_15px_rgba(245,230,200,0.3)]">
                                {/* Main Island */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    d="M100,200 L120,180 L180,165 L250,140 L350,130 L450,135 L550,130 L650,145 L750,180 L760,210 L740,240 L650,260 L550,250 L450,265 L350,275 L250,270 L150,240 L110,220 Z"
                                    fill="rgba(245, 230, 200, 0.05)"
                                    stroke="#F5E6C8"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                                {/* Atauro Island */}
                                <motion.path
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    d="M340,30 Q350,20 370,30 Q380,45 365,60 Q345,70 335,55 Q330,40 340,30"
                                    fill="rgba(245, 230, 200, 0.05)"
                                    stroke="#F5E6C8"
                                    strokeWidth="1"
                                />
                                {/* Oecusse Enclave */}
                                <motion.path
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    d="M20,180 Q40,170 60,185 Q70,210 50,225 Q30,220 25,200 Z"
                                    fill="rgba(245, 230, 200, 0.05)"
                                    stroke="#F5E6C8"
                                    strokeWidth="1"
                                />
                                {/* Jaco Island */}
                                <motion.circle cx="785" cy="185" r="5" fill="rgba(245, 230, 200, 0.05)" stroke="#F5E6C8" strokeWidth="1" />
                                {/* Topographic/Terrain Lines (Subtle) */}
                                <motion.path
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.1 }}
                                    transition={{ delay: 2.5 }}
                                    d="M200,180 Q300,170 400,185 M500,160 Q600,155 700,170 M300,230 Q400,240 500,225"
                                    fill="none"
                                    stroke="#F5E6C8"
                                    strokeWidth="0.5"
                                    strokeDasharray="4 4"
                                />
                            </svg>

                            {/* Grid Lines */}
                            <div className="absolute inset-0 opacity-5">
                                {[...Array(10)].map((_, i) => (
                                    <div key={`h-${i}`} className="absolute w-full h-px bg-sand-beige" style={{ top: `${(i + 1) * 10}%` }} />
                                ))}
                                {[...Array(10)].map((_, i) => (
                                    <div key={`v-${i}`} className="absolute h-full w-px bg-sand-beige" style={{ left: `${(i + 1) * 10}%` }} />
                                ))}
                            </div>

                            {/* Interactive Points */}
                            {municipalities.map((muni) => (
                                <motion.div
                                    key={muni.id}
                                    style={{ left: muni.x, top: muni.y }}
                                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                                    onMouseEnter={() => setHovered(muni.id)}
                                    onMouseLeave={() => setHovered(null)}
                                    onClick={() => setSelected(selected === muni.id ? null : muni.id)}
                                >
                                    {/* Pulse Ring */}
                                    <div className={`absolute inset-0 w-10 h-10 -translate-x-[12px] -translate-y-[12px] rounded-full transition-all duration-500 ${(hovered === muni.id || selected === muni.id)
                                        ? 'bg-sunset-coral/20 scale-150'
                                        : 'bg-transparent scale-100'
                                        }`} />

                                    {/* Dot */}
                                    <div className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 shadow-lg ${(hovered === muni.id || selected === muni.id)
                                        ? 'bg-sunset-coral scale-150 shadow-sunset-coral/50'
                                        : 'bg-tropical-mint/80 shadow-tropical-mint/30'
                                        }`} />

                                    {/* Label */}
                                    <AnimatePresence>
                                        {(hovered === muni.id || selected === muni.id) && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 5, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 5, scale: 0.9 }}
                                                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap text-[11px] font-bold text-sand-beige bg-ocean-deep/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 pointer-events-none"
                                            >
                                                {muni.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}

                            {/* Legend */}
                            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest opacity-40">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-tropical-mint/80" />
                                    <span>Municipality</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-sunset-coral" />
                                    <span>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="lg:col-span-1">
                        <AnimatePresence mode="wait">
                            {activeMuni ? (
                                <motion.div
                                    key={activeMuni.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="glass-dark rounded-[32px] p-10 border border-white/5 space-y-8"
                                >
                                    <div>
                                        <div className="flex items-center space-x-3 text-sunset-coral mb-4">
                                            {iconMap[activeMuni.icon]}
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Municipality</span>
                                        </div>
                                        <h3 className="text-4xl font-serif font-bold text-sand-beige">{activeMuni.name}</h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Users size={16} className="text-tropical-mint opacity-50" />
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Population</p>
                                                <p className="text-lg font-bold text-sand-beige">{activeMuni.population}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <MapPin size={16} className="text-tropical-mint opacity-50 mt-1" />
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Highlight</p>
                                                <p className="text-sm text-sand-beige/80 leading-relaxed">{activeMuni.highlight}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/municipalities/${activeMuni.id}`}
                                        className="block w-full py-4 bg-sunset-coral hover:bg-orange-600 text-white text-sm font-bold rounded-2xl transition-all text-center no-underline"
                                    >
                                        Explore {activeMuni.name} →
                                    </Link>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="glass-dark rounded-[32px] p-10 border border-white/5 text-center space-y-6"
                                >
                                    <div className="w-20 h-20 rounded-full bg-white/5 mx-auto flex items-center justify-center">
                                        <MapPin size={32} className="text-sunset-coral/50" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-sand-beige mb-3">Select a Municipality</h3>
                                        <p className="text-sm text-sand-beige/50 leading-relaxed">
                                            Hover or click on any point on the map to discover the unique character of each Timorese municipality.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="glass rounded-xl p-4 text-center">
                                            <p className="text-2xl font-bold text-sunset-coral">13</p>
                                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">Municipalities</p>
                                        </div>
                                        <div className="glass rounded-xl p-4 text-center">
                                            <p className="text-2xl font-bold text-tropical-mint">1.3M</p>
                                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">Population</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Link
                            to="/municipalities"
                            className="mt-8 flex items-center justify-center space-x-3 py-4 glass rounded-2xl text-sand-beige text-sm font-bold hover:bg-white/10 transition-all no-underline"
                        >
                            <span>View All Municipalities</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IslandMap;
