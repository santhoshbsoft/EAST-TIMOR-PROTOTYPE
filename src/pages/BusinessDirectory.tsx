import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { businesses, businessCategories } from '../data/businesses';

import SearchBar from '../components/business/SearchBar';
import CategoryFilter from '../components/business/CategoryFilter';
import MunicipalityFilter from '../components/business/MunicipalityFilter';
import BusinessCard from '../components/business/BusinessCard';

const BusinessDirectory: React.FC = () => {
    const navigate = useNavigate();

    // Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeMunicipality, setActiveMunicipality] = useState('All');

    // Filter Logic
    const filteredBusinesses = useMemo(() => {
        return businesses.filter((business) => {
            const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                business.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || business.category === activeCategory;
            const matchesMunicipality = activeMunicipality === 'All' || business.municipality === activeMunicipality;

            return matchesSearch && matchesCategory && matchesMunicipality;
        });
    }, [searchQuery, activeCategory, activeMunicipality]);

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">

            {/* Header Section */}
            <div className="bg-white border-b border-slate-200 py-12 mb-8 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tropical-mint/5 to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <button
                        onClick={() => navigate('/plan-your-trip')}
                        className="flex items-center text-slate-400 hover:text-tropical-teal mb-6 transition-colors font-medium text-sm w-fit"
                    >
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Plan Your Trip
                    </button>

                    <div className="flex items-center mb-4">
                        <div className="inline-flex items-center justify-center p-3 bg-tropical-teal/10 rounded-xl mr-4 border border-tropical-teal/20">
                            <Briefcase className="h-8 w-8 text-tropical-teal" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
                            Business & Services
                        </h1>
                    </div>
                    <p className="text-xl text-slate-600 max-w-3xl mt-4">
                        Discover trusted local businesses, essential services, top-rated restaurants, and certified tour operators across Timor-Leste.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Search and Filter Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-10 sticky top-20 z-20">
                    <div className="flex flex-col space-y-4">
                        {/* Top row: Search and Municipality */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-grow">
                                <SearchBar
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                    placeholder="Search restaurants, operators, services..."
                                />
                            </div>
                            <div className="w-full md:w-auto flex-shrink-0">
                                <MunicipalityFilter
                                    activeMunicipality={activeMunicipality}
                                    onMunicipalityChange={setActiveMunicipality}
                                />
                            </div>
                        </div>

                        {/* Bottom row: Categories */}
                        <div className="pt-2 border-t border-slate-100 flex items-center">
                            <SlidersHorizontal className="h-5 w-5 text-slate-400 mr-3 hidden md:block" />
                            <div className="flex-grow overflow-hidden">
                                <CategoryFilter
                                    categories={businessCategories}
                                    activeCategory={activeCategory}
                                    onCategoryChange={setActiveCategory}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Status */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">
                        {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'Result' : 'Results'} Found
                    </h2>

                    {(activeCategory !== 'All' || activeMunicipality !== 'All' || searchQuery !== '') && (
                        <button
                            onClick={() => {
                                setActiveCategory('All');
                                setActiveMunicipality('All');
                                setSearchQuery('');
                            }}
                            className="text-sm text-tropical-teal hover:text-ocean-deep font-medium hover:underline transition-colors"
                        >
                            Clear all filters
                        </button>
                    )}
                </div>

                {/* Main Grid */}
                {filteredBusinesses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {filteredBusinesses.map((business, index) => (
                            <div
                                key={business.id}
                                className="animate-slide-up"
                                style={{ animationDelay: `${index % 10 * 100}ms` }}
                            >
                                <BusinessCard
                                    business={business}
                                    onViewDetails={(id) => navigate(`/business-services/${id}`)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 animate-slide-up">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-full mb-4">
                            <Briefcase className="h-8 w-8 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No businesses found</h3>
                        <p className="text-slate-500 max-w-md mx-auto">
                            We couldn't break down any businesses matching your current search criteria. Try adjusting your filters or search terms.
                        </p>
                        <button
                            onClick={() => {
                                setActiveCategory('All');
                                setActiveMunicipality('All');
                                setSearchQuery('');
                            }}
                            className="mt-6 px-6 py-2 bg-tropical-teal text-white font-bold rounded-lg hover:bg-ocean-deep transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusinessDirectory;
