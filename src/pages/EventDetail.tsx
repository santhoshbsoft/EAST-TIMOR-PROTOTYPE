import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    Calendar, MapPin, ArrowLeft, Share2,
    Ticket, Globe, Phone, Map as MapIcon
} from 'lucide-react';
import { eventsData } from '../data/events';

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const event = eventsData.find(e => e.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) {
        return (
            <div className="min-h-screen bg-sand-beige/20 flex flex-col items-center justify-center pt-24">
                <h2 className="text-3xl font-serif text-ocean-deep mb-4">Event Not Found</h2>
                <button onClick={() => navigate('/events-calendar')} className="text-sunset-coral hover:underline flex items-center">
                    <ArrowLeft size={16} className="mr-2" /> Back to Calendar
                </button>
            </div>
        );
    }

    const relatedEvents = eventsData
        .filter(e => e.id !== event.id && (e.category === event.category || e.location.includes(event.location.split(',')[0])))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-sand-beige/20 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Navigation */}
                <button
                    onClick={() => navigate('/events-calendar')}
                    className="inline-flex items-center text-gray-500 hover:text-sunset-coral mb-6 transition-colors font-medium text-sm"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to Events Calendar
                </button>

                {/* Hero / Header */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5 mb-8 animate-slide-up">
                    <div className="relative h-[40vh] md:h-[50vh] w-full">
                        <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6 bg-sunset-coral text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                            {event.category}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 animate-slide-up" style={{ animationDelay: '100ms' }}>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6 leading-tight">
                                {event.name}
                            </h1>

                            <div className="prose max-w-none">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif">About This Event</h3>
                                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                    {event.fullDescription}
                                </p>
                            </div>
                        </div>

                        {/* Location / Map Placeholder section */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 animate-slide-up" style={{ animationDelay: '200ms' }}>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif flex items-center">
                                <MapPin className="mr-2 text-sunset-coral" /> Location Details
                            </h3>
                            <div className="mb-6">
                                <p className="font-semibold text-lg text-gray-900">{event.venue}</p>
                                <p className="text-gray-600">{event.location}</p>
                            </div>

                            {/* Map UI Placeholder */}
                            <div className="w-full h-64 bg-gray-100 rounded-xl border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-map-pattern opacity-10"></div>
                                <MapIcon size={48} className="text-gray-300 mb-3" />
                                <span className="text-gray-500 font-medium">Interactive Map Integration</span>
                                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md text-xs font-mono text-gray-500">
                                    {event.coordinates.lat.toFixed(4)}, {event.coordinates.lng.toFixed(4)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Information */}
                    <div className="space-y-6">
                        {/* Key Details Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 animate-slide-up" style={{ animationDelay: '300ms' }}>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-orange-50 p-3 rounded-xl mr-4 text-sunset-coral">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Date & Time</h4>
                                        <p className="font-semibold text-gray-900 text-lg">
                                            {new Date(event.startDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                                        </p>
                                        <p className="text-gray-600">{event.time}</p>
                                        <p className="text-xs text-gray-400 mt-1">{event.timezone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-orange-50 p-3 rounded-xl mr-4 text-sunset-coral">
                                        <Ticket size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Tickets & Pricing</h4>
                                        <p className="font-semibold text-gray-900">{event.pricing}</p>
                                        <p className="text-sm text-gray-600 mt-1">{event.ticketInfo}</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6 border-gray-100" />

                            <div className="space-y-3">
                                <button className="w-full bg-ocean-deep hover:bg-ocean-deep/90 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md flex items-center justify-center">
                                    <Calendar size={18} className="mr-2" /> Add to Calendar
                                </button>
                                <button className="w-full bg-white hover:bg-gray-50 text-ocean-deep border border-ocean-deep font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center">
                                    <Share2 size={18} className="mr-2" /> Share Event
                                </button>
                            </div>
                        </div>

                        {/* Organizer Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 animate-slide-up" style={{ animationDelay: '400ms' }}>
                            <h3 className="text-lg font-bold text-gray-800 mb-4 font-serif">Organizer</h3>
                            <p className="font-semibold text-gray-900 mb-4">{event.organizer.name}</p>

                            <div className="space-y-3">
                                <div className="flex items-center text-gray-600 text-sm">
                                    <Phone size={16} className="mr-3 text-gray-400" />
                                    {event.organizer.contact}
                                </div>
                                {event.organizer.website && (
                                    <div className="flex items-center text-sunset-coral text-sm font-medium">
                                        <Globe size={16} className="mr-3 text-sunset-coral" />
                                        <a href={event.organizer.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            Visit Website
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Related Events */}
                        {relatedEvents.length > 0 && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 animate-slide-up" style={{ animationDelay: '500ms' }}>
                                <h3 className="text-lg font-bold text-gray-800 mb-4 font-serif">Similar Events</h3>
                                <div className="space-y-4">
                                    {relatedEvents.map(re => (
                                        <Link key={re.id} to={`/events-calendar/${re.id}`} className="group flex items-center p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors">
                                            <img src={re.image} alt={re.name} className="w-16 h-16 rounded-lg object-cover mr-4 shadow-sm" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-sunset-coral transition-colors line-clamp-1">{re.name}</h4>
                                                <p className="text-xs text-gray-500 mt-1">{new Date(re.startDate).toLocaleDateString()}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
