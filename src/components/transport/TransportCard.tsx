import React from 'react';
import { Link } from 'react-router-dom';
import { TransportDetail } from '../../data/transport';
import { Car, Bus, Ship, MapPin, Clock, ArrowRight } from 'lucide-react';

interface TransportCardProps {
    transport: TransportDetail;
}

const TransportCard: React.FC<TransportCardProps> = ({ transport }) => {
    const getIcon = () => {
        switch (transport.icon) {
            case 'Car': return <Car size={20} />;
            case 'Bus': return <Bus size={20} />;
            case 'Taxi': return <Car size={20} />;
            case 'Ship': return <Ship size={20} />;
            default: return <Car size={20} />;
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full group">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={transport.image}
                    alt={transport.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-tropical-teal shadow-sm border border-white/20">
                    {getIcon()}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{transport.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {transport.description}
                </p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-slate-400 mt-0.5" />
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Geographic Coverage</p>
                            <p className="text-sm text-slate-700 font-medium">{transport.coverage}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Clock size={18} className="text-slate-400 mt-0.5" />
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Availability</p>
                            <p className="text-sm text-slate-700 font-medium">{transport.availability}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 mt-auto">
                <Link
                    to={`/plan-your-trip/transport/${transport.id}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-slate-200 text-ocean-deep hover:bg-ocean-deep hover:text-white hover:border-ocean-deep font-semibold rounded-lg transition-all duration-200 group/btn"
                >
                    View Details
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default TransportCard;
