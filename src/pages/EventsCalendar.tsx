import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Calendar, List, MapPin, Search, Filter,
    Heart, ChevronRight, Clock, Map as MapIcon, ChevronLeft
} from 'lucide-react';
import { eventsData, EventCategory, EventInfo } from '../data/events';
import eventsHeroImg from '../assets/images/plan-your-trip/events.jpg';

const EventsCalendar: React.FC = () => {
    const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'All'>('All');
    const [selectedLocation, setSelectedLocation] = useState<string>('All');

    // Simple state for "Mark as Interested" UI only
    const [interestedEvents, setInterestedEvents] = useState<Set<string>>(new Set());

    const categories: (EventCategory | 'All')[] = ['All', 'Cultural', 'National', 'Music', 'Religious', 'Sports', 'Food'];
    const locations = ['All', ...Array.from(new Set(eventsData.map(e => e.location.split(',')[0])))];

    const toggleInterested = (id: string, e: React.MouseEvent) => {
        e.preventDefault(); // Prevent Navigation on card click if any
        const newSet = new Set(interestedEvents);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setInterestedEvents(newSet);
    };

    const filteredEvents = useMemo(() => {
        return eventsData.filter(event => {
            const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
            const matchesLocation = selectedLocation === 'All' || event.location.startsWith(selectedLocation);

            return matchesSearch && matchesCategory && matchesLocation;
        });
    }, [searchQuery, selectedCategory, selectedLocation]);

    // Calendar View Helpers (Very basic implementation for visual representation)
    const currentDate = new Date('2024-03-01'); // Fixed to start near the initial mock data
    const daysInMonth = 31;
    const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const getEventsForDay = (day: number) => {
        const dateStr = `2024-03-${day.toString().padStart(2, '0')}`;
        return filteredEvents.filter(e => e.startDate === dateStr);
    };

    return (
        <div className="min-h-screen bg-sand-beige/20">
            {/* Hero Section */}
            <div className="relative h-[40vh] mb-8">
                <div className="absolute inset-0">
                    <img
                        src={eventsHeroImg}
                        alt="Events in Timor-Leste"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pt-16">
                    <div className="text-center px-4 animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                            Events & Festivals
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                            Discover the vibrant cultural celebrations, music festivals, and national holidays across Timor-Leste.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar / Filters */}
                    <div className="w-full lg:w-1/4 space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                            <h3 className="text-xl font-bold text-ocean-deep mb-4 flex items-center">
                                <Filter size={20} className="mr-2" /> Filters
                            </h3>

                            {/* Search */}
                            <div className="mb-6 relative">
                                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search events..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-coral/50"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Categories */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Category</h4>
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <label key={cat} className="flex items-center space-x-2 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={selectedCategory === cat}
                                                onChange={() => setSelectedCategory(cat)}
                                                className="text-sunset-coral focus:ring-sunset-coral"
                                            />
                                            <span className="text-gray-600 group-hover:text-ocean-deep transition-colors">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Locations */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Location</h4>
                                <select
                                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-coral/50 text-gray-700"
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                >
                                    {locations.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Date Range Placeholders */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Date Range</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <input type="date" className="p-2 text-xs bg-gray-50 border border-gray-200 rounded-lg" />
                                    <input type="date" className="p-2 text-xs bg-gray-50 border border-gray-200 rounded-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Upcoming / Past Quick Links */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                            <h3 className="text-lg font-bold text-ocean-deep mb-4">Highlights</h3>
                            <div className="space-y-4">
                                <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-50 transition-colors">
                                    <h4 className="font-semibold text-blue-900 text-sm">Upcoming Highlight</h4>
                                    <p className="text-xs text-blue-700 mt-1">TasiFest Culture & Music</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                                    <h4 className="font-semibold text-gray-700 text-sm">Past Events Archive</h4>
                                    <p className="text-xs text-gray-500 mt-1">View 2023 Festivals</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full lg:w-3/4">

                        {/* View Toggles & Header */}
                        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-black/5">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">Showing {filteredEvents.length} Events</h2>
                            </div>
                            <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`px-4 py-2 rounded-md flex items-center text-sm font-medium transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-ocean-deep' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    <List size={16} className="mr-2" /> List
                                </button>
                                <button
                                    onClick={() => setViewMode('calendar')}
                                    className={`px-4 py-2 rounded-md flex items-center text-sm font-medium transition-all ${viewMode === 'calendar' ? 'bg-white shadow-sm text-ocean-deep' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    <Calendar size={16} className="mr-2" /> Calendar
                                </button>
                            </div>
                        </div>

                        {/* List View */}
                        {viewMode === 'list' ? (
                            <div className="space-y-6">
                                {filteredEvents.length > 0 ? (
                                    filteredEvents.map((event, index) => (
                                        <motion.div
                                            key={event.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-black/5 flex flex-col sm:flex-row group"
                                        >
                                            {/* Date Banner Mobile / Desktop Image Container */}
                                            <div className="sm:w-1/3 relative h-48 sm:h-auto overflow-hidden">
                                                <img
                                                    src={event.image}
                                                    alt={event.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg shadow font-bold text-ocean-deep text-center leading-tight">
                                                    <div className="text-xl">{new Date(event.startDate).getDate() || 'TBC'}</div>
                                                    <div className="text-xs uppercase opacity-80">{new Date(event.startDate).toLocaleString('default', { month: 'short' }) || 'MAR'}</div>
                                                </div>
                                                <div className="absolute top-4 right-4 bg-sunset-coral text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                                                    {event.category}
                                                </div>
                                            </div>

                                            {/* Details */}
                                            <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{event.name}</h3>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                                        <div className="flex items-center"><Clock size={14} className="mr-1 text-sunset-coral" /> {event.time}</div>
                                                        <div className="flex items-center"><MapPin size={14} className="mr-1 text-sunset-coral" /> {event.location}</div>
                                                    </div>
                                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                                        {event.shortDescription}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                                    <button
                                                        onClick={(e) => toggleInterested(event.id, e)}
                                                        className={`flex items-center text-sm font-medium transition-colors ${interestedEvents.has(event.id) ? 'text-sunset-coral' : 'text-gray-400 hover:text-gray-600'}`}
                                                    >
                                                        <Heart size={18} className={`mr-2 ${interestedEvents.has(event.id) ? 'fill-current' : ''}`} />
                                                        {interestedEvents.has(event.id) ? 'Interested' : 'Mark as Interested'}
                                                    </button>
                                                    <Link
                                                        to={`/events-calendar/${event.id}`}
                                                        className="inline-flex items-center px-6 py-2 bg-ocean-deep text-white text-sm font-medium rounded-lg hover:bg-ocean-deep/90 transition-colors shadow-sm"
                                                    >
                                                        Learn More <ChevronRight size={16} className="ml-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                                        <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
                                        <h3 className="text-lg font-bold text-gray-700">No events found</h3>
                                        <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Calendar View Placeholder */
                            <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 animate-fade-in">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-serif font-bold text-ocean-deep">March 2024</h3>
                                    <div className="flex space-x-2">
                                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50"><ChevronLeft size={20} /></button>
                                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50"><ChevronRight size={20} /></button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                        <div key={day} className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-600 uppercase">
                                            {day}
                                        </div>
                                    ))}

                                    {/* Offset for March 1st 2024 (Friday = index 5) */}
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={`offset-${i}`} className="bg-white min-h-[100px] p-2 opacity-50"></div>
                                    ))}

                                    {calendarDays.map(day => {
                                        const dayEvents = getEventsForDay(day);
                                        return (
                                            <div key={day} className={`bg-white min-h-[100px] p-2 border-t border-l border-gray-50 relative group hover:bg-gray-50 transition-colors ${dayEvents.length > 0 ? 'bg-orange-50/30' : ''}`}>
                                                <span className={`text-sm font-medium ${dayEvents.length > 0 ? 'text-sunset-coral font-bold' : 'text-gray-500'}`}>{day}</span>
                                                <div className="mt-1 space-y-1">
                                                    {dayEvents.map(ev => (
                                                        <Link key={ev.id} to={`/events-calendar/${ev.id}`} className="block text-[10px] bg-sunset-coral text-white p-1 rounded leading-tight truncate px-2 hover:bg-red-600 transition-colors shadow-sm">
                                                            {ev.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsCalendar;
