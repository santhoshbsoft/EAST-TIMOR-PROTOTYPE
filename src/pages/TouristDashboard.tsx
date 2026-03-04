import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Calendar, FileText, Settings, LogOut, Star, Clock } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }: any) => (
    <button className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all ${active ? 'bg-sunset-coral text-white shadow-lg shadow-sunset-coral/20' : 'opacity-50 hover:bg-white/5 hover:opacity-100'}`}>
        <Icon size={20} />
        <span className="font-bold text-sm tracking-wide">{label}</span>
    </button>
);

const TouristDashboard = () => {
    return (
        <div className="min-h-screen bg-ocean-deep pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                {/* Sidebar */}
                <div className="w-full lg:w-80 space-y-2">
                    <div className="glass-dark p-8 rounded-[32px] mb-8 text-center border border-white/5">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sunset-coral to-orange-400 mx-auto mb-4 flex items-center justify-center text-4xl font-bold shadow-xl">
                            JD
                        </div>
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-xs opacity-50 uppercase tracking-widest font-bold mt-1">Adventurer Level 4</p>
                    </div>

                    <SidebarItem icon={User} label="Profile Management" active />
                    <SidebarItem icon={Heart} label="My Favourites" />
                    <SidebarItem icon={Calendar} label="Booked Activities" />
                    <SidebarItem icon={Star} label="Write Reviews" />
                    <SidebarItem icon={FileText} label="Invoices" />
                    <SidebarItem icon={Settings} label="Settings" />
                    <SidebarItem icon={LogOut} label="Log Out" />
                </div>

                {/* Main Content */}
                <div className="flex-grow space-y-12">
                    <header>
                        <h2 className="section-title text-4xl mb-4">Hello, John</h2>
                        <p className="opacity-50 tracking-wide uppercase text-xs font-bold">Your next adventure is in 3 days: Whale Watching, Dili</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-dark p-8 rounded-[40px] border border-white/5">
                            <div className="flex justify-between items-start mb-8">
                                <h4 className="text-xl font-bold">Recent Bookings</h4>
                                <button className="text-sunset-coral text-xs font-bold flex items-center space-x-1">
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
                                <div className="relative h-44 rounded-3xl overflow-hidden group">
                                    <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                                        <p className="text-xs font-bold text-sunset-coral mb-1">CULTURAL HERITAGE</p>
                                        <h5 className="font-bold">Lospalos Ancient Houses</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristDashboard;
