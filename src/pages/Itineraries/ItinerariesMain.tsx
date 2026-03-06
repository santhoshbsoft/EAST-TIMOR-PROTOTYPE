import React from 'react';
import { itineraries, itineraryCategories, ItineraryCategory } from '../../data/itineraries';
import ItineraryCard from '../../components/itineraries/ItineraryCard';
import { Compass, Filter, Map } from 'lucide-react';

const ItinerariesMain: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<ItineraryCategory | 'All'>('All');

    const filteredItineraries = activeTab === 'All'
        ? itineraries
        : itineraries.filter(i => i.theme === activeTab);

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            {/* Hero Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-tropical-teal font-bold tracking-widest uppercase text-xs mb-4">
                            <Compass size={16} />
                            <span>Curated Journeys</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Recommended Itineraries
                        </h1>
                        <p className="text-lg text-slate-600">
                            Explore Timor-Leste through our expertly crafted travel plans. Whether you're seeking underwater marvels or mountain summits, we have the perfect journey for you.
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveTab('All')}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'All'
                                    ? 'bg-ocean-deep text-white shadow-lg'
                                    : 'bg-white text-slate-500 hover:bg-slate-100'
                                }`}
                        >
                            All Itineraries
                        </button>
                        {itineraryCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === cat
                                        ? 'bg-ocean-deep text-white shadow-lg'
                                        : 'bg-white text-slate-500 hover:bg-slate-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 text-slate-400 text-sm italic">
                        <Filter size={16} />
                        Showing {filteredItineraries.length} Results
                    </div>
                </div>

                {/* Grid */}
                {filteredItineraries.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItineraries.map(itinerary => (
                            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <Map size={48} className="text-slate-200 mb-4" />
                        <h3 className="text-lg font-bold text-slate-400">No itineraries found for this category</h3>
                        <p className="text-slate-400">Try selecting another adventure type or check back soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItinerariesMain;
