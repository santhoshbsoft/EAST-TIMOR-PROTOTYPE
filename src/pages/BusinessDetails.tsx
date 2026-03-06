import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    MapPin,
    Star,
    Clock,
    Phone,
    Globe,
    Mail,
    Share2,
    Heart,
    Info,
    CheckCircle2
} from 'lucide-react';
import { businesses, Business } from '../data/businesses';

const BusinessDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [business, setBusiness] = useState<Business | null>(null);
    const [activeTab, setActiveTab] = useState<'about' | 'hours' | 'contact'>('about');

    useEffect(() => {
        const found = businesses.find(b => b.id === id);
        if (found) {
            setBusiness(found);
        } else {
            // Business not found, redirect to directory
            navigate('/plan-your-trip/business-attractions');
        }
    }, [id, navigate]);

    if (!business) return null;

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation and Breadcrumbs */}
                <div className="mb-8 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/plan-your-trip/business-attractions')}
                        className="flex items-center text-slate-400 hover:text-tropical-teal transition-colors font-medium text-sm"
                    >
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Business & Services
                    </button>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
                            <Share2 className="h-5 w-5" />
                        </button>
                        <button className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-sunset-coral hover:border-sunset-coral transition-all shadow-sm">
                            <Heart className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 animate-slide-up">
                    {/* Visual Gallery Placeholder */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-200">
                        <img
                            src={business.image}
                            alt={business.name}
                            className="w-full h-full object-cover min-h-[400px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <span className="px-4 py-2 bg-tropical-teal text-white backdrop-blur-md text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg">
                                {business.category}
                            </span>
                        </div>
                    </div>

                    {/* Quick Info Section */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-slate-200 mr-4 shadow-sm">
                                <Star className="h-4 w-4 text-sunrise-gold mr-1.5 fill-current" />
                                <span className="font-bold text-slate-900 leading-none">{business.rating}</span>
                                <span className="text-slate-400 text-xs ml-2 font-medium">({business.reviews} reviews)</span>
                            </div>
                            {business.priceRange && (
                                <span className="text-tropical-teal font-bold tracking-widest">{business.priceRange}</span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            {business.name}
                        </h1>

                        <div className="flex items-center text-lg text-slate-600 mb-8 font-medium">
                            <MapPin className="h-6 w-6 mr-3 text-tropical-teal" />
                            {business.location}, {business.municipality}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                <Clock className="h-5 w-5 text-tropical-teal mb-2" />
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Status</p>
                                <p className="text-sm font-bold text-slate-900">Open Now</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                <Phone className="h-5 w-5 text-tropical-teal mb-2" />
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Contact</p>
                                <p className="text-sm font-bold text-slate-900 truncate">{business.contact.phone}</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm col-span-2 sm:col-span-1">
                                <Globe className="h-5 w-5 text-tropical-teal mb-2" />
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Website</p>
                                <p className="text-sm font-bold text-slate-900 truncate">Official Site</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Tabs Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-slide-up" style={{ animationDelay: '100ms' }}>

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Tab Switcher */}
                        <div className="flex items-center space-x-8 border-b border-slate-200 pb-px">
                            {(['about', 'hours', 'contact'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative pb-4 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === tab ? 'text-tropical-teal' : 'text-slate-400 hover:text-slate-900'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-tropical-teal rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[300px]">
                            {activeTab === 'about' && (
                                <div className="space-y-8">
                                    <div className="prose prose-slate max-w-none">
                                        <p className="text-xl text-slate-600 leading-relaxed font-light">
                                            {business.description}
                                        </p>
                                    </div>

                                    {/* Amenities / Features */}
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                            <Info className="h-5 w-5 mr-3 text-tropical-teal" />
                                            Features & Services
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {business.amenities.map((item, i) => (
                                                <div key={i} className="flex items-center p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-tropical-teal mr-3" />
                                                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'hours' && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Standard Operating Hours</h3>
                                    <div className="max-w-md space-y-4">
                                        {Object.entries(business.operatingHours).map(([day, hours]) => (
                                            <div key={day} className="flex items-center justify-between text-lg">
                                                <span className={`font-medium ${day === 'Sunday' ? 'text-slate-400' : 'text-slate-600'}`}>{day}</span>
                                                <span className={`font-bold ${hours === 'Closed' ? 'text-sunset-coral' : 'text-slate-900'}`}>{hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'contact' && (
                                <div className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                            <Phone className="h-6 w-6 text-tropical-teal mb-4" />
                                            <h4 className="text-slate-900 font-bold mb-1">Phone Number</h4>
                                            <p className="text-slate-500 text-sm mb-4">Give them a call for bookings or inquiries.</p>
                                            <p className="text-2xl font-bold text-slate-900">{business.contact.phone}</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                            <Mail className="h-6 w-6 text-tropical-teal mb-4" />
                                            <h4 className="text-slate-900 font-bold mb-1">Email Address</h4>
                                            <p className="text-slate-500 text-sm mb-4">Send an official inquiry via email.</p>
                                            <p className="text-lg font-bold text-slate-900 break-all">{business.contact.email || 'N/A'}</p>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-slate-900 rounded-3xl flex flex-col items-center text-center">
                                        <Globe className="h-10 w-10 text-tropical-teal mb-6" />
                                        <h3 className="text-2xl font-bold text-white mb-4">Official Website</h3>
                                        <p className="text-slate-300 max-w-sm mb-8">Visit the official business website for more information and online services.</p>
                                        <a
                                            href={business.contact.website?.startsWith('http') ? business.contact.website : `https://${business.contact.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-4 bg-tropical-teal text-white font-bold rounded-xl hover:bg-white hover:text-tropical-teal transition-all shadow-xl shadow-tropical-teal/10"
                                        >
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-8">
                        {/* Map Placeholder */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Location Map</h3>
                            <div className="aspect-square bg-slate-50 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-100">
                                <MapPin className="h-12 w-12 text-tropical-teal opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Map Placeholder</span>
                                </div>
                                {/* Mock location marker */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        <div className="h-4 w-4 bg-tropical-teal rounded-full animate-ping opacity-75"></div>
                                        <div className="absolute inset-0 h-4 w-4 bg-tropical-teal rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-slate-500 leading-relaxed">
                                {business.location}
                            </p>
                        </div>

                        {/* Booking CTA for Service Businesses */}
                        <div className="bg-tropical-teal p-8 rounded-3xl shadow-xl shadow-tropical-teal/5 overflow-hidden relative">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Book Professional Service</h3>
                            <p className="text-white/80 text-sm mb-8 font-medium">
                                Secure your experience directly with {business.name} for the best rates and local expertise.
                            </p>
                            <button className="w-full py-4 bg-white text-tropical-teal font-bold rounded-xl hover:bg-slate-50 transition-all transform active:scale-95 shadow-lg">
                                Inquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDetails;
