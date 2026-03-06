import React from 'react';
import { Airline } from '../../data/flights';
import { Plane, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AirlineCardProps {
    airline: Airline;
}

const AirlineCard: React.FC<AirlineCardProps> = ({ airline }) => {
    // Unique routes (by destination) for the card preview
    const uniqueRoutes = Array.from(new Set(airline.routes.map(r => r.destination)))
        .slice(0, 2);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 p-2">
                        {/* Fallback to text if logo missing */}
                        <span className="text-xl font-bold text-ocean-deep">{airline.name.charAt(0)}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Carrier</span>
                        <h3 className="text-lg font-bold text-slate-900">{airline.name}</h3>
                    </div>
                </div>

                <p className="text-slate-600 text-sm line-clamp-2 mb-6">
                    {airline.description}
                </p>

                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <Plane size={18} className="text-tropical-teal mt-0.5" />
                        <div>
                            <p className="text-xs text-slate-400 font-medium uppercase">Primary Routes</p>
                            <p className="text-sm text-slate-700 font-medium">
                                {uniqueRoutes.join(', ')} {airline.routes.length > 2 ? `+${airline.routes.length - 2} more` : ''}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Calendar size={18} className="text-tropical-teal mt-0.5" />
                        <div>
                            <p className="text-xs text-slate-400 font-medium uppercase">Frequency</p>
                            <p className="text-sm text-slate-700 font-medium">
                                {airline.routes[0]?.frequency || 'Varies'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 mt-auto">
                <Link
                    to={`/plan-your-trip/flights-entry-requirements/${airline.id}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-slate-200 text-ocean-deep hover:bg-ocean-deep hover:text-white hover:border-ocean-deep font-semibold rounded-lg transition-all duration-200 group"
                >
                    View Details
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default AirlineCard;
