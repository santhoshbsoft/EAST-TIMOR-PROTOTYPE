import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { itineraries } from '../../data/itineraries';
import {
    ArrowLeft,
    Clock,
    Calendar,
    Trophy,
    Info,
    CheckCircle2,
    Utensils,
    Hotel,
    Navigation,
    Star,
    ExternalLink,
    Shield,
    Compass
} from 'lucide-react';

const ItineraryDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const itinerary = itineraries.find(i => i.id === id);

    if (!itinerary) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <Navigation size={64} className="text-slate-200 mb-6" />
                <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Itinerary Journey Not Found</h2>
                <Link to="/plan-your-trip/recommended-itineraries" className="px-6 py-3 bg-ocean-deep text-white rounded-xl font-bold hover:shadow-lg transition-all">
                    Back to All Itineraries
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    to="/plan-your-trip/recommended-itineraries"
                    className="flex items-center gap-2 text-slate-500 hover:text-ocean-deep mb-8 transition-colors group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to All Itineraries
                </Link>

                {/* Hero Feature */}
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 mb-12 shadow-2xl h-[400px] md:h-[500px]">
                    <img
                        src={itinerary.featuredImage}
                        alt={itinerary.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-3 py-1 bg-tropical-teal text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                                {itinerary.theme}
                            </span>
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                {itinerary.difficulty}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            {itinerary.title}
                        </h1>
                        <div className="flex flex-wrap gap-6 text-slate-200">
                            <div className="flex items-center gap-2">
                                <Clock className="text-tropical-teal" size={18} />
                                <span className="text-sm">{itinerary.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Navigation className="text-tropical-teal" size={18} />
                                <span className="text-sm">{itinerary.distance}</span>
                            </div>
                            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Trophy key={i} size={14} className={i < itinerary.difficultyRating ? "text-amber-400" : "text-white/20"} />
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 ml-2">Difficulty Rating</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview Section */}
                        <section className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {itinerary.fullDescription}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-50">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar className="text-tropical-teal" size={20} />
                                        <h4 className="font-bold text-slate-900">Best Time to Visit</h4>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">{itinerary.bestTimeToVisit}</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Shield className="text-tropical-teal" size={20} />
                                        <h4 className="font-bold text-slate-900">Preparation</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {itinerary.preparation.map((p, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-slate-500">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-tropical-teal shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Day by Day Breakdown */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 px-2">The Journey Day by Day</h2>
                            <div className="space-y-6">
                                {itinerary.days.map((day, idx) => (
                                    <div key={idx} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group">
                                        <div className="p-8">
                                            <div className="flex flex-col md:flex-row gap-8">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-12 h-12 bg-ocean-deep rounded-2xl flex items-center justify-center text-white font-serif font-bold text-xl mb-2">
                                                        {day.day}
                                                    </div>
                                                    <div className="flex-1 w-0.5 bg-slate-100 my-2"></div>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                        <h3 className="text-xl font-bold text-slate-900">{day.title}</h3>
                                                        <div className="flex gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                            <span>Activity: {day.activityDuration}</span>
                                                            <span className="text-tropical-teal">Transit: {day.travelTime}</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-slate-600 leading-relaxed mb-6">
                                                        {day.description}
                                                    </p>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                        {day.activities.map((a, i) => (
                                                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                                                <CheckCircle2 size={16} className="text-tropical-teal" />
                                                                <span className="text-xs font-semibold text-slate-700">{a}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-50">
                                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                                            <Hotel size={16} className="text-slate-400" />
                                                            <span className="font-bold">Accommodation:</span> {day.accommodation}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                                            <Utensils size={16} className="text-slate-400" />
                                                            <span className="font-bold">Meals:</span>
                                                            {day.meals.breakfast && ' Breakfast'}
                                                            {day.meals.lunch && ', Lunch'}
                                                            {day.meals.dinner && ', Dinner'}
                                                        </div>
                                                    </div>
                                                </div>

                                                {day.image && (
                                                    <div className="md:w-48 h-48 md:h-auto rounded-2xl overflow-hidden shrink-0">
                                                        <img src={day.image} alt={day.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Practical Info & Booking */}
                    <div className="space-y-8">
                        {/* Summary & Price */}
                        <div className="bg-ocean-deep p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Compass size={120} />
                            </div>
                            <p className="text-tropical-teal font-bold text-xs uppercase tracking-widest mb-2">Estimated Package Cost</p>
                            <h3 className="text-4xl font-serif font-bold mb-6">{itinerary.practicalInfo.estimatedCost}</h3>
                            <button className="w-full py-4 bg-tropical-teal hover:bg-tropical-teal/90 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                                Book This Itinerary <ExternalLink size={18} />
                            </button>
                            <p className="text-white/40 text-[10px] text-center mt-4 uppercase tracking-tighter">* Prices vary by season and group size</p>
                        </div>

                        {/* Practical Information */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Info size={18} className="text-ocean-deep" />
                                Practical Details
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Physical Demands</p>
                                    <div className="flex items-center gap-3">
                                        <div className={`w - 3 h - 3 rounded - full ${itinerary.practicalInfo.fitnessLevel === 'Low' ? 'bg-emerald-400' :
                                                itinerary.practicalInfo.fitnessLevel === 'Moderate' ? 'bg-amber-400' : 'bg-red-500'
                                            } `}></div>
                                        <span className="text-sm font-bold text-slate-700">{itinerary.practicalInfo.fitnessLevel} Fitness Required</span>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Inclusions</p>
                                    <ul className="space-y-2">
                                        {itinerary.practicalInfo.inclusions.map((inc, i) => (
                                            <li key={i} className="flex gap-2 text-xs text-slate-500">
                                                <div className="mt-1 w-1 h-1 bg-emerald-400 rounded-full" />
                                                {inc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Group Size</p>
                                    <p className="text-sm font-semibold text-slate-700">{itinerary.practicalInfo.recommendedGroupSize}</p>
                                </div>
                            </div>
                        </div>

                        {/* Operators */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Local Operators</h3>
                            {itinerary.operators.map((op, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-ocean-deep">{op.name}</h4>
                                            <div className="flex items-center gap-1 text-[10px] bg-white px-2 py-0.5 rounded-full border border-slate-100 shadow-sm">
                                                <Star size={10} className="text-amber-400" fill="currentColor" />
                                                <span className="font-bold">{op.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-4">{op.description}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Contact: {op.contact}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItineraryDetail;
