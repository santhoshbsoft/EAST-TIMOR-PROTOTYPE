import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    MapPin,
    Clock,
    ChevronLeft,
    Globe,
    Phone,
    Mail,
    ArrowRight,
    Search,
    Store,
    Wifi,
    Car,
    Coffee,
    Shield,
    CreditCard,
    DollarSign,
    Info,
    LayoutGrid,
    Navigation
} from 'lucide-react';
import { shoppingComplexes, storeCategories, StoreCategory } from '../../data/shopping';

const ShoppingDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const complex = shoppingComplexes.find(c => c.id === id);

    const [memberSearch, setMemberSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState<StoreCategory>('All');

    if (!complex) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
                <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Info size={40} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Complex Not Found</h1>
                    <p className="text-slate-500 mb-8">
                        The shopping complex you are looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/plan-your-trip/shopping-services"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-ocean-deep text-white font-bold rounded-xl hover:bg-ocean-deep/90 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        <ChevronLeft size={20} />
                        Back to Shopping
                    </Link>
                </div>
            </div>
        );
    }

    const filteredStores = useMemo(() => {
        return complex.stores.filter(store => {
            const matchesSearch = store.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
                store.specialty.some(s => s.toLowerCase().includes(memberSearch.toLowerCase()));
            const matchesCategory = activeCategory === 'All' || store.type === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [complex.stores, memberSearch, activeCategory]);

    // Map facility tags to icons
    const getFacilityIcon = (facility: string) => {
        const lower = facility.toLowerCase();
        if (lower.includes('wifi')) return <Wifi size={18} />;
        if (lower.includes('park')) return <Car size={18} />;
        if (lower.includes('food') || lower.includes('dining') || lower.includes('caf')) return <Coffee size={18} />;
        if (lower.includes('security')) return <Shield size={18} />;
        if (lower.includes('atm') || lower.includes('bank')) return <CreditCard size={18} />;
        if (lower.includes('currency') || lower.includes('money')) return <DollarSign size={18} />;
        return <Info size={18} />;
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero / Header Section */}
            <div className="relative h-[450px] w-full mt-16 overflow-hidden">
                <img
                    src={complex.image}
                    alt={complex.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all border border-white/20 group"
                        >
                            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Browse
                        </button>

                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-sunset-coral rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                                        {complex.municipality}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-white/80 text-sm font-medium">
                                        <Store size={16} />
                                        {complex.vendorCount}+ Stores
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                                    {complex.name}
                                </h1>
                                <div className="flex items-center gap-2 text-white/90">
                                    <MapPin size={18} className="text-sunset-coral shrink-0" />
                                    <span className="text-lg">{complex.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-ocean-deep rounded-full" />
                                Overview
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {complex.overview}
                            </p>

                            {/* Image Gallery */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {complex.gallery.map((img, idx) => (
                                    <div key={idx} className="h-48 rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                                        <img
                                            src={img}
                                            alt={`${complex.name} gallery ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Store Directory */}
                        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm overflow-hidden relative">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                    <LayoutGrid size={24} className="text-sunset-coral" />
                                    Store Directory
                                </h2>

                                <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-lg md:justify-end">
                                    {/* Search Directory */}
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Search stores..."
                                            value={memberSearch}
                                            onChange={(e) => setMemberSearch(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:ring-2 focus:ring-ocean-deep/20 outline-none"
                                        />
                                    </div>
                                    <select
                                        value={activeCategory}
                                        onChange={(e) => setActiveCategory(e.target.value as StoreCategory)}
                                        className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm outline-none appearance-none cursor-pointer"
                                    >
                                        {storeCategories.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {filteredStores.length > 0 ? (
                                    filteredStores.map(store => (
                                        <div key={store.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sunset-coral/30 hover:bg-white hover:shadow-md transition-all group">
                                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className="font-bold text-slate-900">{store.name}</h4>
                                                        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] uppercase font-bold tracking-wider">
                                                            {store.type}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-xs text-slate-500">
                                                        <span className="flex items-center gap-1">
                                                            <Navigation size={12} className="text-slate-400" />
                                                            {store.floor}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={12} className="text-slate-400" />
                                                            {store.hours}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-1 md:justify-end md:max-w-[200px]">
                                                    {store.specialty.map((item, i) => (
                                                        <span key={i} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg text-[10px]">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-slate-500">
                                        No stores match your search criteria.
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8">
                        {/* Info Card */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm sticky top-24">
                            <div className="space-y-8">
                                {/* Operating Hours */}
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Clock size={20} className="text-sunset-coral" />
                                        Operating Hours
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        {complex.hours}
                                    </p>
                                </div>

                                {/* Facilities */}
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Info size={20} className="text-sunset-coral" />
                                        Facilities & Services
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {complex.facilities.map((facility, idx) => (
                                            <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 text-slate-700 rounded-xl text-xs font-medium border border-slate-100">
                                                <span className="text-sunset-coral">{getFacilityIcon(facility)}</span>
                                                {facility}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Location & Map Placeholder */}
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <MapPin size={20} className="text-sunset-coral" />
                                        Location
                                    </h3>
                                    <div className="mb-4 aspect-video rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden relative group">
                                        <img
                                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                                            className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                                            alt="Map placeholder"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white px-4 py-2 rounded-full shadow-lg text-ocean-deep text-xs font-bold flex items-center gap-2">
                                                <MapPin size={14} /> View interactive map
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nearby Attractions</p>
                                            <ul className="space-y-1">
                                                {complex.nearbyAttractions.map((item, i) => (
                                                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                                                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Transport Access</p>
                                            <ul className="space-y-1">
                                                {complex.transport.map((item, i) => (
                                                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2 leading-tight py-1">
                                                        <div className="w-1 h-1 bg-slate-300 rounded-full shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Section */}
                                <div className="pt-8 border-t border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <a href={`tel:${complex.contact.phone}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-ocean-deep transition-colors group">
                                            <div className="w-8 h-8 bg-slate-50 flex items-center justify-center rounded-lg group-hover:bg-ocean-deep/10">
                                                <Phone size={16} />
                                            </div>
                                            {complex.contact.phone}
                                        </a>
                                        <a href={`mailto:${complex.contact.email}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-ocean-deep transition-colors group">
                                            <div className="w-8 h-8 bg-slate-50 flex items-center justify-center rounded-lg group-hover:bg-ocean-deep/10">
                                                <Mail size={16} />
                                            </div>
                                            {complex.contact.email}
                                        </a>
                                        {complex.contact.website && (
                                            <a href={complex.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-600 hover:text-ocean-deep transition-colors group">
                                                <div className="w-8 h-8 bg-slate-50 flex items-center justify-center rounded-lg group-hover:bg-ocean-deep/10">
                                                    <Globe size={16} />
                                                </div>
                                                Official Website
                                                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                            </a>
                                        )}
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

export default ShoppingDetail;
