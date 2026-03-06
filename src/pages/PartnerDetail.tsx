import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowLeft, Phone, Mail, Facebook, CheckCircle2, ShieldCheck, Building2, Award } from 'lucide-react';
import { partners } from '../data/partners';

const PartnerDetail = () => {
    const { id } = useParams<{ id: string }>();
    const partner = partners.find(p => p.id.toLowerCase() === id?.toLowerCase());

    if (!partner) return (
        <div className="pt-40 text-center text-white min-h-screen">
            <h2 className="text-2xl font-serif mb-4">Partner profile not found</h2>
            <Link to="/partners" className="text-sunset-coral hover:underline">Back to all partners</Link>
        </div>
    );

    const Icon = partner.type === 'Organization' ? Building2 : ShieldCheck;

    return (
        <div className="min-h-screen bg-ocean-deep text-white pb-20">
            {/* Header Hero */}
            <div className="relative h-[50vh] overflow-hidden">
                <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1200';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/60 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <Link
                                to="/partners"
                                className="inline-flex items-center space-x-2 text-sunset-coral font-bold uppercase tracking-widest text-xs mb-8 hover:-translate-x-2 transition-transform"
                            >
                                <ArrowLeft size={16} />
                                <span>Back to Partners</span>
                            </Link>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-sunset-coral">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                        Certified {partner.type}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold text-sand-beige leading-tight mb-4">
                                    {partner.name}
                                </h1>
                            </motion.div>
                        </div>

                        {partner.contact.website && (
                            <motion.a
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                href={partner.contact.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 bg-sunset-coral text-white rounded-2xl font-bold flex items-center space-x-3 hover:scale-105 transition-transform shadow-2xl shadow-sunset-coral/20"
                            >
                                <Globe size={20} />
                                <span>Visit Official Site</span>
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-5xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-sand-beige mb-6 italic underline decoration-sunset-coral/30 underline-offset-8">Our Mission</h2>
                        <p className="text-xl text-white/80 font-light italic leading-relaxed">
                            "{partner.mission}"
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-sand-beige mb-6 italic underline decoration-sunset-coral/30 underline-offset-8">About the Partner</h2>
                        <div className="prose prose-invert prose-lg">
                            <p className="text-white/60 leading-relaxed">
                                {partner.description}
                            </p>
                        </div>
                    </section>

                    <section className="bg-white/5 p-10 rounded-[40px] border border-white/5">
                        <h2 className="text-2xl font-serif font-bold text-sand-beige mb-8 italic">Key Services & Focus Areas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {partner.services.map((service, idx) => (
                                <div key={idx} className="flex items-start space-x-3 group">
                                    <CheckCircle2 size={18} className="text-sunset-coral mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                    <span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">{service}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Contact Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 space-y-8">
                        <div className="glass p-8 rounded-[40px] border border-white/5 space-y-8">
                            <h3 className="text-xl font-serif font-bold text-sand-beige italic">Connect Directly</h3>

                            <div className="space-y-6">
                                {partner.contact.phone && (
                                    <div className="flex items-center space-x-4 group cursor-pointer">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sunset-coral group-hover:bg-sunset-coral group-hover:text-white transition-all">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Phone</p>
                                            <p className="font-bold text-sm tracking-wide">{partner.contact.phone}</p>
                                        </div>
                                    </div>
                                )}

                                {partner.contact.email && (
                                    <div className="flex items-center space-x-4 group cursor-pointer">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sunset-coral group-hover:bg-sunset-coral group-hover:text-white transition-all">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email</p>
                                            <p className="font-bold text-sm tracking-wide break-all">{partner.contact.email}</p>
                                        </div>
                                    </div>
                                )}

                                {partner.contact.facebook && (
                                    <div className="flex items-center space-x-4 group cursor-pointer">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sunset-coral group-hover:bg-sunset-coral group-hover:text-white transition-all">
                                            <Facebook size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Social Media</p>
                                            <p className="font-bold text-sm tracking-wide">ID: {partner.contact.facebook}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="glass p-8 rounded-[40px] border border-white/5 bg-gradient-to-br from-sunset-coral/10 to-transparent">
                            <h3 className="text-lg font-serif font-bold mb-4 italic text-sand-beige">Certified Frontier Partner</h3>
                            <p className="text-xs opacity-60 leading-relaxed mb-6">
                                This partner is officially recognized for their commitment to sustainable and culturally respectful tourism in Timor-Leste.
                            </p>
                            <div className="flex items-center space-x-3 text-sunset-coral font-bold text-[10px] uppercase tracking-[0.2em]">
                                <Award size={16} />
                                <span>Quality Assured</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerDetail;
