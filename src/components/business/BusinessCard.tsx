import React from 'react';
import { MapPin, Star, Phone, ArrowUpRight } from 'lucide-react';
import { Business } from '../../data/businesses';

interface BusinessCardProps {
    business: Business;
    onViewDetails: (id: string) => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, onViewDetails }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-tropical-teal text-white backdrop-blur-sm text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                        {business.category}
                    </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                    <Star className="h-3.5 w-3.5 text-sunrise-gold mr-1 fill-current" />
                    <span className="font-bold text-slate-900 text-sm">{business.rating}</span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-tropical-teal transition-colors line-clamp-1">
                        {business.name}
                    </h3>
                    {business.priceRange && (
                        <span className="text-slate-500 font-medium text-sm ml-2 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                            {business.priceRange}
                        </span>
                    )}
                </div>

                <div className="flex items-center text-sm text-slate-500 mb-4 font-medium">
                    <MapPin className="h-4 w-4 mr-1 text-tropical-teal flex-shrink-0" />
                    <span className="line-clamp-1">{business.location}, {business.municipality}</span>
                </div>

                <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-grow">
                    {business.description}
                </p>

                {/* Footer / Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center text-slate-400 text-sm hover:text-slate-900 transition-colors cursor-pointer" onClick={() => window.location.href = `tel:${business.contact.phone}`}>
                        <Phone className="h-4 w-4 mr-1.5 text-tropical-teal" />
                        <span>Call</span>
                    </div>

                    <button
                        onClick={() => onViewDetails(business.id)}
                        className="flex items-center px-4 py-2 bg-slate-900 hover:bg-tropical-teal text-white text-sm font-medium rounded-xl transition-all group/btn shadow-sm"
                    >
                        View Details
                        <ArrowUpRight className="h-4 w-4 ml-1.5 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
