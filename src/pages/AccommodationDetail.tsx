import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Check, Phone, Mail, Globe, Map as MapIcon, ChevronLeft } from 'lucide-react';
import { accommodations, Accommodation } from '../data/accommodations';

const AccommodationDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
    const [activeImage, setActiveImage] = useState<string>('');

    useEffect(() => {
        const found = accommodations.find(a => a.id === id);
        if (found) {
            setAccommodation(found);
            setActiveImage(found.featureImage);
        }
    }, [id]);

    if (!accommodation) {
        return (
            <div className="min-h-screen bg-forest-green pt-32 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Accommodation Not Found</h2>
                    <button
                        onClick={() => navigate('/plan-your-trip/accommodation')}
                        className="px-6 py-2 bg-tropical-mint text-forest-green font-bold rounded-lg hover:bg-white transition-colors"
                    >
                        Back to All Accommodations
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-forest-green pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb & Target Nav */}
                <button
                    onClick={() => navigate('/plan-your-trip/accommodation')}
                    className="flex items-center text-gray-300 hover:text-tropical-mint mb-6 transition-colors font-medium text-sm w-fit"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Accommodations
                </button>

                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 animate-slide-up">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-ocean-deep border border-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                {accommodation.type}
                            </span>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < Math.floor(accommodation.rating) ? 'text-tropical-mint fill-current' : 'text-gray-600'}`}
                                    />
                                ))}
                                <span className="ml-2 text-sm font-bold text-white">{accommodation.rating}</span>
                                <span className="ml-1 text-sm text-gray-400">({accommodation.reviews.length} reviews)</span>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">
                            {accommodation.name}
                        </h1>
                        <div className="flex items-center text-gray-300">
                            <MapPin className="h-5 w-5 mr-1.5 text-sunset-coral" />
                            <span>{accommodation.contact.address}, {accommodation.municipality}</span>
                        </div>
                    </div>

                    <div className="bg-ocean-deep p-6 rounded-2xl shadow-sm border border-gray-700 flex flex-col items-center md:items-end min-w-[250px]">
                        <p className="text-sm text-gray-400 font-medium mb-1">Price per night from</p>
                        <p className="text-3xl font-bold text-white mb-4">{accommodation.priceRange.split(' - ')[0]}</p>
                        {/* Book Now button removed as per requirement */}
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
                    <div className="relative h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-4 shadow-md bg-ocean-deep">
                        <img
                            src={activeImage}
                            alt={`${accommodation.name} Main`}
                            className="w-full h-full object-cover transition-opacity duration-300"
                        />
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar">
                        <button
                            onClick={() => setActiveImage(accommodation.featureImage)}
                            className={`flex-shrink-0 h-20 w-28 md:h-24 md:w-36 rounded-lg overflow-hidden border-2 transition-all ${activeImage === accommodation.featureImage ? 'border-tropical-mint shadow-md opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                                }`}
                        >
                            <img src={accommodation.featureImage} alt="Thumbnail Main" className="w-full h-full object-cover" />
                        </button>
                        {accommodation.gallery.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(img)}
                                className={`flex-shrink-0 h-20 w-28 md:h-24 md:w-36 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-tropical-mint shadow-md opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Main Content (Left Column) */}
                    <div className="lg:col-span-2 space-y-12 animate-slide-up" style={{ animationDelay: '200ms' }}>

                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-700">About the Property</h2>
                            <p className="text-gray-300 leading-relaxed font-sans">
                                {accommodation.fullDescription}
                            </p>
                        </section>

                        {/* Amenities */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-700">Amenities</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                                {accommodation.amenities.map(amenity => (
                                    <div key={amenity} className="flex items-center text-gray-300">
                                        <div className="bg-ocean-deep border border-gray-600 p-1 rounded-full mr-3 text-tropical-mint flex-shrink-0">
                                            <Check className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-sm">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Room Types */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Room Types & Pricing</h2>
                            <div className="space-y-6">
                                {accommodation.rooms.map(room => (
                                    <div key={room.id} className="bg-ocean-deep border border-gray-700 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6">
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-white mb-2">{room.name}</h3>
                                            <p className="text-gray-400 mb-4 text-sm">{room.description}</p>

                                            <div className="mb-4">
                                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Room Features</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {room.features.map(f => (
                                                        <span key={f} className="bg-forest-green text-gray-300 px-2.5 py-1 rounded-md text-xs font-medium border border-gray-600">
                                                            {f}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="text-sm font-medium text-gray-400 flex items-center bg-forest-green w-fit px-3 py-1.5 rounded-lg border border-gray-700">
                                                <span className="mr-2">Capacity:</span>
                                                <span className="text-white">{room.capacity.adults} Adults</span>
                                                {room.capacity.children > 0 && <span className="mx-1 text-gray-500">•</span>}
                                                {room.capacity.children > 0 && <span className="text-white">{room.capacity.children} Children</span>}
                                            </div>
                                        </div>
                                        <div className="md:w-48 flex flex-col justify-center items-start md:items-end border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-6">
                                            <p className="text-sm text-gray-400 mb-1">Per night</p>
                                            <p className="text-3xl font-bold text-white mb-4">${room.price}</p>
                                            <button
                                                onClick={() => navigate(`/accommodation/${accommodation.id}/room/${room.id}`)}
                                                className="w-full px-4 py-2 bg-tropical-mint hover:bg-white text-forest-green font-bold rounded-lg transition-colors text-center shadow-sm"
                                            >
                                                Select Room
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Reviews */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Guest Reviews</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {accommodation.reviews.map(review => (
                                    <div key={review.id} className="bg-ocean-deep p-5 rounded-2xl shadow-sm border border-gray-700">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="font-bold text-white">{review.author}</div>
                                            <div className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</div>
                                        </div>
                                        <div className="flex mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < review.rating ? 'text-tropical-mint fill-current' : 'text-gray-600'}`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 text-sm italic">"{review.text}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar (Right Column) */}
                    <div className="space-y-8 animate-slide-up" style={{ animationDelay: '300ms' }}>

                        {/* Contact Card */}
                        <div className="bg-ocean-deep p-6 rounded-2xl shadow-sm border border-gray-700">
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Contact Property</h3>
                            <div className="space-y-4">
                                <a href={`tel:${accommodation.contact.phone.replace(/\s/g, '')}`} className="flex items-center text-gray-300 hover:text-tropical-mint transition-colors group">
                                    <div className="bg-forest-green border border-gray-600 p-2 rounded-lg group-hover:border-tropical-mint mr-3 transition-colors">
                                        <Phone className="h-5 w-5 text-gray-400 group-hover:text-tropical-mint" />
                                    </div>
                                    <span className="font-medium">{accommodation.contact.phone}</span>
                                </a>
                                <a href={`mailto:${accommodation.contact.email}`} className="flex items-center text-gray-300 hover:text-tropical-mint transition-colors group">
                                    <div className="bg-forest-green border border-gray-600 p-2 rounded-lg group-hover:border-tropical-mint mr-3 transition-colors">
                                        <Mail className="h-5 w-5 text-gray-400 group-hover:text-tropical-mint" />
                                    </div>
                                    <span className="font-medium truncate">{accommodation.contact.email}</span>
                                </a>
                                {accommodation.contact.website && (
                                    <a href={accommodation.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-tropical-mint transition-colors group">
                                        <div className="bg-forest-green border border-gray-600 p-2 rounded-lg group-hover:border-tropical-mint mr-3 transition-colors">
                                            <Globe className="h-5 w-5 text-gray-400 group-hover:text-tropical-mint" />
                                        </div>
                                        <span className="font-medium truncate">{accommodation.contact.website.replace(/^https?:\/\//, '')}</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Location / Map Placeholder */}
                        <div className="bg-ocean-deep rounded-2xl shadow-sm border border-gray-700 overflow-hidden">
                            <div className="p-5 border-b border-gray-700 bg-forest-green/50">
                                <h3 className="text-lg font-bold text-white flex items-center">
                                    <MapIcon className="h-5 w-5 mr-2 text-tropical-mint" />
                                    Location
                                </h3>
                            </div>
                            <div className="relative h-64 bg-forest-green flex items-center justify-center">
                                {/* Map Placeholder - In a real app this would be a Google Map or Leaflet */}
                                <div className="absolute inset-0 pattern-dots text-gray-600 opacity-50"></div>
                                <div className="z-10 text-center px-4">
                                    <div className="inline-flex bg-tropical-mint text-forest-green p-3 rounded-full mb-3 shadow-lg transform -translate-y-2">
                                        <MapPin className="h-8 w-8" />
                                    </div>
                                    <p className="font-bold text-white text-lg shadow-ocean-deep drop-shadow-md">
                                        {accommodation.municipality}, Timor-Leste
                                    </p>
                                    <p className="text-sm text-gray-300 mt-1">
                                        {accommodation.coordinates.lat.toFixed(4)}, {accommodation.coordinates.lng.toFixed(4)}
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 bg-forest-green/50 text-sm text-gray-400 text-center border-t border-gray-700">
                                Interactive map view requires API key
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccommodationDetail;
