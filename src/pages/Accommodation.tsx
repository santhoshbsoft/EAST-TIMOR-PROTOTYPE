import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, PlusCircle, X } from 'lucide-react';
import { accommodations, municipalities } from '../data/accommodations';

const getHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
};
const getAccommodationImage = (acc: any) => {
    const isPlaceholder = acc.featureImage.includes('unsplash.com');
    if (!isPlaceholder) return acc.featureImage;

    const keyword = encodeURIComponent(acc.type.toLowerCase());
    const lock = getHash(acc.name);
    return `https://loremflickr.com/800/600/${keyword}?lock=${lock}&random=${lock}`;
};

const Accommodation: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState<string>('All');
    const [selectedMunicipality, setSelectedMunicipality] = useState<string>('');

    const accommodationTypes = ['All', 'Apartment', 'Backpackers', 'Bungalow', 'Eco', 'Guesthouse', 'Homestay', 'Hotel', 'Pousada', 'Resort'];

    const filteredAccommodations = useMemo(() => {
        return accommodations.filter(acc => {
            const matchesSearch = acc.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = selectedType === 'All' || acc.type === selectedType;
            const matchesMunicipality = selectedMunicipality === '' || acc.municipality === selectedMunicipality;
            return matchesSearch && matchesType && matchesMunicipality;
        });
    }, [searchQuery, selectedType, selectedMunicipality]);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedType('All');
        setSelectedMunicipality('');
    };

    const hasActiveFilters = searchQuery !== '' || selectedType !== 'All' || selectedMunicipality !== '';

    return (
        <div className="min-h-screen bg-forest-green pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="max-w-4xl mb-12 animate-slide-up">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Accommodation in Timor-Leste
                    </h1>
                    <h2 className="text-xl md:text-2xl text-tropical-mint font-medium mb-4">
                        All styles and budget ranges for accommodation in Timor-Leste
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Timor–Leste offers a wide variety of accommodation options. The Dili capital corridor has numerous modern and traditional hotel, apartment, and bungalow styled accommodation. Outside of Dili in the other municipalities you can find small hotels, Pousadas (Portuguese styled great houses), guesthouses, eco–lodges, homestays, camping sites, and religious compounds. These properties generally offer simple but comfortable facilities, often in very beautiful surroundings.
                    </p>
                </div>

                {/* Filters Section */}
                <div className="mb-10 bg-ocean-deep p-6 rounded-2xl shadow-sm border border-gray-700 animate-slide-up" style={{ animationDelay: '100ms' }}>

                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-11 pr-4 py-3 border border-gray-600 rounded-xl text-white bg-forest-green focus:bg-forest-green focus:outline-none focus:ring-2 focus:ring-tropical-mint focus:border-transparent transition-colors placeholder-gray-400"
                                placeholder="Search accommodation by name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Municipality Dropdown */}
                        <div className="md:w-72 relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MapPin className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                className="block w-full pl-11 pr-10 py-3 border border-gray-600 rounded-xl text-white bg-forest-green focus:bg-forest-green focus:outline-none focus:ring-2 focus:ring-tropical-mint focus:border-transparent appearance-none transition-colors"
                                value={selectedMunicipality}
                                onChange={(e) => setSelectedMunicipality(e.target.value)}
                            >
                                <option value="">All Municipalities</option>
                                {municipalities.map(muni => (
                                    <option key={muni} value={muni}>{muni}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Type Tabs */}
                        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar gap-2 flex-1">
                            {accommodationTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedType === type
                                        ? 'bg-tropical-mint text-forest-green shadow-md'
                                        : 'bg-forest-green/50 text-gray-300 hover:bg-forest-green border border-gray-600'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Clear Filters Button */}
                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="flex items-center text-sm font-medium text-sunset-coral hover:text-red-400 transition-colors whitespace-nowrap px-2 py-2"
                            >
                                <X className="h-4 w-4 mr-1" />
                                Clear Filters
                            </button>
                        )}
                    </div>
                </div>

                {/* Results Count Summary */}
                <div className="mb-6 flex items-center text-gray-300 animate-slide-up" style={{ animationDelay: '150ms' }}>
                    <p>Showing <span className="font-bold text-white">{filteredAccommodations.length}</span> accommodations</p>
                    {selectedMunicipality && <span className="ml-2 px-2.5 py-1 bg-tropical-mint/20 text-tropical-mint rounded-full text-xs font-bold uppercase">{selectedMunicipality}</span>}
                    {selectedType !== 'All' && <span className="ml-2 px-2.5 py-1 bg-ocean-light/20 text-white rounded-full text-xs font-bold uppercase">{selectedType}</span>}
                </div>

                {/* Grid Section */}
                {filteredAccommodations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredAccommodations.map((acc, index) => (
                            <div
                                key={acc.id}
                                className="bg-ocean-deep rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col h-full animate-slide-up border border-gray-700"
                                style={{ animationDelay: `${(index % 6) * 100}ms` }}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={getAccommodationImage(acc)}
                                        alt={acc.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-forest-green/95 text-white backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">
                                            {acc.type}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-tropical-mint text-forest-green backdrop-blur-md px-2.5 py-1.5 rounded-lg font-bold text-sm shadow-sm flex items-center">
                                        {acc.priceLevel}
                                    </div>
                                    {acc.priceLevel !== '$$$$' && (
                                        <div className="absolute top-4 right-4 bg-transparent text-gray-400/50 backdrop-blur-md px-2.5 py-1.5 rounded-lg font-bold text-sm shadow-sm flex items-center select-none" style={{ zIndex: 0 }}>
                                            $$$$
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-tropical-mint mb-2 bg-forest-green/50 w-fit px-2.5 py-1 rounded-md">
                                        <MapPin className="h-3.5 w-3.5 mr-1.5" />
                                        <span className="text-xs font-bold uppercase tracking-wide">{acc.municipality}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{acc.name}</h3>
                                    <p className="text-gray-300 mb-6 text-sm flex-grow line-clamp-3">
                                        {acc.shortDescription}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-700">
                                        <button
                                            onClick={() => navigate(`/accommodation/${acc.id}`)}
                                            className="w-full flex justify-center items-center py-3 bg-forest-green/80 hover:bg-tropical-mint hover:text-forest-green text-white font-semibold rounded-xl transition-colors group/btn border border-gray-600 hover:border-tropical-mint"
                                        >
                                            View Details
                                            <PlusCircle className="h-4 w-4 ml-2 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-ocean-deep rounded-3xl shadow-sm border border-gray-700 mb-16">
                        <MapPin className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">No Accommodations Found</h3>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto">We couldn't find any stays matching your current filters. Try adjusting your search term or clearing filters.</p>
                        <button
                            onClick={clearFilters}
                            className="px-8 py-3 bg-tropical-mint text-forest-green font-bold rounded-xl hover:bg-white transition-colors shadow-md hover:shadow-lg"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}

                {/* Map Placeholder Section */}
                <div className="bg-ocean-deep rounded-3xl shadow-md border border-gray-700 overflow-hidden animate-slide-up">
                    <div className="p-8 border-b border-gray-700">
                        <h2 className="text-2xl font-bold text-white">Accommodation Map</h2>
                        <p className="text-gray-400 mt-2">Explore accommodation options across the diverse municipalities of Timor-Leste.</p>
                    </div>
                    {/* Map Visual Component */}
                    <div className="relative h-[600px] w-full bg-blue-50/50 flex items-center justify-center overflow-hidden group">
                        {/* Map Background Pattern Simulate Context */}
                        <div className="absolute inset-0 pattern-cross text-tropical-mint/10 opacity-70"></div>

                        {/* Decorative map elements */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 md:w-[600px] md:h-[400px]">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-sand-beige/40 stroke-current" strokeWidth="1" fill="currentColor">
                                {/* Abstract shape mimicking Timor-Leste island roughly */}
                                <path d="M10,80 Q20,60 40,70 T80,50 Q90,70 70,80 T30,90 Q10,100 10,80 Z" />
                                <path d="M75,45 Q80,40 85,45 T95,50 Q90,60 75,55 T75,45 Z" /> {/* Atauro roughly */}
                            </svg>

                            {/* Floating Map Pins */}
                            {[
                                { top: '65%', left: '35%', color: 'text-sunset-coral' }, // Dili roughly
                                { top: '75%', left: '25%', color: 'text-ocean-deep' },   // Ermera roughly
                                { top: '60%', left: '60%', color: 'text-tropical-teal' },// Baucau roughly
                                { top: '55%', left: '80%', color: 'text-tropical-mint' },// Lautem roughly
                                { top: '45%', left: '85%', color: 'text-sunset-coral' }, // Atauro roughly
                            ].map((pin, i) => (
                                <div key={i} className={`absolute ${pin.color} transform -translate-x-1/2 -translate-y-full hover:scale-125 transition-transform cursor-pointer drop-shadow-md`} style={{ top: pin.top, left: pin.left }}>
                                    <MapPin className="h-8 w-8 fill-current text-white/90" />
                                    <div className="absolute top-1.5 left-[10px] w-3 h-3 bg-current rounded-full"></div>
                                </div>
                            ))}
                        </div>

                        {/* Interactive overlay */}
                        <div className="absolute inset-0 bg-forest-green/40 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-700"></div>

                        <div className="absolute bottom-8 right-8 bg-ocean-deep/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-600 max-w-sm">
                            <h4 className="font-bold text-white mb-1">Interactive Map</h4>
                            <p className="text-sm text-gray-300">Integrate Google Maps or Leaflet.js here to allow users to visually browse accommodations by their exact coordinates across municipalities.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Accommodation;
