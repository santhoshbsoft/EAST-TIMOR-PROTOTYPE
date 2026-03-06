import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Award } from 'lucide-react';

const industryOrgs = [
    { name: "ASTRABEKA", role: "Association of Tourism in Baucau region", icon: ShieldCheck },
    { name: "ACTL", role: "Associação do Café de Timor-Leste (National Coffee Association)", icon: Award },
    { name: "ATMTL", role: "Marine Tourism Association (Diving & Conservation)", icon: ShieldCheck },
    { name: "ATKOMA", role: "Atauro Community Tourism Collective", icon: Globe }
];

const tourOperators = [
    "Bounty Timor Tours", "Timor Sightseeing Tours", "Total Timor",
    "Manny Tours", "Island Explorer Holidays", "Timor Unearthed",
    "Eco Discovery Tours"
];

const TourismPartners = () => {
    return (
        <div className="space-y-16">
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-sand-beige mb-4">Industry Organizations</h2>
                    <p className="opacity-60 max-w-2xl mx-auto">The backbone of Timor-Leste's tourism development, ensuring sustainability, cultural respect, and international standards.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industryOrgs.map((org, i) => {
                        const Icon = org.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-[32px] border border-white/5 text-center group hover:bg-sunset-coral/10 hover:border-sunset-coral/30 transition-all duration-300"
                            >
                                <div className="inline-flex p-4 bg-sunset-coral/20 rounded-2xl text-sunset-coral mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-sand-beige mb-2">{org.name}</h3>
                                <p className="text-xs opacity-60 leading-relaxed font-bold uppercase tracking-[0.1em]">{org.role}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section className="bg-white/5 p-12 rounded-[40px] border border-white/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-serif font-bold text-sand-beige mb-4 italic">Certified Tour Operators</h2>
                        <p className="opacity-60 text-sm">Our network of professional operators is trained in safety, sustainability, and cultural etiquette, ensuring your journey is seamless and authentic.</p>
                    </div>
                    <div className="mt-8 md:mt-0 flex items-center space-x-2 text-sunset-coral font-bold uppercase tracking-widest text-xs">
                        <span>Official Partner Program</span>
                        <div className="w-12 h-px bg-sunset-coral"></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
                    {tourOperators.map((op, i) => (
                        <div key={i} className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors cursor-default group">
                            <div className="w-1.5 h-1.5 rounded-full bg-sunset-coral group-hover:scale-150 transition-transform"></div>
                            <span className="font-bold text-sm tracking-wide">{op}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TourismPartners;
