import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { transportOptions } from '../../data/transport';
import {
    ArrowLeft,
    CheckCircle2,
    ShieldCheck,
    Map as MapIcon,
    ExternalLink,
    Car,
    Bus,
    Ship
} from 'lucide-react';

const TransportDetail: React.FC = () => {
    const { typeId } = useParams<{ typeId: string }>();
    const transport = transportOptions.find(t => t.id === typeId);

    if (!transport) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Transport Type Not Found</h2>
                    <Link to="/plan-your-trip/transport" className="text-tropical-teal hover:underline font-semibold">
                        Back to Transport
                    </Link>
                </div>
            </div>
        );
    }

    const getIcon = () => {
        const props = { size: 32, className: "text-tropical-teal" };
        switch (transport.icon) {
            case 'Car': return <Car {...props} />;
            case 'Bus': return <Bus {...props} />;
            case 'Taxi': return <Car {...props} />;
            case 'Ship': return <Ship {...props} />;
            default: return <Car {...props} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    to="/plan-your-trip/transport"
                    className="flex items-center gap-2 text-slate-500 hover:text-ocean-deep mb-8 transition-colors group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to All Transport
                </Link>

                {/* Hero Header */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 bg-tropical-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                                {getIcon()}
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{transport.name}</h1>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                                    {transport.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Dynamic Sections Based on additionalInfo */}
                        {transport.additionalInfo.map((info, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                                <h2 className="text-xl font-bold text-slate-900 mb-6">{info.title}</h2>
                                {Array.isArray(info.content) ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {info.content.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                <CheckCircle2 size={18} className="text-tropical-teal shrink-0" />
                                                <span className="text-slate-700 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-slate-600 leading-relaxed">{info.content}</p>
                                )}
                            </div>
                        ))}

                        {/* Schedule / Routes Map visualization */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <MapIcon className="text-tropical-teal" size={24} />
                                <h2 className="text-xl font-bold text-slate-900">Map & Routes</h2>
                            </div>
                            <div className="aspect-video bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-8">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                    <MapIcon className="text-slate-300" size={32} />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">Service Network</h4>
                                <p className="text-slate-500 text-sm max-w-sm">
                                    Visual representation of {transport.name.toLowerCase()} coverage across Timor-Leste.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Pricing Box */}
                        {transport.pricing && (
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Rates & Pricing</h3>
                                <div className="space-y-4">
                                    {transport.pricing.map((p, i) => (
                                        <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                                            <span className="text-slate-600">{p.label}</span>
                                            <span className="font-bold text-slate-900">{p.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Booking Info Card */}
                        <div className="bg-ocean-deep rounded-2xl p-8 text-white shadow-lg overflow-hidden relative">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                            <h3 className="text-xl font-bold mb-4">How to Book</h3>
                            <p className="text-white/70 text-sm mb-8 leading-relaxed">
                                {transport.bookingInfo}
                            </p>
                            <button className="w-full py-4 bg-tropical-teal hover:bg-tropical-teal/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                                Get Booking Help <ExternalLink size={18} />
                            </button>
                        </div>

                        {/* Safety Guidelines */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="text-tropical-teal" size={24} />
                                <h3 className="text-xl font-bold text-slate-900">Safety Guidelines</h3>
                            </div>
                            <ul className="space-y-4">
                                {transport.safetyInfo.map((tip, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tropical-teal shrink-0" />
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportDetail;
