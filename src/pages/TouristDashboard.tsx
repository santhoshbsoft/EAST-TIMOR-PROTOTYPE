import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Calendar, FileText, Settings, LogOut, Star, Clock, Download } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all ${active ? 'bg-sunset-coral text-white shadow-lg shadow-sunset-coral/20' : 'opacity-50 hover:bg-white/5 hover:opacity-100'}`}
    >
        <Icon size={20} />
        <span className="font-bold text-sm tracking-wide">{label}</span>
    </button>
);

const TouristDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Check if a tab was passed via router state, else default to 'Profile Management'
    const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'Profile Management');

    // Update state if location state changes
    useEffect(() => {
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
            // Replace history state to clear it so refresh doesn't force the tab
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    const handleLogout = () => {
        navigate('/');
    };

    const tabs = [
        { id: 'Profile Management', icon: User },
        { id: 'My Favourites', icon: Heart },
        { id: 'Booked Activities', icon: Calendar },
        { id: 'Write Reviews', icon: Star },
        { id: 'Invoices', icon: FileText },
        { id: 'Settings', icon: Settings },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Profile Management':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                        <header>
                            <h2 className="section-title text-4xl mb-4">Hello, John</h2>
                            <p className="opacity-50 tracking-wide uppercase text-xs font-bold">Your next adventure is in 3 days: Whale Watching, Dili</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass-dark p-8 rounded-[40px] border border-white/5">
                                <div className="flex justify-between items-start mb-8">
                                    <h4 className="text-xl font-bold">Recent Bookings</h4>
                                    <button
                                        onClick={() => setActiveTab('Booked Activities')}
                                        className="text-sunset-coral text-xs font-bold flex items-center space-x-1"
                                    >
                                        <span>View All</span>
                                        <Clock size={14} />
                                    </button>
                                </div>
                                <div className="space-y-6">
                                    {[1, 2].map(i => (
                                        <div key={i} className="flex items-center space-x-4 glass p-4 rounded-2xl animate-fade-in">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden">
                                                <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=200`} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="font-bold text-sm">Atauro Reef Dive</h5>
                                                <p className="text-[10px] opacity-50">OCT 12, 2026 • 2 PERSONS</p>
                                            </div>
                                            <span className="text-[10px] font-bold px-2 py-1 bg-tropical-teal/20 text-tropical-mint rounded-lg">CONFIRMED</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-dark p-8 rounded-[40px] border border-white/5">
                                <div className="flex justify-between items-start mb-8">
                                    <h4 className="text-xl font-bold">Recommended for You</h4>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative h-44 rounded-3xl overflow-hidden group cursor-pointer" onClick={() => navigate('/experiences/heritage')}>
                                        <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                                            <p className="text-xs font-bold text-sunset-coral mb-1">CULTURAL HERITAGE</p>
                                            <h5 className="font-bold">Lospalos Ancient Houses</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'My Favourites':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="section-title text-4xl mb-8">My Favourites</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="glass-dark p-6 rounded-3xl flex gap-6 items-center group cursor-pointer border border-white/5 hover:border-sunset-coral/30 transition-all" onClick={() => navigate('/experience/atauro-dive')}>
                                    <img src={`https://images.unsplash.com/photo-${1544551763 + i}?auto=format&fit=crop&q=80&w=200`} className="w-24 h-24 rounded-2xl object-cover" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 group-hover:text-sunset-coral transition-colors">Atauro Wall Dive</h4>
                                        <p className="text-xs opacity-50 mb-3">Marine & Water Activities</p>
                                        <div className="flex items-center space-x-1 text-sunset-coral text-sm">
                                            <Star size={14} fill="currentColor" />
                                            <span className="font-bold">5.0</span>
                                        </div>
                                    </div>
                                    <Heart size={24} className="ml-auto text-sunset-coral opacity-100" fill="currentColor" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'Booked Activities':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="section-title text-4xl mb-8">Booked Activities</h2>
                        <div className="space-y-6">
                            {/* Upcoming */}
                            <h3 className="font-bold text-xl mb-4 text-sunset-coral">Upcoming</h3>
                            <div className="glass-dark p-6 rounded-3xl border border-sunset-coral/30 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-sunset-coral text-white text-[10px] uppercase font-bold px-4 py-1 rounded-bl-xl z-10">Starting in 3 days</div>
                                <img src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=400" className="w-full md:w-48 h-32 object-cover rounded-2xl" />
                                <div className="flex-grow flex flex-col justify-center">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-2xl font-serif font-bold mb-1">Whale & Dolphin Watching</h4>
                                            <p className="text-sm opacity-50 mb-3 flex items-center">
                                                <Calendar size={14} className="mr-1" /> Oct 15, 2026 • 08:00 AM
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-sm font-bold">2 Participants</span>
                                        <button className="text-xs uppercase font-bold tracking-wider hover:text-sunset-coral transition-colors">View Details</button>
                                    </div>
                                </div>
                            </div>

                            {/* Past */}
                            <h3 className="font-bold text-xl mb-4 mt-12 opacity-50">Past Activities</h3>
                            <div className="glass-dark p-6 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-6 opacity-70">
                                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=400" className="w-full md:w-32 h-24 object-cover rounded-2xl grayscale" />
                                <div className="flex-grow flex flex-col justify-center">
                                    <h4 className="text-lg font-bold mb-1">Mt. Ramelau Trek</h4>
                                    <p className="text-xs opacity-50 mb-3 flex items-center">
                                        <Calendar size={12} className="mr-1" /> Sept 02, 2026
                                    </p>
                                    <button onClick={() => setActiveTab('Write Reviews')} className="text-xs text-sunset-coral uppercase font-bold w-fit hover:underline">Leave a Review</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'Write Reviews':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="section-title text-4xl mb-8">Write Reviews</h2>
                        <div className="glass-dark p-8 rounded-[40px] border border-white/5 space-y-8">
                            <div>
                                <h4 className="text-xl font-bold mb-2">Mt. Ramelau Trek</h4>
                                <p className="text-sm opacity-50 mb-4">Completed on Sept 02, 2026</p>
                                <div className="flex space-x-2 mb-6 text-sunset-coral cursor-pointer">
                                    <Star size={24} fill="currentColor" />
                                    <Star size={24} fill="currentColor" />
                                    <Star size={24} fill="currentColor" />
                                    <Star size={24} fill="currentColor" />
                                    <Star size={24} className="opacity-30" />
                                </div>
                                <textarea
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sand-beige focus:outline-none focus:border-sunset-coral/50 mb-4 min-h-[120px]"
                                    placeholder="Share your experience..."
                                ></textarea>
                                <button className="px-8 py-3 bg-sunset-coral font-bold rounded-xl text-white hover:bg-sunset-coral/80 transition-all">
                                    Submit Review
                                </button>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'Invoices':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="section-title text-4xl mb-8">Invoices & Receipts</h2>
                        <div className="space-y-4">
                            {[
                                { id: 'INV-2026-004', name: 'Whale Watching', date: 'Oct 01, 2026', amount: '$170' },
                                { id: 'INV-2026-003', name: 'Mt. Ramelau Trek', date: 'Aug 25, 2026', amount: '$60' }
                            ].map(inv => (
                                <div key={inv.id} className="glass-dark p-6 rounded-2xl flex items-center justify-between border border-white/5 hover:border-white/20 transition-all">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                            <FileText size={20} className="text-sunset-coral" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{inv.name}</h4>
                                            <p className="text-xs opacity-50">{inv.id} • {inv.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <span className="font-bold text-lg">{inv.amount}</span>
                                        <button className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'Settings':
                return (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="section-title text-4xl mb-8">Account Settings</h2>
                        <div className="glass-dark p-8 rounded-[40px] border border-white/5 max-w-2xl">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs uppercase font-bold opacity-50 mb-2 block">First Name</label>
                                        <input type="text" defaultValue="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige focus:outline-none focus:border-sunset-coral/50" />
                                    </div>
                                    <div>
                                        <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Last Name</label>
                                        <input type="text" defaultValue="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige focus:outline-none focus:border-sunset-coral/50" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Email Address</label>
                                    <input type="email" defaultValue="johndoe@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige focus:outline-none focus:border-sunset-coral/50" />
                                </div>
                                <div>
                                    <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Communication Preferences</label>
                                    <div className="space-y-3 mt-3">
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" defaultChecked className="w-4 h-4 accent-sunset-coral" />
                                            <span className="text-sm">Email me about new experiences</span>
                                        </label>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" defaultChecked className="w-4 h-4 accent-sunset-coral" />
                                            <span className="text-sm">Send booking reminders via SMS</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <button className="px-8 py-3 bg-sunset-coral font-bold rounded-xl text-white hover:bg-sunset-coral/80 transition-all">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-ocean-deep pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                {/* Sidebar */}
                <div className="w-full lg:w-80 space-y-2 flex-shrink-0">
                    <div className="glass-dark p-8 rounded-[32px] mb-8 text-center border border-white/5">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sunset-coral to-orange-400 mx-auto mb-4 flex items-center justify-center text-4xl font-bold shadow-xl">
                            JD
                        </div>
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-xs opacity-50 uppercase tracking-widest font-bold mt-1">Adventurer Level 4</p>
                    </div>

                    {tabs.map(tab => (
                        <SidebarItem
                            key={tab.id}
                            icon={tab.icon}
                            label={tab.id}
                            active={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        />
                    ))}
                    <div className="pt-4 mt-4 border-t border-white/10">
                        <SidebarItem
                            icon={LogOut}
                            label="Log Out"
                            onClick={handleLogout}
                        />
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default TouristDashboard;
