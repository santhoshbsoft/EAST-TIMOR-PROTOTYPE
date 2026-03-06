import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { airlines } from '../../data/flights';
import { ArrowLeft, ExternalLink, Phone, Mail, Globe, CheckCircle2, Map as MapIcon, Calendar, Plane } from 'lucide-react';

const AirlineDetail: React.FC = () => {
    const { airlineId } = useParams<{ airlineId: string }>();
    const airline = airlines.find(a => a.id === airlineId);

    if (!airline) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Airline Not Found</h2>
                    <Link to="/plan-your-trip/flights-entry-requirements" className="text-tropical-teal hover:underline font-semibold">
                        Back to Flights
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    to="/plan-your-trip/flights-entry-requirements"
                    className="flex items-center gap-2 text-slate-500 hover:text-ocean-deep mb-8 transition-colors group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Listings
                </Link>

                {/* Hero / Header */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <div className="h-48 bg-ocean-deep/5 flex items-center justify-center p-12">
                        {/* Placeholder for Airline Logo/Big Graphic */}
                        <div className="flex flex-col items-center">
                            <span className="text-6xl font-black text-ocean-deep/20 mb-2">{airline.name}</span>
                            <div className="w-32 h-1 bg-tropical-teal"></div>
                        </div>
                    </div>
                    <div className="p-8 md:p-12 relative">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{airline.name}</h1>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    {airline.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <div className="p-2 bg-slate-100 rounded-lg"><Phone size={20} /></div>
                                        <span>{airline.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <div className="p-2 bg-slate-100 rounded-lg"><Mail size={20} /></div>
                                        <span>{airline.contact.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href={airline.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-tropical-teal text-white font-bold rounded-2xl hover:bg-tropical-teal/90 hover:shadow-lg transition-all transform hover:-translate-y-1"
                                >
                                    Book on Website <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab-like Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Schedule & Routes (Left/Center) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Schedule Table */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-sm md:text-base">
                            <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                                <Calendar className="text-tropical-teal" size={24} />
                                <h2 className="text-xl font-bold text-slate-900">Flight Schedule</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4 text-left">From</th>
                                            <th className="px-6 py-4 text-left">To</th>
                                            <th className="px-6 py-4 text-left">Frequency</th>
                                            <th className="px-6 py-4 text-left">Aircraft</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {airline.routes.map((route, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4 text-slate-900 font-medium">{route.departure}</td>
                                                <td className="px-6 py-4 text-slate-900 font-medium">{route.destination}</td>
                                                <td className="px-6 py-4 text-slate-600 italic">
                                                    {route.days.join(', ')} ({route.frequency})
                                                </td>
                                                <td className="px-6 py-4 text-slate-600">
                                                    <span className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-bold text-slate-500">{route.aircraft}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Routes Map Mock/Info */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <MapIcon className="text-tropical-teal" size={24} />
                                <h2 className="text-xl font-bold text-slate-900">Routes Map</h2>
                            </div>
                            <div className="aspect-video bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center p-8 text-center">
                                <div>
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-4">
                                        <Plane className="text-slate-300" size={32} />
                                    </div>
                                    <p className="text-slate-500 font-medium max-w-sm">Interactive route map visualization showing global connections to Dili (DIL).</p>
                                </div>
                            </div>
                        </div>

                        {/* History */}
                        {airline.history && (
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                                <h2 className="text-xl font-bold text-slate-900 mb-4">About {airline.name}</h2>
                                <p className="text-slate-600 leading-relaxed italic">
                                    "{airline.history}"
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Side Info (Right) */}
                    <div className="space-y-8">
                        {/* Services */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Special Services</h2>
                            <ul className="space-y-4">
                                {airline.specialServices.map((service, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 size={20} className="text-tropical-teal" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Destination Card */}
                        <div className="bg-ocean-deep rounded-2xl p-8 text-white shadow-lg overflow-hidden relative">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                            <h3 className="text-xl font-bold mb-2">Destination: Dili</h3>
                            <p className="text-white/70 text-sm mb-6 leading-relaxed">
                                Presidente Nicolau Lobato International Airport (DIL) is the main gateway to Timor-Leste.
                            </p>
                            <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                <p className="text-2xl font-serif font-bold italic"> President Nicolau Lobato Int. Airport</p>
                            </div>
                        </div>

                        {/* Contact Help */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
                            <Globe size={32} className="mx-auto text-slate-300 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Need Assistance?</h3>
                            <p className="text-sm text-slate-500 mb-6">Contact the airline’s reservations desk for special assistance or group bookings.</p>
                            <p className="font-bold text-ocean-deep">{airline.contact.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirlineDetail;
