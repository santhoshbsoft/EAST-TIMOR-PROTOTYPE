import React from 'react';
import {
    Hotel,
    Briefcase,
    Plane,
    Bus,
    Compass,
    ShoppingBag,
    Lightbulb,
    ShieldAlert,
    Calendar
} from 'lucide-react';
import ModuleCard, { ModuleCardProps } from '../components/common/ModuleCard';

import accommodationImg from '../assets/images/plan-your-trip/accommodation.jpg';
import businessImg from '../assets/images/plan-your-trip/business.jpg';
import flightImg from '../assets/images/plan-your-trip/flight.jpg';
import transportImg from '../assets/images/plan-your-trip/transport.jpg';
import itinerariesImg from '../assets/images/plan-your-trip/itineraries.jpg';
import shoppingImg from '../assets/images/plan-your-trip/shopping.jpg';
import tipsImg from '../assets/images/plan-your-trip/tips.jpg';
import safetyImg from '../assets/images/plan-your-trip/safety.jpg';
import eventsImg from '../assets/images/plan-your-trip/events.jpg';

const PlanYourTrip: React.FC = () => {
    const modules: ModuleCardProps[] = [
        {
            title: 'Accommodation',
            description: 'Find perfect stays from luxury resorts to eco-lodges & guesthouses.',
            icon: Hotel,
            path: '/plan-your-trip/accommodation',
            image: accommodationImg
        },
        {
            title: 'Business & Attraction',
            description: 'Discover popular landmarks, historical sites, and business centers.',
            icon: Briefcase,
            path: '/plan-your-trip/business-attractions',
            image: businessImg
        },
        {
            title: 'Flight & Entry',
            description: 'Visa requirements, border crossings, and flight schedules.',
            icon: Plane,
            path: '/plan-your-trip/flights-entry-requirements',
            image: flightImg
        },
        {
            title: 'Transport',
            description: 'Navigate the country with options for car rentals, microlets, and ferries.',
            icon: Bus,
            path: '/plan-your-trip/transport',
            image: transportImg
        },
        {
            title: 'Recommended Itineraries',
            description: 'Explore curated travel plans designed for every interest, from coastal escapes to mountain treks.',
            icon: Compass,
            path: '/plan-your-trip/recommended-itineraries',
            image: itinerariesImg
        },
        {
            title: 'Shopping & Services',
            description: 'Local markets, handcrafts, banks, and essential services.',
            icon: ShoppingBag,
            path: '/shopping-services',
            image: shoppingImg
        },
        {
            title: 'Travel Tips',
            description: 'Essential local customs, language guides, and currency information.',
            icon: Lightbulb,
            path: '/travel-tips',
            image: tipsImg
        },
        {
            title: 'Safety & Health',
            description: 'Important medical contacts, safety guidelines, and emergency numbers.',
            icon: ShieldAlert,
            path: '/safety-health',
            image: safetyImg
        },
        {
            title: 'Events Calendar',
            description: 'Upcoming festivals, cultural celebrations, and national holidays.',
            icon: Calendar,
            path: '/events-calendar',
            image: eventsImg
        }
    ];

    return (
        <div className="min-h-screen bg-sand-beige/20 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
                        Plan Your Trip
                    </h1>
                    <p className="text-lg text-black-600">
                        Everything you need to organize your journey to Timor-Leste.
                        Explore our comprehensive guides to make your stay unforgettable.
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => (
                        <div
                            key={module.path}
                            className="animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ModuleCard {...module} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanYourTrip;
