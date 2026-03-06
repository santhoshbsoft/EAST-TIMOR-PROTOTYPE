import React from 'react';
import { Link } from 'react-router-dom';
import { airlines, entryRequirements } from '../../data/flights';
import AirlineCard from '../../components/flights/AirlineCard';
import { FileText, ShieldCheck, Info, ArrowRight, Plane, MapPin } from 'lucide-react';

const FlightsEntryMain: React.FC = () => {
    const internationalAirlines = airlines.filter(a => a.routes.some(r => r.isInternational));
    const domesticAirlines = airlines.filter(a => a.routes.some(r => !r.isInternational));

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
                        Flights & Entry Requirements
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl">
                        Plan your journey to Timor-Leste. Find the best flight routes and ensure you have all the necessary documents for a smooth entry.
                    </p>
                </div>

                {/* Quick Info Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Link
                        to="/plan-your-trip/flights-entry-requirements/entry-requirements"
                        className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
                    >
                        <div className="w-12 h-12 bg-tropical-teal/10 rounded-xl flex items-center justify-center text-tropical-teal group-hover:bg-tropical-teal group-hover:text-white transition-colors">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Visa Requirements</h3>
                            <p className="text-sm text-slate-500">Check eligibility for your country</p>
                        </div>
                        <ArrowRight size={20} className="ml-auto text-slate-300 group-hover:text-tropical-teal transition-colors" />
                    </Link>

                    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm group">
                        <div className="w-12 h-12 bg-ocean-deep/10 rounded-xl flex items-center justify-center text-ocean-deep">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Passport Validity</h3>
                            <p className="text-sm text-slate-500">Must be valid for 6+ months</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm group">
                        <div className="w-12 h-12 bg-tropical-teal/10 rounded-xl flex items-center justify-center text-tropical-teal">
                            <Info size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Health & Safety</h3>
                            <p className="text-sm text-slate-500">Vaccination & insurance info</p>
                        </div>
                    </div>
                </div>

                {/* International Flights */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-tropical-teal/10 rounded-lg text-tropical-teal">
                            <Plane size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">International Connections</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {internationalAirlines.map(airline => (
                            <AirlineCard key={airline.id} airline={airline} />
                        ))}
                    </div>
                </section>

                {/* Domestic Flights */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-ocean-deep/10 rounded-lg text-ocean-deep">
                            <MapPin size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Domestic Flights</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {domesticAirlines.map(airline => (
                            <AirlineCard key={airline.id} airline={airline} />
                        ))}
                    </div>
                </section>

                {/* Entry Requirements Summary */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Entry at a Glance</h2>
                        <Link
                            to="/plan-your-trip/flights-entry-requirements/entry-requirements"
                            className="text-tropical-teal font-semibold flex items-center gap-2 hover:underline"
                        >
                            View All Requirements <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {entryRequirements.slice(0, 2).map(req => (
                            <div key={req.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{req.title}</h3>
                                <p className="text-slate-600 mb-6">{req.summary}</p>
                                <ul className="space-y-3">
                                    {req.details.slice(0, 3).map((detail, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-slate-600">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tropical-teal flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FlightsEntryMain;
