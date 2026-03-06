import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShoppingBag, Clock, ArrowRight } from 'lucide-react';
import { ShoppingComplex } from '../../data/shopping';

interface ShoppingCardProps {
    complex: ShoppingComplex;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ complex }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group">
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                    src={complex.image}
                    alt={complex.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop';
                    }}
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-ocean-deep shadow-sm">
                        {complex.municipality}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-ocean-deep">
                    <ShoppingBag size={16} />
                    <span className="text-xs font-bold uppercase tracking-tighter">{complex.vendorCount}+ Stores</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sunset-coral transition-colors">
                    {complex.name}
                </h3>

                <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-slate-500 text-sm">
                        <MapPin size={16} className="mt-0.5 shrink-0" />
                        <span>{complex.location}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-500 text-sm">
                        <Clock size={16} className="mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{complex.hours}</span>
                    </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                    {complex.description}
                </p>

                <Link
                    to={`/shopping-services/${complex.id}`}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-deep text-white text-sm font-bold rounded-xl hover:bg-ocean-deep/90 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group/btn"
                >
                    View Details
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ShoppingCard;
