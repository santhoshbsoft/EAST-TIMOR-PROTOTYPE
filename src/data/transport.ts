export interface TransportDetail {
    id: string;
    name: string;
    description: string;
    coverage: string;
    availability: string;
    icon: string;
    image: string;
    features: string[];
    pricing?: {
        label: string;
        value: string;
    }[];
    bookingInfo: string;
    safetyInfo: string[];
    additionalInfo: {
        title: string;
        content: string | string[];
    }[];
}

// Image imports
import rentalImg from '../assets/images/transport/rental_vehicle.png';
import busImg from '../assets/images/transport/bus_services.png';
import taxiImg from '../assets/images/transport/taxi_services.png';
import boatImg from '../assets/images/transport/boat_transport.png';

export const transportOptions: TransportDetail[] = [
    {
        id: 'rental-vehicle',
        name: 'Rental Vehicle',
        description: 'Self-drive options including cars, motorcycles, and rugged 4x4s for exploring the mountainous interior.',
        coverage: 'Nationwide (Main hubs in Dili, Baucau)',
        availability: 'Daily (Advance booking recommended)',
        icon: 'Car',
        image: rentalImg,
        features: ['4x4 SUVs', 'Motorcycles/Scooters', 'Chauffeur Options'],
        pricing: [
            { label: 'Small Car', value: '$50 - $70 / day' },
            { label: '4x4 SUV', value: '$80 - $120 / day' },
            { label: 'Motorcycle', value: '$15 - $25 / day' }
        ],
        bookingInfo: 'Book through local agencies or international partners in Dili. Required: Valid Driver\'s License (International Permit recommended).',
        safetyInfo: [
            'Check tire pressure and spare tire before long trips.',
            'Avoid driving at night outside of Dili.',
            'Be prepared for steep and narrow mountain roads.'
        ],
        additionalInfo: [
            {
                title: 'Available Vehicle Types',
                content: ['Economy Cars', 'Heavy-duty 4WD', 'Scooters', 'Mountain Bikes']
            },
            {
                title: 'Insurance Information',
                content: 'Third-party insurance is standard; comprehensive coverage is highly advised for rural travel.'
            },
            {
                title: 'Required Documentation',
                content: ['Driver\'s License', 'Passport Copy', 'Security Deposit (Cash/Card)']
            }
        ]
    },
    {
        id: 'bus-services',
        name: 'Bus Services',
        description: 'Affordable travel via local microlets and long-distance open-air buses (Angunas) connecting districts.',
        coverage: 'Dili and all Municipalities',
        availability: 'Regular (Microlets 6am-7pm, Buses depart early morning)',
        icon: 'Bus',
        image: busImg,
        features: ['Microlets (Dili)', 'Long-distance Buses', 'Private Charters'],
        pricing: [
            { label: 'Microlet (Dili)', value: '$0.25 flat fare' },
            { label: 'Dili to Baucau', value: '$5 - $8' },
            { label: 'Dili to Lospalos', value: '$10 - $15' }
        ],
        bookingInfo: 'No advance booking for microlets; pay driver on exit. Long-distance buses depart from Bairro Pite or Becora terminals.',
        safetyInfo: [
            'Keep valuables close in crowded terminals.',
            'Confirm the destination with the driver/helper before boarding.',
            'Buses can be crowded; arrive early for a seat.'
        ],
        additionalInfo: [
            {
                title: 'Schedule & Timetable',
                content: 'Most long-distance buses depart between 6:00 AM and 8:00 AM. There are no fixed "timetables" - they leave when full.'
            },
            {
                title: 'Fare Information',
                content: 'Fares are fixed but generally paid in cash USD. Small denominations are essential.'
            }
        ]
    },
    {
        id: 'taxi-services',
        name: 'Taxi Services',
        description: 'Yellow taxis in Dili for quick city trips and app-based services (Yellow Taxi App) for reliable pricing.',
        coverage: 'Dili Urban Area',
        availability: '24/7 (via App) / Day-time street hail',
        icon: 'Taxi',
        image: taxiImg,
        features: ['Street Hail Taxis', 'Yellow Taxi App', 'Airport Transfers'],
        pricing: [
            { label: 'City Center Trip', value: '$2 - $5' },
            { label: 'Airport to City', value: '$10 - $15' },
            { label: 'Evening/Night Surcharge', value: '+$1 - $2' }
        ],
        bookingInfo: 'Street hail available in Dili. Use "Yellow Taxi" app for transparent pricing and GPS tracking.',
        safetyInfo: [
            'Agree on the price before starting the trip if not using the app.',
            'Taxis in Dili do not use meters.',
            'Most drivers speak basic English; have your destination written down.'
        ],
        additionalInfo: [
            {
                title: 'Service Zones',
                content: 'Primary service is within Dili. Travel to outskirts may require a return-fee negotiation.'
            }
        ]
    },
    {
        id: 'boat-water-transport',
        name: 'Boat / Water Transport',
        description: 'Ferries and speedboats connecting Dili with Atauro Island and the Oecusse enclave.',
        coverage: 'Dili, Atauro, Oecusse',
        availability: 'Scheduled (Daily or Weekly depending on vessel)',
        icon: 'Ship',
        image: boatImg,
        features: ['Berlin Nakroma Ferry', 'Dragon Star Speedboat', 'Success Ferry'],
        pricing: [
            { label: 'Ferry (Economy)', value: '$5 - $10' },
            { label: 'Speedboat (Atauro)', value: '$35 - $45' },
            { label: 'Ferry to Oecusse', value: '$15 - $25' }
        ],
        bookingInfo: 'Dragon Star tickets available at Dili Port. Berlin Nakroma tickets often require queuing a day in advance at the port office.',
        safetyInfo: [
            'Life jackets are provided; ensure you know their location.',
            'Sea conditions can be rough; check weather reports.',
            'Travel with water and snacks as onboard service is limited.'
        ],
        additionalInfo: [
            {
                title: 'Routes Serve',
                content: ['Dili - Atauro Island', 'Dili - Oecusse (Pante Macassar)']
            },
            {
                title: 'Vessel Specifications',
                content: 'Berlin Nakroma (Ferry), Dragon Star I/II (Fast Craft), Success Ferry (Roll-on/Roll-off).'
            }
        ]
    }
];

export const transportTips = [
    'Always carry small denominations of USD.',
    'Confirm prices BEFORE you start your journey.',
    'Patience is key; "Timor Time" means schedules are often flexible.',
    'Download offline maps as data connectivity can be patchy in rural areas.'
];
