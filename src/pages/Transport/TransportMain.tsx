import React from 'react';
import { transportOptions, transportTips } from '../../data/transport';
import TransportCard from '../../components/transport/TransportCard';
import { ShieldAlert, BadgeDollarSign, Lightbulb } from 'lucide-react';

const TransportMain: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
                        Transport Services
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl">
                        Navigate Timor-Leste with ease. From city taxis and microlets to rugged 4x4 rentals and coastal ferries, find the best way to explore our beautiful landscape.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {transportOptions.map(option => (
                        <TransportCard key={option.id} transport={option} />
                    ))}
                </div>

                {/* Information Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* General Tips */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                                <Lightbulb size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Transport Tips</h2>
                        </div>
                        <ul className="space-y-4">
                            {transportTips.map((tip, idx) => (
                                <li key={idx} className="flex gap-3 text-sm text-slate-600">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Safety Information */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-50 rounded-lg text-red-600">
                                <ShieldAlert size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Safety Information</h2>
                        </div>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                Road conditions can vary greatly outside Dili; 4WD is recommended for mountain travel.
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                Always use reputable taxi services or apps during evening hours.
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                Ensure boat operators provided certified life jackets before departure.
                            </li>
                        </ul>
                    </div>

                    {/* Pricing Guidelines */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                                <BadgeDollarSign size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Pricing Guidelines</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-slate-600">Inbound (Dili)</span>
                                    <span className="text-sm font-bold text-slate-900">$0.25 - $5.00</span>
                                </div>
                                <p className="text-xs text-slate-400 italic">Microlets and local taxis</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-slate-600">Inter-District</span>
                                    <span className="text-sm font-bold text-slate-900">$5.00 - $35.00</span>
                                </div>
                                <p className="text-xs text-slate-400 italic">Buses and shared transports</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-slate-600">Island Ferries</span>
                                    <span className="text-sm font-bold text-slate-900">$5.00 - $45.00</span>
                                </div>
                                <p className="text-xs text-slate-400 italic">Ferry vs Fast-Craft pricing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportMain;
