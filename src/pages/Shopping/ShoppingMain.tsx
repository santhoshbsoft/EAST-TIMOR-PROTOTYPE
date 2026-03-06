import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, ShoppingBag, Info } from 'lucide-react';
import { shoppingComplexes, shoppingTips, storeCategories, StoreCategory } from '../../data/shopping';
import ShoppingCard from '../../components/shopping/ShoppingCard';

const ShoppingMain: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMunicipality, setSelectedMunicipality] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState<StoreCategory>('All');

    const municipalities = useMemo(() => {
        const unique = Array.from(new Set(shoppingComplexes.map(c => c.municipality)));
        return ['All', ...unique];
    }, []);

    const filteredComplexes = useMemo(() => {
        return shoppingComplexes.filter(complex => {
            const matchesSearch = complex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                complex.stores.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesMunicipality = selectedMunicipality === 'All' || complex.municipality === selectedMunicipality;
            const matchesCategory = selectedCategory === 'All' || complex.stores.some(s => s.type === selectedCategory);

            return matchesSearch && matchesMunicipality && matchesCategory;
        });
    }, [searchQuery, selectedMunicipality, selectedCategory]);

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Shopping & Services
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        Explore Timor-Leste's diverse shopping landscape, from modern air-conditioned plazas to vibrant
                        traditional markets. Find everything from local handicrafts and Tais to international brands
                        and essential banking services.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by complex or store name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-ocean-deep/20 focus:border-ocean-deep outline-none transition-all text-slate-900"
                            />
                        </div>

                        {/* Municipality Filter */}
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <select
                                value={selectedMunicipality}
                                onChange={(e) => setSelectedMunicipality(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-ocean-deep/20 focus:border-ocean-deep outline-none transition-all appearance-none text-slate-900"
                            >
                                {municipalities.map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value as StoreCategory)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-ocean-deep/20 focus:border-ocean-deep outline-none transition-all appearance-none text-slate-900"
                            >
                                {storeCategories.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Listing Grid */}
                {filteredComplexes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredComplexes.map(complex => (
                            <ShoppingCard key={complex.id} complex={complex} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300 mb-16">
                        <ShoppingBag size={48} className="mx-auto text-slate-300 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No complexes found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                )}

                {/* Shopping Tips Section */}
                <div className="bg-ocean-deep rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-white/10 rounded-lg">
                                    <Info className="text-amber-300" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Shopping Tips</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {shoppingTips.map((tip, idx) => (
                                    <div key={idx} className="flex gap-3 text-sm text-blue-50/80">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-300 shrink-0" />
                                        {tip}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                </div>
            </div>
        </div>
    );
};

export default ShoppingMain;
