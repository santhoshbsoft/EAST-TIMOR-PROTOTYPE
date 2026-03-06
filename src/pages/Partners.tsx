import { motion } from 'framer-motion';
import TourismPartners from '../components/news/TourismPartners';

const Partners = () => {
    return (
        <div className="min-h-screen bg-ocean-deep text-white pt-32 pb-20">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-sunset-coral font-bold tracking-[0.4em] uppercase mb-6 text-xs bg-sunset-coral/10 inline-block px-4 py-2 rounded-full">Collaborating for a Greener Frontier</h4>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 text-sand-beige tracking-tighter">
                        Tourism Partners
                    </h1>
                    <p className="text-xl opacity-70 max-w-3xl mx-auto leading-relaxed italic">
                        "United by a vision to showcase the absolute authenticity of Timor-Leste to the world through sustainable and community-led tourism."
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <TourismPartners />
            </div>

            {/* Bottom CTA */}
            <div className="max-w-4xl mx-auto px-6 mt-32">
                <div className="glass p-12 rounded-[48px] border border-white/10 relative overflow-hidden text-center group">
                    <div className="absolute inset-0 bg-gradient-to-r from-sunset-coral/10 via-transparent to-sunset-coral/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-6 text-sand-beige">Become a Partner</h2>
                        <p className="opacity-70 mb-10 max-w-xl mx-auto">Are you a registered tour operator, lodge owner, or community collective in Timor-Leste? Join our official partner network.</p>
                        <button className="px-10 py-4 bg-sunset-coral text-white rounded-full font-bold hover:scale-105 transition-transform shadow-2xl shadow-sunset-coral/20">
                            Partner with Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
