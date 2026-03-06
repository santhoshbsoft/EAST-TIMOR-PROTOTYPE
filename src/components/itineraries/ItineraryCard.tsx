import React from 'react';
import { Link } from 'react-router-dom';
import { Itinerary } from '../../data/itineraries';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';

interface ItineraryCardProps {
    itinerary: Itinerary;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ itinerary }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={itinerary.featuredImage}
                    alt={itinerary.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-ocean-deep shadow-sm">
                        {itinerary.theme}
                    </span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${itinerary.difficulty === 'Easy' ? 'text-emerald-600' :
                        itinerary.difficulty === 'Moderate' ? 'text-amber-600' : 'text-red-600'
                        }`}>
                        {itinerary.difficulty}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{itinerary.distance}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-tropical-teal transition-colors">
                    {itinerary.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {itinerary.overview}
                </p>

                <div className="space-y-2 mb-6 flex-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Highlights</p>
                    {itinerary.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-2 text-xs text-slate-600">
                            <Star size={12} className="text-amber-400 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                        </div>
                    ))}
                </div>

                <Link
                    to={`/plan-your-trip/recommended-itineraries/${itinerary.id}`}
                    className="flex items-center justify-between group/btn gap-2 w-full py-3 px-4 bg-slate-50 hover:bg-ocean-deep text-ocean-deep hover:text-white font-bold rounded-xl transition-all duration-300"
                >
                    <span className="text-sm">View Full Itinerary</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ItineraryCard;
