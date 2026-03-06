import React from 'react';
import { Link } from 'react-router-dom';
import { entryRequirements } from '../../data/flights';
import { ArrowLeft, ShieldCheck, Globe, Info, CreditCard, HeartPulse } from 'lucide-react';

const EntryRequirementsPage: React.FC = () => {
    const getIcon = (category: string) => {
        switch (category) {
            case 'Visa': return <Globe size={24} />;
            case 'Passport': return <ShieldCheck size={24} />;
            case 'Health': return <HeartPulse size={24} />;
            case 'Customs': return <Info size={24} />;
            case 'Finance': return <CreditCard size={24} />;
            default: return <Info size={24} />;
        }
    };

    const getColors = (category: string) => {
        switch (category) {
            case 'Visa': return 'bg-blue-50 text-blue-600 border-blue-100';
            case 'Passport': return 'bg-ocean-deep/10 text-ocean-deep border-ocean-deep/10';
            case 'Health': return 'bg-red-50 text-red-600 border-red-100';
            case 'Customs': return 'bg-tropical-teal/10 text-tropical-teal border-tropical-teal/10';
            case 'Finance': return 'bg-amber-50 text-amber-600 border-amber-100';
            default: return 'bg-slate-50 text-slate-600 border-slate-100';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    to="/plan-your-trip/flights-entry-requirements"
                    className="flex items-center gap-2 text-slate-500 hover:text-ocean-deep mb-8 transition-colors group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Flights
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
                        Entry Requirements
                    </h1>
                    <p className="text-lg text-slate-600">
                        Essential information for travelers entering Timor-Leste. Please ensure you meet these requirements before your departure.
                    </p>
                </div>

                <div className="space-y-8">
                    {entryRequirements.map((req) => (
                        <div key={req.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className={`p-6 border-b flex items-center gap-4 ${getColors(req.category)}`}>
                                <div className="p-3 bg-white rounded-xl shadow-sm">
                                    {getIcon(req.category)}
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider opacity-70">{req.category}</span>
                                    <h3 className="text-xl font-bold text-slate-900">{req.title}</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-slate-700 font-medium mb-6">{req.summary}</p>
                                <ul className="space-y-4">
                                    {req.details.map((detail, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-tropical-teal flex-shrink-0" />
                                            <p className="text-slate-600 leading-relaxed">{detail}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Warning */}
                <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex gap-4">
                    <Info className="text-amber-500 flex-shrink-0" size={24} />
                    <div className="text-sm text-amber-900">
                        <p className="font-bold mb-1">Important Disclaimer</p>
                        <p>Entry requirements are subject to change without notice. Always check with the nearest Timor-Leste Embassy or Consulate, or your airline, before traveling.</p>
                    </div>
                </div>

                {/* Immigration Contact */}
                <div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Immigration Office Contact</h3>
                    <div className="space-y-2 text-slate-600">
                        <p><strong>Department of Immigration</strong></p>
                        <p>Rua Villa Verde, Dili, Timor-Leste</p>
                        <p>Phone: +670 331 0352</p>
                        <p>Website: <a href="http://migracao.gov.tl" className="text-tropical-teal hover:underline">www.migracao.gov.tl</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryRequirementsPage;
